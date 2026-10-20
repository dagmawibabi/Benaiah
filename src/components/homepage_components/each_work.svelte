<script>
	let { image, title, description } = $props();
</script>

<div
	class="flex flex-col items-center rounded-lg border border-zinc-500 bg-white bg-opacity-15 p-5 text-center backdrop-blur-xl hover:bg-opacity-20"
>
	<div class="h-44 w-44">
		<img src={image} alt="illustration" class="h-full w-full object-cover" />
	</div>
	<div class="pb-2 pt-5 text-xl font-semibold">
		{title}
	</div>
	<div>
		{description}
	</div>
</div>
