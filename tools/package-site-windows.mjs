import { mkdtempSync, mkdirSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { join, resolve } from "node:path";
import { spawnSync } from "node:child_process";

const project = resolve(process.argv[2]);
const archive = resolve(process.argv[3]);
const node = process.execPath;
const prepare = "C:\\Users\\le.tt\\.codex\\plugins\\cache\\openai-curated-remote\\sites\\1.0.0-c\\skills\\sites\\scripts\\prepare-site-build.cjs";
const stage = mkdtempSync(join(tmpdir(), "shopmate-site-"));

try {
  const prepared = spawnSync(node, [prepare, project, join(stage, "dist")], { stdio: "inherit" });
  if (prepared.status !== 0) process.exit(prepared.status || 1);
  mkdirSync(resolve(archive, ".."), { recursive: true });
  const packed = spawnSync("C:\\Windows\\System32\\tar.exe", ["-C", stage, "-czf", archive, "dist"], { stdio: "inherit" });
  if (packed.status !== 0) process.exit(packed.status || 1);
  console.log(archive);
} finally {
  rmSync(stage, { recursive: true, force: true });
}
