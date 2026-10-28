<script>
	import Seo from '../../components/seo.svelte';
	import { useI18n } from '$lib/i18n';
	const { _, locale } = useI18n();
	import { themeList } from '../../store/theme_list.svelte';
	import Nav from '../../components/nav/nav.svelte';
	import Hero from '../../components/hero.svelte';
	import BlurredBackground from '../../components/blurred_background.svelte';
	import ResourceContainer from '../../components/resource_container/resource_container.svelte';
</script>

<Seo
	title={`${$_('page.resources.resources')} · Benaiah`}
	description={$_('page.resources.description')}
/>

<!-- Blurred Background -->
<BlurredBackground />

<div class="no-scrollbar relative min-h-screen">
	<!-- Nav -->
	<Nav />

	<!-- HERO -->
	<Hero title={$_('page.resources.resources')} description={$_('page.resources.description')} />

	<!-- Content -->
	<div class="relative z-50 flex w-full items-center justify-center pb-20">
		<div class="flex w-[90%] flex-col justify-between md:w-[95%] lg:w-[85%] xl:w-3/5 2xl:w-3/5">
			{#each themeList.themes as theme}
				<div class="pl-5 font-batangas text-xl text-black">
					— {$locale === 'am' ? theme.theme_am : theme.theme_en}
				</div>
				<div
					class="grid grid-cols-1 gap-y-7 pb-14 pt-3 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3"
				>
					{#each theme.subtopics as subtopic}
						<ResourceContainer {theme} {subtopic} published={theme.published} />
					{/each}
				</div>
			{/each}
		</div>
	</div>
</div>
