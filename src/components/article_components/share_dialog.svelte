<script lang="ts">
	import {
		Check,
		ClipboardCopy,
		Copy,
		Download,
		Facebook,
		Instagram,
		Link2,
		Linkedin,
		LoaderCircle,
		MessageCircle,
		Send,
		Share2,
		Twitter,
		X
	} from '@lucide/svelte';
	import {
		drawShareCard,
		loadShareAssets,
		SHARE_RATIOS,
		SHARE_TEMPLATES,
		TELEGRAM_HOST,
		type ShareAssets,
		type ShareLink,
		type ShareOptions,
		type SharePost,
		type ShareRatio
	} from '$lib/share-card';

	let {
		open = $bindable(false),
		post,
		url
	}: { open?: boolean; post: SharePost | null; url: string } = $props();

	const am = $derived(post?.lang === 'am');
	const t = $derived(
		am
			? {
					title: 'ያጋሩ',
					style: 'ቅርጽ',
					size: 'መጠን',
					include: 'የሚካተቱ',
					link: 'በካርዱ ላይ ያለ ሊንክ',
					theme: 'ገጽታ',
					light: 'ብርሃን',
					dark: 'ጨለማ',
					download: 'አውርድ',
					share: 'አጋራ',
					copyImage: 'ምስሉን ቅዳ',
					links: 'ሊንኮች',
					copyLink: 'ሊንኩን ቅዳ',
					close: 'ዝጋ',
					none: 'የለም',
					both: 'ሁለቱም',
					image: 'የሽፋን ምስል',
					description: 'መግለጫ',
					date: 'ቀን',
					author: 'ጸሐፊ',
					category: 'ዓይነት',
					noImage: 'ይህ ጽሑፍ የሽፋን ምስል የለውም',
					linkCopied: 'ሊንኩ ተቀድቷል',
					imageCopied: 'ምስሉ ተቀድቷል',
					storySaved: 'የስቶሪ ምስሉ ተቀምጧል፤ ወደ ኢንስታግራም ስቶሪዎ ከሊንክ ስቲከር ጋር ያክሉት',
					failed: 'አልተሳካም፣ እባክዎ እንደገና ይሞክሩ'
				}
			: {
					title: 'Share article',
					style: 'Style',
					size: 'Size',
					include: 'Include',
					link: 'Link on card',
					theme: 'Theme',
					light: 'Light',
					dark: 'Dark',
					download: 'Download',
					share: 'Share',
					copyImage: 'Copy image',
					links: 'Links',
					copyLink: 'Copy link',
					close: 'Close',
					none: 'None',
					both: 'Both',
					image: 'Cover image',
					description: 'Description',
					date: 'Date',
					author: 'Author',
					category: 'Category',
					noImage: 'This article has no cover image',
					linkCopied: 'Link copied',
					imageCopied: 'Image copied',
					storySaved: 'Story image saved. Add it to your Instagram story with a link sticker',
					failed: "That didn't work, please try again"
				}
	);

	let options = $state<ShareOptions>({
		// Topic covers already carry their own lettering, so a framed style reads best by default
		template: 'frosted',
		ratio: 'story',
		theme: 'light',
		link: 'site',
		showImage: true,
		showDescription: true,
		showDate: true,
		showCategory: true,
		showAuthor: true
	});

	let dialog = $state<HTMLDialogElement>();
	let assets = $state.raw<ShareAssets | null>(null);
	let canvas = $state<HTMLCanvasElement>();
	let thumbs = $state<Record<string, HTMLCanvasElement>>({});
	let copied = $state('');
	let notice = $state<{ text: string; error: boolean } | null>(null);
	let canCopyImage = $state(false);

	let loadedSlug = '';
	let blob: Blob | null = null;
	let renderVersion = 0;
	let noticeTimer: ReturnType<typeof setTimeout>;

	const hasImage = $derived(!!assets?.image);
	const themed = $derived(SHARE_TEMPLATES.find((t) => t.id === options.template)?.themed ?? false);
	const ratio = $derived(SHARE_RATIOS[options.ratio]);
	const telegramLink = `https://${TELEGRAM_HOST}`;

	const includeToggles = $derived([
		{ key: 'showImage', label: t.image },
		{ key: 'showDescription', label: t.description },
		{ key: 'showDate', label: t.date },
		{ key: 'showAuthor', label: t.author },
		{ key: 'showCategory', label: t.category }
	] as const);

	const linkChoices = $derived<{ id: ShareLink; label: string }[]>([
		{ id: 'site', label: post?.siteHost ?? '' },
		{ id: 'telegram', label: 'Telegram' },
		{ id: 'both', label: t.both },
		{ id: 'none', label: t.none }
	]);

	$effect(() => {
		canCopyImage = typeof ClipboardItem !== 'undefined' && !!navigator.clipboard?.write;
	});

	// Keep the native <dialog> in step with `open`
	$effect(() => {
		if (!dialog) return;
		if (open && !dialog.open) dialog.showModal();
		else if (!open && dialog.open) dialog.close();
	});

	// Fonts, cover image and its colours are loaded once per article
	$effect(() => {
		if (!open || !post || loadedSlug === post.slug) return;
		const slug = (loadedSlug = post.slug);
		assets = null;
		loadShareAssets(post)
			.then((loaded) => {
				if (loadedSlug === slug) assets = loaded;
			})
			.catch(() => notify(t.failed, true));
	});

	// Redraw the preview and the style thumbnails whenever anything changes
	$effect(() => {
		if (!canvas || !assets || !post) return;
		const opts = { ...options };
		const target = canvas;
		const loaded = assets;
		const current = post;
		const thumbTargets = SHARE_TEMPLATES.map((t) => [t.id, thumbs[t.id]] as const);

		const frame = requestAnimationFrame(() => {
			drawShareCard(target, current, opts, loaded);
			const version = ++renderVersion;
			blob = null;
			target.toBlob((result) => {
				if (version === renderVersion) blob = result;
			}, 'image/png');

			const { width, height } = SHARE_RATIOS[opts.ratio];
			const thumbScale = 240 / Math.max(width, height);
			for (const [template, thumb] of thumbTargets) {
				if (thumb) drawShareCard(thumb, current, { ...opts, template }, loaded, thumbScale);
			}
		});
		return () => cancelAnimationFrame(frame);
	});

	function notify(text: string, error = false) {
		clearTimeout(noticeTimer);
		notice = { text, error };
		noticeTimer = setTimeout(() => (notice = null), 3500);
	}

	const getBlob = () =>
		new Promise<Blob>((resolve, reject) => {
			if (blob) return resolve(blob);
			if (!canvas) return reject(new Error('Nothing to export'));
			canvas.toBlob(
				(result) => (result ? resolve(result) : reject(new Error('Export failed'))),
				'image/png'
			);
		});

	const fileName = () => `${post?.slug ?? 'benaiah'}-${options.template}-${options.ratio}.png`;

	function save(file: Blob, name: string) {
		const href = URL.createObjectURL(file);
		const a = document.createElement('a');
		a.href = href;
		a.download = name;
		a.click();
		setTimeout(() => URL.revokeObjectURL(href), 1000);
	}

	async function download() {
		try {
			save(await getBlob(), fileName());
		} catch {
			notify(t.failed, true);
		}
	}

	async function share() {
		if (!post) return;
		try {
			const file = new File([await getBlob()], fileName(), { type: 'image/png' });
			if (navigator.canShare?.({ files: [file] })) {
				// Some share targets drop `url` when files are attached, so the link rides in the text
				await navigator.share({ files: [file], title: post.title, text: `${post.title}\n${url}` });
			} else if (navigator.share) {
				await navigator.share({ title: post.title, text: post.title, url });
			} else {
				await copyText(url, 'site');
			}
		} catch (error) {
			if ((error as Error).name !== 'AbortError') notify(t.failed, true);
		}
	}

	// Instagram has no web share link, so hand a story-sized image to the share sheet
	// (pick Instagram → Story there), or save it to post from the app on desktop
	async function shareToInstagramStory() {
		if (!post || !assets) return;
		options.ratio = 'story';
		const storyCanvas = document.createElement('canvas');
		drawShareCard(storyCanvas, post, { ...options, ratio: 'story' }, assets);
		const storyBlob = await new Promise<Blob | null>((resolve) =>
			storyCanvas.toBlob(resolve, 'image/png')
		);
		if (!storyBlob) return notify(t.failed, true);
		const file = new File([storyBlob], `${post.slug}-${options.template}-story.png`, {
			type: 'image/png'
		});
		try {
			if (navigator.canShare?.({ files: [file] })) {
				await navigator.share({ files: [file] });
				return;
			}
		} catch (error) {
			if ((error as Error).name === 'AbortError') return;
		}
		save(file, file.name);
		notify(t.storySaved);
	}

	async function copyImage() {
		try {
			await navigator.clipboard.write([new ClipboardItem({ 'image/png': getBlob() })]);
			flash('image');
			notify(t.imageCopied);
		} catch {
			notify(t.failed, true);
		}
	}

	async function copyText(value: string, key: string) {
		try {
			await navigator.clipboard.writeText(value);
			flash(key);
			notify(t.linkCopied);
		} catch {
			notify(t.failed, true);
		}
	}

	function flash(key: string) {
		copied = key;
		setTimeout(() => {
			if (copied === key) copied = '';
		}, 1600);
	}

	const socials = $derived.by(() => {
		const link = encodeURIComponent(url);
		const title = encodeURIComponent(post?.title ?? '');
		return [
			{ label: 'X', icon: Twitter, href: `https://x.com/intent/post?text=${title}&url=${link}` },
			{ label: 'Telegram', icon: Send, href: `https://t.me/share/url?url=${link}&text=${title}` },
			{
				label: 'LinkedIn',
				icon: Linkedin,
				href: `https://www.linkedin.com/sharing/share-offsite/?url=${link}`
			},
			{ label: 'WhatsApp', icon: MessageCircle, href: `https://wa.me/?text=${title}%20${link}` },
			{
				label: 'Facebook',
				icon: Facebook,
				href: `https://www.facebook.com/sharer/sharer.php?u=${link}`
			}
		];
	});

	const chip = (active: boolean) =>
		active
			? 'border-zinc-900 bg-zinc-900 text-white'
			: 'border-zinc-200 text-zinc-600 hover:border-zinc-400 hover:text-black';
</script>

<dialog
	bind:this={dialog}
	class="share-dialog w-[calc(100%-1rem)] max-w-5xl overflow-hidden rounded-lg border border-zinc-200 bg-white p-0 text-zinc-900 shadow-2xl"
	lang={post?.lang}
	onclose={() => (open = false)}
	onclick={(event) => {
		if (event.target === dialog) open = false;
	}}
>
	<div
		class="flex max-h-[92dvh] flex-col overflow-y-auto md:h-[min(88dvh,820px)] md:flex-row md:overflow-hidden"
	>
		<!-- Preview -->
		<div
			class="relative flex h-[46dvh] shrink-0 items-center justify-center bg-neutral-100 p-4 md:h-auto md:flex-1 md:p-8"
		>
			<canvas
				bind:this={canvas}
				class="max-h-full max-w-full rounded-md shadow-xl shadow-black/15 transition-opacity"
				class:opacity-0={!assets}
				aria-label="Share card preview"
			></canvas>
			{#if !assets}
				<LoaderCircle class="absolute size-6 animate-spin text-zinc-400" />
			{/if}
			<div
				class="absolute bottom-2 left-1/2 -translate-x-1/2 rounded-full bg-white/80 px-2.5 py-0.5 text-[11px] text-zinc-500 backdrop-blur"
			>
				{ratio.width} × {ratio.height}
			</div>
		</div>

		<!-- Controls -->
		<div
			class="flex flex-col gap-5 border-t p-5 md:w-[23rem] md:overflow-y-auto md:border-l md:border-t-0"
		>
			<div class="flex items-start gap-3">
				<div class="min-w-0 flex-1">
					<h2 class="text-lg font-semibold leading-tight">{t.title}</h2>
					<p class="mt-1 line-clamp-1 text-sm text-zinc-500">{post?.title}</p>
				</div>
				<button
					type="button"
					class="rounded p-1 text-zinc-500 transition-colors hover:bg-zinc-100 hover:text-black"
					onclick={() => (open = false)}
					aria-label={t.close}
				>
					<X class="size-4" />
				</button>
			</div>

			<section>
				<h3 class="mb-2 text-xs font-medium uppercase tracking-wide text-zinc-500">{t.style}</h3>
				<div class="grid grid-cols-4 gap-2">
					{#each SHARE_TEMPLATES as template}
						<button
							type="button"
							class="group flex flex-col items-center gap-1"
							onclick={() => (options.template = template.id)}
							aria-pressed={options.template === template.id}
						>
							<div
								class="flex h-20 w-full items-center justify-center rounded-md border bg-neutral-100 p-1 transition-all {options.template ===
								template.id
									? 'border-zinc-900 ring-1 ring-zinc-900'
									: 'border-transparent group-hover:border-zinc-300'}"
							>
								<canvas
									bind:this={thumbs[template.id]}
									class="max-h-full max-w-full rounded-[3px] shadow-sm"
								></canvas>
							</div>
							<span
								class="text-[11px] {options.template === template.id
									? 'font-medium text-black'
									: 'text-zinc-500'}">{template.label}</span
							>
						</button>
					{/each}
				</div>
			</section>

			<section>
				<h3 class="mb-2 text-xs font-medium uppercase tracking-wide text-zinc-500">{t.size}</h3>
				<div class="flex flex-wrap gap-1.5">
					{#each Object.entries(SHARE_RATIOS) as [id, size]}
						<button
							type="button"
							class="rounded-full border px-3 py-1 text-xs transition-colors {chip(
								options.ratio === id
							)}"
							onclick={() => (options.ratio = id as ShareRatio)}
						>
							{size.label} <span class="opacity-60">{size.hint}</span>
						</button>
					{/each}
				</div>
			</section>

			<section>
				<h3 class="mb-2 text-xs font-medium uppercase tracking-wide text-zinc-500">{t.include}</h3>
				<div class="flex flex-wrap gap-1.5">
					{#each includeToggles as toggle}
						{@const disabled = toggle.key === 'showImage' && !!assets && !hasImage}
						<button
							type="button"
							class="flex items-center gap-1 rounded-full border px-3 py-1 text-xs transition-colors disabled:cursor-not-allowed disabled:opacity-40 {chip(
								options[toggle.key] && !disabled
							)}"
							{disabled}
							title={disabled ? t.noImage : undefined}
							aria-pressed={options[toggle.key]}
							onclick={() => (options[toggle.key] = !options[toggle.key])}
						>
							{#if options[toggle.key] && !disabled}<Check class="size-3" />{/if}
							{toggle.label}
						</button>
					{/each}
				</div>
			</section>

			<section>
				<h3 class="mb-2 text-xs font-medium uppercase tracking-wide text-zinc-500">{t.link}</h3>
				<div class="flex flex-wrap gap-1.5">
					{#each linkChoices as choice}
						<button
							type="button"
							class="flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs transition-colors {chip(
								options.link === choice.id
							)}"
							onclick={() => (options.link = choice.id)}
						>
							{#if choice.id === 'telegram'}<Send class="size-3" />{/if}
							{choice.label}
						</button>
					{/each}
				</div>
			</section>

			{#if themed}
				<section>
					<h3 class="mb-2 text-xs font-medium uppercase tracking-wide text-zinc-500">{t.theme}</h3>
					<div class="flex gap-1.5">
						{#each ['light', 'dark'] as const as theme}
							<button
								type="button"
								class="rounded-full border px-3 py-1 text-xs transition-colors {chip(
									options.theme === theme
								)}"
								onclick={() => (options.theme = theme)}
							>
								{t[theme]}
							</button>
						{/each}
					</div>
				</section>
			{/if}

			<!-- Image actions -->
			<section class="flex gap-2">
				<button
					type="button"
					class="flex flex-1 items-center justify-center gap-2 rounded-md bg-zinc-900 px-3 py-2 text-sm font-medium text-white transition-colors hover:bg-zinc-700 disabled:opacity-50"
					disabled={!assets}
					onclick={download}
				>
					<Download class="size-4" />
					{t.download}
				</button>
				<button
					type="button"
					class="flex flex-1 items-center justify-center gap-2 rounded-md border px-3 py-2 text-sm font-medium transition-colors hover:bg-zinc-100 disabled:opacity-50"
					disabled={!assets}
					onclick={share}
				>
					<Share2 class="size-4" />
					{t.share}
				</button>
				{#if canCopyImage}
					<button
						type="button"
						class="flex items-center justify-center rounded-md border px-3 py-2 transition-colors hover:bg-zinc-100 disabled:opacity-50"
						disabled={!assets}
						onclick={copyImage}
						title={t.copyImage}
						aria-label={t.copyImage}
					>
						{#if copied === 'image'}<Check class="size-4 text-emerald-500" />{:else}<ClipboardCopy
								class="size-4"
							/>{/if}
					</button>
				{/if}
			</section>

			<!-- Links -->
			<section class="flex flex-col gap-1.5">
				<h3 class="mb-0.5 text-xs font-medium uppercase tracking-wide text-zinc-500">{t.links}</h3>
				{#each [{ key: 'site', url }, { key: 'telegram', url: telegramLink }] as link}
					<div class="flex items-center gap-2 rounded-md border bg-neutral-50 py-1 pl-2.5 pr-1">
						{#if link.key === 'telegram'}
							<Send class="size-3.5 shrink-0 text-sky-500" />
						{:else}
							<Link2 class="size-3.5 shrink-0 text-zinc-500" />
						{/if}
						<span class="min-w-0 flex-1 truncate text-xs text-zinc-600">
							{link.url.replace(/^https?:\/\/(www\.)?/, '')}
						</span>
						<button
							type="button"
							class="rounded p-1.5 text-zinc-500 transition-colors hover:bg-zinc-200 hover:text-black"
							onclick={() => copyText(link.url, link.key)}
							aria-label={t.copyLink}
						>
							{#if copied === link.key}<Check class="size-3.5 text-emerald-500" />{:else}<Copy
									class="size-3.5"
								/>{/if}
						</button>
					</div>
				{/each}
				<div class="flex flex-wrap items-center gap-1 pt-1">
					<button
						type="button"
						class="flex items-center gap-1.5 rounded-full border border-pink-200 bg-gradient-to-r from-amber-50 via-pink-50 to-violet-50 py-1.5 pl-2 pr-3 text-xs text-pink-700 transition-all hover:border-pink-400 hover:shadow-sm disabled:opacity-50"
						disabled={!assets}
						onclick={shareToInstagramStory}
						title="Instagram story"
					>
						<Instagram class="size-4" /> Story
					</button>
					{#each socials as social}
						<a
							href={social.href}
							target="_blank"
							rel="noopener noreferrer"
							class="rounded-full p-2 text-zinc-500 transition-colors hover:bg-zinc-100 hover:text-black"
							title={social.label}
							aria-label={social.label}
						>
							<social.icon class="size-4" />
						</a>
					{/each}
				</div>
			</section>

			{#if notice}
				<p
					class="rounded-md px-3 py-2 text-xs {notice.error
						? 'bg-red-50 text-red-700'
						: 'bg-emerald-50 text-emerald-700'}"
					role="status"
				>
					{notice.text}
				</p>
			{/if}
		</div>
	</div>
</dialog>

<style>
	.share-dialog {
		margin: auto;
		max-height: 92dvh;
	}
	.share-dialog::backdrop {
		background: rgb(0 0 0 / 0.5);
		backdrop-filter: blur(2px);
	}
</style>
