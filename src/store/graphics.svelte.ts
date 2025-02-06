import faith1 from '$lib/assets/graphics/themes/LoveFaithHope/Faith/1.png';
import hope2 from '$lib/assets/graphics/themes/LoveFaithHope/Hope/2.png';
import love3 from '$lib/assets/graphics/themes/LoveFaithHope/Love/3.png';
import BethelemMelese from '$lib/assets/team/BethelemMelese.png';
import RebiraTibebu from '$lib/assets/team/RebiraTibebu.png';
import AkinahomGetahun from '$lib/assets/team/AkinahomGetahun.png';

export const graphicsList = $state({
	themes: [
		{
			theme: 'Love, Faith and Hope',
			subtopics: [
				{
					title: 'Love',
					description: 'A collection of beautiful and heart warming graphics',
					cover_en: love3,
					cover_am: love3,
					square_en: [love3],
					square_am: [love3],
					story_en: [love3],
					story_am: [love3],
					artists: [BethelemMelese, RebiraTibebu, AkinahomGetahun]
				},
				{
					title: 'Faith',
					description: 'A collection of beautiful and heart warming graphics',
					cover_en: faith1,
					cover_am: faith1,
					square_en: [faith1],
					square_am: [faith1],
					story_en: [faith1],
					story_am: [faith1],
					artists: [BethelemMelese, RebiraTibebu, AkinahomGetahun]
				},
				{
					title: 'Hope',
					description: 'A collection of beautiful and heart warming graphics',
					cover_en: hope2,
					cover_am: hope2,
					square_en: [hope2],
					square_am: [hope2],
					story_en: [hope2],
					story_am: [hope2],
					artists: [BethelemMelese, RebiraTibebu, AkinahomGetahun]
				}
			]
		},
		{
			theme: 'Names of God',
			subtopics: [
				{
					title: 'Love',
					description: 'A collection of beautiful and heart warming graphics',
					cover_en: love3,
					cover_am: love3,
					square_en: [love3],
					square_am: [love3],
					story_en: [love3],
					story_am: [love3],
					artists: [BethelemMelese, RebiraTibebu, AkinahomGetahun]
				},
				{
					title: 'Faith',
					description: 'A collection of beautiful and heart warming graphics',
					cover_en: faith1,
					cover_am: faith1,
					square_en: [faith1],
					square_am: [faith1],
					story_en: [faith1],
					story_am: [faith1],
					artists: [BethelemMelese, RebiraTibebu, AkinahomGetahun]
				},
				{
					title: 'Hope',
					description: 'A collection of beautiful and heart warming graphics',
					cover_en: hope2,
					cover_am: hope2,
					square_en: [hope2],
					square_am: [hope2],
					story_en: [hope2],
					story_am: [hope2],
					artists: [BethelemMelese, RebiraTibebu, AkinahomGetahun]
				}
			]
		}
	]
});
