<script>
	import EachWork from './each_work.svelte';
	import SectionHeader from './section_header.svelte';
	import research from '$lib/assets/illustrations/research.png';
	import writer from '$lib/assets/illustrations/writer.png';
	import design from '$lib/assets/illustrations/design.png';
	import { Quote } from '@lucide/svelte';
	import HighlightedVerse from './highlighted_verse.svelte';
</script>

<div class="h-screen">
	<SectionHeader
		title="About Us"
		description="This is how we produce the content you see on our website and across our social media. Our work process is pretty straightforward and simple."
	/>

	<div class="relative mx-auto h-[340px] w-[90%]">
		<div class="absolute m-2 h-full w-full rounded-xl border border-black bg-zinc-600"></div>

		<div
			class="absolute flex h-full w-full flex-col items-start gap-x-5 rounded-xl border border-black bg-white px-7 py-5 font-semibold text-black"
		>
			<div class="flex items-center gap-2 font-batangas text-lg font-normal">
				<Quote size={20} />
				<div>2 Samuel 23:20-23 NLT</div>
			</div>
			<div class="flex flex-col gap-3 pt-4 text-lg">
				<p>
					"There was also <HighlightedVerse word="Benaiah" /> son of Jehoiada, a <HighlightedVerse
						word="valiant warrior"
					/> from Kabzeel. <HighlightedVerse word="He did many heroic deeds" />, which included
					killing two champions of Moab. Another time, on a snowy day, he chased a lion down into a
					pit and killed it.
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
		</div>
	</div>

	<div class="mx-auto flex w-[90%] justify-center gap-2 pt-6">
		<div class="rounded-full bg-emerald-400 px-5 py-1 text-lg font-semibold italic text-black">
			Benaiah
		</div>
		<div class="rounded-full bg-emerald-400 px-5 py-1 text-lg font-semibold italic text-black">
			Valiant Warrior
		</div>
		<div class="rounded-full bg-emerald-400 px-5 py-1 text-lg font-semibold italic text-black">
			Heroic Deeds
		</div>
		<div class="rounded-full bg-emerald-400 px-5 py-1 text-lg font-semibold italic text-black">
			Honored
		</div>
		<div class="rounded-full bg-emerald-400 px-5 py-1 text-lg font-semibold italic text-black">
			Captain
		</div>
	</div>
	<div class="mx-auto flex w-[90%] justify-center gap-2 pt-4">
		<div class="rounded-full bg-emerald-400 px-5 py-1 text-lg font-semibold italic text-black">
			בניה
		</div>
		<div class="rounded-full bg-emerald-400 px-5 py-1 text-lg font-semibold italic text-black">
			God has Created
		</div>
		<div class="rounded-full bg-emerald-400 px-5 py-1 text-lg font-semibold italic text-black">
			God has Built
		</div>

		<div class="rounded-full bg-emerald-400 px-5 py-1 text-lg font-semibold italic text-black">
			Bana-yah
		</div>
	</div>
</div>
