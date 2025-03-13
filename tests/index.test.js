import { expect, test } from "vitest";
import { createArrayOfNumbersFromFile } from "../problem_day_one/extractNumbersFromFile.js";
import { sortArray } from "../problem_day_one/sortArray.js";
import { calculateElementWiseDifference } from "../problem_day_one/calculateElementWiseDifference.js";
import { calculateArraySumRecursive } from "../problem_day_one/calculateArraySumRecursive.js";
import path from "path";

// Path to the test input file used for validating the extraction functionality
const outputFilePath = path.join(process.cwd(), "/tests/input_test.txt");

/**
 * @test Left-side number extraction
 *
 * @description
 * Validates that the createArrayOfNumbersFromFile function correctly extracts numbers
 * from even-indexed positions (left side) of the input file data.
 *
 * @scenario
 * 1. Call createArrayOfNumbersFromFile with the test file path and "numbers-from-left" mode
 * 2. Await the asynchronous result
 * 3. Assert that the returned array matches the expected values
 *
 * @input
 * - File path: outputFilePath
 * - Extraction mode: "numbers-from-left"
 *
 * @expect An array containing the left-side numbers in order of appearance: [80784, 81682, 22289]
 */
test("Create array of the left numbers from input.txt", async () => {
  const result = await createArrayOfNumbersFromFile(
    outputFilePath,
    "numbers-from-left"
  ); // Wait for async result
  expect(result).toEqual([80784, 81682, 22289]);
});

/**
 * @test Right-side number extraction
 *
 * @description
 * Validates that the createArrayOfNumbersFromFile function correctly extracts numbers
 * from odd-indexed positions (right side) of the input file data.
 *
 * @scenario
 * 1. Call createArrayOfNumbersFromFile with the test file path and "numbers-from-right" mode
 * 2. Await the asynchronous result
 * 3. Assert that the returned array matches the expected values
 *
 * @input
 * - File path: outputFilePath
 * - Extraction mode: "numbers-from-right"
 *
 * @expect An array containing the right-side numbers in order of appearance: [47731, 36089, 41038]
 */
test("Create array of the right numbers from input.txt", async () => {
  const result = await createArrayOfNumbersFromFile(
    outputFilePath,
    "numbers-from-right"
  ); // Wait for async result
  expect(result).toEqual([47731, 36089, 41038]);
});

/**
 * @test Array sorting functionality
 *
 * @description
 * Validates that the sortArray function correctly sorts numeric values in ascending order.
 * This test ensures proper numeric sorting behavior rather than lexicographical comparison,
 * which would produce incorrect results for multi-digit numbers.
 *
 * @scenario
 * 1. Call sortArray with an unordered numeric array [80784, 81682, 22289]
 * 2. Verify the returned array matches the expected sorted sequence
 *
 * @note Array.sort() modifies the original array in-place and returns a reference to the same array
 *
 * @expect The resulting array should contain the same elements but ordered from lowest to highest: [22289, 80784, 81682]
 */
test("Sort the array from lower number to higher", () => {
  const result = sortArray([80784, 81682, 22289]);
  expect(result).toEqual([22289, 80784, 81682]);
});

/**
 * @test Element-wise difference calculation
 *
 * @description
 * Validates that the calculateElementWiseDifference function correctly calculates the absolute difference
 * between corresponding elements of two numeric arrays. The test ensures that the function correctly computes
 * the distance between each pair of elements, even when the numbers are large or varied.
 *
 * @scenario
 * 1. Call calculateElementWiseDifference with two numeric arrays: [22289, 80784, 81682] and [36089, 41038, 47731]
 * 2. Verify the resulting array contains the absolute differences between the corresponding elements at each index
 *
 * @input
 * - Source array: [22289, 80784, 81682]
 * - Target array: [36089, 41038, 47731]
 *
 * @expect An array containing the absolute differences between corresponding elements: [13800, 39746, 33951]
 */
test("Calculate the difference between each number of the array and return their respective difference list of numbers", () => {
  const result = calculateElementWiseDifference(
    [22289, 80784, 81682],
    [36089, 41038, 47731]
  );
  expect(result).toEqual([13800, 39746, 33951]);
});

/**
 * @test Total sum calculation
 *
 * @description
 * Validates that the calculateArraySum function correctly computes the total sum of all the numbers in a given array.
 * The test ensures that the function returns the correct sum when provided with an array of numeric values.
 *
 * @scenario
 * 1. Call calculateArraySum with an array of numbers: [1, 2, 3]
 * 2. Verify the returned result is the correct total sum of the numbers in the array
 *
 * @input
 * - Array: [1, 2, 3]
 *
 * @expect The total sum of the numbers in the array: 6
 */
test("Calculate the total distance", () => {
  const result = calculateArraySumRecursive([1, 2, 3]);
  expect(result).toBe(6);
});
