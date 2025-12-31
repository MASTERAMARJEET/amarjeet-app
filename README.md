# Amarjeet App

A modern monorepo application featuring a personal blog built with Astro and a serverless API built with Hono, deployed on Cloudflare.

## 🏗️ Project Structure

This is a monorepo managed with [Turborepo](https://turbo.build/) and [Bun](https://bun.sh/):

```bash
amarjeet-app/
├── apps/
│   ├── api/          # Hono-based API (Cloudflare Workers)
│   └── web/          # Astro-based blog (Cloudflare Workers)
├── infra/            # SST infrastructure configuration
├── scripts/          # Utility scripts
└── package.json      # Root workspace configuration
```

### Apps

- **`apps/web`**: Personal blog built with Astro, React, and Tailwind CSS
  - Features: MDX blog posts, RSS feed, sitemap, search functionality, tag system
  - Deployed on Cloudflare Workers

- **`apps/api`**: Serverless API built with Hono
  - Features: RESTful endpoints, OpenAPI documentation
  - Deployed on Cloudflare Workers

## 🛠️ Tech Stack

### Core Technologies

- **Runtime**: [Bun](https://bun.sh/) 1.2.5
- **Monorepo**: [Turborepo](https://turbo.build/) 2.7.2
- **Infrastructure**: [SST](https://sst.dev/) 3.17.25
- **TypeScript**: 5.9.3

### Web App (`apps/web`)

- **Framework**: [Astro](https://astro.build/) 5.16.6
- **UI**: React 19.2.3, Tailwind CSS 4.1.18, DaisyUI 5.5.14
- **Content**: MDX with remark plugins (TOC, collapse)
- **Deployment**: Cloudflare Workers
- **Features**: RSS, sitemap, search (Fuse.js), OG image generation

### API (`apps/api`)

- **Framework**: [Hono](https://hono.dev/) 4.11.3
- **Documentation**: OpenAPI with Swagger UI
- **Deployment**: Cloudflare Workers

## 📋 Prerequisites

- **Node.js**: >= 20
- **Bun**: 1.2.5 (specified in `package.json`)
- **Cloudflare Account**: For deployment (requires API token)
- **AWS Account**: For SST infrastructure (optional, depending on your setup)

## 🚀 Getting Started

### Installation

1. Clone the repository:

```bash
git clone https://github.com/masteramarjeet/amarjeet-app.git
cd amarjeet-app
```

1. Install dependencies:

```bash
bun install
```

1. Set up environment variables:
   - Create a `.env` file in the root directory
   - Add your Cloudflare API token:

     ```text
     SST_CLOUDFLARE_API_TOKEN=your_token_here
     ```

### Development

Start the development server:

```bash
bun run dev
```

This will:

- Start SST dev environment
- Run the web app (typically at `http://localhost:4321`)
- Run the API (if configured)

To run individual apps:

**Web app:**

```bash
cd apps/web
bun run dev
```

**API:**

```bash
cd apps/api
bun run dev
```

## 📜 Available Scripts

### Root Level

| Command | Description |
|---------|-------------|
| `bun run dev` | Start SST dev environment |
| `bun run build` | Build all apps |
| `bun run deploy` | Deploy all apps |
| `bun run deploy:prod` | Deploy all apps to production |
| `bun run typegen` | Generate types for all apps |
| `bun run check-types` | Type-check all apps |
| `bun run format` | Format code with ESLint |
| `bun run clean` | Remove node_modules and build artifacts |
| `bun run clean:all` | Deep clean including Turbo cache |

### Web App (`apps/web`)

| Command | Description |
|---------|-------------|
| `bun run dev` | Start Astro dev server |
| `bun run build` | Build for production |
| `bun run preview` | Preview production build locally |
| `bun run deploy` | Deploy to Cloudflare |
| `bun run deploy:prod` | Deploy to production environment |
| `bun run typegen` | Generate Astro and Wrangler types |
| `bun run check-types` | Type-check with Astro |
| `bun run format` | Format code |

### API (`apps/api`)

| Command | Description |
|---------|-------------|
| `bun run dev` | Start Wrangler dev server |
| `bun run deploy` | Deploy to Cloudflare Workers |
| `bun run deploy:prod` | Deploy to production environment |
| `bun run typegen` | Generate Wrangler types |
| `bun run check-types` | Type-check with TypeScript |
| `bun run format` | Format code |

## 🏗️ Building

Build all apps:

```bash
bun run build
```

Build individual apps:

```bash
# Web app
cd apps/web && bun run build

# API
cd apps/api && bun run build
```

## 🚢 Deployment

### Using SST

Deploy all services:

```bash
bun run deploy
```

Deploy to production:

```bash
bun run deploy:prod
```

### Manual Deployment

**Web app:**

```bash
cd apps/web
bun run deploy        # Deploy to staging
bun run deploy:prod   # Deploy to production
```

**API:**

```bash
cd apps/api
bun run deploy        # Deploy to staging
bun run deploy:prod   # Deploy to production
```

## 📝 Content Management

### Adding Blog Posts

1. Create a new `.md` or `.mdx` file in `apps/web/src/content/blog/`
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

### Configuration

Edit `apps/web/src/config.ts` to customize:

- Site metadata (title, description, author)
- Social links
- Post pagination settings
- Theme settings

## 🧪 Type Checking

Type-check all apps:

```bash
bun run check-types
```

This runs TypeScript checks across the monorepo with proper dependency ordering.

## 🎨 Code Formatting

Format all code:

```bash
bun run format
```

The project uses:

- ESLint with Antfu's config
- Prettier with Astro and Tailwind plugins

## 🧹 Cleaning

Remove build artifacts and dependencies:

```bash
bun run clean        # Root level cleanup
bun run clean:all    # Deep clean including Turbo cache
```

## 📚 Documentation

- [Astro Documentation](https://docs.astro.build/)
- [Hono Documentation](https://hono.dev/)
- [SST Documentation](https://docs.sst.dev/)
- [Turborepo Documentation](https://turbo.build/repo/docs)
- [Cloudflare Workers Documentation](https://developers.cloudflare.com/workers/)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

[MIT License](LICENSE)

## 🔗 Links

- **Website**: <https://amarjeet.app/>
- **GitHub**: <https://github.com/masteramarjeet/amarjeet-app>
- **Author**: Amarjeet
