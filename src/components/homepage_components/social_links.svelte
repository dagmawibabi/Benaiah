<script lang="ts">
	let { social } = $props();
</script>

<a href={social.link} target="_blank">
	<div
		class="flex cursor-pointer items-center justify-center rounded-full border border-zinc-400 bg-white bg-opacity-20 py-5 text-center hover:border-zinc-600 hover:bg-opacity-40 md:py-48 lg:py-48 xl:py-48 2xl:py-10"
	>
		<img src={social.image} alt="" width="60" height="60" />
	</div>
</a>
