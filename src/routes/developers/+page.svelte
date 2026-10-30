<script lang="ts">
	import { onMount } from 'svelte';
	import { page } from '$app/state';
	import { ArrowUpRight, Check, Copy, Globe, Languages, Lock, Timer } from '@lucide/svelte';
	import Seo from '../../components/seo.svelte';
	import Nav from '../../components/nav/nav.svelte';
	import BlurredBackground from '../../components/blurred_background.svelte';
	import CodeBlock from '../../components/developers/code_block.svelte';

	const origin = $derived(page.url.origin);
	const base = $derived(origin + '/api/v1');

	const toc = [
		{
			group: 'Getting started',
			items: [
				{ id: 'introduction', label: 'Introduction' },
				{ id: 'quick-start', label: 'Quick start' }
			]
		},
		{
			group: 'Endpoints',
			items: [
				{ id: 'list-themes', label: 'List themes', method: 'GET' },
				{ id: 'get-theme', label: 'Get a theme', method: 'GET' },
				{ id: 'get-subtopic', label: 'Get a subtopic', method: 'GET' },
				{ id: 'get-article', label: 'Get an article', method: 'GET' },
				{ id: 'list-team', label: 'List the team', method: 'GET' }
			]
		},
		{
			group: 'Reference',
			items: [
				{ id: 'objects', label: 'Objects' },
				{ id: 'errors', label: 'Errors' },
				{ id: 'examples', label: 'Code examples' },
				{ id: 'feeds', label: 'RSS feeds' }
			]
		}
	];

	// Highlight the section being read in the sidebar.
	let active = $state('introduction');
	let sections: HTMLElement[] = [];
	function updateActive() {
		// The last section whose top has scrolled past the nav; the final one
		// once the page bottoms out, since it may never reach the top.
		const atBottom = innerHeight + scrollY >= document.documentElement.scrollHeight - 4;
		let current = sections[0];
		for (const s of sections) if (s.getBoundingClientRect().top <= 120) current = s;
		active = (atBottom ? sections[sections.length - 1] : current)?.id ?? active;
	}
	onMount(() => {
		sections = toc
			.flatMap((g) => g.items)
			.map((i) => document.getElementById(i.id))
			.filter((s): s is HTMLElement => !!s);
		updateActive();
	});

	let copiedBase = $state(false);
	async function copyBase() {
		try {
			await navigator.clipboard.writeText(base);
			copiedBase = true;
			setTimeout(() => (copiedBase = false), 1600);
		} catch {
			/* Clipboard may be blocked. */
		}
	}

	const endpoints = [
		{
			id: 'list-themes',
			title: 'List themes',
			summary:
				'Every published theme with its subtopics, cover art, graphics, videos and links to each article. A link is null when that article hasn’t been written yet.',
			path: '/articles',
			tryPath: '/articles',
			params: []
		},
		{
			id: 'get-theme',
			title: 'Get a theme',
			summary: 'One theme and its subtopics. Same subtopic shape as the list endpoint.',
			path: '/articles/{theme}',
			tryPath: '/articles/names-of-god',
			params: [['theme', 'Theme slug, e.g. names-of-god']]
		},
		{
			id: 'get-subtopic',
			title: 'Get a subtopic',
			summary:
				'One subtopic with its graphics and videos, which articles exist in each language, and who wrote and designed them.',
			path: '/articles/{theme}/{subtopic}',
			tryPath: '/articles/names-of-god/jehovah-jireh',
			params: [
				['theme', 'Theme slug, e.g. names-of-god'],
				['subtopic', 'Subtopic slug, e.g. jehovah-jireh']
			]
		},
		{
			id: 'get-article',
			title: 'Get an article',
			summary:
				'The full text of a devotional or study material as Markdown, with its metadata, graphics and videos.',
			path: '/articles/{theme}/{subtopic}/{slug}',
			tryPath: '/articles/names-of-god/jehovah-jireh/devotional_en',
			params: [
				['theme', 'Theme slug, e.g. names-of-god'],
				['subtopic', 'Subtopic slug, e.g. jehovah-jireh'],
				[
					'slug',
					'{type}_{lang}: devotional_en, devotional_am, study_material_en or study_material_am'
				]
			]
		},
		{
			id: 'list-team',
			title: 'List the team',
			summary: 'Everyone behind Benaiah, grouped by what they do.',
			path: '/team',
			tryPath: '/team',
			params: []
		}
	];

	const cdn = 'https://res.cloudinary.com/doh7zyphl/image/upload';

	const responses: Record<string, string> = {
		'list-themes': `[
  {
    "slug": "names-of-god",
    "title": { "en": "Names of God", "am": "የእግዚአብሔር ስሞች" },
    "subtopics_count": 10,
    "subtopics": [
      {
        "title": { "en": "Jehovah Jireh", "am": "ጄሆቫ ይርኤ" },
        "description": {
          "en": "The Lord who provides for us.",
          "am": "የሚያስፈልገንን የሚሰጠን ጌታ።"
        },
        "covers": {
          "en": "${cdn}/v1751666007/1_fsfa6v.png",
          "am": "${cdn}/v1751666587/7_d7nw1t.png"
        },
        "images": {
          "square": { "en": ["${cdn}/…/1_fsfa6v.png"], "am": ["${cdn}/…/7_d7nw1t.png"] },
          "story": { "en": ["${cdn}/…/13_qiqgaa.png"], "am": ["${cdn}/…/16_vmqpgo.png"] }
        },
        "articles": {
          "devotional": {
            "en": "/api/v1/articles/names-of-god/jehovah-jireh/devotional_en",
            "am": "/api/v1/articles/names-of-god/jehovah-jireh/devotional_am"
          },
          "study_material": {
            "en": "/api/v1/articles/names-of-god/jehovah-jireh/study_material_en",
            "am": "/api/v1/articles/names-of-god/jehovah-jireh/study_material_am"
          }
        },
        "media": {
          "devotional": {
            "en": { "video": null, "short": "https://www.youtube.com/shorts/PSYPXH5RnHs", "narration": "https://t.me/benaiah_org/258" },
            "am": { "video": null, "short": "https://www.youtube.com/shorts/oibLFZ91dzk", "narration": "https://t.me/Benaiah_Amharic/212" }
          },
          "study_material": {
            "en": { "video": "https://www.youtube.com/watch?v=lNWArDDGR9k", "short": null, "narration": "https://t.me/benaiah_org/259" },
            "am": { "video": "https://www.youtube.com/watch?v=wh1DRIwoW9s", "short": null, "narration": "https://t.me/Benaiah_Amharic/213" }
          }
        },
        "artists": [
          {
            "fullname_en": "Akinahom Getahun",
            "fullname_am": "አኪናሆም ጌታሁን",
            "photo": "/_app/immutable/assets/AkinahomGetahun.a1b2c3.png",
            "role_en": "Graphic Designer",
            "role_am": "Graphic Designer"
          }
        ]
      }
    ]
  }
]`,
		'get-theme': `{
  "slug": "names-of-god",
  "title": { "en": "Names of God", "am": "የእግዚአብሔር ስሞች" },
  "subtopics": [
    {
      "title": { "en": "Jehovah Jireh", "am": "ጄሆቫ ይርኤ" },
      "description": { "en": "The Lord who provides for us.", "am": "…" },
      "covers": { "en": "${cdn}/…/1_fsfa6v.png", "am": "${cdn}/…/7_d7nw1t.png" },
      "images": { "square": { "en": ["…"], "am": ["…"] }, "story": { "en": ["…"], "am": ["…"] } },
      "articles": {
        "devotional": { "en": "/api/v1/…/devotional_en", "am": "/api/v1/…/devotional_am" },
        "study_material": { "en": "/api/v1/…/study_material_en", "am": "/api/v1/…/study_material_am" }
      },
      "media": {
        "devotional": { "en": { "video": null, "short": "https://www.youtube.com/shorts/…", "narration": null }, "am": { "…": "…" } },
        "study_material": { "en": { "video": "https://www.youtube.com/watch?v=…", "short": null, "narration": null }, "am": { "…": "…" } }
      },
      "artists": [{ "fullname_en": "Akinahom Getahun", "…": "…" }]
    }
  ]
}`,
		'get-subtopic': `{
  "theme_en": "Names of God",
  "theme_slug": "names-of-god",
  "title": { "en": "Jehovah Jireh", "am": "ጄሆቫ ይርኤ" },
  "slug": "jehovah-jireh",
  "description": {
    "en": "The Lord who provides for us.",
    "am": "የሚያስፈልገንን የሚሰጠን ጌታ።"
  },
  "covers": {
    "en": "${cdn}/v1751666007/1_fsfa6v.png",
    "am": "${cdn}/v1751666587/7_d7nw1t.png"
  },
  "images": {
    "square": { "en": ["${cdn}/…/1_fsfa6v.png"], "am": ["${cdn}/…/7_d7nw1t.png"] },
    "story": { "en": ["${cdn}/…/13_qiqgaa.png"], "am": ["${cdn}/…/16_vmqpgo.png"] }
  },
  "available_content": {
    "devotional": { "en": true, "am": true },
    "study_material": { "en": true, "am": true }
  },
  "media": {
    "devotional": {
      "en": { "video": null, "short": "https://www.youtube.com/shorts/PSYPXH5RnHs", "narration": "https://t.me/benaiah_org/258" },
      "am": { "video": null, "short": "https://www.youtube.com/shorts/oibLFZ91dzk", "narration": "https://t.me/Benaiah_Amharic/212" }
    },
    "study_material": {
      "en": { "video": "https://www.youtube.com/watch?v=lNWArDDGR9k", "short": null, "narration": "https://t.me/benaiah_org/259" },
      "am": { "video": "https://www.youtube.com/watch?v=wh1DRIwoW9s", "short": null, "narration": "https://t.me/Benaiah_Amharic/213" }
    }
  },
  "authors": {
    "devotional_en": [
      {
        "fullname_en": "Truket Lema",
        "fullname_am": "ትሩኬት ለማ",
        "photo": "/_app/immutable/assets/TruketLema.a1b2c3.png",
        "role_en": "Author",
        "role_am": "Author"
      }
    ],
    "devotional_am": [{ "fullname_en": "Clinton Beyene", "…": "…" }],
    "study_material_en": [{ "fullname_en": "Truket Lema", "…": "…" }],
    "study_material_am": [{ "fullname_en": "Clinton Beyene", "…": "…" }]
  },
  "artists": [{ "fullname_en": "Akinahom Getahun", "…": "…" }]
}`,
		'get-article': `{
  "theme": "names-of-god",
  "subtopic": "jehovah-jireh",
  "type": "devotional",
  "lang": "en",
  "title": "Jehovah Jireh — The Lord Our Provider",
  "date": "Feb 27, 2025",
  "audio": "",
  "header": "",
  "graphics": {
    "covers": { "en": "${cdn}/…/1_fsfa6v.png", "am": "${cdn}/…/7_d7nw1t.png" },
    "images": { "square": { "en": ["…"], "am": ["…"] }, "story": { "en": ["…"], "am": ["…"] } }
  },
  "media": {
    "video": null,
    "short": "https://www.youtube.com/shorts/PSYPXH5RnHs",
    "narration": "https://t.me/benaiah_org/258"
  },
  "content": "He stretched out the sky and laid the earth beneath it. He whispered and life took form…"
}`,
		'list-team': `{
  "authors": [{ "fullname_en": "Truket Lema", "…": "…" }],
  "graphics_designers": [{ "fullname_en": "Akinahom Getahun", "…": "…" }],
  "narrators": [{ "fullname_en": "Courtney Reed", "…": "…" }],
  "video_editors": [
    {
      "fullname_en": "Abenezer Teshome",
      "fullname_am": "አቤኔዘር ተሾመ",
      "photo": "/_app/immutable/assets/AbenezerTeshome.a1b2c3.jpg",
      "role_en": "Video Editor",
      "role_am": "Video Editor"
    }
  ],
  "software_developers": [{ "fullname_en": "Dagmawi Esayas", "…": "…" }]
}`
	};

	const quickStart = $derived(`curl ${base}/articles/names-of-god/jehovah-jireh/devotional_en`);

	const errorShape = `{
  "error": "Theme not found"
}`;

	const errorMessages = [
		['404', 'Theme not found', 'The theme slug doesn’t match a published theme.'],
		['404', 'Subtopic not found', 'The theme exists but the subtopic slug doesn’t.'],
		['404', 'Article not found', 'That article hasn’t been written in this language yet.'],
		[
			'400',
			'Invalid slug format. Expected format: {type}_{lang} (e.g., devotional_en, study_material_am)',
			'The article slug has no underscore, e.g. devotional.'
		],
		[
			'400',
			'Invalid content type. Must be "devotional" or "study_material"',
			'The type isn’t devotional or study_material.'
		],
		['400', 'Invalid language. Must be "en" or "am"', 'The language isn’t en or am.'],
		['500', 'Failed to process article content', 'Something went wrong on our side.']
	];

	const examples = $derived([
		{
			id: 'fetch',
			label: 'JavaScript',
			lang: 'js' as const,
			code: `const BASE = '${base}';

// Every published theme, with links to each article
const themes = await fetch(\`\${BASE}/articles\`).then((r) => r.json());

// One article
const res = await fetch(\`\${BASE}/articles/names-of-god/jehovah-jireh/devotional_en\`);
if (!res.ok) {
  const { error } = await res.json();
  throw new Error(error);
}
const article = await res.json();

console.log(article.title);   // "Jehovah Jireh — The Lord Our Provider"
console.log(article.content); // Markdown`
		},
		{
			id: 'react',
			label: 'React Native',
			lang: 'jsx' as const,
			code: `const BASE = '${base}';

function Article({ theme, subtopic, slug }) {
  const [article, setArticle] = useState(null);

  useEffect(() => {
    fetch(\`\${BASE}/articles/\${theme}/\${subtopic}/\${slug}\`)
      .then((res) => res.json())
      .then(setArticle);
  }, [theme, subtopic, slug]);

  if (!article) return <ActivityIndicator />;

  return (
    <ScrollView>
      <Image source={{ uri: article.graphics.covers.en }} />
      <Text>{article.title}</Text>
      <Markdown>{article.content}</Markdown>
    </ScrollView>
  );
}`
		},
		{
			id: 'curl',
			label: 'cURL',
			lang: 'bash' as const,
			code: `# List themes
curl ${base}/articles

# One subtopic, pretty-printed
curl -s ${base}/articles/names-of-god/jehovah-jireh | jq

# An article in Amharic
curl ${base}/articles/names-of-god/jehovah-jireh/devotional_am`
		}
	]);
	let exampleTab = $state('fetch');
	const currentExample = $derived(examples.find((e) => e.id === exampleTab)!);

	const pathParts = (path: string) => path.split(/(\{\w+\})/).filter(Boolean);
</script>

<Seo
	title="API documentation · Benaiah"
	description="REST API for Benaiah's devotionals, study materials and graphics in English and Amharic."
/>
<svelte:window onscroll={updateActive} onresize={updateActive} />
<BlurredBackground />
<div class="relative min-h-screen">
	<Nav solid />

	<div class="docs">
		<!-- Sidebar -->
		<aside class="sidebar" aria-label="On this page">
			<a class="brand" href="#introduction">
				<span class="brand-mark">API</span>
				<span>
					<strong>Benaiah API</strong>
					<small>v1 · REST · JSON</small>
				</span>
			</a>
			{#each toc as group}
				<div class="group">
					<p class="group-label">{group.group}</p>
					<ul>
						{#each group.items as item}
							<li>
								<a
									href="#{item.id}"
									class:active={active === item.id}
									aria-current={active === item.id ? 'location' : undefined}
								>
									{#if 'method' in item}<span class="mini-method">{item.method}</span>{/if}
									{item.label}
								</a>
							</li>
						{/each}
					</ul>
				</div>
			{/each}
		</aside>

		<!-- Content -->
		<main class="content">
			<header id="introduction" class="intro">
				<p class="eyebrow">Developers</p>
				<h1>Benaiah API</h1>
				<p class="lead">
					Read-only access to Benaiah's devotionals, study materials and graphics, in English and
					Amharic. Build a reading app, a church display, a bot, anything that helps people draw
					closer to God.
				</p>

				<div class="base">
					<span class="base-label">Base URL</span>
					<code>{base}</code>
					<button type="button" onclick={copyBase} aria-label="Copy base URL">
						{#if copiedBase}<Check size={15} />{:else}<Copy size={15} />{/if}
					</button>
				</div>

				<ul class="facts">
					<li>
						<Lock size={16} /><span><strong>No key needed</strong>Public and free to use</span>
					</li>
					<li>
						<Languages size={16} /><span><strong>Bilingual</strong>Every field in en and am</span>
					</li>
					<li>
						<Globe size={16} /><span><strong>CORS enabled</strong>Call it from any origin</span>
					</li>
					<li>
						<Timer size={16} /><span><strong>Cached 1 hour</strong>Content changes rarely</span>
					</li>
				</ul>
			</header>

			<section id="quick-start">
				<h2>Quick start</h2>
				<p>
					Content is organised as <strong>themes</strong> (e.g. Names of God), each with
					<strong>subtopics</strong> (Jehovah Jireh), and each subtopic has up to four
					<strong>articles</strong>: a devotional and a study material in each language. Start from
					the list of themes and follow the article links it returns, or request an article
					directly:
				</p>
				<CodeBlock code={quickStart} lang="bash" />
			</section>

			<section id="endpoints-list" class="endpoints">
				<h2>Endpoints</h2>
				{#each endpoints as ep}
					<article id={ep.id} class="endpoint">
						<h3>{ep.title}</h3>
						<p>{ep.summary}</p>

						<div class="route">
							<span class="method">GET</span>
							<code class="path"
								><span class="path-base">/api/v1</span
								>{#each pathParts(ep.path) as part}{#if part.startsWith('{')}<span class="param"
											>{part}</span
										>{:else}{part}{/if}{/each}</code
							>
							<a class="try" href="/api/v1{ep.tryPath}" target="_blank" rel="noopener noreferrer"
								>Try it <ArrowUpRight size={14} /></a
							>
						</div>

						{#if ep.params.length}
							<h4>Path parameters</h4>
							<dl class="params">
								{#each ep.params as [name, description]}
									<div>
										<dt><code>{name}</code><span class="type">string</span></dt>
										<dd>{description}</dd>
									</div>
								{/each}
							</dl>
						{/if}

						<h4>Response <span class="status ok">200</span></h4>
						<CodeBlock code={responses[ep.id]} lang="json" title="application/json" tall />

						{#if ep.id === 'get-article'}
							<div class="note">
								<strong>About <code>content</code></strong>
								It's Markdown with the site's interactive components removed. <code>audio</code> and
								<code>header</code> are empty strings when an article has none. For video and audio,
								use
								<code>media</code> (see <a href="#objects">Objects</a>).
							</div>
						{/if}
					</article>
				{/each}
			</section>

			<section id="objects">
				<h2>Objects</h2>
				<h3>Person</h3>
				<p>Authors, artists and team members share one shape.</p>
				<dl class="params">
					<div>
						<dt><code>fullname_en</code><span class="type">string</span></dt>
						<dd>Name in English.</dd>
					</div>
					<div>
						<dt><code>fullname_am</code><span class="type">string</span></dt>
						<dd>Name in Amharic.</dd>
					</div>
					<div>
						<dt><code>photo</code><span class="type">string</span></dt>
						<dd>Photo path, relative to <code>{origin}</code>.</dd>
					</div>
					<div>
						<dt><code>role_en</code>, <code>role_am</code><span class="type">string?</span></dt>
						<dd>Their role on the team, when set.</dd>
					</div>
				</dl>
				<h3>Graphics</h3>
				<dl class="params">
					<div>
						<dt><code>covers.en</code>, <code>covers.am</code><span class="type">string</span></dt>
						<dd>Square cover image URL for each language.</dd>
					</div>
					<div>
						<dt><code>images.square.*</code><span class="type">string[]</span></dt>
						<dd>Square posts (1:1), in English and Amharic.</dd>
					</div>
					<div>
						<dt><code>images.story.*</code><span class="type">string[]</span></dt>
						<dd>Story graphics (9:16), in English and Amharic.</dd>
					</div>
				</dl>
				<h3>Media</h3>
				<p>
					Videos and narrations for one article. Not every article has them, so each field is
					<code>null</code> when it doesn't exist. Subtopic responses nest this by type and
					language, as <code>media.devotional.en</code>, <code>media.study_material.am</code> and so
					on; the article endpoint returns the one for that article.
				</p>
				<dl class="params">
					<div>
						<dt><code>video</code><span class="type">string | null</span></dt>
						<dd>Full-length YouTube video (16:9).</dd>
					</div>
					<div>
						<dt><code>short</code><span class="type">string | null</span></dt>
						<dd>YouTube Short (9:16), mostly for devotionals.</dd>
					</div>
					<div>
						<dt><code>narration</code><span class="type">string | null</span></dt>
						<dd>Audio narration, as a link to its post on our Telegram channel.</dd>
					</div>
				</dl>
			</section>

			<section id="errors">
				<h2>Errors</h2>
				<p>
					Errors use a standard HTTP status and a JSON body with a single <code>error</code> message.
				</p>
				<CodeBlock code={errorShape} lang="json" title="404 · application/json" />
				<div class="table-wrap">
					<table>
						<thead>
							<tr><th>Status</th><th>Message</th><th>When</th></tr>
						</thead>
						<tbody>
							{#each errorMessages as [status, message, when]}
								<tr>
									<td
										><span class="status" class:warn={status === '400'} class:bad={status === '500'}
											>{status}</span
										></td
									>
									<td><code>{message}</code></td>
									<td>{when}</td>
								</tr>
							{/each}
						</tbody>
					</table>
				</div>
			</section>

			<section id="examples">
				<h2>Code examples</h2>
				<div class="tabs" role="tablist" aria-label="Language">
					{#each examples as ex}
						<button
							type="button"
							role="tab"
							aria-selected={exampleTab === ex.id}
							class:selected={exampleTab === ex.id}
							onclick={() => (exampleTab = ex.id)}>{ex.label}</button
						>
					{/each}
				</div>
				{#key exampleTab}
					<CodeBlock code={currentExample.code} lang={currentExample.lang} />
				{/key}
			</section>

			<section id="feeds">
				<h2>RSS feeds</h2>
				<p>
					If you only need new articles, subscribe to a feed instead:
					<a href="/rss.xml">/rss.xml</a> for English and
					<a href="/rss.xml?lang=am">/rss.xml?lang=am</a> for Amharic.
				</p>
				<p class="help">
					Building something with the API? We'd love to hear about it on
					<a href="https://t.me/benaiah_contact" target="_blank" rel="noopener noreferrer"
						>Telegram ↗</a
					>.
				</p>
			</section>
		</main>
	</div>
</div>

<style>
	.docs {
		--ink: #18181b;
		--muted: #52525b;
		--line: #e4e4e7;
		--accent: #059669;
		display: grid;
		grid-template-columns: 240px minmax(0, 1fr);
		gap: 2.5rem;
		max-width: 1180px;
		margin: 1.5rem auto 4rem;
		padding: 2rem;
		background: #ffffffd9;
		backdrop-filter: blur(16px);
		border: 1px solid #ffffff;
		border-radius: 28px;
		box-shadow: 0 30px 80px -40px #0005;
		color: var(--ink);
	}

	/* Sidebar */
	.sidebar {
		position: sticky;
		top: 5rem;
		align-self: start;
		max-height: calc(100vh - 6rem);
		overflow-y: auto;
		padding-right: 0.5rem;
	}
	.brand {
		display: flex;
		align-items: center;
		gap: 0.75rem;
		padding: 0.5rem;
		margin-bottom: 1.5rem;
		border-radius: 14px;
	}
	.brand-mark {
		display: grid;
		place-items: center;
		width: 2.5rem;
		height: 2.5rem;
		border-radius: 11px;
		background: var(--ink);
		color: #fff;
		font-size: 12px;
		font-weight: 700;
		letter-spacing: 0.05em;
	}
	.brand strong {
		display: block;
		font-size: 15px;
	}
	.brand small {
		color: var(--muted);
		font-size: 12px;
	}
	.group {
		margin-bottom: 1.25rem;
	}
	.group-label {
		margin: 0 0 0.35rem 0.75rem;
		font-size: 11px;
		font-weight: 600;
		letter-spacing: 0.08em;
		text-transform: uppercase;
		color: #a1a1aa;
	}
	.sidebar ul {
		list-style: none;
		margin: 0;
		padding: 0;
	}
	.sidebar li a {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		padding: 0.4rem 0.75rem;
		border-radius: 9px;
		font-size: 14px;
		color: var(--muted);
	}
	.sidebar li a:hover {
		background: #f4f4f5;
		color: var(--ink);
	}
	.sidebar li a.active {
		background: var(--ink);
		color: #fff;
	}
	.mini-method {
		font-size: 9.5px;
		font-weight: 700;
		letter-spacing: 0.04em;
		padding: 0.1rem 0.3rem;
		border-radius: 5px;
		background: #d1fae5;
		color: #065f46;
	}
	.active .mini-method {
		background: #34d39933;
		color: #6ee7b7;
	}

	/* Content */
	.content {
		min-width: 0;
		max-width: 780px;
	}
	section,
	.intro {
		scroll-margin-top: 5.5rem;
	}
	section {
		padding-top: 2.5rem;
		margin-top: 2.5rem;
		border-top: 1px solid var(--line);
	}
	.eyebrow {
		margin: 0;
		font-size: 13px;
		font-weight: 600;
		letter-spacing: 0.08em;
		text-transform: uppercase;
		color: var(--accent);
	}
	h1 {
		margin: 0.4rem 0 0.75rem;
		font-family: Batangas, sans-serif;
		font-size: clamp(2.25rem, 5vw, 3.25rem);
		line-height: 1.1;
	}
	.lead {
		max-width: 640px;
		font-size: 17px;
		line-height: 1.7;
		color: var(--muted);
	}
	h2 {
		margin: 0 0 1rem;
		font-family: Batangas, sans-serif;
		font-size: 1.75rem;
	}
	h3 {
		margin: 1.75rem 0 0.4rem;
		font-size: 1.2rem;
		font-weight: 600;
	}
	h4 {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		margin: 1.5rem 0 0.5rem;
		font-size: 13px;
		font-weight: 600;
		letter-spacing: 0.04em;
		text-transform: uppercase;
		color: var(--muted);
	}
	p {
		line-height: 1.75;
		color: #3f3f46;
	}
	.content a:not(.try) {
		text-decoration: underline;
		text-underline-offset: 3px;
		text-decoration-color: #a1a1aa;
	}
	.content a:not(.try):hover {
		text-decoration-color: currentColor;
	}
	:not(pre) > code {
		font-family: ui-monospace, 'JetBrains Mono', 'Cascadia Code', Menlo, Consolas, monospace;
		font-size: 0.86em;
		padding: 0.12rem 0.4rem;
		border-radius: 6px;
		background: #f4f4f5;
		border: 1px solid var(--line);
		overflow-wrap: anywhere;
	}

	/* Intro */
	.base {
		display: flex;
		align-items: center;
		gap: 0.75rem;
		margin: 1.75rem 0 1.25rem;
		padding: 0.5rem 0.5rem 0.5rem 1rem;
		border-radius: 14px;
		background: #16161a;
		color: #e4e4e7;
	}
	.base-label {
		flex-shrink: 0;
		font-size: 11px;
		font-weight: 600;
		letter-spacing: 0.08em;
		text-transform: uppercase;
		color: #a1a1aa;
	}
	.base code {
		flex: 1;
		min-width: 0;
		overflow-x: auto;
		white-space: nowrap;
		background: none;
		border: 0;
		padding: 0;
		color: #86efac;
		font-size: 14px;
	}
	.base button {
		display: grid;
		place-items: center;
		width: 2.1rem;
		height: 2.1rem;
		border-radius: 9px;
		color: #d4d4d8;
	}
	.base button:hover {
		background: #ffffff14;
	}
	.facts {
		display: grid;
		grid-template-columns: repeat(2, minmax(0, 1fr));
		gap: 0.75rem;
		margin: 0;
		padding: 0;
		list-style: none;
	}
	.facts li {
		display: flex;
		align-items: flex-start;
		gap: 0.75rem;
		padding: 0.9rem 1rem;
		border: 1px solid var(--line);
		border-radius: 14px;
		background: #fff;
		font-size: 13px;
		color: var(--muted);
	}
	.facts li :global(svg) {
		flex-shrink: 0;
		margin-top: 0.15rem;
		color: var(--accent);
	}
	.facts strong {
		display: block;
		font-size: 14px;
		color: var(--ink);
	}

	/* Endpoints */
	.endpoint {
		scroll-margin-top: 5.5rem;
		margin-top: 1.5rem;
		padding: 1.5rem;
		border: 1px solid var(--line);
		border-radius: 20px;
		background: #fff;
	}
	.endpoint h3 {
		margin-top: 0;
	}
	.endpoint > p {
		margin: 0;
	}
	.route {
		display: flex;
		align-items: center;
		gap: 0.75rem;
		margin-top: 1.1rem;
		padding: 0.5rem 0.5rem 0.5rem 0.6rem;
		border: 1px solid var(--line);
		border-radius: 12px;
		background: #fafafa;
	}
	.method {
		flex-shrink: 0;
		padding: 0.2rem 0.55rem;
		border-radius: 7px;
		background: #d1fae5;
		color: #065f46;
		font-size: 12px;
		font-weight: 700;
		letter-spacing: 0.04em;
	}
	.route .path {
		flex: 1;
		min-width: 0;
		background: none;
		border: 0;
		padding: 0;
		font-size: 14px;
		color: var(--ink);
	}
	.path-base {
		color: #a1a1aa;
	}
	.param {
		color: #7c3aed;
	}
	.try {
		display: inline-flex;
		flex-shrink: 0;
		align-items: center;
		gap: 0.25rem;
		padding: 0.35rem 0.7rem;
		border-radius: 8px;
		background: var(--ink);
		color: #fff;
		font-size: 13px;
		font-weight: 500;
		transition: background 0.15s;
	}
	.try:hover {
		background: #3f3f46;
	}
	.params {
		margin: 0;
		border: 1px solid var(--line);
		border-radius: 14px;
		background: #fff;
		overflow: hidden;
	}
	.params > div {
		display: grid;
		grid-template-columns: minmax(10rem, 0.8fr) 2fr;
		gap: 1rem;
		padding: 0.75rem 1rem;
	}
	.params > div + div {
		border-top: 1px solid var(--line);
	}
	.params dt {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		gap: 0.4rem;
	}
	.params dd {
		margin: 0;
		font-size: 14px;
		line-height: 1.6;
		color: #3f3f46;
	}
	.type {
		font-size: 12px;
		color: #a1a1aa;
	}
	.status {
		display: inline-block;
		padding: 0.1rem 0.45rem;
		border-radius: 6px;
		font-family: ui-monospace, Menlo, Consolas, monospace;
		font-size: 12px;
		font-weight: 600;
		letter-spacing: 0;
		background: #fee2e2;
		color: #991b1b;
	}
	.status.ok {
		background: #d1fae5;
		color: #065f46;
	}
	.status.warn {
		background: #fef3c7;
		color: #92400e;
	}
	.status.bad {
		background: #fce7f3;
		color: #9d174d;
	}
	.note {
		padding: 0.9rem 1rem;
		border-radius: 12px;
		background: #ecfdf5;
		border: 1px solid #a7f3d0;
		font-size: 14px;
		line-height: 1.7;
		color: #064e3b;
	}
	.note strong {
		display: block;
		margin-bottom: 0.15rem;
	}

	/* Tables */
	.table-wrap {
		overflow-x: auto;
		border: 1px solid var(--line);
		border-radius: 14px;
		background: #fff;
	}
	table {
		width: 100%;
		border-collapse: collapse;
		font-size: 14px;
	}
	th,
	td {
		padding: 0.7rem 1rem;
		text-align: left;
		vertical-align: top;
	}
	th {
		font-size: 12px;
		font-weight: 600;
		letter-spacing: 0.04em;
		text-transform: uppercase;
		color: var(--muted);
		background: #fafafa;
		border-bottom: 1px solid var(--line);
	}
	tbody tr + tr td {
		border-top: 1px solid var(--line);
	}
	td {
		color: #3f3f46;
		line-height: 1.6;
	}

	/* Tabs */
	.tabs {
		display: inline-flex;
		gap: 0.25rem;
		padding: 0.25rem;
		border-radius: 12px;
		background: #f4f4f5;
		border: 1px solid var(--line);
	}
	.tabs button {
		padding: 0.4rem 0.9rem;
		border-radius: 9px;
		font-size: 14px;
		color: var(--muted);
	}
	.tabs button.selected {
		background: #fff;
		color: var(--ink);
		font-weight: 600;
		box-shadow: 0 1px 3px #0002;
	}
	.help {
		margin-top: 1.5rem;
		padding: 1rem;
		border-radius: 14px;
		background: #fafafa;
		border: 1px dashed #d4d4d8;
	}

	/* Responsive */
	@media (max-width: 900px) {
		.docs {
			grid-template-columns: minmax(0, 1fr);
			gap: 1rem;
			margin: 0.5rem 0.75rem 3rem;
			padding: 1.25rem;
			border-radius: 22px;
		}
		.sidebar {
			position: static;
			max-height: none;
			padding: 0 0 1rem;
			border-bottom: 1px solid var(--line);
		}
		.brand {
			margin-bottom: 0.75rem;
			padding: 0;
		}
		.group {
			margin-bottom: 0.5rem;
		}
		.group-label {
			margin-left: 0;
		}
		.sidebar ul {
			display: flex;
			flex-wrap: wrap;
			gap: 0.35rem;
		}
		.sidebar li a {
			padding: 0.3rem 0.65rem;
			border: 1px solid var(--line);
			background: #fff;
			font-size: 13px;
		}
	}
	@media (max-width: 600px) {
		.facts {
			grid-template-columns: minmax(0, 1fr);
		}
		.endpoint {
			padding: 1rem;
		}
		.route {
			flex-wrap: wrap;
		}
		.route .path {
			flex-basis: 100%;
			order: 3;
			overflow-wrap: anywhere;
		}
		.try {
			margin-left: auto;
		}
		.params > div {
			grid-template-columns: minmax(0, 1fr);
			gap: 0.25rem;
		}
	}
</style>
