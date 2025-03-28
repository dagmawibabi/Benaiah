import type { Article } from '$lib/types';

export async function load({ fetch }) {
	const response = await fetch('api/articles');
	const articles: Article[] = await response.json();

	return {
		articles
	};
}
