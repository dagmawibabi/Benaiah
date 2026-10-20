<script lang="ts">
	import Seo from '../../../../components/seo.svelte';
	import { shareImage } from '$lib/themes';
	import { useI18n } from '$lib/i18n';
	const { locale } = useI18n();
	import Nav from '../../../../components/nav/nav.svelte';
	import Hero from '../../../../components/hero.svelte';
	import BlurredBackground from '../../../../components/blurred_background.svelte';
	import SubtopicArtistsListContainer from '../../../../components/resource_container/subtopic_artists_list_container.svelte';

	let { data } = $props();

	let am = $derived($locale === 'am');
	let title = $derived(am ? data.subtopic.title_am : data.subtopic.title_en);
	let squares = $derived(am ? data.subtopic.square_am : data.subtopic.square_en);
	let stories = $derived(am ? data.subtopic.story_am : data.subtopic.story_en);
</script>

<Seo
	title={`${title} · ${am ? 'ምስሎች' : 'Graphics'} · Benaiah`}
	description={am
		? `በ${data.theme.theme_am} ተከታታይ ስር ስለ ${data.subtopic.title_am} የተሰሩ ምስሎች።`
		: `Graphics on "${data.subtopic.title_en}" from the Benaiah series "${data.theme.theme_en}".`}
	image={shareImage(am ? data.subtopic.cover_am : data.subtopic.cover_en)}
	imageAlt={title}
/>

<!-- Blurred Background -->
<BlurredBackground />

<div class="no-scrollbar relative min-h-screen">
	<!-- Nav -->
	<Nav />

	<!-- HERO -->
	<Hero
		{title}
		description={am
			? `እነዚህ በ${data.theme.theme_am} ርዕስ ስር የተሰሩት የሚያምሩና ልብ የሚነኩ ምስሎች የሚመለከታቸውን ሰው ሁሉ ወደ እግዚአብሄር ለማቅረብ እና እምነትን ለማሳደግ በበናያስ አባሎች የተሰሩ ናቸው`
			: `These are a list of beautiful and intriguing graphics our team made under the theme "${data.theme.theme_en}" to inspire and encourage people to draw closer to God and grow in their faith`}
	/>

	<!-- Content -->
	<div class="relative z-50 flex w-full flex-col items-center justify-center gap-y-7 pb-20">
		<!-- Social Media Posts -->
		<div class="flex w-[90%] flex-col justify-between md:w-[95%] lg:w-[85%] xl:w-3/5">
			<div class="grid grid-cols-1 gap-y-7 md:grid-cols-3">
				{#each squares as graphic, i (graphic)}
					<a href={graphic} target="_blank" rel="noopener noreferrer">
						<div
							class="group aspect-square w-full overflow-clip rounded border border-zinc-300 shadow-lg transition-all hover:border-black hover:shadow-xl md:w-72"
						>
							<img
								src={graphic}
								alt={`${title} — ${i + 1}`}
								loading="lazy"
								class="h-full w-full object-cover transition-all group-hover:scale-105"
							/>
						</div>
					</a>
				{/each}
			</div>
		</div>

		<!-- Stories -->
		<div class="flex w-[90%] flex-col justify-between md:w-[95%] lg:w-[85%] xl:w-3/5">
			<div class="grid grid-cols-1 gap-y-7 md:grid-cols-3">
				{#each stories as graphic, i (graphic)}
					<a href={graphic} target="_blank" rel="noopener noreferrer">
						<div
							class="group w-full overflow-clip rounded border border-zinc-300 shadow-lg transition-all hover:border-black hover:shadow-xl md:w-72"
						>
							<img
								src={graphic}
								alt={`${title} — story ${i + 1}`}
								loading="lazy"
								class="h-full w-full object-cover transition-all group-hover:scale-105"
							/>
						</div>
					</a>
				{/each}
			</div>
		</div>

		<!-- Artists -->
		<SubtopicArtistsListContainer artistsList={data.subtopic.artists} />
	</div>
</div>
