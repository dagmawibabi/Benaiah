import { team } from '../team_members.svelte';

import faith1 from '$lib/assets/graphics/themes/LoveFaithHope/Faith/1.png';

export const theme3 = $state({
	theme_en: 'Independent Pieces',
	theme_am: 'እምነት፣ ተስፋና ፍቅር',
	subtopics: [
		{
			title_en: 'Love',
			title_am: 'Fikir',
			description_en: 'A collection of beautiful and heart warming graphics',
			description_am: 'A collection of beautiful and heart warming graphics',
			devotional: { 
				devotional_en: './articles/themes/LoveFaithHope/Love/devotional_en',
				devotional_author_en: [team.AkinahomGetahun],
				devotional_am: './articles/themes/LoveFaithHope/Love/devotional_am',
				devotional_author_am: [team.RebiraTibebu]
			},
			study_material: {
				study_material_en: './articles/themes/LoveFaithHope/Love/study_material_en',
				study_material_author_en: [team.BethelemMelese],
				study_material_am: './articles/themes/LoveFaithHope/Love/study_material_am',
				study_material_author_am: [team.AkinahomGetahun]
			},
			cover_en: 'https://res.cloudinary.com/doh7zyphl/image/upload/v1741484789/3_jl5qfb.png',
			cover_am: 'https://res.cloudinary.com/doh7zyphl/image/upload/v1741484789/3_jl5qfb.png',
			square_en: ['https://res.cloudinary.com/doh7zyphl/image/upload/v1741484789/3_jl5qfb.png'],
			square_am: ['https://res.cloudinary.com/doh7zyphl/image/upload/v1741484789/3_jl5qfb.png'],
			story_en: ['https://res.cloudinary.com/doh7zyphl/image/upload/v1741484789/3_jl5qfb.png'],
			story_am: ['https://res.cloudinary.com/doh7zyphl/image/upload/v1741484789/3_jl5qfb.png'],
			artists: [team.AkinahomGetahun, team.RebiraTibebu, team.BethelemMelese]
		},
		{
			title_en: 'Faith',
			title_am: 'Fikir',
			description_en: 'A collection of beautiful and heart warming graphics',
			description_am: 'A collection of beautiful and heart warming graphics',
			devotional: { 
				devotional_en: './articles/themes/LoveFaithHope/Love/devotional_en',
				devotional_author_en: [team.AkinahomGetahun],
				devotional_am: './articles/themes/LoveFaithHope/Love/devotional_am',
				devotional_author_am: [team.RebiraTibebu]
			},
			study_material: {
				study_material_en: './articles/themes/LoveFaithHope/Love/study_material_en',
				study_material_author_en: [team.BethelemMelese],
				study_material_am: './articles/themes/LoveFaithHope/Love/study_material_am',
				study_material_author_am: [team.AkinahomGetahun]
			},
			cover_en: faith1,
			cover_am: faith1,
			square_en: [faith1],
			square_am: [faith1],
			story_en: [faith1],
			story_am: [faith1],
			artists: [team.AkinahomGetahun, team.RebiraTibebu, team.BethelemMelese]
		},
		{
			title_en: 'Hope',
			title_am: 'Fikir',
			description_en: 'A collection of beautiful and heart warming graphics',
			description_am: 'A collection of beautiful and heart warming graphics',
			devotional: { 
				devotional_en: './articles/themes/LoveFaithHope/Love/devotional_en',
				devotional_author_en: [team.AkinahomGetahun],
				devotional_am: './articles/themes/LoveFaithHope/Love/devotional_am',
				devotional_author_am: [team.RebiraTibebu]
			},
			study_material: {
				study_material_en: './articles/themes/LoveFaithHope/Love/study_material_en',
				study_material_author_en: [team.BethelemMelese],
				study_material_am: './articles/themes/LoveFaithHope/Love/study_material_am',
				study_material_author_am: [team.AkinahomGetahun]
			},
			cover_en: 'https://res.cloudinary.com/doh7zyphl/image/upload/v1741484789/2_enaiyr.png',
			cover_am: 'https://res.cloudinary.com/doh7zyphl/image/upload/v1741484789/2_enaiyr.png',
			square_en: ['https://res.cloudinary.com/doh7zyphl/image/upload/v1741484789/2_enaiyr.png'],
			square_am: ['https://res.cloudinary.com/doh7zyphl/image/upload/v1741484789/2_enaiyr.png'],
			story_en: ['https://res.cloudinary.com/doh7zyphl/image/upload/v1741484789/2_enaiyr.png'],
			story_am: ['https://res.cloudinary.com/doh7zyphl/image/upload/v1741484789/2_enaiyr.png'],
			artists: [team.AkinahomGetahun, team.RebiraTibebu, team.BethelemMelese]
		}
	]
});
