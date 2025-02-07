<script lang="ts">
	import blackLogo from '$lib/assets/logo/BlackLogo.png';
	import whiteLogo from '$lib/assets/logo/WhiteLogo.png';
	import { _, locale } from 'svelte-i18n';
	import EachNavItem from './each_nav_item.svelte';

	// Move to state
	function changeLanguage() {
		if ($locale === 'am') {
			locale.set('en');
		} else {
			locale.set('am');
		}
	}
</script>

<div class="absolute left-0 right-0 top-0 z-50 flex items-center justify-between px-2">
	<!-- LOGO -->
	<div class="pb-2 pl-3 pt-1">
		<a href="/">
			<img src={blackLogo} alt="logo" class="object-fit w-28" />
		</a>
	</div>

	<!-- NAV -->
	<div class="-ml-20 flex gap-x-1">
		<EachNavItem name="Home" link="/" />
		<EachNavItem name="Articles" link="/articles" />
		<EachNavItem name="Graphics" link="/graphics" />
		<EachNavItem name="Team" link="/articles" />
		<EachNavItem name="Mission" link="/articles" />
		<EachNavItem name="Contact Us" link="/articles" />
	</div>

	<!-- LANG -->
	<!-- svelte-ignore a11y_no_static_element_interactions -->
	<!-- svelte-ignore a11y_click_events_have_key_events -->
	<div
		class="w-16 cursor-pointer rounded-full border border-zinc-700 pb-1 text-center backdrop-blur-xl hover:bg-zinc-900 hover:text-white"
		onclick={() => changeLanguage()}
	>
		{#if $locale === 'am'}
			en
		{:else}
			am
		{/if}
	</div>
</div>
