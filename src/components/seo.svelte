<script lang="ts">
	import { page } from '$app/state';

	let {
		title,
		description,
		image = '/og-default.jpg',
		imageAlt = 'Benaiah',
		type = 'website'
	}: {
		title: string;
		description: string;
		image?: string;
		imageAlt?: string;
		type?: 'website' | 'article';
	} = $props();

	// Crawlers need absolute URLs.
	let url = $derived(page.url.origin + page.url.pathname);
	let imageUrl = $derived(new URL(image, page.url.origin).href);
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<link rel="canonical" href={url} />
	<meta property="og:site_name" content="Benaiah" />
	<meta property="og:type" content={type} />
	<meta property="og:url" content={url} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:image" content={imageUrl} />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta property="og:image:alt" content={imageAlt} />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content={imageUrl} />
</svelte:head>
