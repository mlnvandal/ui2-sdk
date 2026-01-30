import fs from "node:fs/promises";
import path from "node:path";

const root = process.cwd();
const distDir = path.join(root, "dist");
const packageDir = path.join(root, "package");
const packageDist = path.join(packageDir, "dist");
const rootPackagePath = path.join(root, "package.json");
const packagePackagePath = path.join(packageDir, "package.json");

const rootPackage = JSON.parse(await fs.readFile(rootPackagePath, "utf8"));
const packagePackage = JSON.parse(await fs.readFile(packagePackagePath, "utf8"));
packagePackage.version = rootPackage.version;
await fs.writeFile(packagePackagePath, `${JSON.stringify(packagePackage, null, 2)}\n`, "utf8");

const entries = await fs.readdir(packageDir, { withFileTypes: true });
await Promise.all(
  entries.map(async (entry) => {
    if (entry.name === "package.json") return;
    await fs.rm(path.join(packageDir, entry.name), { recursive: true, force: true });
  }),
);

await fs.mkdir(packageDist, { recursive: true });

const distEntries = await fs.readdir(distDir, { withFileTypes: true });
await Promise.all(
  distEntries.map(async (entry) => {
    const src = path.join(distDir, entry.name);
    const dest = path.join(packageDist, entry.name);
    if (entry.isDirectory()) {
      await fs.cp(src, dest, { recursive: true });
    } else {
      await fs.copyFile(src, dest);
    }
  }),
);

await fs.copyFile(path.join(root, "README.md"), path.join(packageDir, "README.md"));
