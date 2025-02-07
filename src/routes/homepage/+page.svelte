<script lang="ts">
	import blackLogo from '$lib/assets/logo/BlackLogo.png';
	import whiteLogo from '$lib/assets/logo/WhiteLogo.png';
	import hero from '$lib/assets/banners/hero (7).png'; // 6 12 15 31

	import Nav from '../../components/nav/nav.svelte';

	import { _, locale } from 'svelte-i18n';
</script>

<div class="no-scrollbar relative">
	<!-- NAV -->
	<Nav />

	<!-- HERO -->
	<div class="relative flex h-[100vh] items-center justify-center overflow-clip">
		<!-- BANNER -->
		<div class="absolute flex w-screen items-center blur-2xl">
			<img src={hero} alt="logo" class="h-full w-full object-fill" />
		</div>

		<!-- HEADER TEXT -->
		<div
			class="absolute flex h-full w-full items-center justify-center bg-zinc-950 bg-opacity-0 pb-20"
		>
			<div class="flex w-1/2 flex-col items-center text-center">
				<img src={blackLogo} alt="logo" class="object-fit w-80" />
				<div class="pb-14 pt-6">
					<p class="text-shadow font-batangas text-xl">
						Our team name will be Benaiah which means God has Created or Built. We think it goes
						well with us and our dream. Cause God is a creator and a builder, and we want God to
						build and create through us.
					</p>
				</div>
				<div class="flex gap-x-4">
					<!-- svelte-ignore a11y_click_events_have_key_events -->
					<!-- svelte-ignore a11y_no_static_element_interactions -->
					<div
						class={$locale === 'am'
							? 'cursor-pointer rounded-full bg-zinc-900 px-6 py-2 font-semibold text-white backdrop-blur-xl hover:bg-zinc-900 hover:text-white'
							: 'cursor-pointer rounded-full bg-white px-6 py-2 font-semibold text-black backdrop-blur-xl hover:bg-emerald-500 hover:text-black'}
						onclick={() => locale.set('am')}
					>
						Amharic Version
					</div>
					<!-- svelte-ignore a11y_click_events_have_key_events -->
					<!-- svelte-ignore a11y_no_static_element_interactions -->
					<div
						class={$locale === 'am'
							? 'cursor-pointer rounded-full bg-white px-6 py-2 font-semibold text-black backdrop-blur-xl hover:bg-emerald-500 hover:text-black'
							: 'cursor-pointer rounded-full bg-zinc-900 px-6 py-2 font-semibold text-white backdrop-blur-xl hover:bg-zinc-900 hover:text-white'}
						onclick={() => locale.set('en')}
					>
						English Version
					</div>
				</div>
			</div>
		</div>
	</div>

	<!--  -->
	<div class="h-screen w-screen"></div>
</div>

<!-- <div class="flex h-screen w-screen flex-col items-center justify-center bg-black pb-48">
	<img src={whiteLogo} alt="logo" class="object-fit w-56" />

	<div class="pt-5 font-mono text-white">{$_('page.home.subtitle')}</div>

	<div class="text-white">
		<button onclick={() => locale.set('am')}> am </button>
		<button onclick={() => locale.set('en')}> en </button>
	</div>
</div> -->
