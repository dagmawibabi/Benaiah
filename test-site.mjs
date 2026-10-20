import assert from 'node:assert/strict';
const base = process.argv[2] || 'http://127.0.0.1:5173';
await Promise.all(
	Array.from({ length: 20 }, async (_, i) => {
		const lang = i % 2 ? 'am' : 'en';
		const response = await fetch(base + '/resources', {
			headers: { 'Accept-Language': lang === 'am' ? 'am-ET,en;q=0.5' : 'en-US' }
		});
		const html = await response.text();
		assert.equal(response.status, 200);
		assert.ok(html.includes(`lang="${lang}"`));
		assert.ok(html.includes(lang === 'am' ? 'የጥሞና ጽሑፍ' : 'Devotional'));
	})
);
const cookie = await (
	await fetch(base + '/', { headers: { Cookie: 'lang=am', 'Accept-Language': 'en-US' } })
).text();
assert.ok(cookie.includes('lang="am"'));
for (const route of ['/homepage', '/articles']) {
	const response = await fetch(base + route, { redirect: 'manual' });
	assert.equal(response.status, 301);
}
for (const route of ['/graphics/invalid/nope', '/articles/themes/no/no/no', '/missing']) {
	const response = await fetch(base + route);
	assert.equal(response.status, 404);
	assert.ok((await response.text()).includes('This page could not be found'));
}
for (const lang of ['en', 'am']) {
	const response = await fetch(base + '/rss.xml?lang=' + lang);
	assert.equal(response.status, 200);
	assert.match(response.headers.get('content-type'), /rss\+xml/);
	const xml = await response.text();
	assert.ok(xml.includes('<item>'));
	assert.ok(!xml.includes('<title></title>'));
	assert.ok(xml.includes(`<language>${lang}</language>`));
}
const article = '/articles/themes/Love,%20Faith%20and%20Hope/Love/devotional_en';
const html = await (await fetch(base + article)).text();
for (const phrase of [
	'min read',
	'Reading progress',
	'Increase text size',
	'devotional_am',
	'Trusting Daily'
])
	assert.ok(html.includes(phrase), phrase);
const docs = await (await fetch(base + '/developers')).text();
assert.ok(docs.includes('/api/v1/articles/{theme}'));
assert.ok(!docs.includes("{'theme'}"));
assert.ok(docs.includes('Theme not found'));
const app = await (await fetch(base + '/app')).text();
assert.ok(app.includes('https://github.com/BenaiahOrg/BenaiahApp/releases/'));
const manifest = await (await fetch(base + '/manifest.webmanifest')).json();
assert.equal(manifest.display, 'standalone');
for (const icon of manifest.icons) assert.equal((await fetch(base + icon.src)).status, 200);
console.log(
	'Site regression checks passed: locale isolation, cookie preference, redirects, 404s, RSS, reader, docs, app and manifest.'
);
