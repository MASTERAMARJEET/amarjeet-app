import { Hono } from "hono";
import { prettyJSON } from "hono/pretty-json";

const app = new Hono();

app.use(prettyJSON());

app.get("/", (c) => {
  return c.text("Hello from amarjeet!");
});

app.get("/meta", (c) => {
  return c.json({
    name: "Amarjeet App",
  });
});

export type AppType = typeof app;
export default app;
