import { error } from '@sveltejs/kit';
import { findSubtopic, findTheme } from '$lib/themes';
import type { PageLoad } from './$types';

export const load: PageLoad = ({ params }) => {
	const theme = findTheme(params.theme);
	const subtopic = theme && findSubtopic(theme, params.subtopic);
	if (!theme || !theme.published || !subtopic) {
		error(404, 'Graphics not found');
	}
	return { theme, subtopic };
};
