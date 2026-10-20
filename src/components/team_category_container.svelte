<script lang="ts">
	import { useI18n } from '$lib/i18n';
	const { _, locale } = useI18n();
	import { Instagram, Linkedin, PlaneIcon, Send } from '@lucide/svelte';

	let { title, category } = $props();
</script>

<div class="pl-5 font-batangas text-xl text-black">— {title}</div>
<div
	class="grid grid-cols-1 gap-y-7 pb-14 pt-3 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3"
>
	{#each category as member}
		<div
			class="group w-full overflow-clip rounded-xl border border-black shadow-lg transition-all hover:border-black hover:shadow-xl md:w-72 lg:w-72 xl:w-72 2xl:w-72"
		>
			<!-- Cover Image -->
			<div class="aspect-square overflow-clip">
				<img
					src={member.photo}
					alt={member.fullname_en}
					class="h-full w-full object-cover transition-all group-hover:scale-105"
				/>
			</div>

			<!-- Name and Socials -->
			<div class="flex items-center justify-between border-t border-black bg-zinc-800 text-center">
				<div class="w-full px-2 py-1 text-white">
					<span class={$locale === 'am' ? '' : 'font-semibold'}>
						{$locale === 'am' ? member.fullname_am : member.fullname_en}
					</span>
				</div>
				<!-- Socials -->
				<!-- <div class="flex h-full gap-x-2 px-3 text-white">
					<a href={member.socials.telegram}>
						<Send
							size={16}
							class="cursor-pointer transition-all hover:scale-125 hover:text-blue-500"
						/>
					</a>
					<a href={member.socials.instagram}>
						<Instagram
							size={16}
							class="cursor-pointer transition-all hover:scale-125 hover:text-pink-600"
						/>
					</a>
					<a href={member.socials.linkedin}>
						<Linkedin
							size={16}
							class="cursor-pointer transition-all hover:scale-125 hover:text-blue-600"
						/>
					</a>
				</div> -->
			</div>
		</div>
	{/each}
</div>
