<script lang="ts">
	import { locale } from 'svelte-i18n';
	import Nav from '../../components/nav/nav.svelte';

	interface Props {
		data: any;
	}

	let { data }: Props = $props();
</script>

<svelte:head>
	<title>Blogs</title>
</svelte:head>

<section>
	<div>
		<Nav />
	</div>
	<h1>Blogs</h1>
	Locale: {$locale}
	<div class="grid grid-cols-1 gap-4 md:grid-cols-2">
		{#each data.articles as article}
			{#if article.language.startsWith($locale)}
				<a href="/articles/{article.slug}">
					<article class="card">
						<h2>{article.title}</h2>
						<p>{article.description}</p>
					</article>
				</a>
			{/if}
		{/each}
	</div>
</section>
