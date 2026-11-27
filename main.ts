import { mkdirSync, writeFileSync } from "node:fs";

const SENTENCE =
  "At 2 a.m. in a Singapore hawker stall, after my flight was cancelled, a bowl of laksa — coconut broth, cockles, chilli — made me cry into the steam, and I have chased that feeling ever since.";

const MAX_CHARS = 200;

function checkSentence(text: string): void {
  const trimmed = text.trim();
  if (trimmed.length === 0 || trimmed.length > MAX_CHARS) {
    throw new Error(`entry must be 1-${MAX_CHARS} characters, got ${trimmed.length}`);
  }
  if (trimmed !== text) {
    throw new Error("entry must not start or end with whitespace");
  }
}

function emit(text: string): void {
  checkSentence(text);
  const outDir = "/output";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(`${outDir}/entry.txt`, text, "utf8");
}

emit(SENTENCE);
console.log(`entry written: ${SENTENCE.length} characters`);
