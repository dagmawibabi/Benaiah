import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import ts from 'typescript';
const origin = 'https://benaiah.test';
const listeners = {},
	stores = new Map();
let online = true;
const key = (r) => new URL(typeof r === 'string' ? r : r.url, origin).href;
const cache = {
	async addAll(urls) {
		for (const url of urls)
			await this.put(url, new Response(url === '/offline' ? 'offline fallback' : 'asset'));
	},
	async put(request, response) {
		stores.set(key(request), response.clone());
	},
	async match(request) {
		return stores.get(key(request))?.clone();
	},
	async keys() {
		return [...stores.keys()].map((url) => new Request(url));
	},
	async delete(request) {
		return stores.delete(key(request));
	}
};
const caches = {
	async open() {
		return cache;
	},
	async keys() {
		return ['unrelated-app', 'benaiah-old', 'benaiah-test'];
	},
	async delete(name) {
		assert.equal(name, 'benaiah-old');
		return true;
	}
};
let source = fs
	.readFileSync('src/service-worker.ts', 'utf8')
	.replace(
		/import .* from '\$service-worker';/,
		"const build=['/_app/test.js'];const files=['/icons/icon-192.png'];const version='test';"
	);
source = ts.transpileModule(source, {
	compilerOptions: { target: ts.ScriptTarget.ES2022, module: ts.ModuleKind.None }
}).outputText;
vm.runInNewContext(source, {
	self: {
		location: { origin },
		clients: { async claim() {} },
		addEventListener(name, handler) {
			listeners[name] = handler;
		}
	},
	caches,
	URL,
	Request,
	Response,
	fetch: async (request) => {
		if (!online) throw Error('offline');
		return new Response('network ' + key(request));
	}
});
async function event(name, properties = {}) {
	let work;
	listeners[name]({
		...properties,
		waitUntil(p) {
			work = p;
		},
		respondWith(p) {
			work = p;
		}
	});
	return await work;
}
await event('install');
await event('activate');
const article = origin + '/articles/themes/Love/Love/devotional_en';
await event('message', { data: { type: 'CACHE_PAGE', url: article } });
online = false;
const request = { url: article, method: 'GET', mode: 'navigate' };
assert.match(await (await event('fetch', { request })).text(), /network/);
assert.match(
	await (await event('fetch', { request: { ...request, url: origin + '/never-visited' } })).text(),
	/offline fallback/
);
assert.match(
	await (
		await event('fetch', {
			request: {
				...request,
				url: article + '/__data.json?x-sveltekit-invalidated=11',
				mode: 'cors'
			}
		})
	).text(),
	/network/
);
assert.equal(
	await event('fetch', { request: { ...request, url: origin + '/api/v1/articles' } }),
	undefined
);
online = true;
await cache.put(article, new Response('stale'));
assert.match(await (await event('fetch', { request })).text(), /network/);
for (let i = 0; i < 110; i++)
	await event('message', { data: { type: 'CACHE_PAGE', url: origin + '/page-' + i } });
assert.ok(stores.size <= 103);
assert.ok(await cache.match('/offline'));
assert.ok(await cache.match('/_app/test.js'));
console.log(
	'Offline checks passed: install, activation, cached article/data, fallback, network refresh, API exclusion and bounded cache.'
);
