import { expect, test } from "vitest";
import { hello_world } from "/index";

test("problem_day_one", () => {
  expect(hello_world()).toBe(console.log("Hello World"));
});

// Advent of Code problem #1
// test receive a txt file than return and array with number from left side
// test receive a txt file than return and array with number from right side

// receive a disorder array and then return an order the array

// receive two arrays and pair their values betwee and return one oject with pair values

// receive object with pair values adn should return an array with the difference between those values, like this:
// @example: The smallest number in the left list is 1, and the smallest number in the right list is 3. The distance between them is 2.

// receive and array with number values and then return a total number of the summ between those values
