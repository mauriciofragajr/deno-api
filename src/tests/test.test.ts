import { assertEquals, assertNotEquals } from "https://deno.land/std/testing/asserts.ts";
import { getMessageFromMock } from '../controllers/test.ts';

Deno.test({
  name: "is Equal 'Ok'",
  fn(): void {
    assertEquals("Ok", getMessageFromMock());
  },
});

Deno.test({
  name: "is not Equal 'Ok'",
  fn(): void {
    assertNotEquals("Ok", "Abc");
  },
});
