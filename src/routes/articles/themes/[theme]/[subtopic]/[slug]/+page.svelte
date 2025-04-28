<script lang="ts">
	import { _, locale } from 'svelte-i18n';
	import BlurredBackground from '../../../../../../components/blurred_background.svelte';
	import FeedbackLink from '../../../../../../components/article_components/feedback_link.svelte';

	let { data } = $props();

</script>

<svelte:head>
	<title>{data.meta.title}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.meta.title} />
</svelte:head>

<!-- Blurred Background -->
<BlurredBackground reading_mode={true} />

<div class="no-scrollbar relative h-screen overflow-scroll pb-2">
	<!-- Content -->
	<div class="w-[90%] md:w-1/2 lg:w-1/2 xl:w-1/2 2xl:w-1/2 m-auto items-center text-base md:text-lg lg:text-lg xl:text-lg 2xl:text-lg justify-center pt-8 text-left text-black">
		<data.content />

		<FeedbackLink />
	</div>
</div>

