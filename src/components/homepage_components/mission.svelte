<script>
	import { _, locale } from 'svelte-i18n';

	import SectionHeader from './section_header.svelte';
	import AnnouncementPost from '$lib/assets/illustrations/AnnouncementPost.jpg';
	import AnnouncementPostAmharic from '$lib/assets/illustrations/AnnouncementPostAmharic.jpg';
</script>

<div id="mission" class="">
	<SectionHeader title={$_('page.mission.title')} description={$_('page.mission.description')} />

	<div
		class="flex w-full gap-2 overflow-clip rounded-lg border border-zinc-500 bg-white bg-opacity-65"
	>
		<div class="hidden w-1/2 md:hidden lg:block xl:block 2xl:block">
			<img
				src={$locale === 'am' ? AnnouncementPostAmharic : AnnouncementPost}
				alt="research"
				class="h-full w-full object-cover"
			/>
		</div>

		<div class="flex w-full flex-col gap-4 p-5 md:w-full lg:w-1/2 xl:w-1/2 2xl:w-1/2">
			<div class="text-xl font-semibold">{$_('page.mission.subtitle')}</div>
			<div>
				{$_('page.mission.paragraph1')}
			</div>
			<div>
				{$_('page.mission.paragraph2')}
			</div>
			<div>
				{$_('page.mission.paragraph3')}
			</div>
			<div class="pt-3">
				<a href="/resources" target="_self">
					<div
						class="w-fit cursor-pointer rounded-lg border border-black bg-black px-8 py-2 text-white transition-all hover:bg-white hover:text-black"
					>
						{$_('page.mission.cta')}
					</div>
				</a>
			</div>
		</div>
	</div>
</div>
