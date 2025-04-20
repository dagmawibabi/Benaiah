<script>
    let {title, subtopic, date} = $props();
    import ArticleTitle from './article_title.svelte';
    import ArticleImage from './article_image.svelte';
	import ArticleAuthor from './article_author.svelte';
	import FeedbackLink from './feedback_link.svelte';
</script>

<div>
    <div class="text-gray-900 text-xs pb-2"> {date} </div>
    <ArticleTitle title={title} /> 
    <ArticleAuthor {subtopic} />
    <ArticleImage {subtopic} />
</div>