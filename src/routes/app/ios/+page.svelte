<script lang="ts">
	import Seo from '../../../components/seo.svelte';
	import Nav from '../../../components/nav/nav.svelte';
	import BlurredBackground from '../../../components/blurred_background.svelte';
</script>

<Seo
	title="Install Benaiah on iPhone · Benaiah"
	description="A step-by-step guide to installing the Benaiah iPhone app with Sideloadly, SideStore, or AltStore."
	image="/app/og.jpg"
	imageAlt="The Benaiah app home screen"
/>
<BlurredBackground />
<div class="no-scrollbar relative min-h-screen">
	<Nav />

	<main>
	<a class="back" href="/app">← Back to the Benaiah app</a>
	<section class="hero">
		<p class="eyebrow">BENAIAH FOR IPHONE</p>
		<h1>Install Benaiah on iPhone</h1>
		<p class="summary">
			Benaiah isn’t in the App Store. Install it with a free helper app and your own Apple Account. The first setup takes about 20 minutes and requires a computer.
		</p>
		<div class="release-download">
			<div><strong>Benaiah for iPhone</strong><span>Version 1.0.0 · 18.1 MB · iOS 15 or newer</span></div>
			<a href="https://github.com/BenaiahOrg/BenaiahApp/releases/download/v1.0.0/Benaiah-1.0.0.ipa">Download the IPA <span aria-hidden="true">↓</span></a>
		</div>
	</section>

	<section class="requirements" aria-labelledby="before">
		<h2 id="before">Before you start</h2>
		<ul>
			<li><strong>An iPhone with iOS 15 or newer.</strong> Check in Settings → General → About → iOS Version.</li>
			<li><strong>A Windows PC or Mac and a cable</strong> to connect it to your iPhone.</li>
			<li><strong>Your Apple Account</strong> (Apple ID). The helper app uses it to let Benaiah run. You can create a separate free Apple Account for this purpose if you prefer.</li>
			<li><strong>Wi-Fi</strong>, with your computer and iPhone on the same network.</li>
		</ul>
		<div class="callout">
			<strong>Refresh once a week.</strong> Apple lets apps installed this way run for 7 days at a time. Refreshing takes a few seconds. If the week runs out, Benaiah will not open until you refresh it; your data is not deleted.
			<br /><br />
			<strong>Three apps at most.</strong> A free Apple Account can have three sideloaded apps at once. SideStore and AltStore each count as one.
		</div>
	</section>

	<section class="methods" aria-labelledby="choose">
		<div class="section-heading">
			<p class="eyebrow">CHOOSE A HELPER APP</p>
			<h2 id="choose">Three ways to install</h2>
			<p>All three are free. If you are unsure, choose Sideloadly.</p>
		</div>
		<div class="method-grid">
			<a href="#sideloadly"><strong>Sideloadly <em>Simplest</em></strong><span>Everything happens on your computer. Connect your iPhone once a week to refresh.</span></a>
			<a href="#sidestore"><strong>SideStore</strong><span>After setup, refresh on your iPhone, so you rarely need the computer.</span></a>
			<a href="#altstore"><strong>AltStore</strong><span>Refreshes while your iPhone and computer are on the same Wi-Fi.</span></a>
		</div>
	</section>

	<section class="guide" id="sideloadly">
		<p class="eyebrow">OPTION 1</p><h2>Install with Sideloadly</h2>
		<h3>On your computer</h3>
		<ol>
			<li><span class="step-copy"><strong>Windows only: install iTunes and iCloud from Apple’s website.</strong> Sideloadly needs both to talk to your iPhone. Do not use the Microsoft Store versions; uninstall those first if you have them.</span><img class="step-shot computer" src="/app/ios-guide/itunes-icloud.svg" alt="Apple download buttons for iTunes and iCloud, rather than Microsoft Store versions." /></li>
			<li><span class="step-copy"><strong>Install <a href="https://sideloadly.io" target="_blank" rel="noopener noreferrer">Sideloadly</a></strong> from its official website.</span><img class="step-shot computer" src="/app/ios-guide/sideloadly-site.svg" alt="The download buttons on Sideloadly’s official website." /></li>
			<li><span class="step-copy"><strong><a href="https://github.com/BenaiahOrg/BenaiahApp/releases/download/v1.0.0/Benaiah-1.0.0.ipa">Download the Benaiah <code>.ipa</code> file</a></strong> to your computer.</span></li>
			<li><span class="step-copy"><strong>Connect and unlock your iPhone.</strong> If asked “Trust This Computer?”, tap Trust and enter your passcode.</span><img class="step-shot phone-shot" src="/app/ios-guide/trust-computer.svg" alt="iPhone prompt asking whether to trust the connected computer." /></li>
			<li><span class="step-copy"><strong>Open Sideloadly.</strong> Drag the Benaiah file onto the IPA icon, confirm your iPhone is selected, and enter your Apple Account email.</span><div class="step-shot computer branded-shot sideloadly-main"><img src="/app/ios-guide/sideloadly-main.svg" alt="Sideloadly’s main screen, showing its IPA area, device picker, and Apple Account field." /><img class="benaiah-shot-logo" src="/icons/icon-192.png" alt="Benaiah app icon" /><span class="ipa-name">Benaiah-1.0.0.ipa</span></div></li>
			<li><span class="step-copy"><strong>Open Advanced options and enable “Use automatic bundle ID”</strong> if it is not already enabled. Click <strong>Start</strong>.</span><div class="step-shot computer branded-shot sideloadly-advanced"><img src="/app/ios-guide/sideloadly-advanced.svg" alt="Sideloadly advanced options, with Use automatic bundle ID enabled." /><img class="benaiah-shot-logo" src="/icons/icon-192.png" alt="Benaiah app icon" /><span class="ipa-name">Benaiah-1.0.0.ipa</span><span class="app-name">Benaiah</span></div></li>
			<li><span class="step-copy"><strong>Sign in when asked.</strong> Enter your Apple Account password and the verification code Apple sends. Wait until Sideloadly confirms that it has finished.</span><img class="step-shot computer" src="/app/ios-guide/sideloadly-signin.svg" alt="Sideloadly prompts for an Apple Account password and verification code." /></li>
		</ol>
		<h3>On your iPhone</h3>
		<ol>
			<li><span class="step-copy"><strong>Trust your Apple Account.</strong> Go to Settings → General → VPN &amp; Device Management. Under Developer App, tap your email, tap Trust, then tap Trust again.</span><img class="step-shot phone-shot" src="/app/ios-guide/trust-developer.svg" alt="The iPhone’s developer app trust screen and trust confirmation." /></li>
			<li><span class="step-copy"><strong>Turn on Developer Mode</strong> on iOS 16 or newer: Settings → Privacy &amp; Security → Developer Mode. Turn it on and tap Restart. After the restart, tap Turn On and enter your passcode.</span><img class="step-shot phone-shot" src="/app/ios-guide/developer-mode.svg" alt="The Developer Mode setting and restart confirmation on iPhone." /></li>
			<li><span class="step-copy"><strong>Open Benaiah.</strong></span></li>
		</ol>
		<div class="weekly"><h3>Every week</h3><p>Connect your iPhone to the computer, open Sideloadly, and click Start again with the same Benaiah file and Apple Account. It runs for another 7 days. Sideloadly also offers automatic refreshing in its settings while the computer is on.</p></div>
	</section>

	<section class="guide" id="sidestore">
		<p class="eyebrow">OPTION 2</p><h2>Install with SideStore</h2>
		<h3>On your iPhone</h3>
		<ol><li><span class="step-copy"><strong>Get LocalDevVPN from the App Store.</strong> Open it, tap Connect, and allow it to add a VPN configuration. It must be connected whenever SideStore installs or refreshes an app.</span><img class="step-shot phone-shot" src="/app/ios-guide/localdevvpn.svg" alt="LocalDevVPN’s Connect button and the iPhone prompt to allow a VPN configuration." /></li></ol>
		<h3>On your computer</h3>
		<ol>
			<li><span class="step-copy"><strong>Windows only: install iTunes from Apple’s website.</strong> The Microsoft Store version does not work.</span><img class="step-shot computer" src="/app/ios-guide/itunes-icloud.svg" alt="Apple’s iTunes download option, rather than the Microsoft Store version." /></li>
			<li><span class="step-copy"><strong>Install <a href="https://iloader.app" target="_blank" rel="noopener noreferrer">iloader</a></strong>, the tool that installs SideStore on your iPhone.</span><img class="step-shot computer" src="/app/ios-guide/iloader-site.svg" alt="The iloader download buttons for Windows and Mac." /></li>
			<li><span class="step-copy"><strong>Connect and unlock your iPhone.</strong> Trust the computer if prompted.</span></li>
			<li><span class="step-copy"><strong>Open iloader and sign in</strong> with your Apple Account email, password, and Apple verification code.</span><img class="step-shot computer" src="/app/ios-guide/iloader-signin.svg" alt="iloader’s Apple Account sign-in panel and verification-code prompt." /></li>
			<li><span class="step-copy"><strong>Select your iPhone, then click SideStore (Stable).</strong> Wait for “SideStore Installed!”</span><img class="step-shot computer" src="/app/ios-guide/iloader-install.svg" alt="iloader with SideStore Stable selected and its installation confirmation." /></li>
		</ol>
		<h3>Back on your iPhone</h3>
		<ol>
			<li><span class="step-copy"><strong>Trust your Apple Account</strong> in Settings → General → VPN &amp; Device Management, then trust it twice.</span></li>
			<li><span class="step-copy"><strong>Turn on Developer Mode</strong> on iOS 16 or newer in Settings → Privacy &amp; Security → Developer Mode, restart, then confirm with your passcode.</span></li>
			<li><span class="step-copy"><strong>Finish setting up SideStore.</strong> Connect LocalDevVPN, open SideStore, and sign in with the same Apple Account. Go to My Apps and tap the “7 DAYS” button next to SideStore; choose Yes or Refresh Now if prompted.</span><img class="step-shot phone-shot" src="/app/ios-guide/sidestore-refresh.svg" alt="SideStore’s My Apps screen with the 7 DAYS button beside SideStore." /></li>
			<li><span class="step-copy"><strong><a href="https://github.com/BenaiahOrg/BenaiahApp/releases/download/v1.0.0/Benaiah-1.0.0.ipa">Download the Benaiah <code>.ipa</code> in Safari.</a></strong> If this page opened in another app, open it in Safari. Tap Download; the file is saved in Files → Downloads.</span></li>
			<li><span class="step-copy"><strong>Install Benaiah.</strong> With LocalDevVPN connected, open SideStore → My Apps → <strong>+</strong>, choose the Benaiah file from Downloads, and wait for installation.</span><div class="step-shot phone-shot branded-shot file-picker"><img src="/app/ios-guide/sidestore-add.svg" alt="SideStore’s My Apps screen with its add button and a downloaded IPA selected." /><span class="picker-name">Benaiah-1.0.0.ipa</span><img class="picker-logo" src="/icons/icon-192.png" alt="Benaiah app icon" /></div></li>
			<li><span class="step-copy"><strong>Open Benaiah.</strong></span></li>
		</ol>
		<div class="weekly"><h3>Every week</h3><p>Open LocalDevVPN and tap Connect. Then open SideStore → My Apps → Refresh All. If SideStore itself has expired, connect to the computer and install it again using iloader.</p></div>
	</section>

	<section class="guide" id="altstore">
		<p class="eyebrow">OPTION 3</p><h2>Install with AltStore</h2>
		<h3>On your computer</h3>
		<ol>
			<li><span class="step-copy"><strong>Windows only: install iTunes and iCloud from Apple’s website.</strong> AltServer needs them. Do not use the Microsoft Store versions.</span><img class="step-shot computer" src="/app/ios-guide/itunes-icloud.svg" alt="Apple download buttons for iTunes and iCloud." /></li>
			<li><span class="step-copy"><strong>Install AltServer from <a href="https://altstore.io" target="_blank" rel="noopener noreferrer">altstore.io</a>.</strong> Choose AltStore Classic. On Mac, move AltServer to Applications and open it. On Windows, run Setup, then run AltServer as administrator from Start.</span><img class="step-shot computer" src="/app/ios-guide/altstore-site.svg" alt="AltStore’s download buttons and the AltServer menu-bar or system-tray icon." /></li>
			<li><span class="step-copy"><strong>Connect and unlock your iPhone.</strong> Trust the computer if asked.</span></li>
			<li><span class="step-copy"><strong>Turn on Wi-Fi sync.</strong> On Mac, select the iPhone in Finder and enable “Show this iPhone when on Wi-Fi.” On Windows, use iTunes and enable “Sync with this iPhone over Wi-Fi,” then click Apply.</span><img class="step-shot computer" src="/app/ios-guide/wifi-sync.svg" alt="Finder and iTunes Wi-Fi sync options for an iPhone." /></li>
			<li><span class="step-copy"><strong>Use the AltServer icon → Install AltStore → your iPhone.</strong> Enter your Apple Account email and password. On Mac, install the requested Mail plug-in if prompted. Wait for the installation confirmation.</span><img class="step-shot computer" src="/app/ios-guide/altserver-install.svg" alt="AltServer’s Install AltStore menu and Apple Account sign-in prompt." /></li>
		</ol>
		<h3>On your iPhone</h3>
		<ol>
			<li><span class="step-copy"><strong>Trust your Apple Account</strong> in Settings → General → VPN &amp; Device Management, then trust it twice.</span></li>
			<li><span class="step-copy"><strong>Turn on Developer Mode</strong> on iOS 16 or newer in Settings → Privacy &amp; Security → Developer Mode, restart, then confirm with your passcode.</span></li>
			<li><span class="step-copy"><strong><a href="https://github.com/BenaiahOrg/BenaiahApp/releases/download/v1.0.0/Benaiah-1.0.0.ipa">Download the Benaiah <code>.ipa</code> in Safari.</a></strong> Tap Download; it will be saved in Files → Downloads.</span></li>
			<li><span class="step-copy"><strong>Install Benaiah.</strong> Keep AltServer running, with the iPhone and computer on the same Wi-Fi. In AltStore, open My Apps, tap <strong>+</strong>, and choose Benaiah from Downloads. Sign in with the same Apple Account if asked.</span><div class="step-shot phone-shot branded-shot file-picker"><img src="/app/ios-guide/altstore-add.svg" alt="AltStore’s My Apps screen with its add button and a downloaded IPA selected." /><span class="picker-name">Benaiah-1.0.0.ipa</span><img class="picker-logo" src="/icons/icon-192.png" alt="Benaiah app icon" /></div></li>
			<li><span class="step-copy"><strong>Open Benaiah.</strong></span></li>
		</ol>
		<div class="weekly"><h3>Every week</h3><p>AltStore refreshes Benaiah automatically when your iPhone is on the same Wi-Fi as the computer and AltServer is running. You can also use AltStore → My Apps → Refresh All.</p></div>
	</section>

	<section class="updates">
		<h2>Updating Benaiah</h2>
		<p>New versions will appear on the <a href="https://github.com/BenaiahOrg/BenaiahApp/releases" target="_blank" rel="noopener noreferrer">Benaiah releases page</a>. Download the new <code>.ipa</code> and install it with the same helper app and Apple Account; it replaces the previous version.</p>
	</section>

	<section class="help">
		<h2>If something goes wrong</h2>
		<details><summary>Benaiah will not open or closes immediately</summary><p>If it worked previously, the 7 days likely expired. Refresh it with the helper app. If it has never opened, check that you trusted your Apple Account and enabled Developer Mode when required.</p></details>
		<details><summary>I cannot find Developer Mode</summary><p>It is only on iOS 16 or newer and appears after an app has been installed with your Apple Account. On iOS 15, skip this step.</p></details>
		<details><summary>It says I have reached a limit</summary><p>A free Apple Account can have three sideloaded apps at once, including SideStore or AltStore. It can also register only ten new apps each week; wait a few days if you reach that limit.</p></details>
		<details><summary>Is it safe to enter my Apple Account password?</summary><p>The helper app sends it to Apple to obtain the 7-day signing permission. Benaiah itself does not receive it. You may use a separate free Apple Account for sideloading.</p></details>
		<p class="support">Need help? Contact the team on <a href="https://t.me/Benaiah_Contact" target="_blank" rel="noopener noreferrer">Telegram</a> or <a href="mailto:BenaiahTeamOrg@gmail.com">email</a>.</p>
	</section>
	</main>
</div>

<style>
	main { max-width: 820px; margin: auto; padding: 2.5rem 6% 5rem; color: #181818; }
	.back { display: inline-block; margin-bottom: 3rem; text-decoration: underline; text-underline-offset: 4px; }
	.hero { max-width: 730px; }
	.eyebrow { font-size: .72rem; letter-spacing: .15em; font-weight: 700; margin-bottom: 1rem; }
	h1, h2 { font-family: Batangas, system-ui, sans-serif; letter-spacing: -.035em; }
	h1 { font-size: clamp(2.8rem, 7vw, 5rem); line-height: 1.04; }
	h2 { font-size: clamp(2rem, 5vw, 3rem); line-height: 1.15; margin-bottom: 1rem; }
	h3 { font-size: 1.05rem; margin: 1.75rem 0 .8rem; }
	.summary { font-size: 1.2rem; line-height: 1.75; margin: 1.7rem 0; color: #484848; }
	.release-download { display: flex; align-items: center; justify-content: space-between; gap: 1.25rem; margin-top: 2.25rem; padding: 1.15rem 0; border-top: 1px solid #747474; border-bottom: 1px solid #747474; }
	.release-download strong, .release-download span { display: block; }
	.release-download strong { font-size: 1rem; }
	.release-download div > span { margin-top: .25rem; color: #555; font-size: .85rem; }
	.release-download a { display: inline-flex; align-items: center; gap: .85rem; flex: none; padding: .75rem 1rem; border-radius: 999px; background: #1d1d1d; color: #fff; font-size: .9rem; font-weight: 600; text-decoration: none; }
	.release-download a:hover { background: #3c3c3c; }
	.release-download a span { font-size: 1.15rem; line-height: .8; }
	.callout, .weekly { padding: 1.4rem 1.5rem; border-radius: 14px; line-height: 1.65; }
	.requirements, .methods, .guide, .updates, .help { padding: 3.25rem 0; border-bottom: 1px solid #d5d5d5; }
	.updates p { color: #555; line-height: 1.65; max-width: 700px; }
	.requirements ul { padding-left: 1.4rem; }
	.requirements li { line-height: 1.65; padding-left: .35rem; margin: .65rem 0; }
	.guide ol { counter-reset: install-step; padding: 0; margin: 0; }
	.guide ol li { display: grid; grid-template-columns: 30px minmax(0, 1fr) minmax(180px, 265px); align-items: start; column-gap: .8rem; counter-increment: install-step; list-style: none; line-height: 1.6; margin: 0 0 1.15rem; padding: 0; }
	.guide ol li::before { content: counter(install-step); display: grid; place-items: center; width: 28px; height: 28px; border-radius: 999px; background: #202020; color: #fff; font-size: .8rem; font-weight: 700; line-height: 1; }
	.step-copy { min-width: 0; padding-top: .1rem; }
	.step-shot { grid-column: 3; width: 100%; height: auto; margin: 0; border: 1px solid #cfcfcf; border-radius: 8px; box-shadow: 0 7px 18px rgb(0 0 0 / .08); background: #fff; }
	.step-shot:not(.branded-shot) { display: block; }
	.step-shot.phone-shot { max-width: 225px; justify-self: end; }
	.branded-shot { position: relative; overflow: hidden; }
	.branded-shot > img:first-child { display: block; width: 100%; height: auto; }
	.benaiah-shot-logo { position: absolute; left: 8%; width: 11.6%; border-radius: 7px; }
	.ipa-name, .app-name, .picker-name { position: absolute; color: #f0f0f0; font-size: 7px; font-weight: 600; line-height: 1; text-align: center; }
	.sideloadly-main .benaiah-shot-logo { top: 27%; }
	.sideloadly-main .ipa-name { top: 57%; left: 3%; width: 20%; background: #3a3a3a; }
	.sideloadly-advanced .benaiah-shot-logo { top: 20%; }
	.sideloadly-advanced .ipa-name { top: 43%; left: 3%; width: 20%; background: #3a3a3a; }
	.sideloadly-advanced .app-name { top: 60.5%; left: 24%; width: 26%; padding-left: 2px; background: #1f1f1f; font-size: 8px; text-align: left; }
	.file-picker .picker-name { left: 24%; top: 79.5%; width: 58%; color: #000; font-size: 8px; text-align: left; background: #fff; }
	.file-picker .picker-logo { position: absolute; left: 10.5%; top: 76.5%; width: 9%; border-radius: 4px; }
	.callout { margin-top: 2rem; background: #e9eeea; }
	.section-heading > p:last-child { color: #5d5d5d; line-height: 1.7; }
	.method-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem; margin-top: 2rem; }
	.method-grid a { color: inherit; border: 1px solid #c9c9c9; border-radius: 14px; padding: 1.35rem; text-decoration: none; transition: transform .15s, border-color .15s; }
	.method-grid a:hover { transform: translateY(-3px); border-color: #333; }
	.method-grid strong, .method-grid span { display: block; }
	.method-grid em { display: inline-block; font-size: .65rem; letter-spacing: .08em; font-style: normal; color: #4d7251; margin-left: .35rem; }
	.method-grid span { margin-top: .7rem; color: #5a5a5a; font-size: .9rem; line-height: 1.55; }
	.guide > h2 { margin-bottom: .3rem; }
	.weekly { margin-top: 2.5rem; background: #efefed; }
	.weekly h3 { margin: 0 0 .5rem; }
	.weekly p { margin: 0; }
	.help { border: 0; }
	details { border-top: 1px solid #d5d5d5; padding: 1.2rem 0; }
	summary { cursor: pointer; font-weight: 600; }
	details p { color: #555; line-height: 1.7; margin: 1rem 0 .2rem; }
	.support { margin-top: 2rem; }
	a { color: #274f3b; }
	code { font-size: .9em; }
	@media (max-width: 650px) { main { padding: 2rem 7% 4rem; } .release-download { align-items: flex-start; flex-direction: column; } .method-grid { grid-template-columns: 1fr; } .guide ol li { grid-template-columns: 28px minmax(0, 1fr); row-gap: .8rem; } .step-shot { grid-column: 2; width: min(100%, 320px); } .step-shot.phone-shot { justify-self: start; } .requirements, .methods, .guide, .updates, .help { padding: 2.75rem 0; } }
</style>
