<script lang="ts">
	import { locale } from 'svelte-i18n';
	let { artistsList } = $props();
</script>

<div class="relative z-50 -mb-6 flex items-center justify-center gap-x-2">
	{#each artistsList as artist}
		<div class="group/artist">
			<div
				class="h-8 w-8 overflow-clip rounded-full border border-zinc-400 shadow-lg transition-all hover:scale-150 group-hover:border-black"
			>
				<img
					src={artist.photo}
					alt={$locale == 'am' ? artist.fullname_am : artist.fullname_en}
					class="aspect-square"
				/>
			</div>
			<div class="absolute -ml-12 hidden pt-3 group-hover/artist:block">
				<div
					class="rounded-full border border-zinc-400 px-3 text-zinc-800 backdrop-blur-xl transition-all"
				>
					{$locale == 'am' ? artist.fullname_am : artist.fullname_en}
				</div>
			</div>
		</div>
	{/each}
</div>
