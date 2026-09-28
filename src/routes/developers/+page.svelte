<script lang="ts">
	let activeSection = '';
	
	function scrollToSection(id: string) {
		const element = document.getElementById(id);
		if (element) {
			element.scrollIntoView({ behavior: 'smooth' });
			activeSection = id;
		}
	}
	
	// JSON examples as strings
	const example1 = `[
  {
    "slug": "love-faith-and-hope",
    "title": {
      "en": "Love Faith Hope",
      "am": "ፍቅር እምነት ተስፋ"
    },
    "subtopics_count": 3,
    "subtopics": [
      {
        "title": {
          "en": "Love",
          "am": "ፍቅር"
        },
        "description": {
          "en": "A collection of beautiful and heart warming graphics",
          "am": "የሚያምር እና የልብ ሞቅ ምስሎች ስብስብ"
        },
        "covers": {
          "en": "https://res.cloudinary.com/.../cover_en.png",
          "am": "https://res.cloudinary.com/.../cover_am.png"
        },
        "images": {
          "square": {
            "en": ["https://res.cloudinary.com/.../square1.png"],
            "am": ["https://res.cloudinary.com/.../square1_am.png"]
          },
          "story": {
            "en": ["https://res.cloudinary.com/.../story1.png"],
            "am": ["https://res.cloudinary.com/.../story1_am.png"]
          }
        },
        "articles": {
          "devotional": {
            "en": "/api/v1/articles/love-faith-and-hope/love/devotional_en",
            "am": "/api/v1/articles/love-faith-and-hope/love/devotional_am"
          },
          "study_material": {
            "en": "/api/v1/articles/love-faith-and-hope/love/study_material_en",
            "am": "/api/v1/articles/love-faith-and-hope/love/study_material_am"
          }
        },
        "artists": [
          {
            "name": "John Doe",
            "role": "Graphic Designer",
            "bio": "Creative designer with passion for visual storytelling"
          },
          {
            "name": "Jane Smith",
            "role": "Illustrator",
            "bio": "Digital artist specializing in religious artwork"
          }
        ]
      }
    ]
  }
]`;

	const example2 = `{
  "slug": "love-faith-and-hope",
  "title": {
    "en": "Love Faith Hope",
    "am": "ፍቅር እምነት ተስፋ"
  },
  "subtopics": [
    {
      "title": { "en": "Love", "am": "ፍቅር" },
      "description": { "en": "...", "am": "..." },
      "covers": { "en": "https://...", "am": "https://..." },
      "images": {
        "square": { "en": ["https://..."], "am": ["https://..."] },
        "story": { "en": ["https://..."], "am": ["https://..."] }
      },
      "articles": {
        "devotional": { "en": "/api/v1/...", "am": "/api/v1/..." },
        "study_material": { "en": "/api/v1/...", "am": null }
      },
      "artists": [
        { "name": "Artist Name", "role": "Designer", "bio": "..." }
      ]
    }
  ]
}`;

	const example3 = `{
  "theme_en": "Love Faith Hope",
  "theme_slug": "love-faith-and-hope",
  "title": { "en": "Love", "am": "ፍቅር" },
  "slug": "love",
  "description": { "en": "...", "am": "..." },
  "covers": {
    "en": "https://res.cloudinary.com/.../cover_en.png",
    "am": "https://res.cloudinary.com/.../cover_am.png"
  },
  "images": {
    "square": {
      "en": ["https://res.cloudinary.com/.../square1.png"],
      "am": ["https://res.cloudinary.com/.../square1_am.png"]
    },
    "story": {
      "en": ["https://res.cloudinary.com/.../story1.png"],
      "am": ["https://res.cloudinary.com/.../story1_am.png"]
    }
  },
  "available_content": {
    "devotional": { "en": true, "am": true },
    "study_material": { "en": true, "am": false }
  },
  "authors": {
    "devotional_en": [
      { "name": "John Doe", "role": "Writer", "bio": "Devotional author" }
    ],
    "devotional_am": [
      { "name": "አበበ በቀለ", "role": "ጸሃፊ", "bio": "የምሥጢር ጸሃፊ" }
    ],
    "study_material_en": [
      { "name": "Jane Smith", "role": "Theologian", "bio": "Biblical scholar" }
    ],
    "study_material_am": []
  },
  "artists": [
    { "name": "Artist Name", "role": "Designer", "bio": "Visual artist" }
  ]
}`;

	const example4 = `{
  "theme": "love-faith-and-hope",
  "subtopic": "love",
  "type": "devotional",
  "lang": "en",
  "title": "True Love",
  "date": "December 30, 2025",
  "audio": "youtube/_cMxraX_5RE",
  "header": "Lost in Doubts? God's Love Never Quits on You",
  "graphics": {
    "covers": {
      "en": "https://res.cloudinary.com/.../cover_en.png",
      "am": "https://res.cloudinary.com/.../cover_am.png"
    },
    "images": {
      "square": {
        "en": ["https://res.cloudinary.com/.../square1.png"],
        "am": ["https://res.cloudinary.com/.../square1_am.png"]
      },
      "story": {
        "en": ["https://res.cloudinary.com/.../story1.png"],
        "am": ["https://res.cloudinary.com/.../story1_am.png"]
      }
    }
  },
  "content": "Ever catch yourself wondering if God's love is really unconditional?\\n\\nIn Romans 8:38-39, Paul writes: \\"For I am convinced that neither death nor life, neither angels nor demons, neither the present nor the future, nor any powers, neither height nor depth, nor anything else in all creation, will be able to separate us from the love of God that is in Christ Jesus our Lord.\\"\\n\\nThis passage reminds us that God's love isn't based on our performance. It's not something we can earn or lose. It's a gift that remains constant through every season of life."
}`;

	const errorExamples = `// 404 - Theme not found
{
  "error": "Theme not found: invalid-theme-slug"
}

// 400 - Invalid slug format
{
  "error": "Invalid slug format. Expected format: {type}_{lang}"
}

// 400 - Invalid language
{
  "error": "Invalid language. Must be 'en' or 'am'"
}`;

	const codeExample1 = `// Get all themes
const response = await fetch('/api/v1/articles');
const themes = await response.json();

// Get specific article
const article = await fetch(
  '/api/v1/articles/love-faith-and-hope/love/devotional_en'
);
const data = await article.json();

console.log(data.title);    // "True Love"
console.log(data.content);  // Markdown content`;

	const codeExample2 = `function Article({ theme, subtopic, slug }) {
  const [article, setArticle] = useState(null);
  
  useEffect(() => {
    fetch(\`/api/v1/articles/\${theme}/\${subtopic}/\${slug}\`)
      .then(res => res.json())
      .then(setArticle);
  }, [theme, subtopic, slug]);
  
  if (!article) return <Loading />;
  
  return (
    <View>
      <Image source={{ uri: article.graphics.covers.en }} />
      <Text>{article.title}</Text>
      <Markdown>{article.content}</Markdown>
    </View>
  );
}`;

	const codeExample3 = `async function getArticle(theme, subtopic, slug) {
  try {
    const response = await fetch(
      \`/api/v1/articles/\${theme}/\${subtopic}/\${slug}\`
    );
    
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error);
    }
    
    return await response.json();
  } catch (error) {
    console.error('Failed to fetch article:', error.message);
    return null;
  }
}`;
</script>

<svelte:head>
	<title>API Documentation - Developers</title>
	<meta name="description" content="REST API documentation for Articles API" />
</svelte:head>

<div class="docs-container">
	<!-- Sidebar Navigation -->
	<nav class="sidebar">
		<h2>API Documentation</h2>
		<ul>
			<li><button on:click={() => scrollToSection('overview')}>Overview</button></li>
			<li><button on:click={() => scrollToSection('endpoints')}>Endpoints</button></li>
			<li class="sub"><button on:click={() => scrollToSection('get-all-themes')}>Get All Themes</button></li>
			<li class="sub"><button on:click={() => scrollToSection('get-theme')}>Get Single Theme</button></li>
			<li class="sub"><button on:click={() => scrollToSection('get-subtopic')}>Get Single Subtopic</button></li>
			<li class="sub"><button on:click={() => scrollToSection('get-article')}>Get Single Article</button></li>
			<li><button on:click={() => scrollToSection('errors')}>Error Handling</button></li>
			<li><button on:click={() => scrollToSection('examples')}>Code Examples</button></li>
		</ul>
	</nav>

	<!-- Main Content -->
	<main class="content">
		<header>
			<h1>Articles REST API</h1>
			<p class="subtitle">Version 1.0 • Base URL: <code>/api/v1</code></p>
		</header>

		<!-- Overview -->
		<section id="overview">
			<h2>Overview</h2>
			<p>The Articles REST API provides access to themed devotional and study material content in both English and Amharic languages.</p>
			
			<h3>Key Features</h3>
			<ul>
				<li><strong>Versioned API</strong> - All endpoints under <code>/api/v1/</code></li>
				<li><strong>Bilingual Content</strong> - English (en) and Amharic (am)</li>
				<li><strong>Rich Media</strong> - Cover images, square graphics, story graphics</li>
				<li><strong>Caching</strong> - 1 hour cache on all responses</li>
				<li><strong>CORS Enabled</strong> - Cross-origin requests supported</li>
			</ul>
		</section>

		<!-- Endpoints -->
		<section id="endpoints">
			<h2>Endpoints</h2>
		</section>

		<!-- Endpoint 1 -->
		<section id="get-all-themes" class="endpoint">
			<h3>1. Get All Themes</h3>
			<p>Retrieve all published themes with subtopics and graphics.</p>
			
			<div class="endpoint-details">
				<p><span class="method">GET</span> <code>/api/v1/articles</code></p>
			</div>

			<h4>Response Example</h4>
			<pre><code>{example1}</code></pre>
		</section>

		<!-- Endpoint 2 -->
		<section id="get-theme" class="endpoint">
			<h3>2. Get Single Theme</h3>
			<p>Retrieve details for a specific theme.</p>
			
			<div class="endpoint-details">
				<p><span class="method">GET</span> <code>/api/v1/articles/{'{'}'theme'{'}'}</code></p>
			</div>

			<h4>Parameters</h4>
			<table>
				<thead>
					<tr>
						<th>Parameter</th>
						<th>Type</th>
						<th>Description</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td><code>theme</code></td>
						<td>string</td>
						<td>Theme slug (e.g., <code>love-faith-and-hope</code>)</td>
					</tr>
				</tbody>
			</table>

			<h4>Response Example</h4>
			<pre><code>{example2}</code></pre>
		</section>

		<!-- Endpoint 3 -->
		<section id="get-subtopic" class="endpoint">
			<h3>3. Get Single Subtopic</h3>
			<p>Retrieve details for a specific subtopic with authors and content availability.</p>
			
			<div class="endpoint-details">
				<p><span class="method">GET</span> <code>/api/v1/articles/{'{'}'theme'{'}'}/{'{'}'subtopic'{'}'}</code></p>
			</div>

			<h4>Parameters</h4>
			<table>
				<thead>
					<tr>
						<th>Parameter</th>
						<th>Type</th>
						<th>Description</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td><code>theme</code></td>
						<td>string</td>
						<td>Theme slug</td>
					</tr>
					<tr>
						<td><code>subtopic</code></td>
						<td>string</td>
						<td>Subtopic slug (e.g., <code>love</code>)</td>
					</tr>
				</tbody>
			</table>

			<h4>Response Example</h4>
			<pre><code>{example3}</code></pre>
		</section>

		<!-- Endpoint 4 -->
		<section id="get-article" class="endpoint">
			<h3>4. Get Single Article</h3>
			<p>Retrieve the full content of a specific article with cleaned markdown.</p>
			
			<div class="endpoint-details">
				<p><span class="method">GET</span> <code>/api/v1/articles/{'{'}'theme'{'}'}/{'{'}'subtopic'{'}'}/{'{'}'slug'{'}'}</code></p>
			</div>

			<h4>Parameters</h4>
			<table>
				<thead>
					<tr>
						<th>Parameter</th>
						<th>Type</th>
						<th>Description</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td><code>theme</code></td>
						<td>string</td>
						<td>Theme slug</td>
					</tr>
					<tr>
						<td><code>subtopic</code></td>
						<td>string</td>
						<td>Subtopic slug</td>
					</tr>
					<tr>
						<td><code>slug</code></td>
						<td>string</td>
						<td>Format: <code>{'{'}'type'{'}'}_{'{'}'lang'{'}'}</code><br>(e.g., <code>devotional_en</code>, <code>study_material_am</code>)</td>
					</tr>
				</tbody>
			</table>

			<h4>Slug Format</h4>
			<ul>
				<li><strong>Types:</strong> <code>devotional</code>, <code>study_material</code></li>
				<li><strong>Languages:</strong> <code>en</code> (English), <code>am</code> (Amharic)</li>
			</ul>

			<h4>Response Example</h4>
			<pre><code>{example4}</code></pre>

			<div class="note">
				<strong>Note:</strong> The <code>content</code> field contains cleaned markdown with all HTML/Svelte components removed.
			</div>
		</section>

		<!-- Error Handling -->
		<section id="errors">
			<h2>Error Handling</h2>
			
			<h3>HTTP Status Codes</h3>
			<table>
				<thead>
					<tr>
						<th>Code</th>
						<th>Description</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td><code>200</code></td>
						<td>Success</td>
					</tr>
					<tr>
						<td><code>400</code></td>
						<td>Bad Request - Invalid parameters</td>
					</tr>
					<tr>
						<td><code>404</code></td>
						<td>Not Found - Resource does not exist</td>
					</tr>
					<tr>
						<td><code>500</code></td>
						<td>Internal Server Error</td>
					</tr>
				</tbody>
			</table>

			<h3>Error Response Format</h3>
			<pre><code>{`{
  "error": "Error message describing what went wrong"
}`}</code></pre>

			<h3>Common Errors</h3>
			<pre><code>{errorExamples}</code></pre>
		</section>

		<!-- Code Examples -->
		<section id="examples">
			<h2>Code Examples</h2>

			<h3>JavaScript / Fetch API</h3>
			<pre><code>{codeExample1}</code></pre>

			<h3>React / React Native</h3>
			<pre><code>{codeExample2}</code></pre>

			<h3>Error Handling</h3>
			<pre><code>{codeExample3}</code></pre>
		</section>
	</main>
</div>

<style>
	:global(body) {
		margin: 0;
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
		background: #ffffff;
		color: #000000;
	}

	.docs-container {
		display: flex;
		min-height: 100vh;
	}

	/* Sidebar */
	.sidebar {
		width: 250px;
		background: #fafafa;
		border-right: 1px solid #e0e0e0;
		padding: 2rem 1.5rem;
		position: sticky;
		top: 0;
		height: 100vh;
		overflow-y: auto;
	}

	.sidebar h2 {
		font-size: 1.25rem;
		margin: 0 0 1.5rem 0;
		color: #000000;
	}

	.sidebar ul {
		list-style: none;
		padding: 0;
		margin: 0;
	}

	.sidebar li {
		margin-bottom: 0.5rem;
	}

	.sidebar li.sub {
		margin-left: 1rem;
		font-size: 0.9rem;
	}

	.sidebar button {
		color: #000000;
		text-decoration: none;
		display: block;
		padding: 0.5rem 0;
		transition: color 0.2s;
		background: none;
		border: none;
		cursor: pointer;
		text-align: left;
		width: 100%;
		font-size: inherit;
		font-family: inherit;
	}

	.sidebar button:hover {
		color: #4A90E2;
	}

	/* Main Content */
	.content {
		flex: 1;
		padding: 3rem;
		max-width: 900px;
	}

	header {
		margin-bottom: 3rem;
		border-bottom: 2px solid #000000;
		padding-bottom: 1rem;
	}

	header h1 {
		font-size: 2.5rem;
		margin: 0 0 0.5rem 0;
		color: #000000;
	}

	.subtitle {
		color: #666666;
		margin: 0;
	}

	section {
		margin-bottom: 3rem;
	}

	h2 {
		font-size: 2rem;
		margin: 2rem 0 1rem 0;
		color: #000000;
	}

	h3 {
		font-size: 1.5rem;
		margin: 1.5rem 0 1rem 0;
		color: #000000;
	}

	h4 {
		font-size: 1.2rem;
		margin: 1rem 0 0.5rem 0;
		color: #000000;
	}

	p {
		line-height: 1.6;
		color: #333333;
	}

	code {
		background: #f5f5f5;
		padding: 0.2rem 0.4rem;
		border-radius: 3px;
		font-family: 'Courier New', monospace;
		font-size: 0.9em;
		color: #000000;
	}

	pre {
		background: #f5f5f5;
		border: 1px solid #e0e0e0;
		border-radius: 4px;
		padding: 1rem;
		overflow-x: auto;
		margin: 1rem 0;
	}

	pre code {
		background: none;
		padding: 0;
		font-size: 0.85rem;
		line-height: 1.5;
		white-space: pre;
	}

	table {
		width: 100%;
		border-collapse: collapse;
		margin: 1rem 0;
	}

	th, td {
		text-align: left;
		padding: 0.75rem;
		border: 1px solid #e0e0e0;
	}

	th {
		background: #fafafa;
		font-weight: 600;
		color: #000000;
	}

	td {
		color: #333333;
	}

	ul, ol {
		line-height: 1.8;
		color: #333333;
	}

	.endpoint {
		border-left: 3px solid #4A90E2;
		padding-left: 1.5rem;
		margin: 2rem 0;
	}

	.endpoint-details {
		background: #fafafa;
		padding: 1rem;
		border-radius: 4px;
		margin: 1rem 0;
	}

	.method {
		display: inline-block;
		background: #4A90E2;
		color: #ffffff;
		padding: 0.25rem 0.75rem;
		border-radius: 3px;
		font-weight: 600;
		font-size: 0.85rem;
		margin-right: 0.5rem;
	}

	.note {
		background: #f5f5f5;
		border-left: 3px solid #4A90E2;
		padding: 1rem;
		margin: 1rem 0;
	}

	.note strong {
		color: #4A90E2;
	}

	/* Responsive */
	@media (max-width: 768px) {
		.docs-container {
			flex-direction: column;
		}

		.sidebar {
			width: 100%;
			height: auto;
			position: static;
			border-right: none;
			border-bottom: 1px solid #e0e0e0;
		}

		.content {
			padding: 2rem 1rem;
		}
	}
</style>