import { error } from '@sveltejs/kit';

export async function load({ params }) {
	console.log("Params:",params);
	
	try {
		const article = await import(`../../../../../../articles/themes/${params.theme}/${params.subtopic}/${params.slug}.md`);
		console.log("My article: 😂😂", article)
		return {
			content: article.default,
			meta: article.metadata,
			headings: article.metadata.headings
		};
	} catch (e) {
		throw error(404, `Could not find ${params.slug}`);
	}
}
