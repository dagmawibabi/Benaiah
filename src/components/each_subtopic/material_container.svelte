<script lang="ts">
	import { locale } from 'svelte-i18n';
	let { title, icon, artistsList } = $props();
	import { FileText } from '@lucide/svelte';
</script>

<div class="group/material">
	<div
		class="flex items-center justify-between gap-1 rounded-full border border-transparent py-1 pl-2 pr-1 group-hover/material:border-zinc-400 group-hover/material:bg-zinc-200"
	>
		<div class="flex items-center gap-1">
			<FileText size={16} />
			<div>{title}</div>
		</div>
		<div class="flex gap-x-1">
			{#each artistsList as artist}
				<div
					class="h-7 w-7 overflow-clip rounded-full border border-zinc-400 shadow-lg transition-all hover:scale-110 group-hover/material:border-black"
				>
					<img
						src={artist.photo}
						alt={$locale == 'am' ? artist.fullname_am : artist.fullname_en}
						class="aspect-square"
					/>
				</div>
			{/each}
		</div>
	</div>
</div>
