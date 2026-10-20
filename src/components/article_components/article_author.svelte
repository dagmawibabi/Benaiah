<script lang="ts">
 import { page } from '$app/state';
 import type { Subtopic } from '$lib/types';
 let {subtopic}: {subtopic: Subtopic} = $props();
 const category = $derived(page.params.slug ?? '');
 const am = $derived(category.endsWith('_am'));
 const authors = $derived(category.startsWith('devotional') ? (am ? subtopic.devotional.devotional_author_am : subtopic.devotional.devotional_author_en) : (am ? subtopic.study_material.study_material_author_am : subtopic.study_material.study_material_author_en));
</script>
<div class="flex flex-wrap items-center gap-2 pb-4">{#each authors ?? [] as author}<img src={author.photo} alt={am ? author.fullname_am : author.fullname_en} class="h-7 w-7 rounded-full object-cover"/><span class="text-sm">{am ? author.fullname_am : author.fullname_en}</span>{/each}</div>
