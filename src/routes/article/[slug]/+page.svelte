<script lang="ts">
	interface Props {
		data: any;
	}

	let { data }: Props = $props();
</script>

<svelte:head>
	<title>{data.meta.title}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.meta.title} />
</svelte:head>

<section class="mx-auto max-w-4xl px-1.5 pt-12">
	<div>
		{JSON.stringify(data.meta)}
	</div>
	<div class="mt-5">
		<data.content finite="play me"></data.content>
	</div>
</section>
