<script>
	import { _ } from 'svelte-i18n';
	import Nav from '../../components/nav/nav.svelte';
	import Hero from '../../components/hero.svelte';
	import BlurredBackground from '../../components/blurred_background.svelte';
</script>

<!-- Blurred Background -->
<BlurredBackground />

<div class="relative">
	<!-- Nav -->
	<Nav />

	<!-- HERO -->
	<Hero title={$_('page.articles.articles')} description={$_('page.articles.description')} />
</div>
