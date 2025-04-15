<script>
	let { title, description } = $props();
</script>

<!-- HEADER TEXT -->
<div class="flex w-full items-center justify-center pb-12 md:pb-28 lg:pb-28 xl:pb-28 2xl:pb-28 pt-12 md:pt-32 lg:pt-32 xl:pt-32 2xl:pt-32">
	<div class="flex w-[90%] md:w-1/2 lg:w-1/2 xl:w-1/2 2xl:w-1/2 flex-col items-center gap-y-5 text-center text-black">
		<div class="font-batangas text-2xl md:text-4xl lg:text-4xl xl:text-4xl 2xl:text-4xl font-bold">{title}</div>
		<div>
			<p class="text-shadow font-batangas text-lg md:text-2xl lg:text-2xl xl:text-2xl 2xl:text-2xl">
				{description}
			</p>
		</div>
	</div>
</div>
