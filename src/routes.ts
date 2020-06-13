import { Router } from "https://deno.land/x/oak/mod.ts";
import testController from "./controllers/test.ts";

const router = new Router();

router
  .get("/test", testController.get);

export default router;
