// Share cards for devotionals and study materials are drawn on a <canvas> in the browser,
// so every style / size / toggle previews instantly and exports as a PNG without a server.
import logoBlackUrl from '$lib/assets/logo/BlackLogo.png';
import logoWhiteUrl from '$lib/assets/logo/WhiteLogo.png';
import lexend300 from '@fontsource/lexend/files/lexend-latin-300-normal.woff2?url';
import lexend400 from '@fontsource/lexend/files/lexend-latin-400-normal.woff2?url';
import lexend500 from '@fontsource/lexend/files/lexend-latin-500-normal.woff2?url';
import lexend600 from '@fontsource/lexend/files/lexend-latin-600-normal.woff2?url';
import lexend700 from '@fontsource/lexend/files/lexend-latin-700-normal.woff2?url';
import lora400 from '@fontsource/lora/files/lora-latin-400-normal.woff2?url';
import lora400Italic from '@fontsource/lora/files/lora-latin-400-italic.woff2?url';
import lora500 from '@fontsource/lora/files/lora-latin-500-normal.woff2?url';
import oswald600 from '@fontsource/oswald/files/oswald-latin-600-normal.woff2?url';
import oswald700 from '@fontsource/oswald/files/oswald-latin-700-normal.woff2?url';
import ethiopicSans300 from '@fontsource/noto-sans-ethiopic/files/noto-sans-ethiopic-ethiopic-300-normal.woff2?url';
import ethiopicSans400 from '@fontsource/noto-sans-ethiopic/files/noto-sans-ethiopic-ethiopic-400-normal.woff2?url';
import ethiopicSans500 from '@fontsource/noto-sans-ethiopic/files/noto-sans-ethiopic-ethiopic-500-normal.woff2?url';
import ethiopicSans600 from '@fontsource/noto-sans-ethiopic/files/noto-sans-ethiopic-ethiopic-600-normal.woff2?url';
import ethiopicSans700 from '@fontsource/noto-sans-ethiopic/files/noto-sans-ethiopic-ethiopic-700-normal.woff2?url';
import ethiopicSerif400 from '@fontsource/noto-serif-ethiopic/files/noto-serif-ethiopic-ethiopic-400-normal.woff2?url';
import ethiopicSerif500 from '@fontsource/noto-serif-ethiopic/files/noto-serif-ethiopic-ethiopic-500-normal.woff2?url';

export const SHARE_NAME = 'Benaiah';
export const SHARE_SUBTITLE = { en: 'Devotionals & study materials', am: 'የጥሞና ጽሑፎችና የጥናት መርጃዎች' };
export const TELEGRAM_HOST = 't.me/benaiah_org';

export type ShareTemplate =
	| 'cover'
	| 'split'
	| 'poster'
	| 'frosted'
	| 'gallery'
	| 'article'
	| 'card';
export type ShareRatio = 'story' | 'portrait' | 'square' | 'landscape' | 'wide';
export type ShareTheme = 'light' | 'dark';
export type ShareLink = 'site' | 'telegram' | 'both' | 'none';

export const SHARE_TEMPLATES: { id: ShareTemplate; label: string; themed: boolean }[] = [
	{ id: 'cover', label: 'Cover', themed: false },
	{ id: 'split', label: 'Split', themed: false },
	{ id: 'poster', label: 'Poster', themed: false },
	{ id: 'frosted', label: 'Frosted', themed: false },
	{ id: 'gallery', label: 'Gallery', themed: true },
	{ id: 'article', label: 'Article', themed: true },
	{ id: 'card', label: 'Card', themed: true }
];

export const SHARE_RATIOS: Record<
	ShareRatio,
	{ label: string; hint: string; width: number; height: number }
> = {
	story: { label: 'Story', hint: '9:16', width: 1080, height: 1920 },
	portrait: { label: 'Portrait', hint: '4:5', width: 1080, height: 1350 },
	square: { label: 'Square', hint: '1:1', width: 1080, height: 1080 },
	landscape: { label: 'Link', hint: '1.91:1', width: 1200, height: 630 },
	wide: { label: 'Wide', hint: '16:9', width: 1920, height: 1080 }
};

export interface SharePost {
	slug: string;
	lang: 'en' | 'am';
	title: string;
	description: string;
	// Already formatted in the article's own language (e.g. "Feb 27, 2025" or "የካቲት 20, 2017")
	date: string;
	category: string;
	author: string;
	headerImage: string | null;
	siteHost: string;
}

export interface ShareOptions {
	template: ShareTemplate;
	ratio: ShareRatio;
	theme: ShareTheme;
	link: ShareLink;
	showImage: boolean;
	showDescription: boolean;
	showDate: boolean;
	showCategory: boolean;
	showAuthor: boolean;
}

export interface Palette {
	hue: number;
	sat: number;
}

export interface ShareAssets {
	image: HTMLImageElement | null;
	logoBlack: HTMLImageElement;
	logoWhite: HTMLImageElement;
	icon: HTMLImageElement;
	palette: Palette;
}

// ---------------------------------------------------------------------------------------------
// Assets

// Lexend, Lora and Oswald have no Ge'ez glyphs, so Amharic falls through to Noto Ethiopic
const SANS = '"ShareSans", "ShareEthiopicSans", "Lexend", system-ui, sans-serif';
const SERIF = '"ShareSerif", "ShareEthiopicSerif", Georgia, "Times New Roman", serif';
const CONDENSED = '"ShareCondensed", "ShareEthiopicSans", Impact, "Arial Narrow", sans-serif';

// Registered under their own names so they never clash with the site's own fonts
const FONT_FACES: [string, string, FontFaceDescriptors][] = [
	['ShareSans', lexend300, { weight: '300' }],
	['ShareSans', lexend400, { weight: '400' }],
	['ShareSans', lexend500, { weight: '500' }],
	['ShareSans', lexend600, { weight: '600' }],
	['ShareSans', lexend700, { weight: '700' }],
	['ShareSerif', lora400, { weight: '400' }],
	['ShareSerif', lora400Italic, { weight: '400', style: 'italic' }],
	['ShareSerif', lora500, { weight: '500' }],
	['ShareCondensed', oswald600, { weight: '600' }],
	['ShareCondensed', oswald700, { weight: '700' }],
	['ShareEthiopicSans', ethiopicSans300, { weight: '300' }],
	['ShareEthiopicSans', ethiopicSans400, { weight: '400' }],
	['ShareEthiopicSans', ethiopicSans500, { weight: '500' }],
	['ShareEthiopicSans', ethiopicSans600, { weight: '600' }],
	['ShareEthiopicSans', ethiopicSans700, { weight: '700' }],
	['ShareEthiopicSerif', ethiopicSerif400, { weight: '400' }],
	['ShareEthiopicSerif', ethiopicSerif500, { weight: '500' }]
];

let fontsReady: Promise<void> | null = null;
export const loadShareFonts = () =>
	(fontsReady ??= Promise.all(
		FONT_FACES.map(async ([family, url, descriptors]) => {
			try {
				const face = await new FontFace(family, `url(${url})`, descriptors).load();
				document.fonts.add(face);
			} catch {
				// Fall back to the system fonts in the font stacks
			}
		})
	).then(() => undefined));

export const loadImage = (src: string) =>
	new Promise<HTMLImageElement>((resolve, reject) => {
		const img = new Image();
		// Other origins need CORS, or the canvas becomes tainted and can't be exported
		if (/^https?:\/\//.test(src) && !src.startsWith(location.origin)) img.crossOrigin = 'anonymous';
		img.onload = () => resolve(img);
		img.onerror = reject;
		img.src = src;
	});

export const loadShareAssets = async (post: SharePost): Promise<ShareAssets> => {
	const [logoBlack, logoWhite, icon, image] = await Promise.all([
		loadImage(logoBlackUrl),
		loadImage(logoWhiteUrl),
		loadImage('/icons/icon-512.png'),
		post.headerImage ? loadImage(post.headerImage).catch(() => null) : null,
		loadShareFonts()
	]);
	return { logoBlack, logoWhite, icon, image, palette: extractPalette(image) };
};

const DEFAULT_PALETTE: Palette = { hue: 24, sat: 16 };

// The average colour of the image, leaning toward its more saturated pixels
export const extractPalette = (img: HTMLImageElement | null): Palette => {
	if (!img) return DEFAULT_PALETTE;
	const size = 32;
	const canvas = document.createElement('canvas');
	canvas.width = canvas.height = size;
	const ctx = canvas.getContext('2d', { willReadFrequently: true });
	if (!ctx) return DEFAULT_PALETTE;
	ctx.drawImage(img, 0, 0, size, size);

	let r = 0,
		g = 0,
		b = 0,
		total = 0;
	const data = ctx.getImageData(0, 0, size, size).data;
	for (let i = 0; i < data.length; i += 4) {
		const max = Math.max(data[i], data[i + 1], data[i + 2]);
		const min = Math.min(data[i], data[i + 1], data[i + 2]);
		const weight = 0.15 + (max - min) / 255;
		r += data[i] * weight;
		g += data[i + 1] * weight;
		b += data[i + 2] * weight;
		total += weight;
	}
	const [hue, sat] = rgbToHueSat(r / total, g / total, b / total);
	return { hue, sat: Math.min(45, Math.max(10, sat)) };
};

const rgbToHueSat = (r: number, g: number, b: number): [number, number] => {
	r /= 255;
	g /= 255;
	b /= 255;
	const max = Math.max(r, g, b);
	const min = Math.min(r, g, b);
	const d = max - min;
	if (d === 0) return [DEFAULT_PALETTE.hue, 0];
	const l = (max + min) / 2;
	const s = d / (1 - Math.abs(2 * l - 1));
	let h = max === r ? ((g - b) / d) % 6 : max === g ? (b - r) / d + 2 : (r - g) / d + 4;
	h = Math.round(h * 60);
	return [h < 0 ? h + 360 : h, s * 100];
};

const tone = (p: Palette, lightness: number, satScale = 1, alpha = 1) =>
	`hsla(${p.hue}, ${Math.min(100, p.sat * satScale).toFixed(1)}%, ${lightness}%, ${alpha})`;

const white = (alpha: number) => `rgba(255, 255, 255, ${alpha})`;

// ---------------------------------------------------------------------------------------------
// Text layout

interface TextStyle {
	family: string;
	size: number;
	minSize?: number;
	weight?: number;
	italic?: boolean;
	color: string;
	lineHeight?: number;
	maxLines?: number;
	tracking?: number;
	upper?: boolean;
}

interface Block {
	lines: string[];
	style: TextStyle;
	size: number;
	lh: number;
	height: number;
	width: number;
}

const setFont = (ctx: CanvasRenderingContext2D, style: TextStyle, size: number) => {
	ctx.font = `${style.italic ? 'italic ' : ''}${style.weight ?? 400} ${size}px ${style.family}`;
	// letterSpacing isn't in every browser yet; without it the text is just untracked
	const tracked = ctx as CanvasRenderingContext2D & { letterSpacing?: string };
	if ('letterSpacing' in tracked) tracked.letterSpacing = `${style.tracking ?? 0}px`;
};

const wrapLines = (ctx: CanvasRenderingContext2D, text: string, maxWidth: number) => {
	const lines: string[] = [];
	let line = '';
	for (const word of text.split(/\s+/).filter(Boolean)) {
		const next = line ? `${line} ${word}` : word;
		if (!line || ctx.measureText(next).width <= maxWidth) line = next;
		else {
			lines.push(line);
			line = word;
		}
	}
	if (line) lines.push(line);
	return lines;
};

const ellipsize = (ctx: CanvasRenderingContext2D, line: string, maxWidth: number) => {
	let text = line;
	while (text && ctx.measureText(`${text}…`).width > maxWidth) text = text.slice(0, -1);
	return `${text.trimEnd().replace(/[\s,.;:–-]+$/, '')}…`;
};

// Shrinks the text toward minSize until it fits in maxLines, then truncates what's left
const layout = (
	ctx: CanvasRenderingContext2D,
	text: string,
	style: TextStyle,
	maxWidth: number
): Block => {
	const content = style.upper ? text.toUpperCase() : text;
	const maxLines = style.maxLines ?? Infinity;
	const minSize = style.minSize ?? style.size;
	let size = style.size;
	let lines: string[] = [];
	for (;;) {
		setFont(ctx, style, size);
		lines = wrapLines(ctx, content, maxWidth);
		if (lines.length <= maxLines || size <= minSize) break;
		size = Math.max(minSize, size * 0.92);
	}
	if (lines.length > maxLines) {
		lines = lines.slice(0, maxLines);
		lines[maxLines - 1] = ellipsize(ctx, lines[maxLines - 1], maxWidth);
	}
	const lh = size * (style.lineHeight ?? 1.25);
	const width = Math.max(0, ...lines.map((line) => ctx.measureText(line).width));
	return { lines, style, size, lh, height: lines.length * lh, width };
};

const drawBlock = (
	ctx: CanvasRenderingContext2D,
	block: Block,
	x: number,
	y: number,
	align: CanvasTextAlign = 'left'
) => {
	setFont(ctx, block.style, block.size);
	ctx.fillStyle = block.style.color;
	ctx.textAlign = align;
	ctx.textBaseline = 'middle';
	block.lines.forEach((line, i) => ctx.fillText(line, x, y + i * block.lh + block.lh / 2));
};

// A vertical stack of blocks; `gap` is the space above an item (ignored for the first)
interface StackItem {
	height: number;
	gap: number;
	draw: (y: number) => void;
}

const stackHeight = (items: StackItem[]) =>
	items.reduce((total, item, i) => total + item.height + (i ? item.gap : 0), 0);

const drawStack = (items: StackItem[], top: number) => {
	let y = top;
	items.forEach((item, i) => {
		if (i) y += item.gap;
		item.draw(y);
		y += item.height;
	});
	return y;
};

// Builds the stack at decreasing scales until it fits in maxHeight
const fitStack = (build: (k: number) => StackItem[], maxHeight: number) => {
	let k = 1;
	let items = build(k);
	while (stackHeight(items) > maxHeight && k > 0.55) {
		k *= 0.92;
		items = build(k);
	}
	return items;
};

// ---------------------------------------------------------------------------------------------
// Drawing helpers

const drawImageCover = (
	ctx: CanvasRenderingContext2D,
	img: CanvasImageSource & { width: number; height: number },
	x: number,
	y: number,
	w: number,
	h: number,
	focusY = 0.4
) => {
	const iw = img instanceof HTMLImageElement ? img.naturalWidth : img.width;
	const ih = img instanceof HTMLImageElement ? img.naturalHeight : img.height;
	const scale = Math.max(w / iw, h / ih);
	const sw = w / scale;
	const sh = h / scale;
	ctx.drawImage(img, (iw - sw) / 2, (ih - sh) * focusY, sw, sh, x, y, w, h);
};

const drawRoundedImage = (
	ctx: CanvasRenderingContext2D,
	img: HTMLImageElement,
	x: number,
	y: number,
	w: number,
	h: number,
	radius: number
) => {
	ctx.save();
	ctx.beginPath();
	ctx.roundRect(x, y, w, h, radius);
	ctx.clip();
	drawImageCover(ctx, img, x, y, w, h);
	ctx.restore();
};

const withShadow = (
	ctx: CanvasRenderingContext2D,
	color: string,
	blur: number,
	offsetY: number,
	draw: () => void
) => {
	ctx.save();
	ctx.shadowColor = color;
	ctx.shadowBlur = blur;
	ctx.shadowOffsetY = offsetY;
	draw();
	ctx.restore();
};

// Downscale then upscale: a soft blur that works even where ctx.filter doesn't (Safari)
const drawBlurred = (
	ctx: CanvasRenderingContext2D,
	img: HTMLImageElement,
	w: number,
	h: number
) => {
	let source: HTMLCanvasElement | HTMLImageElement = img;
	for (const size of [12, 48]) {
		const step = document.createElement('canvas');
		step.width = size;
		step.height = Math.max(1, Math.round((size * h) / w));
		const stepCtx = step.getContext('2d');
		if (!stepCtx) return;
		stepCtx.imageSmoothingQuality = 'high';
		if (source === img) drawImageCover(stepCtx, img, 0, 0, step.width, step.height);
		else stepCtx.drawImage(source, 0, 0, step.width, step.height);
		source = step;
	}
	ctx.imageSmoothingEnabled = true;
	ctx.imageSmoothingQuality = 'high';
	ctx.drawImage(source, 0, 0, w, h);
};

// Logos aren't all square, so fit them inside the box instead of stretching
const drawLogo = (
	ctx: CanvasRenderingContext2D,
	img: HTMLImageElement,
	x: number,
	y: number,
	size: number
) => {
	const scale = size / Math.max(img.naturalWidth, img.naturalHeight);
	const w = img.naturalWidth * scale;
	const h = img.naturalHeight * scale;
	ctx.drawImage(img, x + (size - w) / 2, y + (size - h) / 2, w, h);
};

// ---------------------------------------------------------------------------------------------
// Rendering

interface Scene {
	ctx: CanvasRenderingContext2D;
	W: number;
	H: number;
	u: number;
	pad: number;
	land: boolean;
	post: SharePost;
	opts: ShareOptions;
	assets: ShareAssets;
	p: Palette;
	image: HTMLImageElement | null;
	dark: boolean;
}

const metaText = (s: Scene) =>
	[s.opts.showAuthor && s.post.author, s.opts.showDate && s.post.date]
		.filter(Boolean)
		.join('  ·  ');

const linkText = (s: Scene) =>
	({
		site: s.post.siteHost,
		telegram: TELEGRAM_HOST,
		both: `${s.post.siteHost}  ·  ${TELEGRAM_HOST}`,
		none: ''
	})[s.opts.link];

// The Benaiah wordmark, sitting in the bottom-right corner of a size × size box
const drawMark = (s: Scene, x: number, y: number, size: number, onDark: boolean) => {
	const { ctx } = s;
	const img = onDark ? s.assets.logoWhite : s.assets.logoBlack;
	const h = size * 0.55;
	const w = (img.naturalWidth / img.naturalHeight) * h;
	ctx.save();
	ctx.globalAlpha = onDark ? 0.9 : 0.85;
	ctx.drawImage(img, x + size - w, y + size - h, w, h);
	ctx.restore();
};

// The square app icon, clipped to a circle or rounded square
const drawIcon = (s: Scene, x: number, y: number, size: number, radius = size / 2) => {
	const { ctx } = s;
	ctx.save();
	ctx.beginPath();
	ctx.roundRect(x, y, size, size, radius);
	ctx.clip();
	ctx.drawImage(s.assets.icon, x, y, size, size);
	ctx.restore();
};

// Stand-in artwork for articles without a cover image
const drawFallbackArt = (s: Scene) => {
	const { ctx, W, H, p } = s;
	const gradient = ctx.createLinearGradient(0, 0, W, H);
	gradient.addColorStop(0, tone(p, 30, 1.1));
	gradient.addColorStop(1, tone(p, 9, 0.8));
	ctx.fillStyle = gradient;
	ctx.fillRect(0, 0, W, H);
	const size = Math.max(W, H) * 0.75;
	ctx.save();
	ctx.globalAlpha = 0.06;
	drawLogo(ctx, s.assets.logoWhite, W - size * 0.62, H * 0.04, size);
	ctx.restore();
};

const text = (
	s: Scene,
	content: string,
	style: TextStyle,
	maxWidth: number,
	x: number,
	align: CanvasTextAlign,
	gap: number
): StackItem | null => {
	if (!content) return null;
	const block = layout(s.ctx, content, style, maxWidth);
	return { height: block.height, gap, draw: (y) => drawBlock(s.ctx, block, x, y, align) };
};

const compact = (items: (StackItem | null | false)[]) =>
	items.filter((item): item is StackItem => !!item);

// 1. Full-bleed image, text on a dark fade at the bottom
const drawCoverTemplate = (s: Scene) => {
	const { ctx, W, H, u, pad, opts, post } = s;
	if (s.image) drawImageCover(ctx, s.image, 0, 0, W, H);
	else drawFallbackArt(s);

	const markSize = 54 * u;
	const textW = s.land ? W * 0.62 : W - pad * 2;
	const narrowW = textW - (s.land ? 0 : markSize * 1.7 + 28 * u);
	const items = fitStack(
		(k) =>
			compact([
				opts.showCategory &&
					text(
						s,
						post.category,
						{
							family: SANS,
							size: 26 * u * k,
							weight: 500,
							color: white(0.75),
							tracking: 4 * u,
							upper: true,
							maxLines: 1
						},
						textW,
						pad,
						'left',
						0
					),
				text(
					s,
					post.title,
					{
						family: SERIF,
						size: (s.land ? 92 : 112) * u * k,
						minSize: 54 * u * k,
						color: '#fff',
						lineHeight: 1.08,
						maxLines: 4
					},
					textW,
					pad,
					'left',
					18 * u * k
				),
				opts.showDescription &&
					text(
						s,
						post.description,
						{
							family: SANS,
							size: 31 * u * k,
							weight: 300,
							color: white(0.8),
							lineHeight: 1.45,
							maxLines: 3
						},
						narrowW,
						pad,
						'left',
						26 * u * k
					),
				text(
					s,
					metaText(s),
					{ family: SERIF, size: 40 * u * k, italic: true, color: white(0.88), maxLines: 1 },
					narrowW,
					pad,
					'left',
					36 * u * k
				),
				text(
					s,
					linkText(s),
					{
						family: SANS,
						size: 26 * u * k,
						color: white(0.62),
						tracking: 1.6 * u,
						upper: true,
						maxLines: 2
					},
					narrowW,
					pad,
					'left',
					26 * u * k
				)
			]),
		H - pad * 2
	);

	const top = H - pad - stackHeight(items);
	const fadeTop = Math.max(0, top - 420 * u);
	const fade = ctx.createLinearGradient(0, fadeTop, 0, H);
	fade.addColorStop(0, 'rgba(0, 0, 0, 0)');
	fade.addColorStop(0.45, 'rgba(0, 0, 0, 0.55)');
	fade.addColorStop(1, 'rgba(0, 0, 0, 0.9)');
	ctx.fillStyle = fade;
	ctx.fillRect(0, fadeTop, W, H - fadeTop);

	drawStack(items, top);
	drawMark(s, W - pad - markSize * 0.88, H - pad - markSize, markSize, true);
};

// 2. A solid panel in the image's own colour above (or beside) the image
const drawSplitTemplate = (s: Scene) => {
	const { ctx, W, H, u, pad, opts, post, p } = s;
	let panel = { x: 0, y: 0, w: W, h: H };
	let photo: typeof panel | null = null;
	if (s.image && s.land) {
		panel = { x: 0, y: 0, w: W * 0.5, h: H };
		photo = { x: W * 0.5, y: 0, w: W * 0.5, h: H };
	} else if (s.image) {
		const panelH = Math.round(H * (H / W > 1.5 ? 0.5 : 0.46));
		panel = { x: 0, y: 0, w: W, h: panelH };
		photo = { x: 0, y: panelH, w: W, h: H - panelH };
	}

	ctx.fillStyle = tone(p, 19, 0.75);
	ctx.fillRect(panel.x, panel.y, panel.w, panel.h);
	if (s.image && photo) drawImageCover(ctx, s.image, photo.x, photo.y, photo.w, photo.h);

	const textW = panel.w - pad * 2;
	const cx = panel.x + panel.w / 2;
	const items = fitStack(
		(k) =>
			compact([
				opts.showCategory &&
					text(
						s,
						post.category,
						{
							family: SANS,
							size: 23 * u * k,
							weight: 500,
							color: tone(p, 78, 1.2, 0.9),
							tracking: 4 * u,
							upper: true,
							maxLines: 1
						},
						textW,
						cx,
						'center',
						0
					),
				text(
					s,
					post.title,
					{
						family: SERIF,
						size: (s.land ? 76 : 100) * u * k,
						minSize: 46 * u * k,
						color: '#fff',
						lineHeight: 1.12,
						maxLines: 4
					},
					textW,
					cx,
					'center',
					22 * u * k
				),
				opts.showDescription &&
					text(
						s,
						post.description,
						{
							family: SANS,
							size: 28 * u * k,
							weight: 300,
							color: white(0.72),
							lineHeight: 1.5,
							maxLines: 3
						},
						textW,
						cx,
						'center',
						26 * u * k
					),
				text(
					s,
					linkText(s),
					{
						family: SANS,
						size: 26 * u * k,
						color: white(0.8),
						tracking: 1.6 * u,
						upper: true,
						maxLines: 2
					},
					textW,
					cx,
					'center',
					42 * u * k
				),
				text(
					s,
					metaText(s),
					{ family: SERIF, size: 36 * u * k, italic: true, color: tone(p, 82, 1.3), maxLines: 1 },
					textW,
					cx,
					'center',
					30 * u * k
				)
			]),
		panel.h - pad * 2
	);
	drawStack(items, panel.y + (panel.h - stackHeight(items)) / 2);

	const markSize = 50 * u;
	drawMark(s, W - pad * 0.8 - markSize * 0.88, H - pad * 0.8 - markSize, markSize, true);
};

// 3. Darkened image with a big condensed title in a pale tint of its colour
const drawPosterTemplate = (s: Scene) => {
	const { ctx, W, H, u, pad, opts, post, p } = s;
	if (s.image) drawImageCover(ctx, s.image, 0, 0, W, H);
	else drawFallbackArt(s);
	ctx.fillStyle = 'rgba(12, 9, 7, 0.5)';
	ctx.fillRect(0, 0, W, H);
	const vignette = ctx.createRadialGradient(
		W / 2,
		H / 2,
		Math.min(W, H) * 0.3,
		W / 2,
		H / 2,
		Math.max(W, H) * 0.75
	);
	vignette.addColorStop(0, 'rgba(0, 0, 0, 0)');
	vignette.addColorStop(1, 'rgba(0, 0, 0, 0.45)');
	ctx.fillStyle = vignette;
	ctx.fillRect(0, 0, W, H);

	const footerH = 70 * u;
	const textW = W - pad * 2;
	const items = fitStack(
		(k) =>
			compact([
				opts.showCategory &&
					text(
						s,
						post.category,
						{
							family: SANS,
							size: 25 * u * k,
							weight: 500,
							color: tone(p, 86, 1.3, 0.85),
							tracking: 6 * u,
							upper: true,
							maxLines: 1
						},
						textW,
						W / 2,
						'center',
						0
					),
				text(
					s,
					post.title,
					{
						family: CONDENSED,
						size: (s.land ? 150 : 190) * u * k,
						minSize: 68 * u * k,
						weight: 700,
						color: tone(p, 88, 1.5),
						lineHeight: 1.02,
						tracking: 1 * u,
						upper: true,
						maxLines: 5
					},
					textW,
					W / 2,
					'center',
					22 * u * k
				),
				opts.showDescription &&
					text(
						s,
						post.description,
						{
							family: SANS,
							size: 29 * u * k,
							weight: 300,
							color: white(0.82),
							lineHeight: 1.5,
							maxLines: 3
						},
						textW * 0.9,
						W / 2,
						'center',
						34 * u * k
					),
				text(
					s,
					metaText(s),
					{
						family: SERIF,
						size: 38 * u * k,
						italic: true,
						color: tone(p, 88, 1.3, 0.95),
						maxLines: 1
					},
					textW,
					W / 2,
					'center',
					30 * u * k
				)
			]),
		H - pad * 2 - footerH * 2
	);
	drawStack(items, (H - stackHeight(items)) / 2);

	const markSize = 50 * u;
	const link = text(
		s,
		linkText(s),
		{ family: SANS, size: 25 * u, color: white(0.78), tracking: 1.6 * u, upper: true, maxLines: 1 },
		W - pad * 2 - markSize * 2,
		pad,
		'left',
		0
	);
	link?.draw(H - pad - markSize / 2 - link.height / 2);
	drawMark(s, W - pad - markSize * 0.88, H - pad - markSize, markSize, true);
};

// 4. A dark card floating on a blurred, tinted copy of the image
const drawFrostedTemplate = (s: Scene) => {
	const { ctx, W, H, u, opts, post, p } = s;
	if (s.image) {
		drawBlurred(ctx, s.image, W, H);
		ctx.fillStyle = tone(p, 78, 0.9, 0.5);
		ctx.fillRect(0, 0, W, H);
	} else {
		const gradient = ctx.createLinearGradient(0, 0, 0, H);
		gradient.addColorStop(0, tone(p, 84, 1.2));
		gradient.addColorStop(1, tone(p, 68, 1.1));
		ctx.fillStyle = gradient;
		ctx.fillRect(0, 0, W, H);
	}
	const glow = ctx.createRadialGradient(W * 0.3, 0, 0, W * 0.3, 0, Math.max(W, H) * 0.8);
	glow.addColorStop(0, white(0.35));
	glow.addColorStop(1, white(0));
	ctx.fillStyle = glow;
	ctx.fillRect(0, 0, W, H);

	const margin = (s.land ? 56 : 96) * u;
	const ip = 34 * u;
	const cardW = W - margin * 2;
	const linkGap = 24 * u;
	const link = text(
		s,
		linkText(s),
		{
			family: SANS,
			size: 25 * u,
			color: tone(p, 22, 0.6, 0.55),
			tracking: 1.4 * u,
			upper: true,
			maxLines: 1
		},
		cardW,
		margin,
		'left',
		0
	);
	const linkH = link ? link.height + linkGap : 0;
	const available = H - margin * 2 - linkH;

	const buildText = (width: number) => (k: number) =>
		compact([
			opts.showCategory &&
				text(
					s,
					post.category,
					{
						family: SANS,
						size: 21 * u * k,
						weight: 500,
						color: white(0.55),
						tracking: 3 * u,
						upper: true,
						maxLines: 1
					},
					width,
					0,
					'left',
					0
				),
			text(
				s,
				post.title,
				{
					family: SANS,
					size: 50 * u * k,
					minSize: 32 * u * k,
					weight: 600,
					color: '#fff',
					lineHeight: 1.2,
					maxLines: 3
				},
				width,
				0,
				'left',
				12 * u * k
			),
			opts.showDescription &&
				text(
					s,
					post.description,
					{
						family: SANS,
						size: 26 * u * k,
						weight: 300,
						color: white(0.62),
						lineHeight: 1.45,
						maxLines: 3
					},
					width,
					0,
					'left',
					14 * u * k
				),
			text(
				s,
				metaText(s),
				{ family: SANS, size: 30 * u * k, color: white(0.66), maxLines: 1 },
				width,
				0,
				'left',
				14 * u * k
			)
		]);

	let cardH: number;
	let paint: (top: number) => void;
	const markSize = 42 * u;

	if (s.land && s.image) {
		cardH = available;
		const side = cardH - ip * 2;
		const textW = cardW - side - ip * 3;
		const items = fitStack(buildText(textW), side);
		paint = (top) => {
			drawRoundedImage(ctx, s.image!, margin + ip, top + ip, side, side, 12 * u);
			drawMark(
				s,
				margin + ip + side - markSize - 16 * u,
				top + ip + side - markSize - 16 * u,
				markSize,
				true
			);
			const tx = margin + ip * 2 + side;
			ctx.save();
			ctx.translate(tx, 0);
			drawStack(items, top + (cardH - stackHeight(items)) / 2);
			ctx.restore();
		};
	} else {
		const textW = cardW - ip * 2;
		const imageGap = 30 * u;
		const items = fitStack(buildText(textW), available * 0.5);
		const textH = stackHeight(items);
		const imageH = s.image ? Math.min(textW, available - ip * 2 - imageGap - textH) : 0;
		cardH = ip * 2 + textH + (s.image ? imageH + imageGap : 0);
		paint = (top) => {
			if (s.image) {
				drawRoundedImage(ctx, s.image, margin + ip, top + ip, textW, imageH, 12 * u);
				drawMark(
					s,
					margin + ip + textW - markSize - 16 * u,
					top + ip + imageH - markSize - 16 * u,
					markSize,
					true
				);
			}
			ctx.save();
			ctx.translate(margin + ip, 0);
			drawStack(items, top + ip + (s.image ? imageH + imageGap : 0));
			ctx.restore();
		};
	}

	const top = (H - cardH - linkH) / 2;
	withShadow(ctx, 'rgba(30, 20, 15, 0.35)', 90 * u, 34 * u, () => {
		ctx.fillStyle = tone(p, 15, 0.45);
		ctx.beginPath();
		ctx.roundRect(margin, top, cardW, cardH, 30 * u);
		ctx.fill();
	});
	paint(top);
	link?.draw(top + cardH + linkGap);
};

// 5. The image as a framed print on a quiet background, title above and byline below
const drawGalleryTemplate = (s: Scene) => {
	const { ctx, W, H, u, pad, opts, post } = s;
	const ink = s.dark ? '#f2f2f2' : '#2b2b2b';
	const muted = s.dark ? '#a3a3a3' : '#6b6b6b';
	const faint = s.dark ? '#7a7a7a' : '#8a8a8a';
	const bg = ctx.createRadialGradient(W / 2, H * 0.45, 0, W / 2, H * 0.45, Math.max(W, H) * 0.7);
	bg.addColorStop(0, s.dark ? '#1c1c1c' : '#ffffff');
	bg.addColorStop(1, s.dark ? '#0d0d0d' : '#efefee');
	ctx.fillStyle = bg;
	ctx.fillRect(0, 0, W, H);

	const drawFramed = (x: number, y: number, w: number, h: number) => {
		withShadow(ctx, s.dark ? 'rgba(0, 0, 0, 0.7)' : 'rgba(0, 0, 0, 0.28)', 70 * u, 34 * u, () => {
			ctx.fillStyle = '#000';
			ctx.fillRect(x, y, w, h);
		});
		ctx.drawImage(s.image!, x, y, w, h);
		const markSize = Math.min(44 * u, w * 0.08);
		drawMark(s, x + w - markSize - 18 * u, y + h - markSize - 18 * u, markSize, true);
	};
	const fitImage = (maxW: number, maxH: number) => {
		const img = s.image!;
		const scale = Math.min(maxW / img.naturalWidth, maxH / img.naturalHeight);
		return { w: img.naturalWidth * scale, h: img.naturalHeight * scale };
	};

	const header = (width: number, x: number, align: CanvasTextAlign, big: boolean) => (k: number) =>
		compact([
			opts.showCategory &&
				text(
					s,
					post.category,
					{
						family: SANS,
						size: 22 * u * k,
						weight: 500,
						color: faint,
						tracking: 4 * u,
						upper: true,
						maxLines: 1
					},
					width,
					x,
					align,
					0
				),
			text(
				s,
				post.title,
				{
					family: SANS,
					size: (big ? 84 : 54) * u * k,
					minSize: 34 * u * k,
					weight: 600,
					color: ink,
					lineHeight: 1.2,
					maxLines: 3
				},
				width,
				x,
				align,
				14 * u * k
			),
			opts.showDescription &&
				text(
					s,
					post.description,
					{
						family: SANS,
						size: 27 * u * k,
						weight: 300,
						color: muted,
						lineHeight: 1.5,
						maxLines: 3
					},
					width,
					x,
					align,
					18 * u * k
				)
		]);
	const footer = (width: number, x: number, align: CanvasTextAlign, k = 1) =>
		compact([
			text(
				s,
				metaText(s),
				{ family: SANS, size: 34 * u * k, color: muted, maxLines: 1 },
				width,
				x,
				align,
				0
			),
			text(
				s,
				linkText(s),
				{
					family: SANS,
					size: 25 * u * k,
					color: faint,
					tracking: 1.6 * u,
					upper: true,
					maxLines: 2
				},
				width,
				x,
				align,
				12 * u * k
			)
		]);

	if (s.land && s.image) {
		const boxW = W * 0.5 - pad * 1.25;
		const img = fitImage(boxW, H - pad * 2);
		drawFramed(pad + (boxW - img.w) / 2, (H - img.h) / 2, img.w, img.h);
		const x = W * 0.5 + pad * 0.25;
		const width = W - x - pad;
		const items = fitStack(
			(k) => [
				...header(width, x, 'left', false)(k),
				...footer(width, x, 'left', k).map((item, i) => (i ? item : { ...item, gap: 40 * u * k }))
			],
			H - pad * 2
		);
		drawStack(items, (H - stackHeight(items)) / 2);
		return;
	}

	const width = W - pad * 2;
	const gap = 56 * u;
	const top = fitStack(header(width, W / 2, 'center', !s.image), (H - pad * 2) * 0.4);
	const bottom = footer(width, W / 2, 'center');
	const topH = stackHeight(top);
	const bottomH = stackHeight(bottom);

	if (!s.image) {
		const items = [...top, ...bottom.map((item, i) => (i ? item : { ...item, gap }))];
		drawStack(items, (H - stackHeight(items)) / 2);
		return;
	}

	const img = fitImage(W - 2 * 96 * u, H - pad * 2 - topH - bottomH - gap * 2);
	const total = topH + gap + img.h + gap + bottomH;
	let y = (H - total) / 2;
	y = drawStack(top, y) + gap;
	drawFramed((W - img.w) / 2, y, img.w, img.h);
	drawStack(bottom, y + img.h + gap);
};

// 6. Looks like the top of the post in a reader app
const drawArticleTemplate = (s: Scene) => {
	const { ctx, W, H, u, opts, post } = s;
	const pad = 64 * u;
	const ink = s.dark ? '#f5f5f5' : '#0a0a0a';
	const ink2 = s.dark ? '#d4d4d8' : '#3f3f46';
	const muted = s.dark ? '#a1a1aa' : '#6b6b6b';
	ctx.fillStyle = s.dark ? '#0c0c0c' : '#ffffff';
	ctx.fillRect(0, 0, W, H);

	const avatar = opts.showAuthor ? 88 * u : 0;
	const dateLine = [opts.showDate && post.date, opts.showCategory && post.category]
		.filter(Boolean)
		.join('  ·  ');
	const bylineCount = (opts.showAuthor ? 1 : 0) + (dateLine ? 1 : 0);
	const header = (width: number) => (k: number) =>
		compact([
			text(
				s,
				linkText(s),
				{
					family: SANS,
					size: 25 * u * k,
					color: muted,
					tracking: 1.3 * u,
					upper: true,
					maxLines: 1
				},
				width,
				pad,
				'left',
				0
			),
			text(
				s,
				post.title,
				{
					family: SANS,
					size: 76 * u * k,
					minSize: 42 * u * k,
					weight: 700,
					color: ink,
					lineHeight: 1.12,
					tracking: -1 * u,
					maxLines: 4
				},
				width,
				pad,
				'left',
				14 * u * k
			),
			opts.showAuthor &&
				text(
					s,
					post.author,
					{
						family: SANS,
						size: 25 * u * k,
						weight: 500,
						color: ink2,
						tracking: 1.3 * u,
						upper: true,
						maxLines: 1
					},
					width - avatar - 20 * u,
					pad,
					'left',
					30 * u * k
				),
			text(
				s,
				dateLine,
				{
					family: SANS,
					size: 25 * u * k,
					color: muted,
					tracking: 1.3 * u,
					upper: true,
					maxLines: 1
				},
				width - avatar - 20 * u,
				pad,
				'left',
				10 * u * k
			)
		]);
	const description = (width: number, maxLines: number) =>
		opts.showDescription
			? text(
					s,
					post.description,
					{
						family: SANS,
						size: 32 * u,
						weight: 300,
						color: s.dark ? '#c4c4c4' : '#4a4a4a',
						lineHeight: 1.6,
						maxLines
					},
					width,
					pad,
					'left',
					0
				)
			: null;

	const drawAvatar = (items: StackItem[], top: number, width: number) => {
		if (!opts.showAuthor) return;
		// Vertically centred on the byline (author + date rows at the end of the header)
		const bylineH = stackHeight(items.slice(-bylineCount));
		const cx = pad + width - avatar / 2;
		const cy = top + stackHeight(items) - bylineH / 2;
		drawIcon(s, cx - avatar / 2, cy - avatar / 2, avatar);
	};
	const markSize = 44 * u;

	if (s.land && s.image) {
		const imageW = W * 0.42;
		const width = W - pad * 3 - imageW;
		const items = fitStack(header(width), H * 0.62);
		const desc = description(width, 3);
		const headH = stackHeight(items);
		const total = headH + (desc ? 30 * u + desc.height : 0);
		const top = (H - total) / 2;
		drawStack(items, top);
		drawAvatar(items, top, width);
		desc?.draw(top + headH + 30 * u);
		const ix = W - pad - imageW;
		drawRoundedImage(ctx, s.image, ix, pad, imageW, H - pad * 2, 14 * u);
		drawMark(s, ix + imageW - markSize - 18 * u, H - pad - markSize - 18 * u, markSize, true);
		return;
	}

	const width = W - pad * 2;
	const items = fitStack(header(width), (H - pad * 2) * 0.45);
	const headH = stackHeight(items);
	const ruleGap = 34 * u;
	let desc = description(width, 4);
	const room = H - pad * 2 - headH - ruleGap * 2;
	let imageH = 0;
	if (s.image) {
		const natural = (width * s.image.naturalHeight) / s.image.naturalWidth;
		const fitH = (d: StackItem | null) => room - (d ? 30 * u + d.height : 0);
		if (desc && fitH(desc) < width * 0.45) desc = description(width, 2);
		imageH = Math.max(0, Math.min(natural, width * 1.1, fitH(desc)));
	}
	const total = headH + ruleGap * 2 + imageH + (desc ? (imageH ? 30 * u : 0) + desc.height : 0);
	const top = Math.max(pad, (H - total) / 2);
	let y = drawStack(items, top);
	drawAvatar(items, top, width);
	y += ruleGap;
	ctx.fillStyle = s.dark ? '#262626' : '#e5e5e5';
	ctx.fillRect(pad, y, width, Math.max(1, 2 * u));
	y += ruleGap;
	if (s.image && imageH) {
		drawRoundedImage(ctx, s.image, pad, y, width, imageH, 14 * u);
		drawMark(s, pad + width - markSize - 18 * u, y + imageH - markSize - 18 * u, markSize, true);
		y += imageH + 30 * u;
	}
	desc?.draw(y);
	if (!s.image) drawMark(s, W - pad - markSize, H - pad - markSize, markSize, s.dark);
};

// 7. A clean card with the date, title, description and Benaiah branding
const drawCardTemplate = (s: Scene) => {
	const { ctx, W, H, u, opts, post } = s;
	const c = s.dark
		? {
				bg: '#09090b',
				dot: 'rgba(255, 255, 255, 0.06)',
				card: '#18181b',
				border: '#27272a',
				ink: '#f4f4f5',
				muted: '#a1a1aa',
				pill: '#27272a',
				pillInk: '#d4d4d8',
				accent: '#34d399',
				dash: '#3f3f46'
			}
		: {
				bg: '#f4f4f5',
				dot: 'rgba(0, 0, 0, 0.07)',
				card: '#fafafa',
				border: '#d4d4d8',
				ink: '#18181b',
				muted: '#737373',
				pill: '#e5e5e5',
				pillInk: '#52525b',
				accent: '#059669',
				dash: '#d4d4d8'
			};

	ctx.fillStyle = c.bg;
	ctx.fillRect(0, 0, W, H);
	ctx.fillStyle = c.dot;
	const spacing = 36 * u;
	for (let x = spacing / 2; x < W; x += spacing) {
		for (let y = spacing / 2; y < H; y += spacing) {
			ctx.beginPath();
			ctx.arc(x, y, 1.8 * u, 0, Math.PI * 2);
			ctx.fill();
		}
	}

	const margin = (s.land ? 48 : 72) * u;
	const ip = (s.land ? 44 : 52) * u;
	const cardW = W - margin * 2;
	const showImage = !!s.image;
	const imageColW = s.land && showImage ? (cardW - ip * 2) * 0.4 : 0;
	const innerW = cardW - ip * 2 - (imageColW ? imageColW + ip : 0);

	// Date + category row
	const dateLabel = opts.showDate ? post.date : '';
	const pillStyle: TextStyle = { family: SANS, size: 22 * u, color: c.pillInk, maxLines: 1 };
	const pill = opts.showCategory ? layout(ctx, post.category, pillStyle, innerW * 0.5) : null;
	const pillPadX = 20 * u;
	const pillH = pill ? pill.height + 12 * u : 0;
	const date = dateLabel
		? layout(
				ctx,
				dateLabel,
				{ family: SANS, size: 25 * u, italic: true, color: c.muted, maxLines: 1 },
				innerW - (pill ? pill.width + pillPadX * 3 : 0)
			)
		: null;
	const topRowH = Math.max(date?.height ?? 0, pillH);

	// Footer: logo + name on the left, link on the right (or below when it doesn't fit)
	const logoSize = 60 * u;
	const name = layout(
		ctx,
		SHARE_NAME,
		{ family: SANS, size: 28 * u, weight: 600, color: c.ink, maxLines: 1 },
		innerW
	);
	const subtitle = layout(
		ctx,
		SHARE_SUBTITLE[post.lang],
		{ family: SANS, size: 20 * u, color: c.muted, maxLines: 1 },
		innerW
	);
	const brandW = logoSize + 16 * u + Math.max(name.width, subtitle.width);
	const linkLabel = linkText(s);
	const linkStyle: TextStyle = { family: SANS, size: 23 * u, color: c.accent, maxLines: 2 };
	const sideLink = linkLabel ? layout(ctx, linkLabel, linkStyle, innerW - brandW - 40 * u) : null;
	const stacked =
		!!sideLink && (sideLink.lines.length > 1 || brandW + sideLink.width + 40 * u > innerW);
	const link = stacked ? layout(ctx, linkLabel, linkStyle, innerW) : sideLink;
	const footerH =
		Math.max(logoSize, name.height + subtitle.height) +
		(stacked && link ? 16 * u + link.height : 0);
	const footerBlock = 28 * u + 2 * u + 26 * u + footerH;

	const body = (k: number) =>
		compact([
			text(
				s,
				post.title,
				{
					family: SANS,
					size: (s.land ? 60 : 66) * u * k,
					minSize: 36 * u * k,
					weight: 600,
					color: c.ink,
					lineHeight: 1.15,
					tracking: -1.2 * u,
					maxLines: 4
				},
				innerW,
				0,
				'left',
				0
			),
			opts.showDescription &&
				text(
					s,
					post.description,
					{ family: SANS, size: 29 * u * k, color: c.muted, lineHeight: 1.45, maxLines: 4 },
					innerW,
					0,
					'left',
					18 * u * k
				)
		]);

	let cardH: number;
	let imageH = 0;
	let items: StackItem[];
	if (s.land) {
		cardH = H - margin * 2;
		items = fitStack(body, cardH - ip * 2 - topRowH - footerBlock - 40 * u);
	} else {
		const maxCard = H - margin * 2;
		items = fitStack(body, maxCard * 0.45);
		const fixed = ip * 2 + topRowH + 28 * u + stackHeight(items) + footerBlock;
		if (showImage) imageH = Math.max(0, Math.min(innerW * 0.5625, maxCard - fixed - 28 * u));
		cardH = fixed + (imageH ? imageH + 28 * u : 0);
	}

	const x = margin;
	const top = (H - cardH) / 2;
	withShadow(ctx, s.dark ? 'rgba(0, 0, 0, 0.5)' : 'rgba(24, 24, 27, 0.1)', 40 * u, 14 * u, () => {
		ctx.fillStyle = c.card;
		ctx.beginPath();
		ctx.roundRect(x, top, cardW, cardH, 18 * u);
		ctx.fill();
	});
	ctx.strokeStyle = c.border;
	ctx.lineWidth = 2 * u;
	ctx.beginPath();
	ctx.roundRect(x, top, cardW, cardH, 18 * u);
	ctx.stroke();

	const ix = x + ip;
	let y = top + ip;
	if (imageColW && s.image) {
		const iw = imageColW;
		const ih = cardH - ip * 2;
		drawRoundedImage(ctx, s.image, x + cardW - ip - iw, y, iw, ih, 12 * u);
	} else if (imageH && s.image) {
		drawRoundedImage(ctx, s.image, ix, y, innerW, imageH, 12 * u);
		y += imageH + 28 * u;
	}

	if (date) drawBlock(ctx, date, ix, y + (topRowH - date.height) / 2);
	if (pill) {
		const pw = pill.width + pillPadX * 2;
		const px = ix + innerW - pw;
		const py = y + (topRowH - pillH) / 2;
		ctx.fillStyle = c.pill;
		ctx.beginPath();
		ctx.roundRect(px, py, pw, pillH, pillH / 2);
		ctx.fill();
		drawBlock(ctx, pill, px + pillPadX, py + 6 * u);
	}

	const bodyTop = y + topRowH + 28 * u;
	const footerTop = top + cardH - ip - footerBlock;
	const bodyH = stackHeight(items);
	ctx.save();
	ctx.translate(ix, 0);
	drawStack(items, s.land ? bodyTop + (footerTop - bodyTop - bodyH) / 2 : bodyTop);
	ctx.restore();

	// Dashed divider + branding
	let fy = footerTop + 28 * u;
	ctx.save();
	ctx.strokeStyle = c.dash;
	ctx.lineWidth = 2 * u;
	ctx.setLineDash([10 * u, 8 * u]);
	ctx.beginPath();
	ctx.moveTo(ix, fy);
	ctx.lineTo(ix + innerW, fy);
	ctx.stroke();
	ctx.restore();
	fy += 2 * u + 26 * u;

	const brandH = Math.max(logoSize, name.height + subtitle.height);
	drawIcon(s, ix, fy + (brandH - logoSize) / 2, logoSize, 14 * u);
	const textX = ix + logoSize + 16 * u;
	const textTop = fy + (brandH - name.height - subtitle.height) / 2;
	drawBlock(ctx, name, textX, textTop);
	drawBlock(ctx, subtitle, textX, textTop + name.height);
	if (link && stacked) drawBlock(ctx, link, ix, fy + brandH + 16 * u);
	else if (link) drawBlock(ctx, link, ix + innerW, fy + (brandH - link.height) / 2, 'right');
};

const TEMPLATES: Record<ShareTemplate, (s: Scene) => void> = {
	cover: drawCoverTemplate,
	split: drawSplitTemplate,
	poster: drawPosterTemplate,
	frosted: drawFrostedTemplate,
	gallery: drawGalleryTemplate,
	article: drawArticleTemplate,
	card: drawCardTemplate
};

// `scale` < 1 draws the same layout into a smaller bitmap (used for the style thumbnails)
export const drawShareCard = (
	canvas: HTMLCanvasElement,
	post: SharePost,
	opts: ShareOptions,
	assets: ShareAssets,
	scale = 1
) => {
	const { width: W, height: H } = SHARE_RATIOS[opts.ratio];
	canvas.width = Math.round(W * scale);
	canvas.height = Math.round(H * scale);
	const ctx = canvas.getContext('2d');
	if (!ctx) return;
	ctx.setTransform(scale, 0, 0, scale, 0, 0);
	ctx.imageSmoothingQuality = 'high';

	const land = W > H;
	const u = land ? H / 760 : W / 1080;
	TEMPLATES[opts.template]({
		ctx,
		W,
		H,
		u,
		pad: 72 * u,
		land,
		post,
		opts,
		assets,
		p: assets.palette,
		image: opts.showImage ? assets.image : null,
		dark: opts.theme === 'dark'
	});
};
