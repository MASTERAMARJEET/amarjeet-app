# Amarjeet's Blog Site

A modern personal blog built with Astro, React, and Tailwind CSS, deployed on Cloudflare Workers.

## 🎯 Overview

This is a static site generator blog featuring:

- **MDX blog posts** with frontmatter support
- **RSS feed** for content syndication
- **Sitemap** generation for SEO
- **Search functionality** using Fuse.js
- **Tag system** for content organization
- **OG image generation** for social media sharing
- **Dark/Light mode** support
- **Responsive design** with Tailwind CSS and DaisyUI

## 🛠️ Tech Stack

- **Framework**: [Astro](https://astro.build/) 5.16.6
- **UI Library**: React 19.2.3
- **Styling**: Tailwind CSS 4.1.18, DaisyUI 5.5.14
- **Content**: MDX with remark plugins (TOC, collapse)
- **Deployment**: Cloudflare Workers
- **Search**: Fuse.js 7.1.0
- **OG Images**: Satori 0.18.3 with @resvg/resvg-wasm

## 📋 Prerequisites

- **Bun**: 1.2.5 (specified in `package.json`)
- **Node.js**: >= 20
- **Cloudflare Account**: For deployment (requires API token)

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                                       |
| :------------------------ | :----------------------------------------------------------- |
| `bun install`             | Installs dependencies                                        |
| `bun run dev`             | Starts local dev server at `localhost:4321`                  |
| `bun run build`           | Build your production site to `./dist/`                      |
| `bun run preview`         | Preview your build locally, before deploying                 |
| `bun run deploy`          | Build and deploy your app to Cloudflare (staging)           |
| `bun run deploy:prod`     | Build and deploy your app to Cloudflare (production)        |
| `bun run typegen`         | Generate and update types of Astro and Wrangler (Cloudflare)|
| `bun run check-types`     | Type-check with Astro                                        |
| `bun run format`          | Format code with ESLint                                      |
| `bun run clean`           | Remove node_modules, build artifacts, and cache               |
| `bun run astro ...`       | Run CLI commands like `astro add`, `astro check`            |
| `bun run astro -- --help` | Get help using the Astro CLI                                 |

## 🚀 Development

### Starting the Dev Server

From the root of the project:

```bash
bun run dev
```

Or from the `apps/web` directory:

```bash
cd apps/web
bun run dev
```

The dev server will start at `http://localhost:4321` (default Astro port).

### Building for Production

```bash
bun run build
```

This creates an optimized production build in the `./dist/` directory.

### Previewing Production Build

```bash
bun run preview
```

This builds the site and starts a local preview server using Wrangler.

## 📝 Content Management

### Adding Blog Posts

1. Create a new `.md` or `.mdx` file in `src/content/blog/`
2. Add frontmatter:

```markdown
---
title: "Your Post Title"
description: "Post description"
pubDate: "2024-01-01"
tags: ["tag1", "tag2"]
---
```

1. Write your content using Markdown/MDX

### Post Frontmatter

Required fields:

- `title`: Post title
- `description`: Post description
- `pubDate`: Publication date (ISO format: "YYYY-MM-DD")
- `tags`: Array of tags

Optional fields:

- `heroImage`: Path to hero image
- `draft`: Boolean to mark as draft (won't appear in production)

### Configuration

Edit `src/config.ts` to customize:

- Site metadata (title, description, author, website URL)
- Social links (GitHub, LinkedIn, X/Twitter, etc.)
- Post pagination settings (`postPerIndex`, `postPerPage`)
- Theme settings (`lightAndDarkMode`)
- Edit post links
- Archive visibility

## 🎨 Styling

The project uses:

- **Tailwind CSS 4** for utility-first styling
- **DaisyUI** for component library
- **@tailwindcss/typography** for prose styling

Custom styles are in `src/styles/base.css`.

## 🔍 Features

### Search

Search functionality is implemented using Fuse.js and can be accessed at `/search`. It searches through:

- Post titles
- Post descriptions
- Post content

### Tags

Posts can be tagged and browsed by tag at `/tags/[tag]`. All tags are listed at `/tags`.

### RSS Feed

An RSS feed is automatically generated at `/rss.xml` for content syndication.

### Sitemap

A sitemap is automatically generated at `/sitemap-index.xml` for SEO.

### OG Images

Open Graph images are automatically generated for:

- Site homepage (`/og.png`)
- Individual blog posts (`/posts/[slug]/index.png`)

## 🚢 Deployment

### Using Wrangler

Deploy to staging:

```bash
bun run deploy
```

Deploy to production:

```bash
bun run deploy:prod
```

### Environment Configuration

The project uses Wrangler for Cloudflare Workers deployment. Configuration is in `wrangler.jsonc`.

## 🧪 Type Checking

Type-check the project:

```bash
bun run check-types
```

This runs Astro's type checker which validates:

- Component props
- Frontmatter schemas
- API routes
- Configuration files

## 🎨 Code Formatting

Format code:

```bash
bun run format
```

The project uses ESLint with Antfu's config for code formatting.

## 📚 Project Structure

```sh
apps/web/
├── src/
│   ├── assets/          # Static assets
│   ├── components/       # Astro and React components
│   ├── content/          # Blog posts (MDX files)
│   ├── layouts/         # Page layouts
│   ├── pages/           # Route pages
│   ├── styles/          # Global styles
│   ├── utils/           # Utility functions
│   └── config.ts        # Site configuration
├── public/              # Public assets
├── dist/                # Build output
└── astro.config.mjs     # Astro configuration
```

## 🔗 Links

- **Website**: <https://amarjeet.app/>
- **GitHub**: <https://github.com/masteramarjeet/amarjeet-app>
- **Author**: Amarjeet
