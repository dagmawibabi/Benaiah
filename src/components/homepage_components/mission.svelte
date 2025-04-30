<script>
	import { _, locale } from 'svelte-i18n';

	import SectionHeader from './section_header.svelte';
	import AnnouncementPost from '$lib/assets/illustrations/AnnouncementPost.jpg';
	import AnnouncementPostAmharic from '$lib/assets/illustrations/AnnouncementPostAmharic.jpg';
</script>

<div id="mission" class="h-screen">
	<SectionHeader
		title="New Content, One Mission"
		description="This is how we produce the content you see on our website and across our social media. Our work process is pretty straightforward and simple."
	/>
	<div class="grid grid-cols-1 gap-x-6 md:flex lg:flex xl:flex 2xl:flex">
		<!-- Benaiah Graphics -->
		<div class="group relative w-full md:w-1/2 lg:w-1/2 xl:w-1/2 2xl:w-1/2">
			<div
				class="m-2 hidden h-full w-full rounded-lg bg-zinc-600 transition-all group-hover:bg-zinc-600 md:absolute lg:absolute xl:absolute 2xl:absolute"
			></div>
			<img
				src={$locale === 'am' ? AnnouncementPostAmharic : AnnouncementPost}
				alt="research"
				class="absolute h-full w-full rounded-lg object-cover"
			/>
		</div>

		<!-- Mission Statement -->
		<div class="w-full pt-3 md:w-1/2 lg:w-1/2 xl:w-1/2 2xl:w-1/2">
			<div
				class=" flex flex-col justify-end gap-5 rounded-lg border border-zinc-600 bg-white bg-opacity-50 p-5 text-left backdrop-blur-xl transition-all hover:bg-opacity-60"
			>
				<div class="text-xl font-semibold">Mission</div>
				<div>
					Benaiah exists to proclaim, teach, and defend the holiness of God in all its fullness to
					as many people as possible. We support the church by providing trustworthy teaching to
					help Christians know what they believe, why they believe it, how to live it, and how to
					share it.
				</div>
				<div>
					Benaiah exists to proclaim, teach, and defend the holiness of God in all its fullness to
					as many people as possible. We support the church by providing trustworthy teaching to
					help Christians know what they believe, why they believe it, how to live it, and how to
					share it.
				</div>
				<div class="pt-3">
					<a href="/resources" target="_self">
						<div
							class="w-fit cursor-pointer rounded-lg border border-black bg-black px-8 py-2 text-white transition-all hover:bg-white hover:text-black"
						>
							Checkout Resources
						</div>
					</a>
				</div>
			</div>
		</div>
	</div>
</div>
