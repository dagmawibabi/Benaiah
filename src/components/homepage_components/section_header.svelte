<script lang="ts">
	let { title, description } = $props();
</script>

<div>
	<div class="text-center font-batangas text-3xl">
		{title}
	</div>
	<div class="px-0 pb-10 pt-2 text-center md:px-20 lg:px-20 xl:px-20 2xl:px-20">
		<p class="text-lg font-semibold">
			{description}
		</p>
	</div>
</div>
