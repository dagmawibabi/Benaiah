<script>
	import { _, locale } from 'svelte-i18n';
	import SectionHeader from './section_header.svelte';

	import { Facebook, Headset, InstagramIcon, LinkedinIcon, Mail, Send } from '@lucide/svelte';
</script>

<div id="contactus" class="h-screen pt-20">
	<SectionHeader
		title="Contact Us"
		description="This is how we produce the content you see on our website and across our social media. Our work process is pretty straightforward and simple."
	/>

	<div class="mx-auto grid w-[70%] grid-cols-4 gap-4 p-2 pb-16">
		<a
			href={$locale === 'am' ? 'https://t.me/benaiah_amharic' : 'https://instagram.com/benaiah_org'}
			target="_blank"
		>
			<div
				class="flex cursor-pointer items-center justify-center rounded-full border border-zinc-400 bg-white bg-opacity-20 py-10 text-center hover:border-zinc-600 hover:bg-opacity-40"
			>
				<Send size={60} />
			</div>
		</a>

		<a href="https://instagram.com/benaiah_org" target="_blank">
			<div
				class="flex cursor-pointer items-center justify-center rounded-full border border-zinc-400 bg-white bg-opacity-20 py-10 text-center hover:border-zinc-600 hover:bg-opacity-40"
			>
				<InstagramIcon size={60} />
			</div>
		</a>

		<a href="https://threads.net/@benaiah_org" target="_blank">
			<div
				class="flex cursor-pointer items-center justify-center rounded-full border border-zinc-400 bg-white bg-opacity-20 py-10 text-center hover:border-zinc-600 hover:bg-opacity-40"
			>
				<img
					src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Im0xMi41OTQgMjMuMjU4bC0uMDEyLjAwMmwtLjA3MS4wMzVsLS4wMi4wMDRsLS4wMTQtLjAwNGwtLjA3MS0uMDM2cS0uMDE2LS4wMDQtLjAyNC4wMDZsLS4wMDQuMDFsLS4wMTcuNDI4bC4wMDUuMDJsLjAxLjAxM2wuMTA0LjA3NGwuMDE1LjAwNGwuMDEyLS4wMDRsLjEwNC0uMDc0bC4wMTItLjAxNmwuMDA0LS4wMTdsLS4wMTctLjQyN3EtLjAwNC0uMDE2LS4wMTYtLjAxOG0uMjY0LS4xMTNsLS4wMTQuMDAybC0uMTg0LjA5M2wtLjAxLjAxbC0uMDAzLjAxMWwuMDE4LjQzbC4wMDUuMDEybC4wMDguMDA4bC4yMDEuMDkycS4wMTkuMDA1LjAyOS0uMDA4bC4wMDQtLjAxNGwtLjAzNC0uNjE0cS0uMDA1LS4wMTktLjAyLS4wMjJtLS43MTUuMDAyYS4wMi4wMiAwIDAgMC0uMDI3LjAwNmwtLjAwNi4wMTRsLS4wMzQuNjE0cS4wMDEuMDE4LjAxNy4wMjRsLjAxNS0uMDAybC4yMDEtLjA5M2wuMDEtLjAwOGwuMDAzLS4wMTFsLjAxOC0uNDNsLS4wMDMtLjAxMmwtLjAxLS4wMXoiLz48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik01LjQ1IDQuNjIzQzYuOTk3IDIuOTc0IDkuMjQgMiAxMi4wMTcgMmM0LjU2NSAwIDcuNTkyIDIuNjMxIDguNTUgNi4yNzdhMSAxIDAgMCAxLTEuOTM1LjUwOEMxNy45MDUgNi4wMjIgMTUuNjc2IDQgMTIuMDE2IDRjLTIuMjg2IDAtMy45OC43ODktNS4xMDYgMS45OWMtMS4xMzYgMS4yMTItMS43NjkgMi45MjMtMS43NjkgNC44ODV2Mi4yNWMwIDEuOTYyLjYzMyAzLjY3MyAxLjc2OSA0Ljg4NEM4LjAzNiAxOS4yMTIgOS43MyAyMCAxMi4wMTYgMjBjMS42NTUgMCAyLjk2OC0uMzg0IDMuOTc2LTEuMDA1YzEuMDE1LS42MjUgMS42Mi0xLjQ1NCAxLjc5LTIuNDA1Yy4xOTUtMS4wOTYtLjA0NS0xLjg0OC0uNDU4LTIuMzkxYTMuMiAzLjIgMCAwIDAtLjgxNC0uNzQxYy0uMTM1Ljc0OS0uMzc2IDEuNDU2LS43NCAyLjAxYy0xLjM0MiAyLjAzOS0zLjkwOCAyLjIxNC01LjYgMS41MzljLS45MTYtLjM2NS0xLjcwMS0xLjM2NC0xLjk0NS0yLjQzNWEzIDMgMCAwIDEgLjE0MS0xLjg0M2MuMjY1LS42MzYuNzU2LTEuMTc4IDEuNDU1LTEuNTljLjY5Mi0uNDA5IDEuNzItLjU5NyAyLjczOS0uNjI1Yy42MTQtLjAxNyAxLjI4LjAyNCAxLjk1LjEzM2MtLjE0LS42NS0uMzc3LTEuMTM1LS42NDQtMS4zODRjLS40ODQtLjQ1LTEuMjg2LS43NjctMi4wOS0uNzYyYy0uNzc3LjAwNi0xLjQzNi4zMDUtMS44My45MzVhMSAxIDAgMSAxLTEuNjk2LTEuMDZjLjgzNy0xLjMzOCAyLjIxNi0xLjg2NSAzLjUxMy0xLjg3NWMxLjI3LS4wMDkgMi41NzguNDcyIDMuNDY2IDEuMjk4Yy44OTguODM2IDEuMjg0IDIuMjA3IDEuMzg0IDMuNDU0Yy44NzQuMzgxIDEuNy45NCAyLjMwNSAxLjczN2MuNzgxIDEuMDMgMS4xMTcgMi4zNTguODMzIDMuOTUxYy0uMjkgMS42MjQtMS4zMTUgMi44OTgtMi43MSAzLjc1N0MxNS42NzMgMjEuNTQgMTMuOTg1IDIyIDEyLjAxNiAyMmMtMi43NzYgMC01LjAyLS45NzQtNi41NjUtMi42MjNjLTEuNTM2LTEuNjM4LTIuMzEtMy44NjQtMi4zMS02LjI1MnYtMi4yNWMwLTIuMzg4Ljc3NC00LjYxNCAyLjMxLTYuMjUyWk0xNC42IDEyLjdhOC40IDguNCAwIDAgMC0xLjk4Ni0uMTg2Yy0uODkxLjAyNC0xLjUxNi4xOTMtMS43NzcuMzQ3Yy0uMzg0LjIyNy0uNTUuNDU4LS42MjQuNjM3YTEuMDIgMS4wMiAwIDAgMC0uMDM4LjYzYy4xMjIuNTM2LjUyNS45MzguNzM2IDEuMDIxYzEuMTI2LjQ1IDIuNTM1LjIxMiAzLjE4OC0uNzhjLjIzNS0uMzU4LjQyMi0uOTYuNS0xLjY2OVoiLz48L2c+PC9zdmc+"
					alt=""
					width="60"
					height="60"
				/>
			</div>
		</a>

		<a href="mailto:BenaiahTeamOrg@gmail.com" target="_blank">
			<div
				class="flex cursor-pointer items-center justify-center rounded-full border border-zinc-400 bg-white bg-opacity-20 py-10 text-center hover:border-zinc-600 hover:bg-opacity-40"
			>
				<Mail size={60} />
			</div>
		</a>

		<a href="https://facebook.com/BenaiahOrgPage" target="_blank">
			<div
				class="flex cursor-pointer items-center justify-center rounded-full border border-zinc-400 bg-white bg-opacity-20 py-10 text-center hover:border-zinc-600 hover:bg-opacity-40"
			>
				<Facebook size={60} />
			</div>
		</a>

		<a href="https://linkedin.com/company/banaiah-በናያስ" target="_blank">
			<div
				class="flex cursor-pointer items-center justify-center rounded-full border border-zinc-400 bg-white bg-opacity-20 py-10 text-center hover:border-zinc-600 hover:bg-opacity-40"
			>
				<LinkedinIcon size={60} />
			</div>
		</a>

		<a href="https://x.com/benaiah_org" target="_blank">
			<div
				class="flex cursor-pointer items-center justify-center rounded-full border border-zinc-400 bg-white bg-opacity-20 py-10 text-center hover:border-zinc-600 hover:bg-opacity-40"
			>
				<img
					src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNCIgaGVpZ2h0PSIxNCIgdmlld0JveD0iMCAwIDE0IDE0Ij48ZyBmaWxsPSJub25lIj48ZyBjbGlwLXBhdGg9InVybCgjcHJpbWVUd2l0dGVyMCkiPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0iTTExLjAyNS42NTZoMi4xNDdMOC40ODIgNi4wM0wxNCAxMy4zNDRIOS42OEw2LjI5NCA4LjkwOWwtMy44NyA0LjQzNUguMjc1bDUuMDE2LTUuNzVMMCAuNjU3aDQuNDNMNy40ODYgNC43MXptLS43NTUgMTEuNGgxLjE5TDMuNzggMS44NzdIMi41MDR6Ii8+PC9nPjxkZWZzPjxjbGlwUGF0aCBpZD0icHJpbWVUd2l0dGVyMCI+PHBhdGggZmlsbD0iI2ZmZiIgZD0iTTAgMGgxNHYxNEgweiIvPjwvY2xpcFBhdGg+PC9kZWZzPjwvZz48L3N2Zz4="
					alt=""
					width="60"
					height="60"
				/>
			</div>
		</a>

		<a href="https://t.me/Benaiah_Contact" target="_blank">
			<div
				class="flex cursor-pointer items-center justify-center rounded-full border border-zinc-400 bg-white bg-opacity-20 py-10 text-center hover:border-zinc-600 hover:bg-opacity-40"
			>
				<Headset size={60} />
			</div>
		</a>
	</div>

	<SectionHeader title="" description="Connect with Us!" />
</div>
