<script lang="ts">
	import { Instagram, Linkedin, PlaneIcon, Send } from '@lucide/svelte';

	let { title, category } = $props();
</script>

<div class="pl-5 font-batangas text-xl text-black">— {title}</div>
<div class="grid grid-cols-3 gap-y-7 pb-14 pt-3">
	{#each category as member}
		<div
			class="group w-72 overflow-clip rounded-xl border border-black shadow-lg transition-all hover:border-black hover:shadow-xl"
		>
			<!-- Cover Image -->
			<div class="aspect-square overflow-clip">
				<img
					src={member.photo}
					alt={member.fullname_en}
					class="h-full w-full object-fill transition-all group-hover:scale-105"
				/>
			</div>

			<!-- Name and Socials -->
			<div
				class="flex items-center justify-between border-t border-black bg-zinc-800 font-semibold"
			>
				<div class="w-full px-2 py-1 text-white">
					{member.fullname_en}
				</div>
				<!-- Socials -->
				<div class="flex h-full gap-x-2 px-3 text-white">
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
				</div>
			</div>
		</div>
	{/each}
</div>
