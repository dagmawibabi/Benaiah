<script lang="ts">
	import type { Component } from 'svelte';
	import type { TeamMember } from '$lib/types';
	import { useI18n } from '$lib/i18n';
	const { locale } = useI18n();
	let {
		title,
		icon: Icon,
		artistsList = [],
		link
	}: {
		title: string;
		icon: Component<{ size?: number }>;
		artistsList?: TeamMember[];
		link?: string;
	} = $props();
</script>

<svelte:element this={link ? 'a' : 'div'} href={link}>
	<div class="group/material px-1">
		<div
			class="flex items-center justify-between gap-1 rounded-bl-xl rounded-br-2xl rounded-tl-xl rounded-tr-2xl border border-transparent py-1 pl-1 pr-1 group-hover/material:border-zinc-400 group-hover/material:bg-zinc-200"
		>
			<!-- Title -->
			<div class="flex items-center gap-1">
				<Icon size={16} />
				<div class={$locale == 'am' ? 'text-sm' : 'text-sm font-semibold'}>{title}</div>
			</div>

			<!-- Authors/Artists -->
			<div class="flex gap-x-1">
				{#each artistsList as artist}
					<div
						class="h-7 w-7 overflow-clip rounded-full border border-zinc-400 shadow-lg transition-all hover:scale-110 group-hover/material:border-black"
					>
						<img
							src={artist.photo}
							alt={$locale == 'am' ? artist.fullname_am : artist.fullname_en}
							loading="lazy"
							class="aspect-square object-cover"
						/>
					</div>
				{/each}
			</div>
		</div>
	</div>
</svelte:element>
