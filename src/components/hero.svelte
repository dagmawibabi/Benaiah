<script>
	let { title, description } = $props();
</script>

<!-- HEADER TEXT -->
<div class="flex w-full items-center justify-center pb-28 pt-32">
	<div class="flex w-1/2 flex-col items-center gap-y-5 text-center text-black">
		<div class="pb-3 font-batangas text-4xl font-bold">{title}</div>
		<div>
			<p class="text-shadow font-batangas text-2xl">
				{description}
			</p>
		</div>
	</div>
</div>
