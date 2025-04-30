<script>
    import { _, locale } from 'svelte-i18n';

	import EachWork from "./each_work.svelte";
	import SectionHeader from "./section_header.svelte";
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

<div class="pb-72">
    <SectionHeader
        title="How We Work" 
        description="This is how we produce the content you see on our website and across our social media. Our work process is pretty straightforward and simple."
    />

    <div class="flex gap-x-4"> 
        <EachWork image={research} title="Study Materials" description="We first start by creating study materials under a certain theme."/>
        <EachWork image={writer} title="Devotionals" description="We first start by creating study materials under a certain theme."/>
        <EachWork image={design} title="Graphics" description="We first start by creating study materials under a certain theme."/>
    </div>

    <div class="flex gap-5 w-full h-fit p-5">
        <div class="relative w-1/2 group aspect-square">
            <div class="w-full h-full absolute rounded-lg bg-zinc-500 m-2 group-hover:bg-zinc-600 transition-all"></div>
            <img src={$locale === "am" ? themeAmharic : theme} alt="research" class="rounded-lg absolute w-full h-full object-cover" />
        </div> 
        <div class="relative w-1/2 group aspect-square">
            <div class="w-full h-full absolute rounded-lg bg-zinc-500 m-2 group-hover:bg-zinc-600 transition-all"></div>
            <img src={$locale === "am" ? loveAmharic : love} alt="research" class="rounded-lg aspect-square absolute w-full h-full object-cover" />
        </div> 
        <div class="relative w-1/2 group aspect-square">
            <div class="w-full h-full absolute rounded-lg bg-zinc-500 m-2 group-hover:bg-zinc-600 transition-all"></div>
            <img src={$locale === "am" ? faithAmharic : faith} alt="research" class="rounded-lg absolute w-full h-full object-cover" />
        </div> 
        <div class="relative w-1/2 group aspect-square">
            <div class="w-full h-full absolute rounded-lg bg-zinc-500 m-2 group-hover:bg-zinc-600 transition-all"></div>
            <img src={$locale === "am" ? hopeAmharic : hope} alt="research" class="rounded-lg aspect-square absolute w-full h-full object-cover" />
        </div>
    </div>
</div>