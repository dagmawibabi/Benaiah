<script lang="ts">
	import blackLogo from '$lib/assets/logo/BlackLogo.png';
	import whiteLogo from '$lib/assets/logo/WhiteLogo.png';
	import { _, locale } from 'svelte-i18n';
	import EachNavItem from './each_nav_item.svelte';
	import BlurredBackground from '../blurred_background.svelte';

	// Move to state
	function changeLanguage() {
		if ($locale === 'am') {
			locale.set('en');
		} else {
			locale.set('am');
		}
	}
</script>

<div
	class="sticky left-0 right-0 top-0 z-[1000] flex items-center justify-between px-2 pt-2 backdrop-blur-sm"
>
	<!-- LOGO -->
	<div class="hidden pb-2 pl-3 pt-1 md:block lg:block xl:block 2xl:block">
		<a href="/">
			<img src={blackLogo} alt="logo" class="object-fit w-28" />
		</a>
	</div>

	<!-- NAV -->
	<div
		class="m-auto flex gap-x-1 py-2 md:m-0 md:-ml-20 lg:m-0 lg:-ml-20 xl:m-0 xl:-ml-20 2xl:m-0 2xl:-ml-20"
	>
		<EachNavItem name={$_('page.navigation.home')} link="/" />
		<div class="hidden md:flex lg:flex xl:flex 2xl:flex">
			<EachNavItem name={$_('page.navigation.mission')} link="/homepage#mission" />
		</div>
		<EachNavItem name={$_('page.navigation.resources')} link="/resources" />
		<EachNavItem name={$_('page.navigation.teams')} link="/team" />

		<div class="hidden md:flex lg:flex xl:flex 2xl:flex">
			<EachNavItem name={$_('page.navigation.contact')} link="/homepage#contactus" />
		</div>
	</div>

	<!-- LANG -->
	<!-- svelte-ignore a11y_no_static_element_interactions -->
	<!-- svelte-ignore a11y_click_events_have_key_events -->
	<div
		class="block w-16 cursor-pointer rounded-full border border-zinc-700 text-center backdrop-blur-xl hover:bg-zinc-900 hover:text-white md:block lg:block xl:block 2xl:block"
		onclick={() => changeLanguage()}
	>
		{#if $locale === 'am'}
			EN
		{:else}
			አማ
		{/if}
	</div>
</div>
