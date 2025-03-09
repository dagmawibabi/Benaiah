import love1 from '$lib/assets/graphics/themes/LoveFaithHope/Love/1.png';
import love2 from '$lib/assets/graphics/themes/LoveFaithHope/Love/2.png';
import love3 from '$lib/assets/graphics/themes/LoveFaithHope/Love/3.png';
import love4 from '$lib/assets/graphics/themes/LoveFaithHope/Love/4.png';
import love5 from '$lib/assets/graphics/themes/LoveFaithHope/Love/5.png';
import love6 from '$lib/assets/graphics/themes/LoveFaithHope/Love/6.png';
import love7 from '$lib/assets/graphics/themes/LoveFaithHope/Love/7.png';
import love8 from '$lib/assets/graphics/themes/LoveFaithHope/Love/8.png';
import love9 from '$lib/assets/graphics/themes/LoveFaithHope/Love/9.png';
import love10 from '$lib/assets/graphics/themes/LoveFaithHope/Love/10.png';
import love11 from '$lib/assets/graphics/themes/LoveFaithHope/Love/11.png';
import love12 from '$lib/assets/graphics/themes/LoveFaithHope/Love/12.png';
import love13 from '$lib/assets/graphics/themes/LoveFaithHope/Love/13.png';
import love14 from '$lib/assets/graphics/themes/LoveFaithHope/Love/14.png';
import love15 from '$lib/assets/graphics/themes/LoveFaithHope/Love/15.png';
import love16 from '$lib/assets/graphics/themes/LoveFaithHope/Love/16.png';
import love17 from '$lib/assets/graphics/themes/LoveFaithHope/Love/17.png';
import love18 from '$lib/assets/graphics/themes/LoveFaithHope/Love/18.png';

import faith1 from '$lib/assets/graphics/themes/LoveFaithHope/Faith/1.png';
import hope2 from '$lib/assets/graphics/themes/LoveFaithHope/Hope/2.png';

import { team } from '../team_members.svelte';

export const theme1 = $state({
	theme_en: 'Love, Faith and Hope',
	theme_am: 'እምነት፣ ተስፋና ፍቅር',
	subtopics: [
		{
			title_en: 'Love',
			title_am: 'ፍቅር',
			description: 'A collection of beautiful and heart warming graphics',
			cover_en: love3,
			cover_am: love10,
			square_en: [love1, love2, love3, love4, love5, love6],
			square_am: [love7, love8, love9, love10, love11, love12],
			story_en: [love13, love14, love15],
			story_am: [love16, love17, love18],
			artists: [team.AkinahomGetahun, team.RebiraTibebu, team.BethelemMelese]
		},
		{
			title_en: 'Faith',
			title_am: 'እምነት',
			description: 'A collection of beautiful and heart warming graphics',
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
			description: 'A collection of beautiful and heart warming graphics',
			cover_en: hope2,
			cover_am: hope2,
			square_en: [hope2],
			square_am: [hope2],
			story_en: [hope2],
			story_am: [hope2],
			artists: [team.AkinahomGetahun, team.RebiraTibebu, team.BethelemMelese]
		}
	]
});
