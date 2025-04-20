<script>
	import EachWork from "./each_work.svelte";
	import SectionHeader from "./section_header.svelte";
	import research from '$lib/assets/illustrations/research.png';
	import writer from '$lib/assets/illustrations/writer.png';
	import design from '$lib/assets/illustrations/design.png';
</script>

<div class="h-screen">
    <SectionHeader
			title="About Us" 
			description="This is how we produce the content you see on our website and across our social media. Our work process is pretty straightforward and simple."
    />
    <div class="flex gap-x-4"> 
        <EachWork image={research} title="Study Materials" description="We first start by creating study materials under a certain theme."/>
        <EachWork image={writer} title="Devotionals" description="We first start by creating study materials under a certain theme."/>
        <EachWork image={design} title="Graphics" description="We first start by creating study materials under a certain theme."/>
    </div>
</div>