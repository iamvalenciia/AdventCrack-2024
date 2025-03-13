/**
 * Calculates the absolute difference between corresponding elements of two arrays
 *
 * @function calculateElementWiseDifference
 * @param {number[]} sourceArray - The first array of numeric values
 * @param {number[]} targetArray - The second array of numeric values
 * @returns {number[]} An array containing the absolute differences between corresponding elements
 *
 * @description
 * This function computes the absolute difference between pairs of elements at matching indices
 * from two input arrays. For each position i, it calculates |sourceArray[i] - targetArray[i]|.
 * The function assumes both arrays have the same length or processes until the shorter array ends.
 *
 * @example
 * // Returns [2, 5, 1]
 * calculateElementWiseDifference([5, 10, 3], [3, 15, 2]);
 *
 */
export function calculateElementWiseDifference(sourceArray, targetArray) {
  const differenceArray = [];

  for (let index = 0; index < sourceArray.length; ++index) {
    const absoluteDifference = Math.abs(
      sourceArray[index] - targetArray[index]
    );
    differenceArray.push(absoluteDifference);
  }

  return differenceArray;
}
