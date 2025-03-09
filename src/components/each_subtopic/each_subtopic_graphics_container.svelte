<script lang="ts">
	let { theme, subtopic }: { theme: any; subtopic: any } = $props();
	import { _, locale } from 'svelte-i18n';
	import EachSubtopicArtistsListContainer from './each_subtopic_artists_list_container.svelte';
</script>

<a href={`graphics/${theme.theme_en}/${subtopic.title_en}`}>
	<div
		class="group w-72 overflow-clip rounded border border-zinc-300 shadow-lg transition-all hover:border-black hover:shadow-xl"
	>
		<div class="bg-white px-3 py-1 pb-2">
			<div class="pb-2 text-center font-semibold">
				{$locale === 'am' ? subtopic.title_am : subtopic.title_en}
			</div>
			<EachSubtopicArtistsListContainer artistsList={subtopic.artists} />
		</div>

		<!-- Cover Image -->
		<div class="aspect-square overflow-clip border-t border-zinc-300 group-hover:border-black">
			<img
				src={$locale === 'am' ? subtopic.cover_am : subtopic.cover_en}
				alt={subtopic.title}
				class="h-full w-full object-fill transition-all group-hover:scale-105"
			/>
		</div>
	</div>
</a>
