// hooks.server.ts
import { redirect, type Handle } from '@sveltejs/kit';
import { LANG_COOKIE, langFromAcceptLanguage, normalizeLang } from '$lib/i18n';

export const handle: Handle = async ({ event, resolve }) => {
	// The homepage used to live at /homepage as well as /.
	if (event.url.pathname === '/homepage') {
		redirect(301, '/' + event.url.search);
	}

	const cookie = event.cookies.get(LANG_COOKIE);
	event.locals.lang = cookie
		? normalizeLang(cookie)
		: langFromAcceptLanguage(event.request.headers.get('accept-language'));

	const response = await resolve(event, {
		transformPageChunk: ({ html }) => html.replace('%lang%', event.locals.lang)
	});

	// Add CORS headers for API routes (mobile app access)
	if (event.url.pathname.startsWith('/api/')) {
		response.headers.set('Access-Control-Allow-Origin', '*');
		response.headers.set('Access-Control-Allow-Methods', 'GET, OPTIONS');
		response.headers.set('Access-Control-Allow-Headers', 'Content-Type');
	}

	if (!event.url.pathname.startsWith('/api/') && event.url.pathname !== '/rss.xml') {
		response.headers.append('Vary', 'Accept-Language, Cookie');
	}
	return response;
};
