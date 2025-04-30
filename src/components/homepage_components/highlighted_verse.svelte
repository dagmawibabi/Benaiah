<script lang="ts">
	let { word, isTag = false } = $props();
</script>

{#if isTag}
	<div class="rounded-full bg-emerald-400 px-5 py-1 text-lg font-semibold italic text-black">
		{word}
	</div>
{:else}
	<span
		class="inline w-fit cursor-pointer font-semibold italic text-black underline underline-offset-4 hover:text-emerald-600"
	>
		{word}
	</span>
{/if}
