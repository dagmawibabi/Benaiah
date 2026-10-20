import { themeList } from '../store/theme_list.svelte';
import { articleHref } from './themes';
import type { Lang, ArticleType } from './types';
const sources = import.meta.glob('../articles/themes/**/*.md', {
	query: '?raw',
	import: 'default',
	eager: true
}) as Record<string, string>;
export function plainContent(raw: string) {
	return raw
		.replace(/^---[\s\S]*?---/, '')
		.replace(/<script[\s\S]*?<\/script>/g, '')
		.replace(/<[^>]*>/g, '')
		.replace(/\n[ \t]*\n(?:[ \t]*\n)+/g, '\n\n')
		.trim();
}
export const articles = themeList.themes
	.filter((t) => t.published)
	.flatMap((theme) =>
		theme.subtopics.flatMap((topic) =>
			(['devotional', 'study_material'] as ArticleType[]).flatMap((type) =>
				(['en', 'am'] as Lang[]).flatMap((lang) => {
					const source =
						type === 'devotional'
							? topic.devotional[lang === 'am' ? 'devotional_am' : 'devotional_en']
							: topic.study_material[lang === 'am' ? 'study_material_am' : 'study_material_en'];
					const raw = source && sources[source.replace('./articles/', '../articles/') + '.md'];
					if (!source || !raw) return [];
					const field = (key: string) =>
						raw
							.match(new RegExp('^' + key + ':\\s*(.*)$', 'm'))?.[1]
							?.trim()
							.replace(/^['"]|['"]$/g, '') ?? '';
					const text = plainContent(raw);
					return [
						{
							href: articleHref(source)!,
							source,
							lang,
							type,
							title: field('title'),
							date: field('date'),
							minutes: Math.max(
								1,
								Math.ceil(text.split(/\s+/).length / (lang === 'am' ? 160 : 220))
							),
							theme: theme.theme_en,
							topic: topic.title_en,
							cover: lang === 'am' ? topic.cover_am : topic.cover_en,
							description:
								(lang === 'am' ? topic.description_am : topic.description_en) || text.slice(0, 180)
						}
					];
				})
			)
		)
	);
