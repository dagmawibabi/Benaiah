<script lang="ts">
	import { _, locale } from 'svelte-i18n';

	let { word, isTag = false } = $props();
</script>

{#if isTag}
	<div
		class={$locale === 'am'
			? 'whitespace-nowrap rounded-full bg-emerald-400 px-5 py-1 text-lg leading-tight text-black'
			: 'whitespace-nowrap rounded-full bg-emerald-400 px-5 py-1 text-lg font-semibold italic leading-tight text-black'}
	>
		{word}
	</div>
{:else}
	<span
		class="inline w-fit cursor-pointer font-semibold italic text-black underline underline-offset-4 hover:text-emerald-600"
	>
		{word}
	</span>
{/if}
