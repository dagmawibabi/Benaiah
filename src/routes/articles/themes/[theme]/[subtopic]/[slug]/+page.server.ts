import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { articles } from '$lib/articles';
export const load: PageServerLoad = async ({ params }) => {
	const href = '/articles/themes/' + params.theme + '/' + params.subtopic + '/' + params.slug;
	const article = articles.find((a) => a.href === href);
	if (!article) error(404, 'Article not found');
	const related = articles.filter(
		(a) => a.lang === article.lang && a.type === article.type && a.theme === article.theme
	);
	const index = related.findIndex((a) => a.href === article.href);
	const alternate = articles.find(
		(a) =>
			a.theme === article.theme &&
			a.topic === article.topic &&
			a.type === article.type &&
			a.lang !== article.lang
	);
	return { article, previous: related[index - 1], next: related[index + 1], alternate };
};
