<script>
	import { _, locale } from 'svelte-i18n';
	import { teamCategories } from '../../store/team_members.svelte';
	import Nav from '../../components/nav/nav.svelte';
	import Hero from '../../components/hero.svelte';
	import BlurredBackground from '../../components/blurred_background.svelte';
	import TeamCategoryContainer from '../../components/team_category_container.svelte';
</script>

<svelte:head>
	<title>Benaiah | Teams</title>
</svelte:head>

<!-- Blurred Background -->
<BlurredBackground />

<div class="no-scrollbar relative h-screen overflow-scroll">
	<!-- Nav -->
	<Nav />

	<!-- HERO -->
	<Hero title={$_('page.teams.teams')} description={$_('page.teams.description')} />

	<!-- Content -->
	<div class="absolute z-50 flex w-screen items-center justify-center pb-60">
		<div class="flex w-[90%] md:w-[95%] lg:w-[85%] xl:w-3/5 2xl:w-3/5 flex-col justify-between">
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
