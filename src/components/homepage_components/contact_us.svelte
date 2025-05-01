<script>
	import { _, locale } from 'svelte-i18n';
	import SectionHeader from './section_header.svelte';

	import { Facebook, Headset, InstagramIcon, LinkedinIcon, Mail, Send } from '@lucide/svelte';
	import SocialLinks from './social_links.svelte';
	import {
		email,
		support,
		threads,
		twitter,
		instagram,
		telegramEn,
		telegramAm,
		linkedin,
		facebook
	} from './social_icons';
</script>

<div id="contactus" class="h-screen pt-20">
	<SectionHeader
		title={$_('page.contactUs.title')}
		description={$_('page.contactUs.description')}
	/>

	<div
		class="mx-auto grid w-full grid-cols-3 gap-2 p-0 pb-16 md:w-[70%] md:grid-cols-4 md:gap-4 md:p-2 lg:grid-cols-4 lg:gap-4 lg:p-2 xl:grid-cols-4 xl:gap-4 xl:p-2 2xl:grid-cols-4 2xl:gap-4 2xl:p-2"
	>
		<SocialLinks social={$locale === 'am' ? telegramAm : telegramEn} />

		<SocialLinks social={instagram} />
		<SocialLinks social={threads} />
		<SocialLinks social={facebook} />

		<SocialLinks social={linkedin} />
		<SocialLinks social={twitter} />

		<SocialLinks social={email} />
		<SocialLinks social={support} />
	</div>

	<SectionHeader title="" description={$_('page.contactUs.connectWithUs')} />
</div>
