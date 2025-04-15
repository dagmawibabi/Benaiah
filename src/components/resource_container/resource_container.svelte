<script lang="ts">
	let { theme, subtopic }: { theme: any; subtopic: any } = $props();
	import { _, locale } from 'svelte-i18n';

	import { BookText, FileText, Image } from '@lucide/svelte';
	import MaterialContainer from './material_container.svelte';
	import Divider from './divider.svelte';
</script>

<div
	class="group w-72 overflow-clip rounded-xl border border-zinc-300 shadow-lg transition-all hover:border-black hover:shadow-xl"
>
	<div class="grid grid-cols-1 bg-white px-1 py-1">
		<!-- Title -->
		<div class="pb-1 text-center font-semibold">
			{$locale === 'am' ? subtopic.title_am : subtopic.title_en}
		</div>

		<!-- Divider -->
		<Divider />

		<!-- Devotional -->
		<MaterialContainer
			title={'Devotional'}
			icon={FileText}
			artistsList={subtopic.devotional.devotional_author_en}
			link={$locale === 'am' ? subtopic.devotional.devotional_am : subtopic.devotional.devotional_en}
		/>

		<!-- Study Material -->
		<MaterialContainer
			title={'Study Material'}
			icon={BookText}
			artistsList={subtopic.study_material.study_material_author_en}
			link={$locale === 'am' ? subtopic.study_material.study_material_am : subtopic.study_material.study_material_en}
		/>

		<!-- Divider -->
		<Divider />

		<!-- Graphics -->
		<MaterialContainer
			title={'Graphics'}
			icon={Image}
			artistsList={subtopic.artists}
			link={`graphics/${theme.theme_en}/${subtopic.title_en}`}
		/>
	</div>

	<!-- Cover Image -->
	<a href={`graphics/${theme.theme_en}/${subtopic.title_en}`}>
		<div class="aspect-square overflow-clip border-t border-zinc-300 group-hover:border-black">
			<img
				src={$locale === 'am' ? subtopic.cover_am : subtopic.cover_en}
				alt={subtopic.title_en}
				class="h-full w-full object-fill transition-all group-hover:scale-105"
			/>
		</div>
	</a>
</div>
