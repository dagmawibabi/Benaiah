<script>
	import { _, locale } from 'svelte-i18n';
	import { graphicsList } from '../../store/graphics.svelte';
	import Nav from '../../components/nav/nav.svelte';
	import Hero from '../../components/hero.svelte';
	import BlurredBackground from '../../components/blurred_background.svelte';
	import EachSubtopicGraphicsContainer from '../../components/each_subtopic/each_subtopic_graphics_container.svelte';
</script>

<!-- Blurred Background -->
<BlurredBackground />

<div class="no-scrollbar relative h-screen overflow-scroll">
	<!-- Nav -->
	<Nav />

	<!-- HERO -->
	<Hero title={$_('page.graphics.graphics')} description={$_('page.graphics.description')} />

	<!-- Content -->
	<div class="absolute z-50 flex w-screen items-center justify-center pb-60">
		<div class="flex w-3/5 flex-col justify-between">
			{#each graphicsList.themes as theme}
				<div class="pl-5 font-batangas text-xl text-black">
					— {$locale === 'am' ? theme.theme_am : theme.theme_en}
				</div>
				<div class="grid grid-cols-3 gap-y-7 pb-14 pt-3">
					{#each theme.subtopics as subtopic}
						<EachSubtopicGraphicsContainer {theme} {subtopic} />
					{/each}
				</div>
			{/each}
		</div>
	</div>
</div>
