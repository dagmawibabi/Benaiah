<script lang="ts">
	import hero from '$lib/assets/banners/hero (7).png';
	let { reading_mode = false } = $props();
</script>

<div class="background" class:reading={reading_mode}><img src={hero} alt="" /></div>

<style>
	.background {
		position: fixed;
		inset: 0;
		z-index: -1;
		pointer-events: none;
		overflow: hidden;
	}
	.background img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		filter: blur(24px);
	}
	.reading {
		opacity: 0.25;
	}
</style>
