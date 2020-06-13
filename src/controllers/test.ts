import { Test } from "../models/Test.ts";
import { Context } from "https://deno.land/x/oak/mod.ts";

class TestController {
  async get(ctx: Context) {
    const test: Test = { message: "Ok" };
    ctx.response.body = test;
    ctx.response.status = 200;
  }
}

export default new TestController();
