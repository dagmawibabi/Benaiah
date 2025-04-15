<script lang="ts">
	let { data } = $props();

	import { _, locale } from 'svelte-i18n';
	import BlurredBackground from '../../../../../../components/blurred_background.svelte';
</script>

<svelte:head>
	<title>{data.meta.title}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.meta.title} />
</svelte:head>

<!-- Blurred Background -->
<BlurredBackground reading_mode={true} />

<div class="no-scrollbar relative h-screen overflow-scroll">
	<!-- Content -->
	<div class="w-1/2 m-auto items-center mt-5 text-lg justify-center pb-96 pt-16 text-left text-black">
		<data.content />
	</div>
</div>

