import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

import {
  publicRoot,
  routeFiles,
  validateStaticSite,
} from "../scripts/validate-static.mjs";

const readPublic = (relativePath) =>
  readFile(new URL(relativePath, publicRoot), "utf8");

test("the complete static production contract passes", async () => {
  const result = await validateStaticSite();
  assert.deepEqual(result, { routes: 8, sitemapUrls: 8 });
});

test("all required public files are represented by the route contract", () => {
  assert.deepEqual([...routeFiles.keys()], [
    "/",
    "/beginner-guide/",
    "/codes/",
    "/tanks/",
    "/stats/",
    "/badges/",
    "/gems/",
    "/faq/",
  ]);
});

test("the static interactions remain self-contained", async () => {
  const script = await readPublic("app.js");
  assert.match(script, /navigator\.clipboard\.writeText/);
  assert.match(script, /tank-game-beginner-progress-v1/);
  assert.doesNotMatch(script, /https?:\/\//);
});
