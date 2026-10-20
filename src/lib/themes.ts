import { themeList } from '../store/theme_list.svelte.js';
import type { Theme, Subtopic } from './types';

// Slugify function to convert titles to URL-safe slugs
export function slugify(text: string): string {
	return text
		.toLowerCase()
		.trim()
		.replace(/\s+/g, '-')
		.replace(/[^\w-]/g, '');
}

// Matches either a slug ("love-faith-and-hope") or the original English name
// ("Love, Faith and Hope"), which older links still use.
function matches(name: string, param: string) {
	return name === param || slugify(name) === param;
}

export function findTheme(param: string): Theme | undefined {
	return themeList.themes.find((t) => matches(t.theme_en, param));
}

export function findSubtopic(theme: Theme, param: string): Subtopic | undefined {
	return theme.subtopics.find((s) => matches(s.title_en, param));
}

export function graphicsHref(theme: Theme, subtopic: Subtopic) {
	return `/graphics/${slugify(theme.theme_en)}/${slugify(subtopic.title_en)}`;
}

// Article paths are stored relative to src ("./articles/themes/..."), which
// is also their route.
export function articleHref(path: string | undefined) {
	return path?.replace(/^\./, '');
}

// Link previews want a ~1200x630 image under a few hundred KB; topic covers
// are large square PNGs. Cloudinary pads them to that shape and recompresses.
export function shareImage(url: string | undefined) {
	return url?.replace(
		'/image/upload/',
		'/image/upload/c_pad,w_1200,h_630,b_auto:predominant,f_jpg,q_auto/'
	);
}
