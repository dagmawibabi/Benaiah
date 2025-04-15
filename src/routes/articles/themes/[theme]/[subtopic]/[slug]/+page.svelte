<script lang="ts">
	let { data } = $props();

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
	<div class="w-[90%] md:w-1/2 lg:w-1/2 xl:w-1/2 2xl:w-1/2 m-auto items-center text-base md:text-lg lg:text-lg xl:text-lg 2xl:text-lg justify-center pb-96 pt-8 text-left text-black">
		<data.content />
	</div>
</div>

