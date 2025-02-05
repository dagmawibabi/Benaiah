<script lang="ts">
	import blackLogo from '$lib/assets/logo/BlackLogo.png';
	import whiteLogo from '$lib/assets/logo/WhiteLogo.png';
	import { _, locale } from 'svelte-i18n';
</script>

<div class="flex h-screen w-screen flex-col items-center justify-center bg-black pb-48">
	<img src={whiteLogo} alt="logo" class="object-fit w-56" />

	<div class="pt-5 font-mono text-white">{$_('page.home.subtitle')}</div>

	<div class="text-white">
		<button onclick={() => locale.set('am')}> am </button>
		<button onclick={() => locale.set('en')}> en </button>
	</div>
</div>
