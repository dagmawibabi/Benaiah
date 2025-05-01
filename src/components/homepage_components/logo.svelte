<script>
	import { _, locale } from 'svelte-i18n';

	import SectionHeader from './section_header.svelte';
	import BenaiahWhite from '$lib/assets/illustrations/Logo/BenaiahWhite.jpg';
	import BenaiahBlack from '$lib/assets/illustrations/Logo/BenaiahBlack.jpg';
	import logo1 from '$lib/assets/illustrations/Logo/1.jpg';
	import logo2 from '$lib/assets/illustrations/Logo/2.jpg';
	import logo3 from '$lib/assets/illustrations/Logo/3.jpg';
	import logo4 from '$lib/assets/illustrations/Logo/4.jpg';
</script>

<div class="h-fit pb-10">
	<SectionHeader title={$_('page.logo.title')} description={$_('page.logo.description')} />
	<div class="grid grid-cols-2 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3">
		<div class="h-full w-full overflow-clip rounded-2xl border border-zinc-500">
			<img
				src={logo1}
				alt="Benaiah Black"
				class="h-full w-full rounded-2xl object-cover transition-all hover:scale-105"
			/>
		</div>
		<div class="h-full w-full overflow-clip rounded-2xl border border-zinc-500">
			<img
				src={logo2}
				alt="Benaiah White"
				class="h-full w-full rounded-2xl object-cover transition-all hover:scale-105"
			/>
		</div>
		<div class="h-full w-full overflow-clip rounded-2xl border border-zinc-500">
			<img
				src={logo3}
				alt="Benaiah Black"
				class="h-full w-full rounded-2xl object-cover transition-all hover:scale-105"
			/>
		</div>
		<div class="h-full w-full overflow-clip rounded-2xl border border-zinc-500">
			<img
				src={logo4}
				alt="Benaiah White"
				class="h-full w-full rounded-2xl object-cover transition-all hover:scale-105"
			/>
		</div>
		<div class="h-full w-full overflow-clip rounded-2xl border border-zinc-500">
			<img
				src={BenaiahWhite}
				alt="Benaiah White"
				class="h-full w-full rounded-2xl object-cover transition-all hover:scale-105"
			/>
		</div>
		<div class="h-full w-full overflow-clip rounded-2xl border border-zinc-500">
			<img
				src={BenaiahBlack}
				alt="Benaiah Black"
				class="h-full w-full rounded-2xl object-cover transition-all hover:scale-105"
			/>
		</div>
	</div>
</div>
