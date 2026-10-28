<script>
	import Seo from '../../components/seo.svelte';
	import { useI18n } from '$lib/i18n';
	const { _, locale } = useI18n();
	import { teamCategories } from '../../store/team_members.svelte';
	import Nav from '../../components/nav/nav.svelte';
	import Hero from '../../components/hero.svelte';
	import BlurredBackground from '../../components/blurred_background.svelte';
	import TeamCategoryContainer from '../../components/team_category_container.svelte';
</script>

<Seo title={`${$_('page.teams.teams')} · Benaiah`} description={$_('page.teams.description')} />

<!-- Blurred Background -->
<BlurredBackground />

<div class="no-scrollbar relative min-h-screen">
	<!-- Nav -->
	<Nav />

	<!-- HERO -->
	<Hero title={$_('page.teams.teams')} description={$_('page.teams.description')} />

	<!-- Content -->
	<div class="relative z-50 flex w-full items-center justify-center pb-20">
		<div class="flex w-[90%] flex-col justify-between md:w-[95%] lg:w-[85%] xl:w-3/5 2xl:w-3/5">
			<TeamCategoryContainer title={$_('page.teams.authors')} category={teamCategories.authors} />
			<TeamCategoryContainer
				title={$_('page.teams.graphicsDesigners')}
				category={teamCategories.graphicsDesigners}
			/>
			<TeamCategoryContainer
				title={$_('page.teams.narrators')}
				category={teamCategories.narrators}
			/>
			<TeamCategoryContainer
				title={$_('page.teams.softwareDevelopers')}
				category={teamCategories.softwareDevelopers}
			/>
		</div>
	</div>
</div>
