<script>
	import hero from '$lib/assets/banners/hero (7).png'; // 6 12 15 31
	let { title, description } = $props();
</script>

<div class="relative z-0 flex h-[75vh] items-center justify-center overflow-clip">
	<!-- BANNER -->
	<div class="absolute flex w-screen items-center blur-2xl">
		<img src={hero} alt="logo" class="h-full w-full object-fill" />
	</div>

	<!-- HEADER TEXT -->
	<div class="absolute flex h-full w-full items-center justify-center bg-zinc-950 bg-opacity-0">
		<div class="flex w-1/2 flex-col items-center gap-y-5 pb-36 text-center text-black">
			<div class="font-batangas pb-3 text-4xl font-bold">{title}</div>
			<div>
				<p class="text-shadow font-batangas text-2xl">
					{description}
				</p>
			</div>
		</div>
	</div>
</div>
