<script lang="ts">
	import { useI18n } from '$lib/i18n';
	const { _, locale, setLanguage } = useI18n();
	import blackLogo from '$lib/assets/logo/BlackLogo.png';
</script>

<div class="relative flex h-[100vh] items-center justify-center overflow-clip">
	<!-- HEADER TEXT -->
	<div
		class="absolute flex h-full w-full items-center justify-center bg-zinc-950 bg-opacity-0 pb-20"
	>
		<div
			class="flex w-[90%] flex-col items-center text-center md:w-1/2 lg:w-1/2 xl:w-1/2 2xl:w-1/2"
		>
			<img src={blackLogo} alt="Benaiah" class="object-fit w-52 md:w-80 lg:w-80 xl:w-80 2xl:w-80" />
			<div class="pb-14 pt-6">
				<p class="text-shadow font-batangas text-xl">
					{$_('page.home.description')}
				</p>
			</div>
			<div class="flex gap-x-4">
				<button
					type="button"
					class={$locale === 'am'
						? 'cursor-pointer rounded-full bg-zinc-900 px-4 py-2 font-semibold text-white backdrop-blur-xl hover:bg-zinc-900 hover:text-white md:px-6 lg:px-6 xl:px-6 2xl:px-6'
						: 'cursor-pointer rounded-full bg-white px-4 py-2 font-semibold text-black backdrop-blur-xl hover:bg-emerald-500 hover:text-black md:px-6 lg:px-6 xl:px-6 2xl:px-6'}
					onclick={() => setLanguage('am')}
				>
					አማርኛ ትርጉም
				</button>
				<button
					type="button"
					class={$locale === 'am'
						? 'cursor-pointer rounded-full bg-white px-4 py-2 font-semibold text-black backdrop-blur-xl hover:bg-emerald-500 hover:text-black md:px-6 lg:px-6 xl:px-6 2xl:px-6'
						: 'cursor-pointer rounded-full bg-zinc-900 px-4 py-2 font-semibold text-white backdrop-blur-xl hover:bg-zinc-900 hover:text-white md:px-6 lg:px-6 xl:px-6 2xl:px-6'}
					onclick={() => setLanguage('en')}
				>
					English Version
				</button>
			</div>
		</div>
	</div>
</div>
