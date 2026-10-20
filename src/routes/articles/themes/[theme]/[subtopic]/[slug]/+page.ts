import type { Component } from 'svelte';
import type { PageLoad } from './$types';
const modules = import.meta.glob('../../../../../../articles/themes/**/*.md');
export const load: PageLoad = async ({ data }) => {
	const key = '../../../../../../' + data.article.source.slice(2) + '.md';
	const module = (await modules[key]()) as { default: Component; metadata: Record<string, string> };
	return { ...data, content: module.default, meta: module.metadata };
};
