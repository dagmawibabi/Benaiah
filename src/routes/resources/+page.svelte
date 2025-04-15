<script>
	import { _, locale } from 'svelte-i18n';
	import { graphicsList } from '../../store/graphics.svelte';
	import Nav from '../../components/nav/nav.svelte';
	import Hero from '../../components/hero.svelte';
	import BlurredBackground from '../../components/blurred_background.svelte';
	import ResourceContainer from '../../components/resource_container/resource_container.svelte';
</script>

<svelte:head>
	<title>Benaiah | Resources</title>
</svelte:head>

<!-- Blurred Background -->
<BlurredBackground />

<div class="no-scrollbar relative h-screen overflow-scroll">
	<!-- Nav -->
	<Nav />

	<!-- HERO -->
	<Hero title={$_('page.resources.resources')} description={$_('page.resources.description')} />

	<!-- Content -->
	<div class="absolute z-50 flex w-screen items-center justify-center pb-60">
		<div class="flex w-[90%] md:w-3/5 lg:w-3/5 xl:w-3/5 2xl:w-3/5 flex-col justify-between">
			{#each graphicsList.themes as theme}
				<div class="pl-5 font-batangas text-xl text-black">
					— {$locale === 'am' ? theme.theme_am : theme.theme_en}
				</div>
				<div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 gap-y-7 pb-14 pt-3">
					{#each theme.subtopics as subtopic}
						<ResourceContainer {theme} {subtopic} />
					{/each}
				</div>
			{/each}
		</div>
	</div>
</div>
