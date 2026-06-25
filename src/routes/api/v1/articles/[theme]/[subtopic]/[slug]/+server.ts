import { json } from '@sveltejs/kit';
import { getMarkdownContent, slugify } from '$lib/articleUtils';
import { themeList } from '../../../../../../../store/theme_list.svelte.js';
import type { RequestHandler } from '@sveltejs/kit';

export const GET: RequestHandler = async ({ params, setHeaders }) => {
	const themeSlug = params.theme as string;
	const topicSlug = params.subtopic as string;
	const slug = params.slug as string;
	
	// Split slug on last underscore to get type and language
	const lastUnderscoreIndex = slug.lastIndexOf('_');
	if (lastUnderscoreIndex === -1) {
		return json({ error: 'Invalid slug format. Expected format: {type}_{lang} (e.g., devotional_en, study_material_am)' }, { status: 400 });
	}
	
	const type = slug.slice(0, lastUnderscoreIndex);
	const lang = slug.slice(lastUnderscoreIndex + 1);
	
	// Validate language
	if (!['en', 'am'].includes(lang)) {
		return json({ error: 'Invalid language. Must be "en" or "am"' }, { status: 400 });
	}
	
	// Validate content type
	if (!['devotional', 'study_material'].includes(type)) {
		return json({ error: 'Invalid content type. Must be "devotional" or "study_material"' }, { status: 400 });
	}
	
	const rawContent = getMarkdownContent(themeSlug, topicSlug, lang, type);
	
	if (!rawContent) {
		return json({ error: 'Article not found' }, { status: 404 });
	}
	
	// Initialize extracted fields
	let title = '';
	let date = '';
	let audio = '';
	let header = '';
	let content = '';
	
	try {
		// Step 1: Extract frontmatter (between first pair of --- delimiters)
		const frontmatterMatch = rawContent.match(/^---\s*\n([\s\S]*?)\n---\s*\n/);
		let remainingContent = rawContent;
		
		if (frontmatterMatch) {
			const frontmatterText = frontmatterMatch[1];
			remainingContent = rawContent.slice(frontmatterMatch[0].length);
			
			// Parse frontmatter lines
			const lines = frontmatterText.split('\n');
			for (const line of lines) {
				const trimmedLine = line.trim();
				if (!trimmedLine) continue;
				
				const colonIndex = trimmedLine.indexOf(':');
				if (colonIndex === -1) continue;
				
				const key = trimmedLine.slice(0, colonIndex).trim();
				let value = trimmedLine.slice(colonIndex + 1).trim();
				
				// Remove surrounding quotes if present
				if ((value.startsWith("'") && value.endsWith("'")) || 
					(value.startsWith('"') && value.endsWith('"'))) {
					value = value.slice(1, -1);
				}
				
				switch (key) {
					case 'title':
						title = value;
						break;
					case 'date':
						date = value;
						break;
					case 'audio':
						audio = value;
						break;
				}
			}
		}
		
		// Step 2: Remove <script> block
		remainingContent = remainingContent.replace(/<script[\s\S]*?<\/script>\s*/g, '');
		
		// Step 3: Extract <ArticleHeader> content and remove the tag
		const headerMatch = remainingContent.match(/<ArticleHeader\s+content="([^"]*)"\s*\/?>/);
		if (headerMatch) {
			header = headerMatch[1];
			// Remove the tag
			remainingContent = remainingContent.replace(/<ArticleHeader\s+content="[^"]*"\s*\/?>\s*/g, '');
		}
		
		// Step 4: Remove all remaining Svelte/HTML component tags
		// Remove self-closing component tags like <ArticleHero ... />
		remainingContent = remainingContent.replace(/<[A-Z][a-zA-Z]*\s+[^>]*\/>\s*/g, '');
		// Remove opening component tags
		remainingContent = remainingContent.replace(/<[A-Z][a-zA-Z]*\s+[^>]*>\s*/g, '');
		// Remove closing component tags
		remainingContent = remainingContent.replace(/<\/[A-Z][a-zA-Z]*>\s*/g, '');
		
		// Step 5: Remove leftover HTML tags
		remainingContent = remainingContent.replace(/<[^>]*>/g, '');
		
		// Step 6: Trim whitespace and blank lines
		content = remainingContent
			.split('\n')
			.map(line => line.trim())
			.filter(line => line.length > 0)
			.join('\n')
			.trim();
		
	} catch (error) {
		console.error('Error processing markdown content:', error);
		return json({ error: 'Failed to process article content' }, { status: 500 });
	}
	
	// Set Cache-Control header
	setHeaders({
		'Cache-Control': 'public, max-age=3600'
	});
	
	// Get graphics data for this subtopic
	const theme = themeList.themes.find((t) => slugify(t.theme_en) === themeSlug);
	let graphics = null;
	if (theme) {
		const subtopic = theme.subtopics.find((s) => slugify(s.title_en) === topicSlug);
		if (subtopic) {
			graphics = {
				covers: {
					en: subtopic.cover_en,
					am: subtopic.cover_am
				},
				images: {
					square: {
						en: subtopic.square_en,
						am: subtopic.square_am
					},
					story: {
						en: subtopic.story_en,
						am: subtopic.story_am
					}
				}
			};
		}
	}
	
	// Return structured JSON response
	return json({
		theme: themeSlug,
		subtopic: topicSlug,
		type,
		lang,
		title,
		date,
		audio,
		header,
		graphics,
		content
	});
};