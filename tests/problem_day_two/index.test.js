import { expect, test } from "vitest";
import { hello_world } from "/index";

test("problem_day_two", () => {
  expect(hello_world()).toBe(console.log("Hello World"));
});

// Advent of Code problem #2
