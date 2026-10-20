<script lang="ts">
	import blackLogo from '$lib/assets/logo/BlackLogo.png';
	import { useI18n } from '$lib/i18n';
	const { _, locale, setLanguage } = useI18n();
	import EachNavItem from './each_nav_item.svelte';
</script>

<div
	class="sticky left-0 right-0 top-0 z-[1000] flex items-center justify-between px-2 pt-2 backdrop-blur-sm"
>
	<!-- LOGO -->
	<div class="hidden pb-2 pl-3 pt-1 md:block">
		<a href="/">
			<img src={blackLogo} alt="Benaiah" class="object-fit w-28" />
		</a>
	</div>

	<!-- NAV -->
	<nav class="m-auto flex gap-x-1 py-2 md:m-0 md:-ml-20">
		<EachNavItem name={$_('page.navigation.home')} link="/" />
		<div class="hidden md:flex">
			<EachNavItem name={$_('page.navigation.mission')} link="/#mission" />
		</div>
		<EachNavItem name={$_('page.navigation.resources')} link="/resources" />
		<EachNavItem name={$_('page.navigation.teams')} link="/team" />
		<EachNavItem name={$_('page.navigation.app')} link="/app" />

		<div class="hidden md:flex">
			<EachNavItem name={$_('page.navigation.contact')} link="/#contactus" />
		</div>
	</nav>

	<!-- LANG -->
	<button
		type="button"
		class="block w-16 cursor-pointer rounded-full border border-zinc-700 text-center backdrop-blur-xl hover:bg-zinc-900 hover:text-white"
		aria-label={$locale === 'am' ? 'Switch to English' : 'ወደ አማርኛ ቀይር'}
		onclick={() => setLanguage($locale === 'am' ? 'en' : 'am')}
	>
		{#if $locale === 'am'}
			EN
		{:else}
			አማ
		{/if}
	</button>
</div>
