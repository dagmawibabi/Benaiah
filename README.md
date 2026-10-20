# Benaiah

God has Created | Built.

## Development

Use Node 18–22 and pnpm (the version is pinned in package.json).

```sh
pnpm install --frozen-lockfile
pnpm dev
pnpm check
pnpm build
node test-api.mjs http://localhost:5173
node test-site.mjs http://localhost:5173
node test-offline.mjs
```

The project deploys with the Vercel SvelteKit adapter. Keep pnpm-lock.yaml as the single lockfile.

## Languages and content

The server chooses English or Amharic per request, preferring the `lang` cookie over Accept-Language. Each rendered Svelte tree owns its translation stores. Components use `useI18n()`; never introduce a global mutable server locale.

Published article metadata comes from the existing theme catalog and Markdown sources in `src/lib/articles.ts`. Article dates are preserved; RSS includes a pubDate only when JavaScript can parse the source date. Amharic dates without a Gregorian equivalent omit that optional field. Reading order follows topic order within the same theme and content type. The language link appears only when a matching published translation exists.

`/` is the homepage; `/homepage` permanently redirects there. `/articles` redirects to `/resources`. Public API documentation is at `/developers`.

## Reading and offline support

Articles include estimated reading time, progress, previous/next articles, a translation link, and locally saved text size and dark mode. RSS feeds are `/rss.xml` and `/rss.xml?lang=am`.

The production service worker precaches application scripts, styles, fonts, install icons, and `/offline`. Visited pages and article data use network-first caching, bounded to 100 runtime entries. The offline page lists cached articles. New builds remove old versioned caches; revisit articles after updating to save them again. External images, videos, and audio are not guaranteed offline. Storage can be evicted by the browser.

Service workers require HTTPS or localhost. To verify installation and offline reading, run `pnpm build` then `pnpm preview`, visit an article, wait for the worker to activate, then disconnect and reload that article. A never-visited page should show the bilingual offline page. Development mode does not install the service worker.

## Mobile app page

`/app` links to https://github.com/BenaiahOrg/BenaiahApp/releases/ and presents real Flutter screen renders from the sibling BenaiahApp project. The screenshot capture uses the app's actual theme, fonts, HomePage and topic widgets with public catalog fixtures; no production backend credentials are needed. Screen assets live in `static/app`.

## Link previews

Every page sets Open Graph and Twitter tags through `src/components/seo.svelte`. Articles and graphics use the topic cover, padded by Cloudinary to 1200×630 JPEG (`shareImage` in `src/lib/themes.ts`); other pages use `static/og-default.jpg`, and `/app` uses `static/app/og.jpg`.

## App page screenshots

The screens on `/app` (`static/app/*.webp`) are rendered by the Flutter app itself. In the BenaiahApp repo, `test/website_screens_test.dart` renders the topic, study, graphics and settings screens in light and dark from saved API responses and images (see the comment at the top of that file); convert the PNGs to WebP before copying them here.
