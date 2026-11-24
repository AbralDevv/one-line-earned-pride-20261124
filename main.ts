import * as fs from "node:fs";
import * as path from "node:path";

const LINE = `At fifty-eight, after two years of fumbling guitar chords behind a shut garage door, he played a Johnny Cash song clean from start to finish, cracked the door six inches off the concrete, and took it from the top.`;

const outDir =
  process.env.MAKEFUN_OUTPUT_DIR && process.env.MAKEFUN_OUTPUT_DIR.length > 0
    ? process.env.MAKEFUN_OUTPUT_DIR
    : fs.existsSync("/output")
      ? "/output"
      : path.join(process.cwd(), "output");

fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, "entry.txt"), LINE, "utf8");
console.log(`wrote entry.txt (${LINE.length} chars) to ${outDir}`);
