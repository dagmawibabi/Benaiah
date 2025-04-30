<script>
    let {image, title, description} = $props();
</script>

<div class="text-center border border-zinc-500 flex backdrop-blur-xl flex-col items-center bg-white bg-opacity-15 p-5 rounded-lg hover:bg-opacity-20">
    <div class="w-44 h-44">
        <img src={image} alt="illustration" class="w-full h-full object-cover" /> 
    </div>
    <div class="font-semibold text-xl pt-5 pb-2">
        {title}
    </div>
    <div>
        {description}
    </div>
</div> 
