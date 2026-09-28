# Articles REST API Documentation

**Version:** 1.0  
**Base URL:** `https://your-domain.com/api/v1`  
**Last Updated:** June 25, 2026

---

## Table of Contents

1. [Overview](#overview)
2. [Authentication](#authentication)
3. [Rate Limiting](#rate-limiting)
4. [Error Handling](#error-handling)
5. [Endpoints](#endpoints)
   - [Get All Themes](#1-get-all-themes)
   - [Get Single Theme](#2-get-single-theme)
   - [Get Single Subtopic](#3-get-single-subtopic)
   - [Get Single Article](#4-get-single-article)
6. [Data Models](#data-models)
7. [Examples](#examples)

---

## Overview

The Articles REST API provides access to themed devotional and study material content in both English and Amharic languages. The API supports rich media content including text articles, images, and audio resources.

### Key Features

- **Versioned API** - All endpoints are under `/api/v1/` for future compatibility
- **Bilingual Content** - Support for English (`en`) and Amharic (`am`) languages
- **Rich Media** - Includes cover images, square graphics, and story graphics
- **Caching** - All responses include `Cache-Control` headers (1 hour cache)
- **CORS Enabled** - Cross-origin requests supported for mobile apps
- **Clean Markdown** - Article content is cleaned of HTML/Svelte components

---

## Authentication

Currently, this API does not require authentication. All endpoints are publicly accessible.

---

## Rate Limiting

No rate limiting is currently enforced. However, please be considerate of server resources and implement client-side caching.

---

## Error Handling

### HTTP Status Codes

| Status Code | Description |
|-------------|-------------|
| `200` | Success - Request completed successfully |
| `400` | Bad Request - Invalid parameters or format |
| `404` | Not Found - Resource does not exist |
| `500` | Internal Server Error - Server-side error |

### Error Response Format

```json
{
  "error": "Error message describing what went wrong"
}
```

### Common Error Examples

**404 - Theme Not Found**
```json
{
  "error": "Theme not found: invalid-theme-slug"
}
```

**400 - Invalid Slug Format**
```json
{
  "error": "Invalid slug format. Expected format: {type}_{lang} (e.g., devotional_en, study_material_am)"
}
```

---

## Endpoints

### 1. Get All Themes

Retrieve a list of all published themes with their subtopics and graphics.

**Endpoint:** `GET /api/v1/articles`

**Parameters:** None

**Response Format:**

```json
[
  {
    "slug": "love-faith-hope",
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
            "en": "/api/v1/articles/love-faith-hope/love/devotional_en",
            "am": "/api/v1/articles/love-faith-hope/love/devotional_am"
          },
          "study_material": {
            "en": "/api/v1/articles/love-faith-hope/love/study_material_en",
            "am": "/api/v1/articles/love-faith-hope/love/study_material_am"
          }
        },
        "artists": [
          {
            "fullname_en": "Akinahom Getahun",
            "fullname_am": "አኪናሆም ጌታሁን",
            "photo": "/assets/team/AkinahomGetahun.png",
            "role_en": "Graphic Designer",
            "role_am": "Graphic Designer"
          },
          {
            "fullname_en": "Rebira Tibebu",
            "fullname_am": "ረቢራ ጥበቡ",
            "photo": "/assets/team/RebiraTibebu.png",
            "role_en": "Graphic Designer",
            "role_am": "Graphic Designer"
          },
          {
            "fullname_en": "Bethelem Melese",
            "fullname_am": "ቤቴልሄም መለሰ",
            "photo": "/assets/team/BethelemMelese.png",
            "role_en": "Author",
            "role_am": "Author"
          }
        ]
      }
    ]
  }
]
```

**Cache:** `public, max-age=3600` (1 hour)

**Example Request:**

```bash
curl -X GET https://your-domain.com/api/v1/articles
```

---

### 2. Get Single Theme

Retrieve details for a specific theme including all its subtopics.

**Endpoint:** `GET /api/v1/articles/{theme}`

**Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `theme` | string | Yes | Theme slug (e.g., `love-faith-hope`) |

**Response Format:**

```json
{
  "slug": "love-faith-hope",
  "title": {
    "en": "Love Faith Hope",
    "am": "ፍቅር እምነት ተስፋ"
  },
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
          "en": "/api/v1/articles/love-faith-hope/love/devotional_en",
          "am": "/api/v1/articles/love-faith-hope/love/devotional_am"
        },
        "study_material": {
          "en": "/api/v1/articles/love-faith-hope/love/study_material_en",
          "am": "/api/v1/articles/love-faith-hope/love/study_material_am"
        }
      },
      "artists": [
        {
          "fullname_en": "Akinahom Getahun",
          "fullname_am": "አኪናሆም ጌታሁን",
          "photo": "/assets/team/AkinahomGetahun.png",
          "role_en": "Graphic Designer",
          "role_am": "Graphic Designer"
        }
      ]
    }
  ]
}
```

**Cache:** `public, max-age=3600` (1 hour)

**Example Request:**

```bash
curl -X GET https://your-domain.com/api/v1/articles/love-faith-hope
```

**Error Responses:**

- `404` - Theme not found or not published

---

### 3. Get Single Subtopic

Retrieve details for a specific subtopic including available content and authors.

**Endpoint:** `GET /api/v1/articles/{theme}/{subtopic}`

**Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `theme` | string | Yes | Theme slug (e.g., `love-faith-hope`) |
| `subtopic` | string | Yes | Subtopic slug (e.g., `love`) |

**Response Format:**

```json
{
  "theme_en": "Love Faith Hope",
  "theme_slug": "love-faith-hope",
  "title": {
    "en": "Love",
    "am": "ፍቅር"
  },
  "slug": "love",
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
  "available_content": {
    "devotional": {
      "en": true,
      "am": true
    },
    "study_material": {
      "en": true,
      "am": false
    }
  },
  "authors": {
    "devotional_en": [
      {
        "fullname_en": "Eden Tesfaye",
        "fullname_am": "ኤደን ተስፋዬ",
        "photo": "/assets/team/EdenTesfaye.jpg",
        "role_en": "Author",
        "role_am": "Author",
        "socials": {
          "instagram": "https://www.instagram.com/...",
          "linkedin": "https://www.linkedin.com/...",
          "telegram": "https://t.me/..."
        }
      }
    ],
    "devotional_am": [
      {
        "fullname_en": "Rebira Tibebu",
        "fullname_am": "ረቢራ ጥበቡ",
        "photo": "/assets/team/RebiraTibebu.png",
        "role_en": "Author",
        "role_am": "Author",
        "socials": [
          {
            "name": "Instagram",
            "url": "https://www.instagram.com/rebiratibebu"
          }
        ]
      }
    ],
    "study_material_en": [
      {
        "fullname_en": "Bethelem Melese",
        "fullname_am": "ቤቴልሄም መለሰ",
        "photo": "/assets/team/BethelemMelese.png",
        "role_en": "Author",
        "role_am": "Author",
        "socials": [
          {
            "name": "Instagram",
            "url": "https://www.instagram.com/bethelemmelese"
          }
        ]
      }
    ],
    "study_material_am": [
      {
        "fullname_en": "Akinahom Getahun",
        "fullname_am": "አኪናሆም ጌታሁን",
        "photo": "/assets/team/AkinahomGetahun.png",
        "role_en": "Graphic Designer",
        "role_am": "Graphic Designer",
        "socials": {
          "instagram": "https://www.instagram.com/akinahomgetahun",
          "linkedin": "https://www.linkedin.com/in/akinahomgetahun",
          "telegram": "https://t.me/akinahomgetahun"
        }
      }
    ]
  },
  "artists": [
    {
      "fullname_en": "Akinahom Getahun",
      "fullname_am": "አኪናሆም ጌታሁን",
      "photo": "/assets/team/AkinahomGetahun.png",
      "role_en": "Graphic Designer",
      "role_am": "Graphic Designer",
      "socials": {
        "instagram": "https://www.instagram.com/akinahomgetahun",
        "linkedin": "https://www.linkedin.com/in/akinahomgetahun",
        "telegram": "https://t.me/akinahomgetahun"
      }
    },
    {
      "fullname_en": "Rebira Tibebu",
      "fullname_am": "ረቢራ ጥበቡ",
      "photo": "/assets/team/RebiraTibebu.png",
      "role_en": "Graphic Designer",
      "role_am": "Graphic Designer",
      "socials": [
        {
          "name": "Instagram",
          "url": "https://www.instagram.com/rebiratibebu"
        }
      ]
    }
  ]
}
```

**Cache:** `public, max-age=3600` (1 hour)

**Example Request:**

```bash
curl -X GET https://your-domain.com/api/v1/articles/love-faith-hope/love
```

**Error Responses:**

- `404` - Theme or subtopic not found

---

### 4. Get Single Article

Retrieve the full content of a specific article with cleaned markdown.

**Endpoint:** `GET /api/v1/articles/{theme}/{subtopic}/{slug}`

**Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `theme` | string | Yes | Theme slug (e.g., `love-faith-hope`) |
| `subtopic` | string | Yes | Subtopic slug (e.g., `love`) |
| `slug` | string | Yes | Article slug in format `{type}_{lang}` (e.g., `devotional_en`, `study_material_am`) |

**Slug Format:**

- Format: `{type}_{lang}`
- Valid types: `devotional`, `study_material`
- Valid languages: `en` (English), `am` (Amharic)
- Examples: `devotional_en`, `study_material_am`

**Response Format:**

```json
{
  "theme": "love-faith-hope",
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
  "content": "Ever catch yourself wondering if God's love is really unconditional?\n\nIn Romans 8:38-39, Paul writes: \"For I am convinced that neither death nor life, neither angels nor demons, neither the present nor the future, nor any powers, neither height nor depth, nor anything else in all creation, will be able to separate us from the love of God that is in Christ Jesus our Lord.\"\n\n..."
}
```

**Content Processing:**

The `content` field contains cleaned markdown with:
- ✅ All Svelte components removed
- ✅ All HTML tags stripped
- ✅ Script blocks removed
- ✅ Only pure markdown syntax preserved
- ✅ Frontmatter extracted to separate fields

**Cache:** `public, max-age=3600` (1 hour)

**Example Request:**

```bash
curl -X GET https://your-domain.com/api/v1/articles/love-faith-hope/love/devotional_en
```

**Error Responses:**

- `400` - Invalid slug format (must be `{type}_{lang}`)
- `400` - Invalid language (must be `en` or `am`)
- `400` - Invalid content type (must be `devotional` or `study_material`)
- `404` - Article not found

---

## Data Models

### Theme Object

```typescript
{
  slug: string;           // URL-safe identifier
  title: {
    en: string;           // English title
    am: string;           // Amharic title
  };
  subtopics_count: number; // Number of subtopics
  subtopics: Subtopic[];   // Array of subtopic objects
}
```

### Subtopic Object

```typescript
{
  title: {
    en: string;
    am: string;
  };
  description: {
    en: string;
    am: string;
  };
  covers: {
    en: string;           // Cover image URL (English)
    am: string;           // Cover image URL (Amharic)
  };
  images: {
    square: {
      en: string[];       // Square image URLs (English)
      am: string[];       // Square image URLs (Amharic)
    };
    story: {
      en: string[];       // Story image URLs (English)
      am: string[];       // Story image URLs (Amharic)
    };
  };
  articles: {
    devotional: {
      en: string | null;  // API endpoint or null if unavailable
      am: string | null;
    };
    study_material: {
      en: string | null;
      am: string | null;
    };
  };
  artists: Artist[];
}
```

### Article Object

```typescript
{
  theme: string;          // Theme slug
  subtopic: string;       // Subtopic slug
  type: string;           // "devotional" | "study_material"
  lang: string;           // "en" | "am"
  title: string;          // Article title
  date: string;           // Publication date
  audio: string;          // Audio resource identifier (e.g., "youtube/_cMxraX_5RE")
  header: string;         // Article header/subtitle
  graphics: {
    covers: {
      en: string;
      am: string;
    };
    images: {
      square: {
        en: string[];
        am: string[];
      };
      story: {
        en: string[];
        am: string[];
      };
    };
  };
  content: string;        // Cleaned markdown content
}
```

### Artist/Author/Team Member Object

```typescript
{
  fullname_en: string;    // Full name in English
  fullname_am: string;    // Full name in Amharic
  photo: string;          // Photo URL or path
  role_en: string;        // Role in English (e.g., "Author", "Graphic Designer", "Narrator")
  role_am: string;        // Role in Amharic
  socials: {              // Social media links (object format)
    instagram?: string;
    linkedin?: string;
    telegram?: string;
  } | Array<{             // Or array format
    name: string;
    url: string;
  }>;
}
```

---

## Examples

### Example 1: Fetch All Themes

```javascript
// JavaScript/Node.js
const response = await fetch('https://your-domain.com/api/v1/articles');
const themes = await response.json();

console.log(`Found ${themes.length} themes`);
themes.forEach(theme => {
  console.log(`${theme.title.en}: ${theme.subtopics_count} subtopics`);
});
```

### Example 2: Fetch Specific Article

```javascript
// JavaScript/Node.js
const theme = 'love-faith-hope';
const subtopic = 'love';
const slug = 'devotional_en';

const response = await fetch(
  `https://your-domain.com/api/v1/articles/${theme}/${subtopic}/${slug}`
);
const article = await response.json();

console.log(`Title: ${article.title}`);
console.log(`Date: ${article.date}`);
console.log(`Content length: ${article.content.length} characters`);
```

### Example 3: Display Article with Graphics

```javascript
// React/React Native Example
function ArticleView({ theme, subtopic, slug }) {
  const [article, setArticle] = useState(null);
  
  useEffect(() => {
    fetch(`https://your-domain.com/api/v1/articles/${theme}/${subtopic}/${slug}`)
      .then(res => res.json())
      .then(data => setArticle(data));
  }, [theme, subtopic, slug]);
  
  if (!article) return <Loading />;
  
  return (
    <View>
      <Image source={{ uri: article.graphics.covers.en }} />
      <Text style={styles.title}>{article.title}</Text>
      <Text style={styles.header}>{article.header}</Text>
      <Markdown>{article.content}</Markdown>
      
      {article.audio && (
        <AudioPlayer source={article.audio} />
      )}
      
      <View style={styles.gallery}>
        {article.graphics.images.square.en.map((img, i) => (
          <Image key={i} source={{ uri: img }} />
        ))}
      </View>
    </View>
  );
}
```

### Example 4: Error Handling

```javascript
// JavaScript with error handling
async function getArticle(theme, subtopic, slug) {
  try {
    const response = await fetch(
      `https://your-domain.com/api/v1/articles/${theme}/${subtopic}/${slug}`
    );
    
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || 'Failed to fetch article');
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error fetching article:', error.message);
    return null;
  }
}
```

### Example 5: Caching Implementation

```javascript
// JavaScript with simple cache
class ArticleCache {
  constructor() {
    this.cache = new Map();
    this.maxAge = 3600000; // 1 hour in milliseconds
  }
  
  async get(url) {
    const cached = this.cache.get(url);
    
    if (cached && Date.now() - cached.timestamp < this.maxAge) {
      return cached.data;
    }
    
    const response = await fetch(url);
    const data = await response.json();
    
    this.cache.set(url, {
      data,
      timestamp: Date.now()
    });
    
    return data;
  }
}

const cache = new ArticleCache();
const article = await cache.get('https://your-domain.com/api/v1/articles/...');
```

---

## Best Practices

### 1. Implement Client-Side Caching

The API includes 1-hour cache headers. Respect these headers in your client application to reduce server load and improve performance.

### 2. Handle Errors Gracefully

Always check response status codes and handle errors appropriately. Display user-friendly error messages rather than raw error objects.

### 3. Use Appropriate Image Sizes

The API provides multiple image formats (covers, square, story). Choose the appropriate format for your UI context:
- **Covers**: Use for article headers, thumbnails
- **Square**: Use for grid layouts, social media sharing
- **Story**: Use for story/carousel formats

### 4. Support Both Languages

The API provides content in both English and Amharic. Implement language switching in your UI to serve both audiences.

### 5. Parse Markdown Appropriately

The `content` field contains markdown. Use an appropriate markdown parser for your platform:
- **Web**: `marked`, `markdown-it`, `react-markdown`
- **React Native**: `react-native-markdown-display`
- **iOS**: `Down`, `SwiftDown`
- **Android**: `Markwon`, `CommonMark`

### 6. Handle Audio Resources

The `audio` field contains resource identifiers (e.g., `youtube/_cMxraX_5RE`). Parse these appropriately:
- `youtube/VIDEO_ID` → Embed YouTube player
- Direct URLs → Use native audio player

---

## Changelog

### Version 1.0 (June 25, 2026)
- Initial API release
- Four core endpoints for accessing themes, subtopics, and articles
- Support for English and Amharic content
- Graphics and media support
- Markdown content cleaning and processing
- CORS enabled for mobile applications

---

## Support

For API support, bug reports, or feature requests, please contact:

**Email:** support@your-domain.com  
**Website:** https://your-domain.com

---

## License

This API documentation is proprietary. The API is intended for authorized use only.

---

**Document Version:** 1.0  
**Last Updated:** June 25, 2026