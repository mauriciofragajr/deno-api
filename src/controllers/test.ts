import { Test } from "../models/Test.ts";
import { Context } from "https://deno.land/x/oak/mod.ts";

export const getMessageFromMock = () => {
  return "Ok";
};

class TestController {
  async get(ctx: Context) {
    const test: Test = { message: getMessageFromMock() };
    ctx.response.body = test;
    ctx.response.status = 200;
  }
}

export default new TestController();
