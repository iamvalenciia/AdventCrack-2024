/**
 * Sorts an array of numbers in ascending order
 *
 * @function sortArray
 * @param {number[]} numbers - The array of numbers to be sorted
 * @returns {number[]} - A sorted array of numbers in ascending order
 *
 * @description
 * This function takes an array of numeric values and returns a new array
 * with the same values sorted in ascending order (smallest to largest).
 * Uses JavaScript's native sort method with a custom compare function to ensure
 * proper numeric sorting rather than lexicographical sorting.
 *
 * @example
 * Returns [1, 2, 5, 10]
 * sortArray([10, 5, 1, 2]);
 *
 */
export function sortArray(numbers) {
  return numbers.sort((a, b) => a - b);
}
