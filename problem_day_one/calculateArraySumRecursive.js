/**
 * Calculates the sum of all elements in a numeric array using recursion
 *
 * @function calculateArraySumRecursive
 * @param {number[]} numericArray - An array of numeric values to sum
 * @param {number} [index=0] - The current index to process (default is 0)
 * @returns {number} The total sum of all elements in the array
 *
 * @description
 * This function computes the total sum of all values in the provided array
 * by recursively adding each element starting from the first index.
 *
 * @example
 * // Returns 15
 * calculateArraySumRecursive([5, 3, 7]);
 *
 * @example
 * // Returns 0 for empty array
 * calculateArraySumRecursive([]);
 *
 */
export function calculateArraySumRecursive(numericArray, index = 0) {
  // Base case: when reached the end of the array, return 0
  if (index === numericArray.length) {
    return 0;
  }

  // Recursive case: Add the current element to the sum of the remaining elements
  return (
    numericArray[index] + calculateArraySumRecursive(numericArray, index + 1)
  );
}
