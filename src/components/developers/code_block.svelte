<script lang="ts">
	import { Check, Copy } from '@lucide/svelte';
	import { highlight, type CodeLang } from '$lib/highlight';

	let {
		code,
		lang,
		title = '',
		tall = false
	}: { code: string; lang: CodeLang; title?: string; tall?: boolean } = $props();

	const labels: Record<CodeLang, string> = {
		json: 'JSON',
		js: 'JavaScript',
		jsx: 'JSX',
		bash: 'Shell'
	};

	let copied = $state(false);
	let timer: ReturnType<typeof setTimeout>;
	async function copy() {
		try {
			await navigator.clipboard.writeText(code);
			copied = true;
			clearTimeout(timer);
			timer = setTimeout(() => (copied = false), 1600);
		} catch {
			/* Clipboard may be blocked. */
		}
	}
</script>

<div class="block">
	<div class="bar">
		<span class="title">{title || labels[lang]}</span>
		<button type="button" class="copy" onclick={copy} aria-label="Copy code">
			{#if copied}<Check size={14} /> Copied{:else}<Copy size={14} /> Copy{/if}
		</button>
	</div>
	<pre class:tall><code>{@html highlight(code, lang)}</code></pre>
</div>

<style>
	.block {
		margin: 1rem 0 1.5rem;
		border-radius: 14px;
		overflow: hidden;
		background: #16161a;
		border: 1px solid #2a2a30;
		box-shadow: 0 10px 30px -18px #0008;
	}
	.bar {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 0.45rem 0.6rem 0.45rem 1rem;
		background: #1e1e23;
		border-bottom: 1px solid #2a2a30;
		font-size: 12px;
		color: #a1a1aa;
	}
	.title {
		letter-spacing: 0.02em;
	}
	.copy {
		display: inline-flex;
		align-items: center;
		gap: 0.35rem;
		padding: 0.25rem 0.55rem;
		border-radius: 7px;
		color: #d4d4d8;
		transition: background 0.15s;
	}
	.copy:hover {
		background: #ffffff14;
	}
	pre {
		margin: 0;
		padding: 1rem 1.15rem;
		overflow: auto;
		font-family: ui-monospace, 'JetBrains Mono', 'Cascadia Code', Menlo, Consolas, monospace;
		font-size: 13px;
		line-height: 1.7;
		color: #e4e4e7;
		tab-size: 2;
	}
	pre.tall {
		max-height: 30rem;
	}
	pre :global(.tok-key) {
		color: #7dd3fc;
	}
	pre :global(.tok-string) {
		color: #86efac;
	}
	pre :global(.tok-number) {
		color: #fdba74;
	}
	pre :global(.tok-literal) {
		color: #f0abfc;
	}
	pre :global(.tok-keyword) {
		color: #c4b5fd;
	}
	pre :global(.tok-function) {
		color: #fde68a;
	}
	pre :global(.tok-property) {
		color: #7dd3fc;
	}
	pre :global(.tok-tag) {
		color: #fca5a5;
	}
	pre :global(.tok-comment) {
		color: #71717a;
		font-style: italic;
	}
	pre :global(.tok-punct) {
		color: #a1a1aa;
	}
</style>
