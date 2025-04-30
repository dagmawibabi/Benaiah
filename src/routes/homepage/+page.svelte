<script lang="ts">
	import { _, locale } from 'svelte-i18n';
	import Nav from '../../components/nav/nav.svelte';
	import BlurredBackground from '../../components/blurred_background.svelte';
	import Hero from '../../components/homepage_components/hero.svelte';
	import HowWeWork from '../../components/homepage_components/how_we_work.svelte';
	import AboutUs from '../../components/homepage_components/about_us.svelte';
	import Mission from '../../components/homepage_components/mission.svelte';
	import ContactUs from '../../components/homepage_components/contact_us.svelte';
	import Logo from '../../components/homepage_components/logo.svelte';
</script>

<!-- Blurred Background -->
<BlurredBackground />

<div class="no-scrollbar relative h-screen overflow-scroll">
	<!-- NAV -->
	<Nav />

	<!-- HERO -->
	<Hero />

	<!--  -->
	<div class="mx-auto w-[90%] md:w-[90%] lg:w-3/5 xl:w-3/5 2xl:w-3/5">
		<AboutUs />
		<Mission />
		<HowWeWork />
		<Logo />
		<ContactUs />
	</div>
</div>
