<script>
	import { page } from '$app/state';
	import { Send } from '@lucide/svelte';
	const category = page.url.pathname.split('/').pop();
</script>

<div class="pb-10 pt-36">
	<a href="https://t.me/benaiah_contact">
		<div
			class="flex w-fit cursor-pointer items-center gap-x-2 border-b border-b-transparent text-blue-600 hover:border-b-blue-600"
		>
			<Send size={18} class="cursor-pointer transition-all hover:scale-125 hover:text-blue-500" />
			<div class="pb-1">
				{category === 'devotional_am' || category === 'study_material_am'
					? 'ስለዚህ ጽሑፍ አስተያየትዎን እና የተሰማዎትን ይላኩልን።'
					: 'Send us your feedbacks and thoughts'}
			</div>
		</div>
	</a>
</div>
