/**
 * Calculates the sum of all elements in a numeric array
 *
 * @function calculateArraySum
 * @param {number[]} numericArray - An array of numeric values to sum
 * @returns {number} The total sum of all elements in the array
 *
 * @description
 * This function computes the total sum of all values in the provided array
 * using the reduce method. It iterates through each element, adding it to
 * an accumulator that starts at zero.
 *
 * @example
 * // Returns 15
 * calculateArraySum([5, 3, 7]);
 *
 * @example
 * // Returns 0 for empty array
 * calculateArraySum([]);
 *
 */
export function calculateArraySum(numericArray) {
  const initialValue = 0;

  const totalSum = numericArray.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initialValue
  );

  return totalSum;
}
