import fs from "node:fs";

/**
 * Creates an array of numbers extracted from a file based on specified position criteria
 *
 * @async
 * @function createArrayOfNumbersFromFile
 * @param {string} outputFilePath - Path to the file containing numerical data
 * @param {string} whatNumbers - Extraction mode that determines which numbers to extract
 *                              ("numbers-from-left" or "numbers-from-right")
 * @returns {Promise<number[]>} - A promise that resolves to an array of extracted numbers
 * @throws {Error} - Logs error to console if file reading fails
 *
 * @description
 * This function reads a file from the specified path, splits its contents into numeric values,
 * and then filters those values based on the specified extraction mode.
 * - "numbers-from-left": Returns numbers at even indices (0, 2, 4, etc.)
 * - "numbers-from-right": Returns numbers at odd indices (1, 3, 5, etc.)
 * @example
 * // Returns [80784, 81682, 22289]
 * await createArrayOfNumbersFromFile("/path/to/file.txt", "numbers-from-left");
 *
 */
export async function createArrayOfNumbersFromFile(
  outputFilePath,
  whatNumbers
) {
  try {
    const data = fs.readFileSync(outputFilePath, "utf8");
    const line = data.split(/\s+/).map(Number);

    if (whatNumbers === "numbers-from-left") {
      return line.filter((_, index) => index % 2 === 0);
    } else if (whatNumbers === "numbers-from-right") {
      return line.filter((_, index) => index % 2 !== 0);
    }
  } catch (err) {
    console.error("Error reading the file:", err);
    return [];
  }
}
