<script lang="ts">
	let { name, link } = $props();
</script>

<a href={link}>
	<div
		class="cursor-pointer rounded-full px-2 text-sm font-semibold underline-offset-8 hover:underline md:text-base lg:text-base xl:text-base 2xl:text-base"
	>
		{name}
	</div>
</a>
