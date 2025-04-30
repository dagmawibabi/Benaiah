<script>
	import { _, locale } from 'svelte-i18n';

	import { Quote } from '@lucide/svelte';
	import SectionHeader from './section_header.svelte';
	import HighlightedVerse from './highlighted_verse.svelte';
</script>

<div class="h-screen">
	<!-- Header -->
	<SectionHeader
		title="About Us"
		description="This is how we produce the content you see on our website and across our social media. Our work process is pretty straightforward and simple."
	/>

	<!-- Paragraph -->
	<div
		class="relative mx-auto h-[500px] w-full md:h-[500px] md:w-full lg:h-[340px] lg:w-[90%] xl:h-[340px] xl:w-[90%] 2xl:h-[340px] 2xl:w-[90%]"
	>
		<div class="absolute m-2 h-full w-full rounded-xl border border-black bg-zinc-600"></div>

		<div
			class="absolute flex h-full w-full flex-col items-start gap-x-5 rounded-xl border border-black bg-white px-5 py-5 text-base font-semibold text-black md:text-lg lg:text-lg xl:text-lg 2xl:text-lg"
		>
			<div class="flex items-center gap-2 font-normal">
				<Quote size={20} />
				<div class={$locale === 'am' ? '' : 'font-batangas'}>
					{$locale === 'am' ? '2 ሳሙኤል 23:20-23 አመት' : '2 Samuel 23:20-23 NLT'}
				</div>
			</div>

			{#if $locale === 'am'}
				<div class="flex flex-col gap-3 pt-4">
					<p>
						"የቀብጽኤል አገር ሰው የሆነው የዮዳሄ ልጅ <HighlightedVerse word="በናያስ" />
						<HighlightedVerse word="ታላቅ ጀብዱ የሠራ" /> ሌላው <HighlightedVerse word="ጐበዝ ተዋጊ" /> ነበረ፤ እርሱም
						ሁለት በጣም የታወቁ የሞዓብ ሰዎችን ገደለ፤ እንዲሁም በረዶ በጣለበት ዕለት በጕድጓድ ውስጥ ገብቶ አንበሳ ገድሏል፤
					</p>

					<p>
						ደግሞም አንድ ግዙፍ ግብጻዊ ገድሏል፤ ግብጻዊው በእጁ ጦር የያዘ ቢሆንም፣ በናያስ ግን ሊገጥመው በትር ይዞ ወደ እርሱ ሄደ፤ ከግብጻዊውም
						እጅ ጦሩን ነጥቆ በገዛ ጦሩ ገደለው። የዮዳሄ ልጅ የበናያስ ጀብዱ እንደዚህ ያለ ነበረ፤ እርሱም <HighlightedVerse
							word="በናእንደ ሦስቱ ኀያላን ሁሉ ዝናን ያተረፈ"
						/> ሲሆን፣
					</p>

					<p>
						<HighlightedVerse word="ከሠላሳዎቹ ሁሉ በላይ የከበረ ሰው ነበረበናያስ" />፤ ነገር ግን ከሦስቱ እንደ አንዱ አልነበረም።
						ዳዊትም <HighlightedVerse word="የክብር ዘበኞቹ አለቃ" /> አድርጎ ሾመው።"
					</p>
				</div>
			{:else}
				<div class="flex flex-col gap-3 pt-4">
					<p>
						"There was also <HighlightedVerse word="Benaiah" /> son of Jehoiada, a <HighlightedVerse
							word="valiant warrior"
						/> from Kabzeel. <HighlightedVerse word="He did many heroic deeds" />, which included
						killing two champions of Moab. Another time, on a snowy day, he chased a lion down into
						a pit and killed it.
					</p>

					<p>
						Once, <HighlightedVerse word="armed only with a club" />, he killed an imposing Egyptian
						warrior who was armed with a spear. Benaiah wrenched the spear from the Egyptian's hand
						and killed him with it. Deeds like these made Benaiah <HighlightedVerse
							word="as famous as the Three mightiest warriors"
						/>.
					</p>

					<p>
						He was <HighlightedVerse word="more honored than the other members" /> of the Thirty, though
						he was not one of the Three. And David made him <HighlightedVerse
							word="captain of his bodyguard"
						/>."
					</p>
				</div>
			{/if}
		</div>
	</div>

	<!-- Tags -->
	<div class="hidden md:hidden lg:block xl:block 2xl:block">
		<div class="mx-auto flex w-[90%] justify-center gap-2 pt-6">
			<HighlightedVerse word={$locale === 'am' ? 'በናያስ' : 'Benaiah'} isTag={true} />
			<HighlightedVerse word={$locale === 'am' ? 'ጐበዝ ተዋጊ' : 'Valiant Warrior'} isTag={true} />
			<HighlightedVerse word={$locale === 'am' ? 'ታላቅ ጀብዱ' : 'Heroic Deeds'} isTag={true} />
			<HighlightedVerse word={$locale === 'am' ? 'የከበረ ሰው' : 'Honored'} isTag={true} />
			<HighlightedVerse word={$locale === 'am' ? 'የክብር ዘበኛ' : 'Captain'} isTag={true} />
		</div>
		<div class="mx-auto flex w-[90%] justify-center gap-2 pt-4">
			<HighlightedVerse word="בניה" isTag={true} />
			<HighlightedVerse word={$locale === 'am' ? 'እግዚአብሄር ፈጠረ' : 'God has Created'} isTag={true} />
			<HighlightedVerse word={$locale === 'am' ? 'እግዚአብሄር ሰራ' : 'God has Built'} isTag={true} />
			<HighlightedVerse word={$locale === 'am' ? 'ባና-ያህ' : 'Bana-yah'} isTag={true} />
		</div>
	</div>
</div>
