import { browser } from '$app/environment';
import { getContext, setContext } from 'svelte';
import { derived, writable } from 'svelte/store';
import en from './locales/en.json';
import am from './locales/am.json';
import type { Lang } from '$lib/types';
export type { Lang };
export const LANG_COOKIE = 'lang';
export function normalizeLang(raw: string | null | undefined): Lang {
	return /^am(?:-|$)/i.test(raw ?? '') ? 'am' : 'en';
}
export function langFromAcceptLanguage(header: string | null): Lang {
	const choices = (header ?? '')
		.split(',')
		.map((part) => {
			const [tag, quality] = part.trim().split(';');
			return { tag, q: quality ? Number(quality.trim().replace('q=', '')) : 1 };
		})
		.filter(({ tag, q }) => /^(am|en)(-|$)/i.test(tag) && q > 0)
		.sort((a, b) => b.q - a.q);
	return normalizeLang(choices[0]?.tag);
}
function createI18n(lang: Lang) {
	const locale = writable(lang);
	const _ = derived(locale, ($lang) => (key: string): string => {
		let value: unknown = $lang === 'am' ? am : en;
		for (const part of key.split('.'))
			value =
				value && typeof value === 'object' ? (value as Record<string, unknown>)[part] : undefined;
		return typeof value === 'string' ? value : key;
	});
	function setLanguage(next: Lang) {
		locale.set(next);
		if (browser) {
			document.cookie = LANG_COOKIE + '=' + next + '; path=/; max-age=31536000; samesite=lax';
			document.documentElement.lang = next;
		}
	}
	return { locale, _, setLanguage };
}
const key = Symbol('benaiah-language');
export function provideI18n(lang: Lang) {
	return setContext(key, createI18n(lang));
}
export function useI18n() {
	return getContext<ReturnType<typeof createI18n>>(key);
}
