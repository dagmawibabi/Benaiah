import { json } from '@sveltejs/kit';
import { slugify } from '$lib/articleUtils';
import { themeList } from '../../../../../store/theme_list.svelte.js';
import type { RequestHandler } from '@sveltejs/kit';

export const GET: RequestHandler = async ({ params, setHeaders }) => {
	const themeSlug = params.theme as string;
	
	// Find theme by slug
	const theme = themeList.themes.find((t) => slugify(t.theme_en) === themeSlug);
	
	if (!theme || !theme.published) {
		return json({ error: 'Theme not found' }, { status: 404 });
	}
	
	const response = {
		slug: themeSlug,
		title: {
			en: theme.theme_en,
			am: theme.theme_am
		},
		subtopics: theme.subtopics.map((subtopic) => ({
			title: {
				en: subtopic.title_en,
				am: subtopic.title_am
			},
			description: {
				en: subtopic.description_en,
				am: subtopic.description_am
			},
			covers: {
				en: subtopic.cover_en,
				am: subtopic.cover_am
			},
			images: {
				square: {
					en: subtopic.square_en,
					am: subtopic.square_am
				},
				story: {
					en: subtopic.story_en,
					am: subtopic.story_am
				}
			},
			articles: {
				devotional: {
					en: subtopic.devotional.devotional_en
						? `/api/v1/articles/${themeSlug}/${slugify(subtopic.title_en)}/devotional_en`
						: null,
					am: subtopic.devotional.devotional_am
						? `/api/v1/articles/${themeSlug}/${slugify(subtopic.title_en)}/devotional_am`
						: null
				},
				study_material: {
					en: subtopic.study_material.study_material_en
						? `/api/v1/articles/${themeSlug}/${slugify(subtopic.title_en)}/study_material_en`
						: null,
					am: subtopic.study_material.study_material_am
						? `/api/v1/articles/${themeSlug}/${slugify(subtopic.title_en)}/study_material_am`
						: null
				}
			},
			artists: subtopic.artists
		}))
	};
	
	// Set Cache-Control header
	setHeaders({
		'Cache-Control': 'public, max-age=3600'
	});
	
	return json(response);
};