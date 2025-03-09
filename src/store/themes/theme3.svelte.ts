import { team } from '../team_members.svelte';

import faith1 from '$lib/assets/graphics/themes/LoveFaithHope/Faith/1.png';
import hope2 from '$lib/assets/graphics/themes/LoveFaithHope/Hope/2.png';
import love3 from '$lib/assets/graphics/themes/LoveFaithHope/Love/3.png';

export const theme3 = $state({
	theme_en: 'Independent Pieces',
	theme_am: 'እምነት፣ ተስፋና ፍቅር',
	subtopics: [
		{
			title_en: 'Love',
			title_am: 'Fikir',
			description: 'A collection of beautiful and heart warming graphics',
			cover_en: love3,
			cover_am: love3,
			square_en: [love3],
			square_am: [love3],
			story_en: [love3],
			story_am: [love3],
			artists: [team.AkinahomGetahun, team.RebiraTibebu, team.BethelemMelese]
		},
		{
			title_en: 'Faith',
			title_am: 'Fikir',
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
			title_am: 'Fikir',
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
