<script>
	let { title, subtopic, date } = $props();
	import ArticleTitle from './article_title.svelte';
	import ArticleImage from './article_image.svelte';
	import ArticleAuthor from './article_author.svelte';
	import FeedbackLink from './feedback_link.svelte';
</script>

<div>
	<div class="pb-2 text-xs text-gray-900">{date}</div>
	<ArticleTitle {title} />
	<ArticleAuthor {subtopic} />
	<ArticleImage {subtopic} />
</div>
