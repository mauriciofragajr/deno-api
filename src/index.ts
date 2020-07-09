import { Application } from "https://deno.land/x/oak/mod.ts";
import { config } from "https://deno.land/x/dotenv/mod.ts";

import router from "./routes.ts";

const ADDRESS = config().ADDRESS || "localhost";
const PORT = config().PORT || 1993;

const app = new Application();

// Logger
app.use(async (ctx, next) => {
  await next();
  const rt = ctx.response.headers.get("X-Response-Time");
  console.log(`${ctx.request.method} ${ctx.request.url} - ${rt}`);
});

// Routes
app.use(router.routes());

app.listen(`${ADDRESS}:${PORT}`);
console.log(`Listening on http://${ADDRESS}:${PORT}`);
