<script lang="ts">
	let {
		title,
		description,
		cover_en,
		cover_am,
		square_en,
		square_am,
		story_en,
		story_am,
		artists
	} = $props();
</script>

<div class="w-64 overflow-clip rounded border border-zinc-500 bg-white">
	<div class="px-3 py-1 pb-2">
		<div class="pb-1 font-semibold">{title}</div>
		<div>
			<p class="italic">
				{description}
			</p>
		</div>
	</div>
	<div class="relative z-50 -mb-4 flex items-center justify-center gap-x-2">
		{#each artists as artist}
			<div class="h-8 w-8 overflow-clip rounded-full border border-black">
				<img src={artist} alt={title} class="aspect-square" />
			</div>
		{/each}
	</div>
	<div>
		<img src={cover_en} alt={title} class="h-full w-full object-fill" />
	</div>
</div>
