<script>
	let { subtopic } = $props();

	import { page } from '$app/state';
	const category = $derived(page.url.pathname.split('/').pop());
</script>

<div
	class="w-86 h-86 aspect-square overflow-clip rounded-xl md:h-96 md:w-96 lg:h-96 lg:w-96 xl:h-96 xl:w-96 2xl:h-96 2xl:w-96"
>
	{#if category === 'devotional_en' || category === 'study_material_en'}
		<a href={subtopic.cover_en} target="_blank" rel="noopener noreferrer">
			<img
				src={subtopic.cover_en}
				alt={'cover image'}
				class="h-96 w-96 object-cover transition-all hover:scale-105"
			/>
		</a>
	{:else if category === 'devotional_am' || category === 'study_material_am'}
		<a href={subtopic.cover_am} target="_blank" rel="noopener noreferrer">
			<img
				src={subtopic.cover_am}
				alt={'cover image'}
				class="h-96 w-96 object-cover transition-all hover:scale-105"
			/>
		</a>
	{/if}
</div>
