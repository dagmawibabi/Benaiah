<script lang="ts">
	import { _, locale } from 'svelte-i18n';
	import { graphicsList } from '../../store/graphics.svelte';
	import Nav from '../../components/nav/nav.svelte';
	import Hero from '../../components/hero.svelte';
	import BlurredBackground from '../../components/blurred_background.svelte';
	import EachSubtopicGraphicsContainer from '../../components/each_subtopic/each_subtopic_graphics_container.svelte';

	import { FileText } from '@lucide/svelte';
</script>

<!-- Blurred Background -->
<BlurredBackground />

<!-- <div class="relative"> -->
<div class="no-scrollbar relative h-screen overflow-scroll">
	<!-- Nav -->
	<Nav />

	<!-- HERO -->
	<Hero title={$_('page.articles.articles')} description={$_('page.articles.description')} />

	<!-- Content -->
</div>
