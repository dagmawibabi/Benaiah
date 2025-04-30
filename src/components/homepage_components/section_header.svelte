<script lang="ts">
	import { _, locale } from 'svelte-i18n';

	let { title, description } = $props();
</script>

<div>
	<div class="text-center font-batangas text-3xl">
		{title}
	</div>
	<div
		class="px-0 pb-10 pt-2 text-center text-base md:px-0 md:text-base lg:px-20 lg:text-lg xl:px-20 xl:text-lg 2xl:px-20 2xl:text-lg"
	>
		<p class={$locale == 'am' ? '' : 'font-semibold'}>
			{description}
		</p>
	</div>
</div>
