import { mkdirSync, writeFileSync } from "node:fs";

const sentence =
  "The Confessional Microwave beeps an apology in Morse code every time it overheats your leftovers, then prints a tiny confession slip before it will heat anything again.";

if (sentence.length === 0 || sentence.length > 220) {
  throw new Error(`entry must be 1-220 characters, got ${sentence.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", sentence);
