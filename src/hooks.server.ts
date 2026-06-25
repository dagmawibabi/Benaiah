// hooks.server.ts
import type { Handle } from '@sveltejs/kit';
import { locale } from 'svelte-i18n';

export const handle: Handle = async ({ event, resolve }) => {
	const lang = event.request.headers.get('accept-language')?.split(',')[0];
	if (lang) {
		locale.set(lang);
	}
	
	// Add CORS headers for API routes (mobile app access)
	const response = await resolve(event);
	
	if (event.url.pathname.startsWith('/api/')) {
		response.headers.set('Access-Control-Allow-Origin', '*');
		response.headers.set('Access-Control-Allow-Methods', 'GET, OPTIONS');
		response.headers.set('Access-Control-Allow-Headers', 'Content-Type');
	}
	
	return response;
};
