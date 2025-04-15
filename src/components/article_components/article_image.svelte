<script>
    let {subtopic} = $props();

    import { page } from "$app/state";
    const category = page.url.pathname.split('/').pop();
</script>

<div class="aspect-square w-86 h-86 md:w-96 md:h-96 lg:w-96 lg:h-96 xl:w-96 xl:h-96 2xl:w-96 2xl:h-96  overflow-clip rounded-xl">
    {#if category === "devotional_en" || category === "study_material_en"}
        <a href={subtopic.cover_en} target="_blank">
            <img
                src={subtopic.cover_en}
                alt={"cover image"}
                class="w-96 h-96 object-fill transition-all hover:scale-105"
            />
        </a>
    {:else if category === "devotional_am" || category === "study_material_am"}
        <a href={subtopic.cover_am} target="_blank">
            <img
                src={subtopic.cover_am}
                alt={"cover image"}
                class="w-96 h-96 object-fill transition-all hover:scale-105"
            />
        </a>
    {/if}
</div>
