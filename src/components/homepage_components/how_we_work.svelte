<script>
	import { _, locale } from 'svelte-i18n';

	import EachWork from './each_work.svelte';
	import SectionHeader from './section_header.svelte';
	import research from '$lib/assets/illustrations/research.png';
	import writer from '$lib/assets/illustrations/writer.png';
	import design from '$lib/assets/illustrations/design.png';

	import theme from '$lib/assets/illustrations/ThemeTopic/Theme.jpg';
	import themeAmharic from '$lib/assets/illustrations/ThemeTopic/ThemeAmharic.jpg';

	import love from '$lib/assets/illustrations/ThemeTopic/Love.jpg';
	import loveAmharic from '$lib/assets/illustrations/ThemeTopic/LoveAmharic.jpg';
	import hope from '$lib/assets/illustrations/ThemeTopic/Hope.jpg';
	import hopeAmharic from '$lib/assets/illustrations/ThemeTopic/HopeAmharic.jpg';
	import faith from '$lib/assets/illustrations/ThemeTopic/Faith.jpg';
	import faithAmharic from '$lib/assets/illustrations/ThemeTopic/FaithAmharic.jpg';
</script>

<div class="pb-72 pt-24 md:pt-0 lg:pt-0 xl:pt-0 2xl:pt-0">
	<SectionHeader
		title="How We Work"
		description="This is how we produce the content you see on our website and across our social media. Our work process is pretty straightforward and simple."
	/>

	<div class="grid grid-cols-1 gap-4 md:flex lg:flex xl:flex 2xl:flex">
		<EachWork
			image={research}
			title="Study Materials"
			description="We first start by creating study materials under a certain theme."
		/>
		<EachWork
			image={writer}
			title="Devotionals"
			description="We first start by creating study materials under a certain theme."
		/>
		<EachWork
			image={design}
			title="Graphics"
			description="We first start by creating study materials under a certain theme."
		/>
	</div>

	<div
		class="grid h-fit w-full grid-cols-2 gap-5 p-0 pt-4 md:flex md:p-5 lg:flex lg:p-5 xl:flex xl:p-5 2xl:flex 2xl:p-5"
	>
		<div class="group relative aspect-square w-full md:w-1/2 lg:w-1/2 xl:w-1/2 2xl:w-1/2">
			<div
				class="absolute m-2 h-full w-full rounded-lg bg-zinc-500 transition-all group-hover:bg-zinc-600"
			></div>
			<img
				src={$locale === 'am' ? themeAmharic : theme}
				alt="research"
				class="absolute h-full w-full rounded-lg object-cover"
			/>
		</div>
		<div class="group relative aspect-square w-full md:w-1/2 lg:w-1/2 xl:w-1/2 2xl:w-1/2">
			<div
				class="absolute m-2 h-full w-full rounded-lg bg-zinc-500 transition-all group-hover:bg-zinc-600"
			></div>
			<img
				src={$locale === 'am' ? loveAmharic : love}
				alt="research"
				class="absolute aspect-square h-full w-full rounded-lg object-cover"
			/>
		</div>
		<div class="group relative aspect-square w-full md:w-1/2 lg:w-1/2 xl:w-1/2 2xl:w-1/2">
			<div
				class="absolute m-2 h-full w-full rounded-lg bg-zinc-500 transition-all group-hover:bg-zinc-600"
			></div>
			<img
				src={$locale === 'am' ? faithAmharic : faith}
				alt="research"
				class="absolute h-full w-full rounded-lg object-cover"
			/>
		</div>
		<div class="group relative aspect-square w-full md:w-1/2 lg:w-1/2 xl:w-1/2 2xl:w-1/2">
			<div
				class="absolute m-2 h-full w-full rounded-lg bg-zinc-500 transition-all group-hover:bg-zinc-600"
			></div>
			<img
				src={$locale === 'am' ? hopeAmharic : hope}
				alt="research"
				class="absolute aspect-square h-full w-full rounded-lg object-cover"
			/>
		</div>
	</div>
</div>
