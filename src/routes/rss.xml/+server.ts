import { articles } from '$lib/articles';
import type { RequestHandler } from './$types';
const escape = (s: string) =>
	s.replace(
		/[<>&"']/g,
		(c) => ({ '<': '&lt;', '>': '&gt;', '&': '&amp;', '"': '&quot;', "'": '&apos;' })[c]!
	);
export const GET: RequestHandler = ({ url }) => {
	const lang = url.searchParams.get('lang') === 'am' ? 'am' : 'en';
	const origin = url.origin;
	const items = articles
		.filter((a) => a.lang === lang)
		.sort((a, b) => (Date.parse(b.date) || 0) - (Date.parse(a.date) || 0))
		.map((a) => {
			const link = escape(new URL(a.href, origin).href);
			const date = Date.parse(a.date);
			return (
				'<item><title>' +
				escape(a.title) +
				'</title><link>' +
				link +
				'</link><guid isPermaLink="true">' +
				link +
				'</guid><description>' +
				escape(a.description) +
				'</description>' +
				(Number.isFinite(date) ? '<pubDate>' + new Date(date).toUTCString() + '</pubDate>' : '') +
				'</item>'
			);
		})
		.join('');
	return new Response(
		'<?xml version="1.0" encoding="UTF-8"?><rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom"><channel><title>' +
			(lang === 'am' ? 'በናያስ' : 'Benaiah') +
			'</title><link>' +
			escape(origin) +
			'</link><description>Devotionals and Bible study materials from Benaiah.</description><language>' +
			lang +
			'</language><atom:link href="' +
			escape(url.href) +
			'" rel="self" type="application/rss+xml"/>' +
			items +
			'</channel></rss>',
		{
			headers: {
				'Content-Type': 'application/rss+xml; charset=utf-8',
				'Cache-Control': 'public, max-age=3600'
			}
		}
	);
};
