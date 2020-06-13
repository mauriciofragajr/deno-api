import { Application } from "https://deno.land/x/oak/mod.ts";
import { config } from "https://deno.land/x/dotenv/mod.ts";

import router from "./routes.ts";

const app = new Application();

app.use(router.routes());

const ADDRESS = config().ADDRESS || "localhost";
const PORT = config().PORT || 3333;

app.listen(`${ADDRESS}:${PORT}`);
console.log(`Listening on http://${ADDRESS}:${PORT}`);
