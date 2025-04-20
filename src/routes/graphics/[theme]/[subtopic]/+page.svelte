<script lang="ts">
	import { _, locale } from 'svelte-i18n';
	import { page } from '$app/state';
	import { themeList } from '../../../../store/theme_list.svelte';
	import Nav from '../../../../components/nav/nav.svelte';
	import Hero from '../../../../components/hero.svelte';
	import BlurredBackground from '../../../../components/blurred_background.svelte';
	import SubtopicArtistsListContainer from '../../../../components/resource_container/subtopic_artists_list_container.svelte';

	const url = page.url.pathname.split('/');
	const theme_en = url[2].replaceAll('%20', ' ');
	const subtopic_title_en = url[3].replaceAll('%20', ' ');

	var currentTheme: any;
	var currentTopic: any;
	for (var eachTheme of themeList.themes) {
		if (eachTheme.theme_en == theme_en) {
			currentTheme = eachTheme;
			for (var eachSubtopic of eachTheme.subtopics) {
				if (eachSubtopic.title_en === subtopic_title_en) {
					currentTopic = eachSubtopic;
					break;
				}
			}
		}
	}
</script>

<svelte:head>
	<title>Benaiah | Graphics</title>
</svelte:head>

<!-- Blurred Background -->
<BlurredBackground />

<div class="no-scrollbar relative h-screen overflow-scroll">
	<!-- Nav -->
	<Nav />

	<!-- HERO -->
	<Hero
		title={$locale === 'am' ? currentTopic.title_am : currentTopic.title_en}
		description={$locale === 'am'
			? `እነዚህ በ${currentTheme.theme_am} ርዕስ ስር የተሰሩት የሚያምሩና ልብ የሚነኩ ምስሎች የሚመለከታቸውን ሰው ሁሉ ወደ እግዚአብሄር ለማቅረብ እና እምነትን ለማሳደግ በበናያስ አባሎች የተሰሩ ናቸው`
			: `These are a list of beautiful and intriguing graphics our team made under the theme "${currentTheme.theme_en}" to inspire and encourage people to draw closer to God and grow in their faith`}
	/>

	<!-- Content -->
	<div class="absolute z-50 flex w-screen flex-col items-center justify-center gap-y-7 pb-60">
		<!-- Social Media Postss -->
		<div class="flex w-[90%] md:w-3/5 lg:w-3/5 xl:w-3/5 2xl:w-3/5 flex-col justify-between">
			<div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 gap-y-7">
				{#each $locale === 'am' ? currentTopic.square_am : currentTopic.square_en as eachGraphics}
					<a href={eachGraphics} target="_blank">
						<div
							class="group aspect-square w-full md:w-72 lg:w-72 xl:w-72 2xl:w-72 overflow-clip rounded border border-zinc-300 shadow-lg transition-all hover:border-black hover:shadow-xl"
						>
							<img
								src={eachGraphics}
								alt=""
								class="h-full w-full object-fill transition-all group-hover:scale-105"
							/>
						</div>
					</a>
				{/each}
			</div>
		</div>

		<!-- Stories -->
		<div class="flex w-[90%] md:w-3/5 lg:w-3/5 xl:w-3/5 2xl:w-3/5 flex-col justify-between">
			<div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 gap-y-7">
				{#each $locale === 'am' ? currentTopic.story_am : currentTopic.story_en as eachGraphics}
					<a href={eachGraphics} download target="_blank">
						<div
							class="group w-full md:w-72 lg:w-72 xl:w-72 2xl:w-72 overflow-clip rounded border border-zinc-300 shadow-lg transition-all hover:border-black hover:shadow-xl"
						>
							<img
								src={eachGraphics}
								alt=""
								class="h-full w-full object-fill transition-all group-hover:scale-105"
							/>
						</div>
					</a>
				{/each}
			</div>
		</div>

		<!-- Artists -->
		<SubtopicArtistsListContainer artistsList={currentTopic.artists} />
	</div>
</div>
