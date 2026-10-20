<script lang="ts">
	import { onMount } from 'svelte';
	let saved = $state<string[]>([]);
	onMount(async () => {
		if (!('caches' in window)) return;
		const urls = new Set<string>();
		for (const name of await caches.keys()) {
			if (!name.startsWith('benaiah-')) continue;
			for (const request of await (await caches.open(name)).keys()) {
				const url = new URL(request.url);
				if (url.pathname.startsWith('/articles/themes/') && !url.pathname.endsWith('__data.json'))
					urls.add(url.pathname);
			}
		}
		saved = [...urls];
	});
</script>

<svelte:head><title>Offline · Benaiah</title><meta name="robots" content="noindex" /></svelte:head>
<main>
	<p>BENAIAH · በናያስ</p>
	<h1>You’re offline.<br />ከመስመር ውጭ ነዎት።</h1>
	<p>
		Previously visited articles are still available below. Connect to the internet to open new
		pages.
	</p>
	<p>ከዚህ በፊት የከፈቷቸውን ጽሑፎች ከታች ማንበብ ይችላሉ።</p>
	<ul>
		{#each saved as href}<li>
				<a {href} data-sveltekit-reload
					>{decodeURIComponent(href).replace('/articles/themes/', '').replaceAll('/', ' · ')}</a
				>
			</li>{/each}
	</ul>
	<a href="/" data-sveltekit-reload>Try again / እንደገና ይሞክሩ →</a>
</main>

<style>
	main {
		max-width: 700px;
		padding: 10vh 2rem;
		margin: auto;
	}
	h1 {
		font-size: 3rem;
		line-height: 1.3;
		margin: 2rem 0;
	}
	p,
	li {
		margin: 1rem 0;
	}
	a {
		text-decoration: underline;
	}
</style>
