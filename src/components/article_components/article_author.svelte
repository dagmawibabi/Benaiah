<script>
    let {subtopic} = $props();

    import { page } from "$app/state";
    const category = page.url.pathname.split('/').pop();
</script>

<div class="flex gap-2 pb-4 items-center">
    — 
    <div
        class="h-7 w-7 overflow-clip rounded-full border border-zinc-400 shadow-lg transition-all hover:scale-110 group-hover/material:border-black"
    >   
        {#if category === "devotional_en" || category === "devotional_am"}
            <img
                src={category === "devotional_am" ? subtopic.devotional.devotional_author_am[0].photo : subtopic.devotional.devotional_author_en[0].photo}
                alt={subtopic.devotional.devotional_author_en[0].fullname_en}
                class="aspect-square"
            />
        {:else if category === "study_material_am" || category === "study_material_en"}
            <img
                src={category === "study_material_am" ? subtopic.study_material.study_material_author_am[0].photo : subtopic.study_material.study_material_author_en[0].photo}
                alt={subtopic.study_material.study_material_author_en[0].fullname_en}
                class="aspect-square"
            />
        {/if}
    </div>

    <div class="text-base">
        {#if category === "devotional_am" || category === "devotional_en"}
            {category === "devotional_am" ? subtopic.devotional.devotional_author_am[0].fullname_am : subtopic.devotional.devotional_author_en[0].fullname_en}
        {:else if category === "study_material_am" || category === "study_material_en"}
            {category === "study_material_am" ? subtopic.study_material.study_material_author_am[0].fullname_am : subtopic.study_material.study_material_author_en[0].fullname_en}
        {/if}
    </div>
</div>

