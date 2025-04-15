<script lang="ts">
	import hero from '$lib/assets/banners/hero (7).png'; // 6 12 15 31
	let { reading_mode = false } = $props();
</script>

<div class={reading_mode ? "blur-3xl opacity-90" : "blur-none opacity-100"}>
	<div class="absolute flex w-screen h-screen items-center blur-xl ">
		<img src={hero} alt="logo" class="h-full w-full object-fill" />
	</div>
</div>
