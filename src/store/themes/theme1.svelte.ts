import love9 from '$lib/assets/graphics/themes/LoveFaithHope/Love/9.png';
import love10 from '$lib/assets/graphics/themes/LoveFaithHope/Love/10.png';
import love11 from '$lib/assets/graphics/themes/LoveFaithHope/Love/11.png';

import faith1 from '$lib/assets/graphics/themes/LoveFaithHope/Faith/1.png';
import hope15 from '$lib/assets/graphics/themes/LoveFaithHope/Hope/15.png';
import hope16 from '$lib/assets/graphics/themes/LoveFaithHope/Hope/16.png';

import { team } from '../team_members.svelte';

export const theme1 = $state({
	published: true,
	theme_en: 'Love, Faith and Hope',
	theme_am: 'እምነት፣ ተስፋና ፍቅር',
	subtopics: [
		{
			title_en: 'Love',
			title_am: 'ፍቅር',
			description_en: 'A collection of beautiful and heart warming graphics',
			description_am: 'A collection of beautiful and heart warming graphics',
			devotional: { 
				devotional_en: './articles/themes/Love, Faith and Hope/Love/devotional_en',
				devotional_author_en: [team.AkinahomGetahun],
				devotional_am: './articles/themes/Love, Faith and Hope/Love/devotional_am',
				devotional_author_am: [team.RebiraTibebu]
			},
			study_material: {
				study_material_en: './articles/themes/Love, Faith and Hope/Love/study_material_en',
				study_material_author_en: [team.BethelemMelese],
				study_material_am: './articles/themes/Love, Faith and Hope/Love/study_material_am',
				study_material_author_am: [team.AkinahomGetahun]
			},
			cover_en: 'https://res.cloudinary.com/doh7zyphl/image/upload/v1741484789/3_jl5qfb.png',
			cover_am: love10,
			square_en: [
				'https://res.cloudinary.com/doh7zyphl/image/upload/v1741484898/1_nrxe0z.png',
				'https://res.cloudinary.com/doh7zyphl/image/upload/v1741484789/2_accgok.png',
				'https://res.cloudinary.com/doh7zyphl/image/upload/v1741484789/3_jl5qfb.png',
				'https://res.cloudinary.com/doh7zyphl/image/upload/v1741484789/4_uqvv8h.png',
				'https://res.cloudinary.com/doh7zyphl/image/upload/v1741484789/5_erhgme.png',
				'https://res.cloudinary.com/doh7zyphl/image/upload/v1741484789/6_b3xzfd.png'
			],
			square_am: [
				'https://res.cloudinary.com/doh7zyphl/image/upload/v1741484789/7_hzabr5.png',
				'https://res.cloudinary.com/doh7zyphl/image/upload/v1741484789/8_kf8czj.png',
				love9,
				love10,
				love11,
				'https://res.cloudinary.com/doh7zyphl/image/upload/v1741484789/12_npfsmi.png'
			],
			story_en: [
				'https://res.cloudinary.com/doh7zyphl/image/upload/v1741484789/13_p1ckg7.png',
				'https://res.cloudinary.com/doh7zyphl/image/upload/v1741484789/14_xhbxfv.png',
				'https://res.cloudinary.com/doh7zyphl/image/upload/v1741484789/15_zorqcz.png'
			],
			story_am: [
				'https://res.cloudinary.com/doh7zyphl/image/upload/v1741484789/16_mcppp5.png',
				'https://res.cloudinary.com/doh7zyphl/image/upload/v1741484789/17_v5gyxv.png',
				'https://res.cloudinary.com/doh7zyphl/image/upload/v1741484789/18_dwd5hi.png'
			],
			artists: [team.AkinahomGetahun, team.RebiraTibebu, team.BethelemMelese]
		},
		{
			title_en: 'Faith',
			title_am: 'እምነት',
			devotional: { 
				devotional_en: './articles/themes/Love, Faith and Hope/Love/devotional_en',
				devotional_author_en: [team.AkinahomGetahun],
				devotional_am: './articles/themes/Love, Faith and Hope/Love/devotional_am',
				devotional_author_am: [team.RebiraTibebu]
			},
			study_material: {
				study_material_en: './articles/themes/Love, Faith and Hope/Love/study_material_en',
				study_material_author_en: [team.BethelemMelese],
				study_material_am: './articles/themes/Love, Faith and Hope/Love/study_material_am',
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
			title_am: 'ተስፋ',
			description_en: 'A collection of beautiful and heart warming graphics',
			description_am: 'A collection of beautiful and heart warming graphics',
			devotional: { 
				devotional_en: './articles/themes/Love, Faith and Hope/Love/devotional_en',
				devotional_author_en: [team.AkinahomGetahun],
				devotional_am: './articles/themes/Love, Faith and Hope/Love/devotional_am',
				devotional_author_am: [team.RebiraTibebu]
			},
			study_material: {
				study_material_en: './articles/themes/Love, Faith and Hope/Love/study_material_en',
				study_material_author_en: [team.BethelemMelese],
				study_material_am: './articles/themes/Love, Faith and Hope/Love/study_material_am',
				study_material_author_am: [team.AkinahomGetahun]
			},
			cover_en: 'https://res.cloudinary.com/doh7zyphl/image/upload/v1741484789/2_enaiyr.png',
			cover_am: 'https://res.cloudinary.com/doh7zyphl/image/upload/v1741484789/11_edphwm.png',
			square_en: [
				'https://res.cloudinary.com/doh7zyphl/image/upload/v1741484789/1_yroxsc.png',
				'https://res.cloudinary.com/doh7zyphl/image/upload/v1741484789/2_enaiyr.png',
				'https://res.cloudinary.com/doh7zyphl/image/upload/v1741484789/3_lcq6sg.png',
				'https://res.cloudinary.com/doh7zyphl/image/upload/v1741484789/4_cwzrrh.png',
				'https://res.cloudinary.com/doh7zyphl/image/upload/v1741484789/5_hfpkrw.png',
				'https://res.cloudinary.com/doh7zyphl/image/upload/v1741484789/6_asr46c.png'
			],
			square_am: [
				'https://res.cloudinary.com/doh7zyphl/image/upload/v1741484789/7_xo3tgi.png',
				'https://res.cloudinary.com/doh7zyphl/image/upload/v1741484789/8_qkrmkx.png',
				'https://res.cloudinary.com/doh7zyphl/image/upload/v1741484789/9_ewl7ox.png',
				'https://res.cloudinary.com/doh7zyphl/image/upload/v1741484789/10_zwdu9p.png',
				'https://res.cloudinary.com/doh7zyphl/image/upload/v1741484789/11_edphwm.png',
				'https://res.cloudinary.com/doh7zyphl/image/upload/v1741484789/12_x274vu.png'
			],
			story_en: [
				'https://res.cloudinary.com/doh7zyphl/image/upload/v1741484789/13_jxtu05.png',
				'https://res.cloudinary.com/doh7zyphl/image/upload/v1741484789/14_fd4nuq.png',
				hope15
			],
			story_am: [
				hope16,
				'https://res.cloudinary.com/doh7zyphl/image/upload/v1741484789/17_jsjald.png',
				'https://res.cloudinary.com/doh7zyphl/image/upload/v1741484789/18_dvgyf8.png'
			],
			artists: [team.AkinahomGetahun, team.RebiraTibebu, team.BethelemMelese]
		}
	]
});
