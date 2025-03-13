import path from "path";

import { createArrayOfNumbersFromFile } from "./extractNumbersFromFile.js";
import { sortArray } from "./sortArray.js";
import { calculateElementWiseDifference } from "./calculateElementWiseDifference.js";
import { calculateArraySumRecursive } from "./calculateArraySumRecursive.js";

/**
 * Solves the puzzle for Day One by processing two lists of numbers from a file,
 * calculating their element-wise difference, and returning the sum of those differences.
 *
 * @function problem_day_one
 * @returns {number} The sum of the element-wise differences between the sorted arrays.
 *
 * @description
 * This function orchestrates the solution to the puzzle by:
 * 1. Reading two lists of numbers from a file.
 * 2. Sorting both lists of numbers.
 * 3. Calculating the element-wise difference between the two sorted lists.
 * 4. Summing the differences recursively.
 * 5. Returning and logging the final result.
 *
 * It utilizes several helper functions, including:
 * - `createArrayOfNumbersFromFile`: To extract numbers from the specified file.
 * - `sortArray`: To sort the extracted numbers.
 * - `calculateElementWiseDifference`: To compute the difference between corresponding elements of the two sorted arrays.
 * - `calculateArraySumRecursive`: To recursively sum the differences.
 *
 * @example
 * // Returns the sum of the element-wise differences
 * problem_day_one();
 *
 */
export async function problem_day_one() {
  const outputFilePath = path.join(process.cwd(), "/problem_day_one/input.txt");

  const leftNumbers = await createArrayOfNumbersFromFile(
    outputFilePath,
    "numbers-from-left"
  );

  const rightNumbers = await createArrayOfNumbersFromFile(
    outputFilePath,
    "numbers-from-right"
  );

  const sortedLeftNumbers = sortArray(leftNumbers);
  const sortedRightNumbers = sortArray(rightNumbers);

  const differenceListResult = calculateElementWiseDifference(
    sortedLeftNumbers,
    sortedRightNumbers
  );

  const result = calculateArraySumRecursive(differenceListResult);
  console.log("The puzzle answer is:" + " " + result);
  return result;
}
