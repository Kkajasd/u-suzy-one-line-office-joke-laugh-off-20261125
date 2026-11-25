import { mkdirSync, writeFileSync } from "node:fs";

// One office joke, one line: the suggestion box that can only
// suggest a smaller version of itself. The setup names a familiar
// office object; the punchline turns it into a loop with no way out.
const SETUP = "The office suggestion box contains exactly one suggestion:";
const PUNCHLINE = "a smaller suggestion box.";
const ENTRY = `${SETUP} ${PUNCHLINE}`;

if (
  ENTRY.length === 0 ||
  ENTRY.length > 200 ||
  ENTRY.includes("\n") ||
  !ENTRY.endsWith(".")
) {
  throw new Error("ENTRY must be a single line of 1-200 characters");
}

// Never delete /output: the grader mounts it as a bind mount.
// Create it if missing, overwrite the file in place. The output is
// fully deterministic: the same single line on every run, byte for byte.
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, { encoding: "utf8", flag: "w" });
