<script>
    import { page } from "$app/state";
	import { Send } from "@lucide/svelte";
    const category = page.url.pathname.split('/').pop();
</script>

<div class="pt-36 pb-10">	
		<a href="https://t.me/benaiah_contact">
			<div class="flex gap-x-2 items-center text-blue-600 border-b border-b-transparent cursor-pointer hover:border-b-blue-600 w-fit">	
				<Send
					 size={18}
					 class="cursor-pointer transition-all hover:scale-125 hover:text-blue-500"
				/>
				<div class="pb-1">
					{category === 'devotional_am' || category === 'study_material_am' ? 'ስለዚህ ጽሑፍ አስተያየትዎን እና የተሰማዎትን ይላኩልን።' : 'Send us your feedbacks and thoughts about this piece'}
				</div>
			</div>
		</a>
</div>
