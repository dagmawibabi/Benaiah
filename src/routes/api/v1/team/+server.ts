import { json } from '@sveltejs/kit';
import { teamCategories } from '../../../../store/team_members.svelte.js';
import type { RequestHandler } from '@sveltejs/kit';
import type { TeamMember } from '$lib/types';

const people = (members: TeamMember[]) => members.map(({ socials, ...rest }) => rest);

export const GET: RequestHandler = async ({ setHeaders }) => {
	setHeaders({
		'Cache-Control': 'public, max-age=3600'
	});

	return json({
		authors: people(teamCategories.authors),
		graphics_designers: people(teamCategories.graphicsDesigners),
		narrators: people(teamCategories.narrators),
		video_editors: people(teamCategories.videoEditors),
		software_developers: people(teamCategories.softwareDevelopers)
	});
};
