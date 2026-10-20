<script lang="ts">
	import '../app.css';
	import { onMount } from 'svelte';
	import { afterNavigate } from '$app/navigation';
	import { browser } from '$app/environment';

	import { provideI18n } from '$lib/i18n';

	let { data, children } = $props();

	// Every rendered tree owns its stores, including during SSR.
	// svelte-ignore state_referenced_locally
	const { locale } = provideI18n(data.lang);
	function cachePage() {
		if (browser && 'serviceWorker' in navigator)
			navigator.serviceWorker.ready
				.then((reg) => reg.active?.postMessage({ type: 'CACHE_PAGE', url: location.href }))
				.catch(() => {});
	}
	onMount(cachePage);
	afterNavigate(cachePage);
</script>

<svelte:head>
	<link rel="manifest" href="/manifest.webmanifest" /><link
		rel="apple-touch-icon"
		href="/icons/icon-192.png"
	/><meta name="theme-color" content="#fafafa" />
	<link rel="alternate" type="application/rss+xml" title="Benaiah" href="/rss.xml" />
	<link rel="alternate" type="application/rss+xml" title="በናያስ" href="/rss.xml?lang=am" />
</svelte:head>

{@render children()}
<footer class="site-footer">
	<a href="/developers">{$locale === 'am' ? 'ለገንቢዎች' : 'Developers'}</a><a
		href={$locale === 'am' ? '/rss.xml?lang=am' : '/rss.xml'}>RSS</a
	><a href="/app">{$locale === 'am' ? 'የሞባይል መተግበሪያ' : 'Mobile app'}</a><a
		href="https://t.me/benaiah_org"
		target="_blank"
		rel="noopener noreferrer">Telegram ↗</a
	>
</footer>

<style>
	.site-footer {
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
		gap: 1.5rem;
		padding: 3rem 1rem;
		border-top: 1px solid #ddd;
		background: #fafafa;
		font-size: 14px;
	}
</style>
