/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
  app(input) {
    return {
      name: "amarjeet-app",
      removal: input?.stage === "production" ? "retain" : "remove",
      home: "cloudflare",
      providers: {
        cloudflare: { apiToken: process.env.SST_CLOUDFLARE_API_TOKEN },
        aws: true,
      },
    };
  },
  async run() {
    await import("./infra/commands");
    return;
  },
});
