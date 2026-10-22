<script lang="ts">
	import Seo from '../../components/seo.svelte';
	import Nav from '../../components/nav/nav.svelte';
	import BlurredBackground from '../../components/blurred_background.svelte';
	import { useI18n } from '$lib/i18n';
	import logo from '$lib/assets/logo/BlackLogo.png';
	const { locale } = useI18n();
	const am = $derived($locale === 'am');
	let appearance = $state<'light' | 'dark'>('light');
	// Screens rendered from the app itself (see the app repo's
	// test/website_screens_test.dart), in light and dark.
	const tour = $derived([
		{
			file: 'home',
			label: am ? 'መነሻ' : 'Home',
			title: am ? 'ሁሉም ተከታታዮች በአንድ ቦታ' : 'Every series in one place',
			body: am
				? 'የተመረጡ ርዕሶችን ይመልከቱ፤ ሁሉንም ተከታታዮች ያስሱ፤ ተከታታይ፣ ርዕስ ወይም ክፍል ይፈልጉ።'
				: 'Swipe through featured topics, browse every series, and search series, topics and podcast episodes.'
		},
		{
			file: am ? 'devotional-am' : 'devotional',
			label: am ? 'የጥሞና ጽሑፍ' : 'Devotional',
			title: am ? 'በእንግሊዝኛና በአማርኛ ያንብቡ' : 'Read in English or Amharic',
			body: am
				? 'እያንዳንዱ ርዕስ የጥሞና ጽሑፍ፣ የጥናት ጽሑፍና ምስሎችን ያካትታል። የመጽሐፍ ቅዱስ ጥቅስ ሲነኩ ክፍሉ እዚያው ይከፈታል።'
				: 'Each topic brings a devotional, study material and graphics together. Tap a Bible reference to read the passage right there.'
		},
		{
			file: 'study',
			label: am ? 'የጥናት ጽሑፍ' : 'Study',
			title: am ? 'በጥልቀት ያጥኑ' : 'Go deeper with study material',
			body: am
				? 'ከእያንዳንዱ የጥሞና ጽሑፍ በስተጀርባ ያለውን ጥናት ያንብቡ።'
				: 'The study behind each devotional, laid out for comfortable reading on any screen.'
		},
		{
			file: 'graphics',
			label: am ? 'ምስሎች' : 'Graphics',
			title: am ? 'ያስቀምጡና ያጋሩ' : 'Save and share graphics',
			body: am
				? 'ማንኛውንም ምስል በሙሉ ማያ ይክፈቱ፤ ወደ ፎቶዎችዎ ያስቀምጡ ወይም ለወዳጅዎ ይላኩ።'
				: 'Open any graphic full screen, save it to your photos, or send it to a friend.'
		},
		{
			file: 'settings',
			label: am ? 'ቅንብሮች' : 'Settings',
			title: am ? 'የእርስዎ ያድርጉት' : 'Make it yours',
			body: am
				? 'እንግሊዝኛ ወይም አማርኛ ይምረጡ፤ ብርሃን ወይም ጨለማ ገጽታ፣ ወይም የስልክዎን ቅንብር ይከተሉ።'
				: 'Switch between English and Amharic, and choose light or dark, or let it follow your phone.'
		}
	]);
	const extras = $derived(
		am
			? [
					'ፖድካስቱ ከመተግበሪያው ሲወጡም ይቀጥላል፤ ከመቆለፊያ ማያ ይቆጣጠሩት፣ ፍጥነቱን ይቀይሩ ወይም 10 ሰከንድ ወደኋላ/ወደፊት ይዝለሉ።',
					'ከአንዳንድ ጽሑፎች ጋር የተያያዙ ቪዲዮዎችን ይመልከቱ።',
					'አንድ ጸሐፊ ወይም አቅራቢ የሠራውን ሁሉ በአንድ ገጽ ይመልከቱ።'
				]
			: [
					'The podcast keeps playing when you leave the app, with lock-screen controls, speed control and 10-second skips.',
					'Watch the videos that go with some articles.',
					'See everything a writer or podcast host has worked on, in one place.'
				]
	);
	const features = $derived(
		am
			? [
					['ያንብቡ', 'የጥናት ጽሑፎችና ዕለታዊ መልእክቶች', 'በተከታታይ ርዕሶች የተደራጁ ግብዓቶችን ያስሱ፤ በእንግሊዝኛና አማርኛ ያንብቡ።'],
					['ያዳምጡ', 'ትረካዎችና ፖድካስት', 'የበናያስ መልእክቶችን በድምፅ ይከታተሉ።'],
					['ይመልከቱ', 'ምስሎችና ቪዲዮዎች', 'ከሚያነቡት ርዕስ ጋር የተያያዙ ምስሎችንና ቪዲዮዎችን በአንድ ቦታ ያግኙ።']
				]
			: [
					[
						'READ',
						'Study materials & devotionals',
						'Explore our work by series and topic. Go deeper with a study, or make room for a devotional in your day.'
					],
					[
						'LISTEN',
						'Narrations & our podcast',
						'Listen to the Benaiah team’s work, with podcast playback that stays with you as you explore the app.'
					],
					[
						'EXPLORE',
						'Graphics & videos',
						'Find the artwork and videos that belong with each topic, alongside the words that inspired them.'
					]
				]
	);
</script>

<Seo
	title={am ? 'የበናያስ መተግበሪያ · Benaiah' : 'The Benaiah app · Benaiah'}
	description={am
		? 'የጥናት ጽሑፎች፣ ዕለታዊ መልእክቶች፣ ምስሎች፣ ትረካዎች፣ ቪዲዮዎችና ፖድካስት። በእንግሊዝኛና አማርኛ፣ በአንድ መተግበሪያ።'
		: 'Study materials, devotionals, graphics, narrations, videos and our podcast, in English and Amharic. Meet the Benaiah mobile app.'}
	image="/app/og.jpg"
	imageAlt="The Benaiah app home screen"
/>
<BlurredBackground />
<div class="no-scrollbar relative min-h-screen">
	<Nav />
	<main>
	<section class="intro">
		<div class="intro-copy">
			<p class="eyebrow">{am ? 'የበናያስ የሞባይል መተግበሪያ' : 'INTRODUCING THE BENAIAH APP'}</p>
			<h1>
				{am ? 'ሁሉም ግብዓቶቻችን።' : 'All our work.'}<br /><span
					>{am ? 'በእጅዎ ላይ።' : 'In your hands.'}</span
				>
			</h1>
			<p class="lead">
				{am
					? 'የጥናት ጽሑፎች፣ ዕለታዊ መልእክቶች፣ ምስሎች፣ ትረካዎች፣ ቪዲዮዎችና ፖድካስት። በእንግሊዝኛና አማርኛ፣ በአንድ መተግበሪያ።'
					: 'Study materials, devotionals, graphics, narrations, videos, and our podcast. In English and Amharic. Together in one beautifully designed app.'}
			</p>
			<a
				class="download"
				href="https://github.com/BenaiahOrg/BenaiahApp/releases/"
				target="_blank"
				rel="noopener noreferrer">{am ? 'መተግበሪያውን ያውርዱ' : 'Get the app'} <span>↗</span></a
			>
			<p class="download-note">
				{am
					? 'የሚገኙ ስሪቶችና የማውረጃ ፋይሎች በGitHub።'
					: 'Android 7.0+ · APK downloads and release notes on GitHub.'}
			</p>
			<a class="ios-guide-link" href="/app/ios">
				{am ? 'በiPhone ላይ መጫኛ መመሪያ' : 'Installing on iPhone? Read the guide'} →
			</a>
			<div class="language-pair">
				<span>English</span><span>አማርኛ</span><small
					>{am ? 'አንድ ተልዕኮ። ሁለት ቋንቋዎች።' : 'One mission. Two languages.'}</small
				>
			</div>
		</div>
		<div class="showcase">
			<div class="phone">
				<img
					src={'/app/home-' + appearance + '.webp'}
					alt={appearance === 'light'
						? 'Benaiah app home screen: featured topics carousel, All Series grid, and Home, Podcasts, Settings navigation in light mode'
						: 'The same Benaiah home screen in dark mode'}
					width="780"
					height="1688"
					fetchpriority="high"
				/>
			</div>
			<div class="appearance" aria-label={am ? 'የመተግበሪያው ቅድመ እይታ' : 'App preview appearance'}>
				<button
					class:active={appearance === 'light'}
					aria-pressed={appearance === 'light'}
					onclick={() => (appearance = 'light')}>{am ? 'ብርሃን' : 'Light'}</button
				><button
					class:active={appearance === 'dark'}
					aria-pressed={appearance === 'dark'}
					onclick={() => (appearance = 'dark')}>{am ? 'ጨለማ' : 'Dark'}</button
				>
			</div>
			<p class="screen-caption">
				{am ? 'ከበናያስ መተግበሪያ የተወሰደ እይታ' : 'Rendered from the Benaiah mobile app'}
			</p>
		</div>
	</section>
	<section class="features" aria-label={am ? 'በመተግበሪያው ውስጥ' : 'Inside the app'}>
		{#each features as [label, title, body]}<div>
				<p class="eyebrow">{label}</p>
				<h2>{title}</h2>
				<p>{body}</p>
			</div>{/each}
	</section>
	<section class="tour" aria-labelledby="tour-title">
		<div class="tour-head">
			<p class="eyebrow">{am ? 'የመተግበሪያው ጉብኝት' : 'A LOOK INSIDE'}</p>
			<h2 id="tour-title">{am ? 'መተግበሪያው ይህን ይመስላል' : 'Exactly what you’ll see'}</h2>
			<p>
				{am
					? 'እነዚህ ምስሎች ከመተግበሪያው በቀጥታ የተወሰዱ ናቸው፤ ይዘቱም የእኛው ጽሑፎችና ምስሎች ናቸው።'
					: 'These screens are rendered by the app itself, showing our own articles and artwork.'}
			</p>
			<div class="appearance" role="group" aria-label={am ? 'ገጽታ' : 'Appearance'}>
				<button
					class:active={appearance === 'light'}
					aria-pressed={appearance === 'light'}
					onclick={() => (appearance = 'light')}>{am ? 'ብርሃን' : 'Light'}</button
				><button
					class:active={appearance === 'dark'}
					aria-pressed={appearance === 'dark'}
					onclick={() => (appearance = 'dark')}>{am ? 'ጨለማ' : 'Dark'}</button
				>
			</div>
		</div>
		<ol class="screens">
			{#each tour as screen (screen.file)}
				<li>
					<div class="phone small">
						<img
							src={`/app/${screen.file}-${appearance}.webp`}
							alt={`${screen.label}: ${screen.title}`}
							width="780"
							height="1688"
							loading="lazy"
						/>
					</div>
					<p class="eyebrow">{screen.label}</p>
					<h3>{screen.title}</h3>
					<p>{screen.body}</p>
				</li>
			{/each}
		</ol>
		<ul class="extras">
			{#each extras as extra}<li>{extra}</li>{/each}
		</ul>
	</section>
	<section class="letter">
		<img src={logo} alt="Benaiah" width="140" />
		<div>
			<p class="eyebrow">{am ? 'ከበናያስ ቡድን' : 'A NOTE FROM OUR TEAM'}</p>
			<h2>{am ? 'በደስታና በምስጋና።' : 'Made with joy. Shared with gratitude.'}</h2>
			<p>
				{am
					? 'የራሳችንን የሞባይል መተግበሪያ ስናስተዋውቅ እጅግ ደስ ይለናል። ይህ መተግበሪያ የበናያስ ቡድን የሚያዘጋጃቸውን ግብዓቶች በአንድ ቦታ ያሰባስባል።'
					: 'We’re more than excited and grateful to announce our very own mobile app. It brings all the resources the Benaiah team produces into one platform.'}
			</p>
			<p>
				{am
					? 'ይህንን እንድናደርግ ያስቻለንን እግዚአብሔር እናመሰግናለን። ሥራዎቻችንን ማግኘትና መጠቀም የበለጠ ቀላል እንዲሆን ተስፋ እናደርጋለን። እንዲወዱት እንመኛለን!'
					: 'We’re deeply grateful to God for enabling us to do this. We hope it makes exploring our work a little easier and brings these resources closer to your everyday life. We hope you like it!'}
			</p>
			<a
				href="https://github.com/BenaiahOrg/BenaiahApp/releases/"
				target="_blank"
				rel="noopener noreferrer">{am ? 'የቅርብ ጊዜ ስሪቱን ያግኙ' : 'Find the latest release'} ↗</a
			>
		</div>
	</section>
	<section class="web-app">
		<div>
			<h2>{am ? 'ድረ ገጹንም በእጅዎ ያቆዩ።' : 'Keep the website close, too.'}</h2>
			<p>
				{am
					? 'ይህን ድረ ገጽ ከአሳሽዎ ወደ መነሻ ማያ ገጽ ያክሉ። የከፈቷቸውን ጽሑፎች ከመስመር ውጭ ማንበብ ይችላሉ።'
					: 'Install this website from your browser for quick access and offline reading of visited articles.'}
			</p>
			<p class="instructions">
				{am
					? 'iPhone: Share → Add to Home Screen። Android: የአሳሽ ምናሌ → Install app።'
					: 'iPhone: Share → Add to Home Screen. Android: browser menu → Install app.'}
			</p>
		</div>
		<a href="/resources">{am ? 'ማንበብ ይጀምሩ' : 'Start reading'} →</a>
	</section>
	</main>
</div>

<style>
	main {
		max-width: 1280px;
		margin: auto;
		padding: 0 6%;
		color: #181818;
	}
	.intro {
		display: grid;
		grid-template-columns: 1.15fr 1fr;
		gap: 5%;
		align-items: center;
		padding: 4rem 0 5rem;
	}
	.eyebrow {
		font-size: 11px;
		letter-spacing: 0.16em;
		font-weight: 700;
		margin-bottom: 1.5rem;
	}
	h1 {
		font-family: Batangas, system-ui, sans-serif;
		font-size: clamp(3.2rem, 6.6vw, 6rem);
		line-height: 1.02;
		letter-spacing: -0.04em;
	}
	h1 span {
		color: #777;
	}
	.lead {
		font-size: clamp(1.1rem, 1.7vw, 1.35rem);
		line-height: 1.75;
		max-width: 540px;
		margin: 2rem 0;
	}
	.download {
		display: inline-flex;
		align-items: center;
		justify-content: space-between;
		gap: 4rem;
		background: #181818;
		color: white;
		padding: 1rem 1.6rem;
		border-radius: 50px;
		font-weight: 600;
	}
	.download:hover {
		background: #444;
	}
	.download-note {
		font-size: 12px;
		color: #737373;
		margin-top: 0.75rem;
	}
	.ios-guide-link {
		display: inline-block;
		margin-top: 1rem;
		font-size: 0.9rem;
		font-weight: 600;
		text-decoration: underline;
		text-underline-offset: 4px;
	}
	.language-pair {
		display: flex;
		align-items: center;
		flex-wrap: wrap;
		gap: 1rem;
		margin-top: 3rem;
	}
	.language-pair span {
		font-size: 19px;
	}
	.language-pair small {
		width: 100%;
		color: #666;
	}
	.showcase {
		padding: 2rem 0 0;
		position: relative;
	}
	.showcase:before {
		content: '';
		position: absolute;
		inset: 10% -10% 18%;
		border-radius: 50%;
		background: #e8e5e2;
		z-index: -1;
	}
	.phone {
		max-width: 310px;
		margin: auto;
		border: 7px solid #252525;
		border-radius: 40px;
		overflow: hidden;
		box-shadow: 12px 25px 50px #0002;
		background: white;
	}
	.phone img {
		display: block;
		width: 100%;
		height: auto;
	}
	.appearance {
		display: flex;
		justify-content: center;
		gap: 0.4rem;
		margin: 1.5rem auto 0.5rem;
	}
	.appearance button {
		border: 1px solid #ccc;
		border-radius: 20px;
		font-size: 12px;
		padding: 0.45rem 1.25rem;
	}
	.appearance button.active {
		background: #222;
		color: white;
		border-color: #222;
	}
	.screen-caption {
		text-align: center;
		font-size: 11px;
		color: #777;
	}
	.features {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 3rem;
		border-top: 1px solid #ccc;
		border-bottom: 1px solid #ccc;
		padding: 3rem 0;
	}
	.features h2 {
		font-size: 1.5rem;
		line-height: 1.35;
		margin-bottom: 1rem;
		font-weight: 600;
	}
	.features p:last-child {
		line-height: 1.8;
		color: #666;
	}
	.tour {
		padding: 5rem 0 1rem;
	}
	.tour-head {
		max-width: 640px;
	}
	.tour-head h2 {
		font-size: clamp(2rem, 3.8vw, 3rem);
		line-height: 1.2;
		font-weight: 600;
		margin-bottom: 1rem;
	}
	.tour-head p:not(.eyebrow) {
		line-height: 1.8;
		color: #555;
	}
	.tour-head .appearance {
		justify-content: flex-start;
	}
	.screens {
		display: grid;
		grid-auto-flow: column;
		grid-auto-columns: minmax(220px, 1fr);
		gap: 2rem;
		overflow-x: auto;
		scroll-snap-type: x mandatory;
		padding: 2rem 0.5rem 1.5rem;
		margin: 0 -0.5rem;
	}
	.screens li {
		scroll-snap-align: start;
	}
	.phone.small {
		max-width: 230px;
		margin: 0 0 1.5rem;
		border-width: 5px;
		border-radius: 30px;
		box-shadow: 6px 14px 30px #0002;
	}
	.screens h3 {
		font-size: 1.15rem;
		font-weight: 600;
		margin: -0.75rem 0 0.5rem;
	}
	.screens p:not(.eyebrow) {
		line-height: 1.7;
		color: #666;
		font-size: 0.95rem;
	}
	.extras {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 2rem;
		border-top: 1px solid #ccc;
		padding: 2rem 0 0;
		margin-top: 1.5rem;
		color: #555;
		line-height: 1.7;
	}
	.extras li::before {
		content: '— ';
	}
	.letter {
		display: grid;
		grid-template-columns: 1fr 3fr;
		gap: 3rem;
		padding: 6rem 0;
		align-items: start;
	}
	.letter img {
		margin-top: 0.4rem;
	}
	.letter h2 {
		font-size: clamp(2rem, 3.8vw, 3rem);
		line-height: 1.2;
		font-weight: 600;
		margin-bottom: 2rem;
	}
	.letter p:not(.eyebrow) {
		font-size: 1.1rem;
		line-height: 1.9;
		margin: 1rem 0;
		color: #555;
	}
	.letter a {
		display: inline-block;
		margin-top: 1rem;
		text-decoration: underline;
		text-underline-offset: 5px;
	}
	.web-app {
		display: flex;
		align-items: center;
		gap: 3rem;
		background: #ececea;
		border-radius: 24px;
		padding: 2.5rem;
		margin-bottom: 5rem;
	}
	.web-app h2 {
		font-size: 1.5rem;
		font-weight: 600;
	}
	.web-app p {
		margin-top: 1rem;
		line-height: 1.7;
		max-width: 650px;
	}
	.web-app .instructions {
		font-size: 13px;
		color: #666;
	}
	.web-app a {
		white-space: nowrap;
		text-decoration: underline;
	}
	button:focus-visible,
	a:focus-visible {
		outline: 3px solid #777;
		outline-offset: 5px;
	}
	@media (max-width: 700px) {
		main {
			padding: 0 7%;
		}
		.intro {
			grid-template-columns: 1fr;
			padding-top: 3rem;
			gap: 2rem;
		}
		h1 {
			font-size: 3.8rem;
		}
		.showcase:before {
			inset: 12% 0 18%;
		}
		.phone {
			max-width: 280px;
		}
		.features {
			grid-template-columns: 1fr;
			gap: 2.5rem;
		}
		.screens {
			grid-auto-columns: 75%;
		}
		.extras {
			grid-template-columns: 1fr;
			gap: 1rem;
		}
		.letter {
			grid-template-columns: 1fr;
			padding: 4rem 0;
			gap: 2rem;
		}
		.web-app {
			flex-direction: column;
			align-items: start;
			padding: 1.7rem;
			gap: 1.5rem;
		}
	}
</style>
