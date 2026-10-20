<script lang="ts">
	import type { Subtopic, Theme } from '$lib/types';
	import { articleHref, graphicsHref } from '$lib/themes';
	let { theme, subtopic, published }: { theme: Theme; subtopic: Subtopic; published: boolean } =
		$props();
	import { useI18n } from '$lib/i18n';
	const { locale } = useI18n();

	import { BookText, FileText, Image } from '@lucide/svelte';
	import MaterialContainer from './material_container.svelte';
	import Divider from './divider.svelte';
</script>

<div
	class="group w-full overflow-clip rounded-xl border border-zinc-300 shadow-lg transition-all hover:border-black hover:shadow-xl md:w-72 lg:w-72 xl:w-72 2xl:w-72"
>
	<div class="relative">
		{#if !published}
			<div class="absolute h-full w-full bg-white">
				<div class="flex flex-col items-center justify-center pt-14 text-lg text-black">
					<div class="font-batangas">
						{$locale === 'am' ? subtopic.title_am : subtopic.title_en}
					</div>
					<div class="text-sm">
						{$locale === 'am' ? 'በቅርብ ቀን' : 'Coming Soon'}
					</div>
				</div>
			</div>
		{/if}

		<div class="grid grid-cols-1 bg-white py-1" inert={!published}>
			<!-- Title -->
			<div class="pb-1 text-center font-semibold">
				{$locale === 'am' ? subtopic.title_am : subtopic.title_en}
			</div>

			<!-- Divider -->
			<Divider />

			<!-- Devotional -->
			<MaterialContainer
				title={$locale === 'am' ? 'የጥሞና ጽሑፍ' : 'Devotional'}
				icon={FileText}
				artistsList={$locale === 'am'
					? subtopic.devotional.devotional_author_am
					: subtopic.devotional.devotional_author_en}
				link={articleHref(
					$locale === 'am' ? subtopic.devotional.devotional_am : subtopic.devotional.devotional_en
				)}
			/>

			<!-- Study Material -->
			<MaterialContainer
				title={$locale === 'am' ? 'የጥናት ጽሑፍ' : 'Study Material'}
				icon={BookText}
				artistsList={$locale === 'am'
					? subtopic.study_material.study_material_author_am
					: subtopic.study_material.study_material_author_en}
				link={articleHref(
					$locale === 'am'
						? subtopic.study_material.study_material_am
						: subtopic.study_material.study_material_en
				)}
			/>

			<!-- Divider -->
			<!-- <Divider /> -->

			<!-- Cover Image -->
			{#if published}
				<a href={graphicsHref(theme, subtopic)}>
					<div
						class="my-1 aspect-square overflow-clip border-b border-t border-zinc-300 group-hover:border-black"
					>
						<img
							src={$locale === 'am' ? subtopic.cover_am : subtopic.cover_en}
							alt={subtopic.title_en}
							loading="lazy"
							class="h-full w-full object-cover transition-all group-hover:scale-105"
						/>
					</div>
				</a>
			{/if}

			<!-- Graphics -->
			<MaterialContainer
				title={$locale === 'am' ? 'ምስሎች' : 'Graphics'}
				icon={Image}
				artistsList={subtopic.artists}
				link={published ? graphicsHref(theme, subtopic) : undefined}
			/>
		</div>
	</div>
</div>
