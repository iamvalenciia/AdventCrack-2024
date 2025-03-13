import readline from "readline";
import { problem_day_one } from "./problem_day_one/index.js";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log("=====================================");
console.log(
  "Please press Enter to resolve Problem: Day 1 - Historian Hysteria"
);
console.log("=====================================");

rl.question("", () => {
  problem_day_one();
  rl.close();
});
