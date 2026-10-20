<script lang="ts">
	import Seo from '../../../../../../components/seo.svelte';
	import { shareImage } from '$lib/themes';
	import { onMount } from 'svelte';
	import { afterNavigate } from '$app/navigation';
	import Nav from '../../../../../../components/nav/nav.svelte';
	import FeedbackLink from '../../../../../../components/article_components/feedback_link.svelte';
	let { data } = $props();
	let size = $state(18),
		dark = $state(false),
		progress = $state(0);
	let article: HTMLElement;
	const am = $derived(data.article.lang === 'am');
	function updateProgress() {
		if (!article) return;
		const rect = article.getBoundingClientRect();
		progress = Math.max(
			0,
			Math.min(100, (-rect.top / Math.max(1, rect.height - innerHeight)) * 100)
		);
	}
	function save() {
		try {
			localStorage.setItem('benaiah-reader', JSON.stringify({ size, dark }));
		} catch {
			/* Storage may be disabled. */
		}
	}
	onMount(() => {
		try {
			const saved = JSON.parse(localStorage.getItem('benaiah-reader') || '{}');
			if ([16, 18, 20, 22, 24].includes(saved.size)) size = saved.size;
			dark = saved.dark === true;
		} catch {
			/* Use defaults. */
		}
		updateProgress();
	});
	afterNavigate(() => {
		progress = 0;
		requestAnimationFrame(updateProgress);
	});
</script>

<svelte:window onscroll={updateProgress} onresize={updateProgress} />
<Seo
	title={`${data.meta.title} · Benaiah`}
	description={data.article.description}
	image={shareImage(data.article.cover)}
	imageAlt={data.meta.title}
	type="article"
/>
<Nav />
<div class="reader" class:dark>
	<div
		class="progress"
		role="progressbar"
		aria-label={am ? 'የንባብ ሂደት' : 'Reading progress'}
		aria-valuemin="0"
		aria-valuemax="100"
		aria-valuenow={Math.round(progress)}
	>
		<span style:width={progress + '%'}></span>
	</div>
	<div class="tools">
		<a href="/resources">← {am ? 'ግብዓቶች' : 'Resources'}</a>
		<span>{data.article.minutes} {am ? 'ደቂቃ ንባብ' : 'min read'}</span>
		<div class="settings">
			<button
				aria-label={am ? 'ፊደሉን አሳንስ' : 'Decrease text size'}
				disabled={size <= 16}
				onclick={() => {
					size -= 2;
					save();
				}}>A−</button
			><button
				aria-label={am ? 'ፊደሉን አሳድግ' : 'Increase text size'}
				disabled={size >= 24}
				onclick={() => {
					size += 2;
					save();
				}}>A+</button
			><button
				aria-pressed={dark}
				onclick={() => {
					dark = !dark;
					save();
				}}>{am ? (dark ? 'ብርሃን' : 'ጨለማ') : dark ? 'Light' : 'Dark'}</button
			>
		</div>
		{#if data.alternate}<a hreflang={data.alternate.lang} href={data.alternate.href}
				>{am ? 'Read in English' : 'በአማርኛ ያንብቡ'} ↗</a
			>{/if}
	</div>
	<article bind:this={article} lang={data.article.lang} style:font-size={size + 'px'}>
		{#key data.article.href}<data.content />{/key}
		<FeedbackLink />
	</article>
	<nav class="adjacent" aria-label={am ? 'ተጨማሪ ንባብ' : 'More reading'}>
		{#if data.previous}<a href={data.previous.href}
				><small>← {am ? 'ያለፈው' : 'Previous'}</small>{data.previous.title}</a
			>{/if}
		{#if data.next}<a href={data.next.href}
				><small>{am ? 'ቀጣይ' : 'Next'} →</small>{data.next.title}</a
			>{/if}
	</nav>
	<p class="offline-note">
		{am
			? 'የተከፈቱ ጽሑፎች ከመስመር ውጭ ለማንበብ በዚህ መሣሪያ ይቀመጣሉ።'
			: 'Visited articles are saved on this device for offline reading.'}
	</p>
</div>

<style>
	.reader {
		background: #fafafa;
		color: #252525;
		min-height: 100vh;
		padding: 1.5rem 5% 4rem;
	}
	.reader.dark {
		background: #181818;
		color: #e9e9e9;
	}
	.progress {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		height: 3px;
		z-index: 1100;
		background: #aaa5;
	}
	.progress span {
		display: block;
		height: 100%;
		background: #777;
	}
	.tools {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		gap: 1rem;
		max-width: 900px;
		margin: auto auto 2rem;
		font-size: 14px;
	}
	.settings {
		display: flex;
		gap: 0.4rem;
	}
	.tools button {
		border: 1px solid #8886;
		border-radius: 8px;
		padding: 0.4rem 0.65rem;
	}
	.tools button:disabled {
		opacity: 0.35;
	}
	article {
		max-width: 720px;
		margin: auto;
		line-height: 1.85;
	}
	article :global(p) {
		margin: 1em 0;
	}
	article :global(img) {
		max-width: 100%;
		height: auto;
	}
	.dark article :global(.text-gray-900),
	.dark article :global(.text-black) {
		color: inherit;
	}
	.adjacent {
		max-width: 720px;
		margin: 3rem auto;
		display: flex;
		gap: 1rem;
	}
	.adjacent a {
		flex: 1;
		padding: 1.2rem;
		border: 1px solid #8886;
		border-radius: 12px;
	}
	.adjacent small {
		display: block;
		margin-bottom: 0.5rem;
		opacity: 0.7;
	}
	.offline-note {
		text-align: center;
		font-size: 13px;
		opacity: 0.65;
	}
</style>
