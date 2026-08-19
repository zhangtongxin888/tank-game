import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const read = (path) => readFile(new URL(`../${path}`, import.meta.url), "utf8");

test("the largest homepage CTA leads to the internal beginner guide", async () => {
  const source = await read("app/page.tsx");
  assert.match(
    source,
    /className="button button-primary" href="\/beginner-guide"/,
  );
});

test("SEO routes use the production domain", async () => {
  const [robots, sitemap, site] = await Promise.all([
    read("app/robots.ts"),
    read("app/sitemap.ts"),
    read("lib/site.ts"),
  ]);
  assert.match(site, /https:\/\/tankgame\.wiki/);
  assert.match(robots, /sitemap\.xml/);
  assert.match(sitemap, /indexableRoutes/);
});

test("all public guide routes are declared for the sitemap", async () => {
  const site = await read("lib/site.ts");
  for (const route of ["/beginner-guide", "/codes", "/tanks", "/faq"]) {
    assert.ok(site.includes(`\"${route}\"`), `${route} missing from route list`);
  }
});
