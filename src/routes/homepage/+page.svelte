<script lang="ts">
	import { _, locale } from 'svelte-i18n';
	import Nav from '../../components/nav/nav.svelte';
	import blackLogo from '$lib/assets/logo/BlackLogo.png';
	import BlurredBackground from '../../components/blurred_background.svelte';
</script>

<!-- Blurred Background -->
<BlurredBackground />

<div class="no-scrollbar relative">
	<!-- NAV -->
	<Nav />

	<!-- HERO -->
	<div class="relative flex h-[100vh] items-center justify-center overflow-clip">
		<!-- HEADER TEXT -->
		<div
			class="absolute flex h-full w-full items-center justify-center bg-zinc-950 bg-opacity-0 pb-20"
		>
			<div class="flex w-[90%] md:w-1/2 lg:w-1/2 xl:w-1/2 2xl:w-1/2 flex-col items-center text-center">
				<img src={blackLogo} alt="logo" class="object-fit w-52 md:w-80 lg:w-80 xl:w-80 2xl:w-80" />
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
							? 'cursor-pointer rounded-full bg-zinc-900 px-4 md:px-6 lg:px-6 xl:px-6 2xl:px-6 py-2 font-semibold text-white backdrop-blur-xl hover:bg-zinc-900 hover:text-white'
							: 'cursor-pointer rounded-full bg-white px-4 md:px-6 lg:px-6 xl:px-6 2xl:px-6 py-2 font-semibold text-black backdrop-blur-xl hover:bg-emerald-500 hover:text-black'}
						onclick={() => locale.set('am')}
					>
						Amharic Version
					</div>
					<!-- svelte-ignore a11y_click_events_have_key_events -->
					<!-- svelte-ignore a11y_no_static_element_interactions -->
					<div
						class={$locale === 'am'
							? 'cursor-pointer rounded-full bg-white px-4 md:px-6 lg:px-6 xl:px-6 2xl:px-6 py-2 font-semibold text-black backdrop-blur-xl hover:bg-emerald-500 hover:text-black'
							: 'cursor-pointer rounded-full bg-zinc-900 px-4 md:px-6 lg:px-6 xl:px-6 2xl:px-6 py-2 font-semibold text-white backdrop-blur-xl hover:bg-zinc-900 hover:text-white'}
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
