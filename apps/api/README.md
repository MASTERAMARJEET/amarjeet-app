# Amarjeet's API

A serverless API built with Hono, deployed on Cloudflare Workers.

## 🎯 Overview

A lightweight, fast API built with Hono framework, featuring:

- **RESTful endpoints**
- **OpenAPI documentation** with Swagger UI
- **JSON responses** with pretty formatting
- **Cloudflare Workers** deployment for edge computing

## 🛠️ Tech Stack

- **Framework**: [Hono](https://hono.dev/) 4.11.3
- **Documentation**: @hono/swagger-ui 0.5.3
- **Validation**: @hono/zod-openapi 1.2.0
- **Deployment**: Cloudflare Workers
- **Runtime**: Bun 1.2.5 (development), Cloudflare Workers (production)

## 📋 Prerequisites

- **Bun**: 1.2.5 (specified in `package.json`)
- **Node.js**: >= 20
- **Cloudflare Account**: For deployment (requires API token)

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                                       |
| :------------------------ | :----------------------------------------------------------- |
| `bun install`             | Installs dependencies                                        |
| `bun run dev`             | Starts local dev server with Wrangler                       |
| `bun run deploy`          | Deploy to Cloudflare Workers (staging)                      |
| `bun run deploy:prod`     | Deploy to Cloudflare Workers (production)                   |
| `bun run typegen`         | Generate Wrangler types for Cloudflare Workers              |
| `bun run check-types`     | Type-check with TypeScript                                   |
| `bun run format`          | Format code with ESLint                                      |
| `bun run clean`           | Remove node_modules, build artifacts, and cache              |

## 🚀 Development

### Starting the Dev Server

From the root of the project:

```bash
bun run dev
```

Or from the `apps/api` directory:

```bash
cd apps/api
bun run dev
```

This starts Wrangler's dev server which provides:

- Hot reloading
- Local testing environment
- Cloudflare Workers simulation

### Building

The API is built automatically during deployment. For local testing, Wrangler handles the build process.

## 📡 API Endpoints

### Base Routes

- `GET /` - Health check endpoint
  - Returns: `"Hello from amarjeet!"`

- `GET /meta` - Application metadata
  - Returns: JSON object with app name

  ```json
  {
    "name": "Amarjeet App"
  }
  ```

### OpenAPI Documentation

Swagger UI documentation is available at `/swagger` (if configured).

## 🏗️ Project Structure

```
apps/api/
├── src/
│   └── index.ts          # Main application entry point
├── wrangler.jsonc        # Cloudflare Workers configuration
└── package.json          # Dependencies and scripts
```

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

Both commands include `--minify` flag for optimized production builds.

### Environment Configuration

The project uses Wrangler for Cloudflare Workers deployment. Configuration is in `wrangler.jsonc`.

Environment-specific configurations:

- **Staging**: Default environment
- **Production**: Use `--env prod` flag

## 🧪 Type Checking

Type-check the project:

```bash
bun run check-types
```

This runs TypeScript compiler (`tsc --noEmit`) to validate types without emitting files.

## 🎨 Code Formatting

Format code:

```bash
bun run format
```

The project uses ESLint with Antfu's config for code formatting.

## 📝 Adding New Endpoints

1. Open `src/index.ts`
2. Add your route handler:

```typescript
app.get("/your-endpoint", (c) => {
  return c.json({ message: "Hello World" });
});
```

1. For OpenAPI documentation, use `@hono/zod-openapi`:

```typescript
import { createRoute } from "@hono/zod-openapi";

const route = createRoute({
  method: "get",
  path: "/your-endpoint",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: z.object({
            message: z.string(),
          }),
        },
      },
      description: "Returns a message",
    },
  },
});

app.openapi(route, (c) => {
  return c.json({ message: "Hello World" });
});
```

## 🔗 Links

- **Website**: <https://amarjeet.app/>
- **GitHub**: <https://github.com/masteramarjeet/amarjeet-app>
- **Author**: Amarjeet
- **Hono Documentation**: <https://hono.dev/>
- **Cloudflare Workers Docs**: <https://developers.cloudflare.com/workers/>
