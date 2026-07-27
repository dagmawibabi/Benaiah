import { team } from '../team_members.svelte';

export const theme3 = $state({
	published: true,
	theme_en: 'The Full Armor of God',
	theme_am: 'የእግዚአብሔር ሙሉ ጦር ዕቃ ',
	subtopics: [
		{
			title_en: 'Belt of Truth',
			title_am: 'የእውነት ዝናር',
			description_en: 'A collection of beautiful and heart warming graphics',
			description_am: 'A collection of beautiful and heart warming graphics',
			devotional: {
				devotional_en: './articles/themes/The Full Armor of God/Belt of Truth/devotional_en',
				devotional_author_en: [team.EdenTesfaye],
				devotional_am: './articles/themes/The Full Armor of God/Belt of Truth/devotional_am',
				devotional_author_am: [team.KibruAbebe]
			},
			study_material: {
				study_material_en:
					'./articles/themes/The Full Armor of God/Belt of Truth/study_material_en',
				study_material_author_en: [team.EdenTesfaye],
				study_material_am:
					'./articles/themes/The Full Armor of God/Belt of Truth/study_material_am',
				study_material_author_am: [team.KibruAbebe]
			},
			cover_en: 'https://res.cloudinary.com/doh7zyphl/image/upload/v1779052535/6_cubwmd.jpg',
			cover_am: 'https://res.cloudinary.com/doh7zyphl/image/upload/v1779052661/10_eamo6n.png',
			square_en: [
				'https://res.cloudinary.com/doh7zyphl/image/upload/v1779052510/1_q0uywz.jpg',
				'https://res.cloudinary.com/doh7zyphl/image/upload/v1779052566/2_ntutlg.png',
				'https://res.cloudinary.com/doh7zyphl/image/upload/v1779052549/3_nja9l0.jpg',
				'https://res.cloudinary.com/doh7zyphl/image/upload/v1779052611/4_wg3gie.png',
				'https://res.cloudinary.com/doh7zyphl/image/upload/v1779052569/5_eqminh.jpg',
				'https://res.cloudinary.com/doh7zyphl/image/upload/v1779052535/6_cubwmd.jpg'
			],
			square_am: [
				'https://res.cloudinary.com/doh7zyphl/image/upload/v1779295050/7_trzwsx.png',
				'https://res.cloudinary.com/doh7zyphl/image/upload/v1779295117/8_zhdwsg.png',
				'https://res.cloudinary.com/doh7zyphl/image/upload/v1779295001/9_rhbyva.png',
				'https://res.cloudinary.com/doh7zyphl/image/upload/v1779295121/10_nimqr4.png',
				'https://res.cloudinary.com/doh7zyphl/image/upload/v1779295609/11_zxqvq7.png',
				'https://res.cloudinary.com/doh7zyphl/image/upload/v1779295060/12_qsvq5w.png'
			],
			story_en: [
				'https://res.cloudinary.com/doh7zyphl/image/upload/v1779052727/13_iresoi.jpg',
				'https://res.cloudinary.com/doh7zyphl/image/upload/v1779052625/14_tfpcnz.png',
				'https://res.cloudinary.com/doh7zyphl/image/upload/v1779052665/15_j8bhvt.png'
			],
			story_am: [
				'https://res.cloudinary.com/doh7zyphl/image/upload/v1779052736/16_fw7pck.png',
				'https://res.cloudinary.com/doh7zyphl/image/upload/v1779052700/17_nvwuay.png',
				'https://res.cloudinary.com/doh7zyphl/image/upload/v1779052707/18_gmzsjt.png'
			],
			artists: [team.EyuelMelese, team.BereketFikru]
		},
		// {
		// 	title_en: 'Helmet of Salvation',
		// 	title_am: 'የመዳን ራስ ቍር',
		// 	devotional: {
		// 		devotional_en: './articles/themes/The Full Armor of God/Helmet of Salvation/devotional_en',
		// 		devotional_author_en: [team.HannaKinfe],
		// 		devotional_am: './articles/themes/The Full Armor of God/Helmet of Salvation/devotional_am',
		// 		devotional_author_am: [team.DanielDemerw]
		// 	},
		// 	study_material: {
		// 		study_material_en:
		// 			'./articles/themes/The Full Armor of God/Helmet of Salvation/study_material_en',
		// 		study_material_author_en: [team.HannaKinfe],
		// 		study_material_am:
		// 			'./articles/themes/The Full Armor of God/Helmet of Salvation/study_material_am',
		// 		study_material_author_am: [team.DanielDemerw]
		// 	},
		// 	cover_en: 'https://res.cloudinary.com/doh7zyphl/image/upload/v1745798661/1_zadgvw.png',
		// 	cover_am: 'https://res.cloudinary.com/doh7zyphl/image/upload/v1745795456/8_dbsvnk.png',
		// 	square_en: [
		// 		'https://res.cloudinary.com/doh7zyphl/image/upload/v1745798661/1_zadgvw.png',
		// 		'https://res.cloudinary.com/doh7zyphl/image/upload/v1745801401/2_czoiyb.png',
		// 		'https://res.cloudinary.com/doh7zyphl/image/upload/v1745795209/3_d0ngln.png',
		// 		'https://res.cloudinary.com/doh7zyphl/image/upload/v1745795329/4_touynl.png',
		// 		'https://res.cloudinary.com/doh7zyphl/image/upload/v1745795323/5_wpq9rr.png',
		// 		'https://res.cloudinary.com/doh7zyphl/image/upload/v1745798561/6_urqnx8.png'
		// 	],
		// 	square_am: [
		// 		'https://res.cloudinary.com/doh7zyphl/image/upload/v1745795456/8_dbsvnk.png',
		// 		'https://res.cloudinary.com/doh7zyphl/image/upload/v1745798654/7_ii2knu.png',
		// 		'https://res.cloudinary.com/doh7zyphl/image/upload/v1745798626/9_rk8rvd.png',
		// 		'https://res.cloudinary.com/doh7zyphl/image/upload/v1745798572/10_oaclkg.png',
		// 		'https://res.cloudinary.com/doh7zyphl/image/upload/v1745795525/11_xkcq3g.png',
		// 		'https://res.cloudinary.com/doh7zyphl/image/upload/v1745798639/12_p4wpdd.png'
		// 	],
		// 	story_en: [
		// 		'https://res.cloudinary.com/doh7zyphl/image/upload/v1745795496/13_yzofgh.png',
		// 		'https://res.cloudinary.com/doh7zyphl/image/upload/v1745795498/14_vcvtle.png',
		// 		'https://res.cloudinary.com/doh7zyphl/image/upload/v1745795504/15_kflupl.png'
		// 	],
		// 	story_am: [
		// 		'https://res.cloudinary.com/doh7zyphl/image/upload/v1745795511/16_mj1l0l.png',
		// 		'https://res.cloudinary.com/doh7zyphl/image/upload/v1745798870/17_bieire.jpg',
		// 		'https://res.cloudinary.com/doh7zyphl/image/upload/v1745795502/18_b1lyhp.png'
		// 	],
		// 	artists: [team.AkinahomGetahun, team.RebiraTibebu, team.BethelemMelese]
		// },
		{
			title_en: 'Breastplate of Righteousness',
			title_am: 'የጽድቅን ጥሩር',
			devotional: {
				devotional_en:
					'./articles/themes/The Full Armor of God/Breastplate of Righteousness/devotional_en',
				devotional_author_en: [team.TruketLema],
				devotional_am:
					'./articles/themes/The Full Armor of God/Breastplate of Righteousness/devotional_am',
				devotional_author_am: [team.BethelemMelese]
			},
			study_material: {
				study_material_en:
					'./articles/themes/The Full Armor of God/Breastplate of Righteousness/study_material_en',
				study_material_author_en: [team.TruketLema],
				study_material_am:
					'./articles/themes/The Full Armor of God/Breastplate of Righteousness/study_material_am',
				study_material_author_am: [team.BethelemMelese]
			},
			cover_en: 'https://res.cloudinary.com/doh7zyphl/image/upload/v1782839561/6_gqcepe.png',
			cover_am: 'https://res.cloudinary.com/doh7zyphl/image/upload/v1782839718/12_n0jxdv.png',
			square_en: [
				'https://res.cloudinary.com/doh7zyphl/image/upload/v1782839081/1_dmfjj6.png',
				'https://res.cloudinary.com/doh7zyphl/image/upload/v1782840239/2_tdowdj.jpg',
				'https://res.cloudinary.com/doh7zyphl/image/upload/v1782839209/3_j44ias.png',
				'https://res.cloudinary.com/doh7zyphl/image/upload/v1782839226/4_sxwrhy.png',
				'https://res.cloudinary.com/doh7zyphl/image/upload/v1782839292/5_v86wmv.png',
				'https://res.cloudinary.com/doh7zyphl/image/upload/v1782839561/6_gqcepe.png'
			],
			square_am: [
				'https://res.cloudinary.com/doh7zyphl/image/upload/v1782839553/7_xgpsve.png',
				'https://res.cloudinary.com/doh7zyphl/image/upload/v1782839887/8_xa6wax.png',
				'https://res.cloudinary.com/doh7zyphl/image/upload/v1782839856/9_ibljdh.png',
				'https://res.cloudinary.com/doh7zyphl/image/upload/v1782840073/10_f4x6z4.png',
				'https://res.cloudinary.com/doh7zyphl/image/upload/v1782839730/11_g2nujq.png',
				'https://res.cloudinary.com/doh7zyphl/image/upload/v1782839718/12_n0jxdv.png'
			],
			story_en: [
				'https://res.cloudinary.com/doh7zyphl/image/upload/v1782839739/13_szzem9.png',
				'https://res.cloudinary.com/doh7zyphl/image/upload/v1782839935/14_pvuxfl.png',
				'https://res.cloudinary.com/doh7zyphl/image/upload/v1782840111/15_nygfwp.png'
			],
			story_am: [
				'https://res.cloudinary.com/doh7zyphl/image/upload/v1782839845/16_jltfri.png',
				'https://res.cloudinary.com/doh7zyphl/image/upload/v1782839984/17_ykatgy.png',
				'https://res.cloudinary.com/doh7zyphl/image/upload/v1782840283/18_bubhpo.jpg'
			],
			artists: [team.HenokTesfaye]
    },
    {
		    title_en: 'Shoes of the Gospel of Peace',
		    title_am: 'የሰላም ወንጌል ጫማ',
		    description_en: 'A collection of beautiful and heart warming graphics',
		    description_am: 'A collection of beautiful and heart warming graphics',
		    devotional: {
		        devotional_en: './articles/themes/The Full Armor of God/Shoes of the Gospel of Peace/devotional_en',
		        devotional_author_en: [team.HawiFikru],
		        devotional_am: './articles/themes/The Full Armor of God/Shoes of the Gospel of Peace/devotional_am',
		        devotional_author_am: [team.ClintonBeyene]
		    },
		    study_material: {
		        study_material_en: './articles/themes/The Full Armor of God/Shoes of the Gospel of Peace/study_material_en',
		        study_material_author_en: [team.HawiFikru],
		        study_material_am: './articles/themes/The Full Armor of God/Shoes of the Gospel of Peace/study_material_am',
		        study_material_author_am: [team.ClintonBeyene]
		    },
		    cover_en: 'https://res.cloudinary.com/doh7zyphl/image/upload/v1741484789/2_enaiyr.png',
		    cover_am: 'https://res.cloudinary.com/doh7zyphl/image/upload/v1741484789/11_edphwm.png',
		    square_en: [
		        'https://res.cloudinary.com/doh7zyphl/image/upload/v1785118846/1_nwpi2o.png',
		        'https://res.cloudinary.com/doh7zyphl/image/upload/v1785118775/2_hz96bc.png',
		        'https://res.cloudinary.com/doh7zyphl/image/upload/v1785118740/3_m4ivcu.png',
		        'https://res.cloudinary.com/doh7zyphl/image/upload/v1785118846/4_hyhof0.png',
		        'https://res.cloudinary.com/doh7zyphl/image/upload/v1785118972/5_txkzvf.jpg',
		        'https://res.cloudinary.com/doh7zyphl/image/upload/v1785118963/6_iodkmg.jpg'
		    ],
		    square_am: [
		        'https://res.cloudinary.com/doh7zyphl/image/upload/v1785118811/7_cbvurs.png',
		        'https://res.cloudinary.com/doh7zyphl/image/upload/v1785118977/8_ji3vvj.jpg',
		        'https://res.cloudinary.com/doh7zyphl/image/upload/v1785118857/9_zjalrq.png',
		        'https://res.cloudinary.com/doh7zyphl/image/upload/v1785118970/10_zexwiy.jpg',
		        'https://res.cloudinary.com/doh7zyphl/image/upload/v1785118855/11_haht69.png',
		        'https://res.cloudinary.com/doh7zyphl/image/upload/v1785118826/12_jr9rhc.png'
		    ],
		    story_en: [
		        'https://res.cloudinary.com/doh7zyphl/image/upload/v1785118867/13_kmwq4g.png',
		        'https://res.cloudinary.com/doh7zyphl/image/upload/v1785118888/14_rxgs4s.png',
		        'https://res.cloudinary.com/doh7zyphl/image/upload/v1785118887/15_l3wx86.png'
		    ],
		    story_am: [
		        'https://res.cloudinary.com/doh7zyphl/image/upload/v1785118928/16_yf5vay.png',
		        'https://res.cloudinary.com/doh7zyphl/image/upload/v1785118899/17_qtv0d6.png',
		        'https://res.cloudinary.com/doh7zyphl/image/upload/v1785118894/18_hjlh5t.png'
		    ],
		    artists: [team.AkinahomGetahun, team.YisihakWondimagegn]
		},

		// {
		//     title_en: 'Sword of the Spirit',
		//     title_am: 'የመንፈስ ሰይፍ',
		//     description_en: 'A collection of beautiful and heart warming graphics',
		//     description_am: 'A collection of beautiful and heart warming graphics',
		//     devotional: {
		//         devotional_en: './articles/themes/The Full Armor of God/Sword of the Spirit/devotional_en',
		//         devotional_author_en: [team.EdenTesfaye],
		//         devotional_am: './articles/themes/The Full Armor of God/Sword of the Spirit/devotional_am',
		//         devotional_author_am: [team.KibruAbebe]
		//     },
		//     study_material: {
		//         study_material_en: './articles/themes/The Full Armor of God/Sword of the Spirit/study_material_en',
		//         study_material_author_en: [team.EdenTesfaye],
		//         study_material_am: './articles/themes/The Full Armor of God/Sword of the Spirit/study_material_am',
		//         study_material_author_am: [team.KibruAbebe]
		//     },
		//     cover_en: 'https://res.cloudinary.com/doh7zyphl/image/upload/v1741484789/2_enaiyr.png',
		//     cover_am: 'https://res.cloudinary.com/doh7zyphl/image/upload/v1741484789/11_edphwm.png',
		//     square_en: [
		//         'https://res.cloudinary.com/doh7zyphl/image/upload/v1741484789/1_yroxsc.png',
		//         'https://res.cloudinary.com/doh7zyphl/image/upload/v1741484789/2_enaiyr.png',
		//         'https://res.cloudinary.com/doh7zyphl/image/upload/v1741484789/3_lcq6sg.png',
		//         'https://res.cloudinary.com/doh7zyphl/image/upload/v1741484789/4_cwzrrh.png',
		//         'https://res.cloudinary.com/doh7zyphl/image/upload/v1741484789/5_hfpkrw.png',
		//         'https://res.cloudinary.com/doh7zyphl/image/upload/v1741484789/6_asr46c.png'
		//     ],
		//     square_am: [
		//         'https://res.cloudinary.com/doh7zyphl/image/upload/v1741484789/7_xo3tgi.png',
		//         'https://res.cloudinary.com/doh7zyphl/image/upload/v1741484789/8_qkrmkx.png',
		//         'https://res.cloudinary.com/doh7zyphl/image/upload/v1741484789/9_ewl7ox.png',
		//         'https://res.cloudinary.com/doh7zyphl/image/upload/v1741484789/10_zwdu9p.png',
		//         'https://res.cloudinary.com/doh7zyphl/image/upload/v1741484789/11_edphwm.png',
		//         'https://res.cloudinary.com/doh7zyphl/image/upload/v1741484789/12_x274vu.png'
		//     ],
		//     story_en: [
		//         'https://res.cloudinary.com/doh7zyphl/image/upload/v1741484789/13_jxtu05.png',
		//         'https://res.cloudinary.com/doh7zyphl/image/upload/v1741484789/14_fd4nuq.png',
		//         'https://res.cloudinary.com/doh7zyphl/image/upload/v1745800860/15_kg94dv.png'
		//     ],
		//     story_am: [
		//         'https://res.cloudinary.com/doh7zyphl/image/upload/v1745800734/16_pi1lbs.jpg',
		//         'https://res.cloudinary.com/doh7zyphl/image/upload/v1741484789/17_jsjald.png',
		//         'https://res.cloudinary.com/doh7zyphl/image/upload/v1741484789/18_dvgyf8.png'
		//     ],
		//     artists: [team.AkinahomGetahun, team.RebiraTibebu, team.BethelemMelese]
		// },
	]
});
