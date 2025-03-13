import path from "path";

import { createArrayOfNumbersFromFile } from "./extractNumbersFromFile.js";
import { sortArray } from "./sortArray.js";
import { calculateElementWiseDifference } from "./calculateElementWiseDifference.js";
import { calculateArraySum } from "./calculateArraySum.js";

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

  const result = calculateArraySum(differenceListResult);
  console.log("The puzzle answer is:" + " " + result);
  return result;
}
