import { expect, test } from "vitest";
import { hello_world } from "./index";

test("Print Hello World", () => {
  expect(hello_world()).toBe(console.log("Hello World"));
});
