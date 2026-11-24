// One Line of Earned Pride — make.fun entry program.
// Writes one line (140 chars, within the 1–240 gate) to /output/entry.txt
// (or the dir given by argv[2], $MAKEFUN_OUTPUT_DIR, falling back to ./output).
// Node stdlib only.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "She'd failed the driving test four times; this morning she parked perfectly, turned off the engine, and sat there grinning at her own hands.";

function resolveOutputDir(): string {
  const fromArgv = process.argv[2];
  if (fromArgv) return fromArgv;
  const fromEnv = process.env.MAKEFUN_OUTPUT_DIR;
  if (fromEnv) return fromEnv;
  return "/output";
}

function validateEntry(entry: string): void {
  // The competition gate is 1–240 chars, exactly one line: fail loudly
  // here instead of writing a file the harness would refuse.
  const lines = entry.split("\n");
  if (lines.length !== 1) {
    throw new Error(`entry must be exactly one line, got ${lines.length}`);
  }
  if (entry.length < 1 || entry.length > 240) {
    throw new Error(`entry must be 1–240 chars, got ${entry.length}`);
  }
}

function main(): void {
  validateEntry(ENTRY);
  let outDir = resolveOutputDir();
  try {
    mkdirSync(outDir, { recursive: true });
  } catch {
    // /output may not be writable outside the harness; use ./output instead.
    outDir = "./output";
    mkdirSync(outDir, { recursive: true });
  }
  // One line, no trailing explanation — the file holds exactly the entry.
  writeFileSync(`${outDir}/entry.txt`, ENTRY + "\n", "utf-8");
}

main();
