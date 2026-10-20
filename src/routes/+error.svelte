<script lang="ts">
	import { page } from '$app/state';
	import { useI18n } from '$lib/i18n';
	import Nav from '../components/nav/nav.svelte';
	const { locale } = useI18n();
	const am = $derived($locale === 'am');
</script>

<svelte:head
	><title>{page.status} · Benaiah</title><meta name="robots" content="noindex" /></svelte:head
>
<Nav />
<main class="error">
	<p class="code">{page.status}</p>
	<h1>
		{page.status === 404
			? am
				? 'ገጹ አልተገኘም'
				: 'This page could not be found'
			: am
				? 'ገጹን መክፈት አልተቻለም'
				: 'We couldn’t open this page'}
	</h1>
	<p>
		{am
			? 'ከመነሻ ገጽ ይጀምሩ ወይም ግብዓቶቻችንን ያስሱ።'
			: 'Start again from home, or find something to read in our resources.'}
	</p>
	<div>
		<a href="/">{am ? 'መነሻ' : 'Back home'} →</a><a href="/resources"
			>{am ? 'ግብዓቶች' : 'Explore resources'} ↗</a
		>
	</div>
</main>

<style>
	.error {
		max-width: 850px;
		margin: 12vh auto;
		padding: 2rem;
	}
	.code {
		font-family: Batangas, sans-serif;
		font-size: clamp(6rem, 20vw, 12rem);
		line-height: 1;
		color: #b8b8b8;
	}
	h1 {
		font-size: clamp(2rem, 5vw, 3rem);
		font-weight: 600;
		margin: 1rem 0;
	}
	p {
		line-height: 1.7;
	}
	.error div {
		display: flex;
		flex-wrap: wrap;
		gap: 1rem;
		margin-top: 2rem;
	}
	a {
		border: 1px solid #aaa;
		padding: 1rem 1.5rem;
		border-radius: 30px;
	}
</style>
