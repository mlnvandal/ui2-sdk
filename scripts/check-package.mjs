import fs from "node:fs/promises";
import path from "node:path";
import crypto from "node:crypto";

const root = process.cwd();
const distDir = path.join(root, "dist");
const packageDistDir = path.join(root, "package", "dist");

const listFiles = async (dir) => {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files = await Promise.all(
    entries.map(async (entry) => {
      const fullPath = path.join(dir, entry.name);
      if (entry.isDirectory()) return listFiles(fullPath);
      return [fullPath];
    }),
  );
  return files.flat();
};

const hashDir = async (dir) => {
  const files = (await listFiles(dir)).sort();
  const hash = crypto.createHash("sha256");
  for (const file of files) {
    const rel = path.relative(dir, file);
    const buf = await fs.readFile(file);
    hash.update(rel);
    hash.update(buf);
  }
  return hash.digest("hex");
};

try {
  const distHash = await hashDir(distDir);
  const packageHash = await hashDir(packageDistDir);
  if (distHash !== packageHash) {
    console.error("package/dist is out of sync with dist. Run: npm run build:package");
    process.exit(1);
  }
  console.log("package/dist is in sync.");
} catch (error) {
  console.error("check-package failed:", error);
  process.exit(1);
}
