import { json } from '@sveltejs/kit';
import { slugify } from '$lib/articleUtils';
import { themeList } from '../../../../../../store/theme_list.svelte.js';
import type { RequestHandler } from '@sveltejs/kit';

export const GET: RequestHandler = async ({ params, setHeaders }) => {
	const themeSlug = params.theme as string;
	const topicSlug = params.subtopic as string;
	
	// Find theme by slug
	const theme = themeList.themes.find((t) => slugify(t.theme_en) === themeSlug);
	if (!theme || !theme.published) {
		return json({ error: 'Theme not found' }, { status: 404 });
	}
	
	// Find subtopic by slug
	const subtopic = theme.subtopics.find((s) => slugify(s.title_en) === topicSlug);
	if (!subtopic) {
		return json({ error: 'Subtopic not found' }, { status: 404 });
	}
	
	const response = {
		theme_en: theme.theme_en,
		theme_slug: themeSlug,
		title: {
			en: subtopic.title_en,
			am: subtopic.title_am
		},
		slug: topicSlug,
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
		available_content: {
			devotional: {
				en: !!subtopic.devotional?.devotional_en,
				am: !!subtopic.devotional?.devotional_am
			},
			study_material: {
				en: !!subtopic.study_material?.study_material_en,
				am: !!subtopic.study_material?.study_material_am
			}
		},
		authors: {
			devotional_en: subtopic.devotional?.devotional_author_en || [],
			devotional_am: subtopic.devotional?.devotional_author_am || [],
			study_material_en: subtopic.study_material?.study_material_author_en || [],
			study_material_am: subtopic.study_material?.study_material_author_am || []
		},
		artists: subtopic.artists
	};
	
	// Set Cache-Control header
	setHeaders({
		'Cache-Control': 'public, max-age=3600'
	});
	
	return json(response);
};