import { Test } from "../models/Test.ts";
import { Context } from "https://deno.land/x/oak/mod.ts";

class TestController {
  async get(ctx: Context) {
    const test: Test = { message: "Ok" };
    ctx.response.body = test;
  }
}

export default new TestController();
