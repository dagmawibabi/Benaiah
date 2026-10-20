/// <reference lib="webworker" />
import { build, files, version } from '$service-worker';
const sw = self as unknown as ServiceWorkerGlobalScope;
const CACHE = 'benaiah-' + version;
const ASSETS = [
	...build.filter((p) => /\.(js|css|woff2?|otf|ttf)$/.test(p)),
	...files.filter((p) => p.startsWith('/icons/') || p === '/manifest.webmanifest'),
	'/offline'
];
sw.addEventListener('install', (event) => {
	event.waitUntil(caches.open(CACHE).then((cache) => cache.addAll(ASSETS)));
});
sw.addEventListener('activate', (event) => {
	event.waitUntil(
		(async () => {
			for (const key of await caches.keys())
				if (key.startsWith('benaiah-') && key !== CACHE) await caches.delete(key);
			await sw.clients.claim();
		})()
	);
});
async function remember(request: Request, response: Response) {
	if (!response.ok || response.type === 'opaque') return;
	const cache = await caches.open(CACHE);
	await cache.put(request, response.clone());
	const pages = (await cache.keys()).filter((r) => !ASSETS.includes(new URL(r.url).pathname));
	for (const old of pages.slice(0, Math.max(0, pages.length - 100))) await cache.delete(old);
}
sw.addEventListener('message', (event) => {
	if (event.data?.type !== 'CACHE_PAGE') return;
	const url = new URL(event.data.url, sw.location.origin);
	if (url.origin !== sw.location.origin) return;
	event.waitUntil(
		(async () => {
			try {
				const request = new Request(url.href);
				await remember(request, await fetch(request));
				if (url.pathname.startsWith('/articles/themes/')) {
					const data = new Request(
						new URL(url.pathname.replace(/\/$/, '') + '/__data.json', url.origin)
					);
					await remember(data, await fetch(data));
				}
			} catch {
				/* Offline already. */
			}
		})()
	);
});
sw.addEventListener('fetch', (event) => {
	const { request } = event;
	const url = new URL(request.url);
	const cacheUrl = new URL(url);
	cacheUrl.searchParams.delete('x-sveltekit-invalidated');
	const cacheKey = new Request(cacheUrl.href);
	if (
		request.method !== 'GET' ||
		url.origin !== sw.location.origin ||
		url.pathname.startsWith('/api/') ||
		url.pathname === '/rss.xml'
	)
		return;
	event.respondWith(
		(async () => {
			const cache = await caches.open(CACHE);
			if (ASSETS.includes(url.pathname)) {
				const cached = await cache.match(cacheKey, { ignoreVary: true });
				if (cached) return cached;
			}
			try {
				const response = await fetch(request);
				if (
					response.ok &&
					(request.mode === 'navigate' ||
						url.pathname.endsWith('/__data.json') ||
						url.pathname.startsWith('/_app/'))
				)
					await remember(cacheKey, response).catch(() => {});
				return response;
			} catch {
				const cached = await cache.match(cacheKey, { ignoreVary: true });
				if (cached) return cached;
				if (request.mode === 'navigate') return (await cache.match('/offline'))!;
				return new Response('Offline', { status: 503 });
			}
		})()
	);
});
