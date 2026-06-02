const fs = require("node:fs");
const path = require("node:path");

const root = process.cwd();
const targets = [".next", ".next-build"];

for (const target of targets) {
  const targetPath = path.join(root, target);
  if (!fs.existsSync(targetPath)) {
    continue;
  }

  try {
    fs.rmSync(targetPath, { recursive: true, force: true });
    console.log(`[clean] removed ${target}`);
  } catch (error) {
    // Best-effort cleanup; Next will recreate missing directories as needed.
    console.warn(`[clean] unable to remove ${target}: ${error.message}`);
  }
}
