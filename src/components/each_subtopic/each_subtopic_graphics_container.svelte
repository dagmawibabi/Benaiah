<script lang="ts">
	let { theme, subtopic }: { theme: any; subtopic: any } = $props();
	import { _, locale } from 'svelte-i18n';
	import EachSubtopicArtistsListContainer from './each_subtopic_artists_list_container.svelte';

	import { FileText } from '@lucide/svelte';
	import MaterialContainer from './material_container.svelte';
</script>

<a href={`graphics/${theme.theme_en}/${subtopic.title_en}`}>
	<div
		class="group w-72 overflow-clip rounded-lg border border-zinc-300 shadow-lg transition-all hover:border-black hover:shadow-xl"
	>
		<div class="grid grid-cols-1 bg-white px-1 py-2">
			<!-- Title -->
			<div class="pb-2 text-center font-semibold">
				{$locale === 'am' ? subtopic.title_am : subtopic.title_en}
			</div>

			<!-- Devotional -->
			<MaterialContainer
				title={'Devotional'}
				icon={FileText}
				artistsList={subtopic.devotional.devotional_author_en}
			/>

			<!-- Study Material -->
			<MaterialContainer
				title={'Study Material'}
				icon={FileText}
				artistsList={subtopic.study_material.study_material_author_en}
			/>

			<!-- Graphics -->
			<MaterialContainer title={'Graphics'} icon={FileText} artistsList={subtopic.artists} />
		</div>

		<!-- Cover Image -->
		<div class="aspect-square overflow-clip border-t border-zinc-300 group-hover:border-black">
			<img
				src={$locale === 'am' ? subtopic.cover_am : subtopic.cover_en}
				alt={subtopic.title_en}
				class="h-full w-full object-fill transition-all group-hover:scale-105"
			/>
		</div>
	</div>
</a>
