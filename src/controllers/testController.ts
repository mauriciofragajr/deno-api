import { Test } from '../models/Test.ts';

class TestController {
  async get(ctx: any) {
    const test: Test = { message: 'Ok' }
    ctx.response.body = test;
  }
}

export default new TestController();