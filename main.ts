// main.ts — entrypoint for the post-x-promote-make-your-own-bounty-01 bounty.
// The entry is one post on X; this program only hands its address to the
// grader by copying POST.json into the output directory.
import { copyFileSync, mkdirSync, readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const repoRoot = dirname(fileURLToPath(import.meta.url));
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const postFile = join(repoRoot, "POST.json");

// Fail fast on a malformed POST.json instead of copying a bad file.
JSON.parse(readFileSync(postFile, "utf8"));

mkdirSync(outputDir, { recursive: true });
copyFileSync(postFile, join(outputDir, "POST.json"));

