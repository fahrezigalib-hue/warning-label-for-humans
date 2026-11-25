// Entry for make.fun bounty u-0xb3e689-warning-label-for-humans-one-line-big-laugh-40e31f85:
// "Warning Label for Humans: One Line, Big Laugh" — one line, at most
// 160 characters, written to /output/entry.txt. Deterministic.
import { writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "WARNING: Human requires 8 hours of charging nightly. Running on less than 5 voids the warranty and the personality.";

// The bounty gate accepts 1 to 160 characters; fail loudly rather than
// write an entry the scorer would mark invalid.
if (LINE.length < 1 || LINE.length > 160) {
  throw new Error(`entry line is ${LINE.length} characters, outside 1-160`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
console.log("wrote entry.txt");
