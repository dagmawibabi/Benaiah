<script>
	import Nav from '../../components/nav/nav.svelte';
	import Hero from '../../components/hero.svelte';
	import EachArticleContainer from '../../components/each_article_container.svelte';
	import { graphicsList } from '../../store/graphics.svelte';
</script>

<div class="relative">
	<!-- Nav -->
	<Nav />

	<!-- HERO -->
	<Hero
		title="Graphics"
		description="Thought-provoking graphics from gifted people of faith that address biblical, theological,
					and practical themes to encourage growing Christians in their faith."
	/>

	<!-- Content -->
	<div class="absolute z-50 -mt-64 flex w-screen items-center justify-center">
		<div class="flex w-1/2 flex-col justify-between">
			{#each graphicsList.themes as theme}
				<div class="pb-3 pl-5 text-lg font-semibold italic text-white">
					— {theme.theme}
				</div>
				<div class="grid grid-cols-3 gap-x-10">
					{#each theme.subtopics as subtopic}
						<EachArticleContainer
							title={subtopic.title}
							description={subtopic.description}
							cover_en={subtopic.cover_en}
							cover_am={subtopic.cover_am}
							square_en={subtopic.square_en}
							square_am={subtopic.square_am}
							story_en={subtopic.story_en}
							story_am={subtopic.story_am}
							artists={subtopic.artists}
						/>
					{/each}
				</div>
			{/each}
		</div>
	</div>

	<div class="h-screen"></div>
</div>
