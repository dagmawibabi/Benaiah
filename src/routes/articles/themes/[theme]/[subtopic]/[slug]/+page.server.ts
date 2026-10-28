import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { articles } from '$lib/articles';
import { findSubtopic, findTheme, slugify } from '$lib/themes';
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
	const theme = findTheme(article.theme);
	const subtopic = theme && findSubtopic(theme, article.topic);
	const am = article.lang === 'am';
	const authors =
		(article.type === 'devotional'
			? subtopic?.devotional[am ? 'devotional_author_am' : 'devotional_author_en']
			: subtopic?.study_material[am ? 'study_material_author_am' : 'study_material_author_en']) ??
		[];
	const typeLabel =
		article.type === 'devotional'
			? am
				? 'የጥሞና ጽሑፍ'
				: 'Devotional'
			: am
				? 'የጥናት መርጃ'
				: 'Study material';
	// Everything the share card needs except the host, which comes from the browser
	const share = {
		slug: slugify(article.topic) + '-' + params.slug.replace('_', '-'),
		lang: article.lang,
		title: article.title,
		description: article.description,
		date: article.date,
		category: [typeLabel, am ? theme?.theme_am : theme?.theme_en].filter(Boolean).join(' · '),
		author:
			authors.map((a) => (am ? a.fullname_am : a.fullname_en)).join(am ? ' እና ' : ' & ') ||
			'Benaiah',
		// Covers are large PNGs on Cloudinary; a resized JPEG is plenty for the card
		headerImage:
			article.cover?.replace('/image/upload/', '/image/upload/w_1600,f_jpg,q_auto/') ?? null
	};
	return { article, previous: related[index - 1], next: related[index + 1], alternate, share };
};
