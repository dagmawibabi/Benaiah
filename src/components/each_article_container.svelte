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

<div
	class="group w-72 overflow-clip rounded border border-zinc-300 shadow-lg transition-all hover:border-black hover:shadow-xl"
>
	<div class="bg-white px-3 py-1 pb-2">
		<div class="pb-1 font-semibold">{title}</div>
		<div class="pb-4">
			<p class="leading-tight text-zinc-700 group-hover:text-black">
				{description}
			</p>
		</div>
		<div class="relative z-50 -mb-6 flex items-center justify-center gap-x-2">
			{#each artists as artist}
				<div class="group/artist">
					<div
						class="h-8 w-8 overflow-clip rounded-full border border-zinc-400 shadow-lg transition-all hover:scale-150 group-hover:border-black"
					>
						<img src={artist.photo} alt={artist.fullname} class="aspect-square" />
					</div>
					<div class="absolute -ml-12 hidden pt-3 group-hover/artist:block">
						<div
							class="rounded-full border border-zinc-400 px-3 text-zinc-800 backdrop-blur-xl transition-all"
						>
							{artist.fullname}
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
	<div class="aspect-square overflow-clip border-t border-zinc-300 group-hover:border-black">
		<img
			src={cover_en}
			alt={title}
			class="h-full w-full object-fill transition-all group-hover:scale-105"
		/>
	</div>
</div>
