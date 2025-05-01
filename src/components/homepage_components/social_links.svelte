<script lang="ts">
	let { social } = $props();
</script>

<a href={social.link} target="_blank">
	<div
		class="mx-auto flex h-40 w-40 cursor-pointer items-center justify-center rounded-full border border-zinc-400 bg-white bg-opacity-20 px-10 py-5 text-center hover:border-zinc-600 hover:bg-opacity-40 md:py-10 lg:py-10 xl:py-10 2xl:py-10"
	>
		<img src={social.image} alt={social.alt} class="h-full w-full object-contain" />
	</div>
</a>
