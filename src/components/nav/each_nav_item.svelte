<script lang="ts">
	let { name, link } = $props();
</script>

<a href={link}>
	<div class="cursor-pointer rounded-full px-2 font-semibold underline-offset-8 hover:underline">
		{name}
	</div>
</a>
