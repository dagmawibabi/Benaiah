import faith1 from '$lib/assets/graphics/themes/LoveFaithHope/Faith/1.png';
import hope2 from '$lib/assets/graphics/themes/LoveFaithHope/Hope/2.png';
import love3 from '$lib/assets/graphics/themes/LoveFaithHope/Love/3.png';

import Goel from '$lib/assets/graphics/themes/NamesOfGod/Goel/1.png';
import Chatsahi from '$lib/assets/graphics/themes/NamesOfGod/Chatsahi/1.png';
import Rapha from '$lib/assets/graphics/themes/NamesOfGod/Rapha/1.png';

import BethelemMelese from '$lib/assets/team/BethelemMelese.png';
import RebiraTibebu from '$lib/assets/team/RebiraTibebu.png';
import AkinahomGetahun from '$lib/assets/team/AkinahomGetahun.png';

export const team = $state({
	AkinahomGetahun: {
		fullname: 'Akinahom Getahun',
		photo: AkinahomGetahun,
		role: 'Graphic Designer',
		socials: [
			{
				name: 'Instagram',
				url: 'https://www.instagram.com/akinahomgetahun'
			}
		]
	},
	BethelemMelese: {
		fullname: 'Bethelem Melese',
		photo: BethelemMelese,
		role: 'Graphic Designer',
		socials: [
			{
				name: 'Instagram',
				url: 'https://www.instagram.com/bethelemmelese'
			}
		]
	},
	RebiraTibebu: {
		fullname: 'Rebira Tibebu',
		photo: RebiraTibebu,
		role: 'Graphic Designer',
		socials: [
			{
				name: 'Instagram',
				url: 'https://www.instagram.com/rebiratibebu'
			}
		]
	}
});

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
					artists: [team.AkinahomGetahun, team.BethelemMelese, team.RebiraTibebu]
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
					artists: [team.AkinahomGetahun, team.BethelemMelese, team.RebiraTibebu]
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
					artists: [team.AkinahomGetahun, team.BethelemMelese, team.RebiraTibebu]
				}
			]
		},
		{
			theme: 'Names of God',
			subtopics: [
				{
					title: 'Jehovah Chatsahi',
					description: 'A collection of beautiful and heart warming graphics',
					cover_en: Chatsahi,
					cover_am: Chatsahi,
					square_en: [Chatsahi],
					square_am: [Chatsahi],
					story_en: [Chatsahi],
					story_am: [Chatsahi],
					artists: [team.AkinahomGetahun, team.BethelemMelese, team.RebiraTibebu]
				},
				{
					title: 'Jehovah Rapha',
					description: 'A collection of beautiful and heart warming graphics',
					cover_en: Rapha,
					cover_am: Rapha,
					square_en: [Rapha],
					square_am: [Rapha],
					story_en: [Rapha],
					story_am: [Rapha],
					artists: [team.AkinahomGetahun, team.BethelemMelese, team.RebiraTibebu]
				},
				{
					title: 'Jehovah Goel',
					description: 'A collection of beautiful and heart warming graphics',
					cover_en: Goel,
					cover_am: Goel,
					square_en: [Goel],
					square_am: [Goel],
					story_en: [Goel],
					story_am: [Goel],
					artists: [team.AkinahomGetahun, team.BethelemMelese, team.RebiraTibebu]
				},
				{
					title: 'Jehovah Chatsahi',
					description: 'A collection of beautiful and heart warming graphics',
					cover_en: Chatsahi,
					cover_am: Chatsahi,
					square_en: [Chatsahi],
					square_am: [Chatsahi],
					story_en: [Chatsahi],
					story_am: [Chatsahi],
					artists: [team.AkinahomGetahun, team.BethelemMelese, team.RebiraTibebu]
				},
				{
					title: 'Jehovah Rapha',
					description: 'A collection of beautiful and heart warming graphics',
					cover_en: Rapha,
					cover_am: Rapha,
					square_en: [Rapha],
					square_am: [Rapha],
					story_en: [Rapha],
					story_am: [Rapha],
					artists: [team.AkinahomGetahun, team.BethelemMelese, team.RebiraTibebu]
				},
				{
					title: 'Jehovah Goel',
					description: 'A collection of beautiful and heart warming graphics',
					cover_en: Goel,
					cover_am: Goel,
					square_en: [Goel],
					square_am: [Goel],
					story_en: [Goel],
					story_am: [Goel],
					artists: [team.AkinahomGetahun, team.BethelemMelese, team.RebiraTibebu]
				}
			]
		},
		{
			theme: 'Fruits of The Spirit',
			subtopics: [
				{
					title: 'Jehovah Chatsahi',
					description: 'A collection of beautiful and heart warming graphics',
					cover_en: Chatsahi,
					cover_am: Chatsahi,
					square_en: [Chatsahi],
					square_am: [Chatsahi],
					story_en: [Chatsahi],
					story_am: [Chatsahi],
					artists: [team.AkinahomGetahun, team.BethelemMelese, team.RebiraTibebu]
				},
				{
					title: 'Jehovah Rapha',
					description: 'A collection of beautiful and heart warming graphics',
					cover_en: Rapha,
					cover_am: Rapha,
					square_en: [Rapha],
					square_am: [Rapha],
					story_en: [Rapha],
					story_am: [Rapha],
					artists: [team.AkinahomGetahun, team.BethelemMelese, team.RebiraTibebu]
				},
				{
					title: 'Jehovah Goel',
					description: 'A collection of beautiful and heart warming graphics',
					cover_en: Goel,
					cover_am: Goel,
					square_en: [Goel],
					square_am: [Goel],
					story_en: [Goel],
					story_am: [Goel],
					artists: [team.AkinahomGetahun, team.BethelemMelese, team.RebiraTibebu]
				},
				{
					title: 'Jehovah Chatsahi',
					description: 'A collection of beautiful and heart warming graphics',
					cover_en: Chatsahi,
					cover_am: Chatsahi,
					square_en: [Chatsahi],
					square_am: [Chatsahi],
					story_en: [Chatsahi],
					story_am: [Chatsahi],
					artists: [team.AkinahomGetahun, team.BethelemMelese, team.RebiraTibebu]
				},
				{
					title: 'Jehovah Rapha',
					description: 'A collection of beautiful and heart warming graphics',
					cover_en: Rapha,
					cover_am: Rapha,
					square_en: [Rapha],
					square_am: [Rapha],
					story_en: [Rapha],
					story_am: [Rapha],
					artists: [team.AkinahomGetahun, team.BethelemMelese, team.RebiraTibebu]
				},
				{
					title: 'Jehovah Goel',
					description: 'A collection of beautiful and heart warming graphics',
					cover_en: Goel,
					cover_am: Goel,
					square_en: [Goel],
					square_am: [Goel],
					story_en: [Goel],
					story_am: [Goel],
					artists: [team.AkinahomGetahun, team.BethelemMelese, team.RebiraTibebu]
				}
			]
		}
	]
});
