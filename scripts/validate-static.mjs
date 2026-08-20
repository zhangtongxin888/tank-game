import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { pathToFileURL } from "node:url";

export const canonicalBase = "https://tankgame.wiki";
export const publicRoot = new URL("../public/", import.meta.url);
export const routeFiles = new Map([
  ["/", "index.html"],
  ["/beginner-guide/", "beginner-guide/index.html"],
  ["/codes/", "codes/index.html"],
  ["/tanks/", "tanks/index.html"],
  ["/stats/", "stats/index.html"],
  ["/badges/", "badges/index.html"],
  ["/gems/", "gems/index.html"],
  ["/faq/", "faq/index.html"],
]);

const activeCodes = new Set([
  "REBALANCEAGAIN",
  "HAVEFUN",
  "NEWCURRENCY",
  "HEADSTART",
]);

const readPublic = (relativePath) =>
  readFile(new URL(relativePath, publicRoot), "utf8");

const extractAll = (source, pattern) =>
  [...source.matchAll(pattern)].map((match) => match[1]);

export async function validateStaticSite() {
  const routeSources = new Map(
    await Promise.all(
      [...routeFiles].map(async ([route, file]) => [route, await readPublic(file)]),
    ),
  );

  for (const [route, source] of routeSources) {
    const expectedCanonical = `${canonicalBase}${route}`;
    const canonicals = extractAll(
      source,
      /<link\s+rel="canonical"\s+href="([^"]+)"\s*\/>/g,
    );
    assert.deepEqual(
      canonicals,
      [expectedCanonical],
      `${route} must have one self-referencing canonical`,
    );
    assert.match(source, /<meta\s+name="robots"\s+content="index,follow/);
    assert.match(source, /<meta\s+property="og:image"\s+content="https:\/\/tankgame\.wiki\/og\.png"/);
    assert.match(source, /<meta\s+name="twitter:card"\s+content="summary_large_image"/);

    const structuredData = extractAll(
      source,
      /<script\s+type="application\/ld\+json">([\s\S]*?)<\/script>/g,
    );
    assert.equal(structuredData.length, 1, `${route} must have one JSON-LD block`);
    assert.doesNotThrow(() => JSON.parse(structuredData[0]), `${route} JSON-LD must parse`);

    const internalLinks = extractAll(source, /<a\b[^>]*\shref="(\/[^"?#]*)/g);
    for (const href of internalLinks) {
      assert.ok(routeFiles.has(href), `${route} links to an undeclared route: ${href}`);
    }
  }

  const homepage = routeSources.get("/");
  assert.match(
    homepage,
    /<a class="button button-primary" href="\/beginner-guide\/">Start the beginner guide/,
    "the primary homepage button must lead to the internal beginner guide",
  );

  const codesPage = routeSources.get("/codes/");
  const copyCodes = new Set(extractAll(codesPage, /data-copy="([A-Z0-9]+)"/g));
  assert.deepEqual(copyCodes, activeCodes, "only the four approved codes may be copy cards");

  const sitemap = await readPublic("sitemap.xml");
  const sitemapUrls = new Set(extractAll(sitemap, /<loc>([^<]+)<\/loc>/g));
  const expectedUrls = new Set([...routeFiles.keys()].map((route) => `${canonicalBase}${route}`));
  assert.deepEqual(sitemapUrls, expectedUrls, "sitemap routes must match public HTML routes");

  const robots = await readPublic("robots.txt");
  assert.match(robots, /^User-agent: \*$/m);
  assert.match(robots, /^Allow: \/$/m);
  assert.match(robots, /^Sitemap: https:\/\/tankgame\.wiki\/sitemap\.xml$/m);

  const styles = await readPublic("styles.css");
  assert.match(styles, /overflow-x:\s*clip/);
  assert.match(styles, /@media \(max-width: 980px\)/);
  assert.match(styles, /@media \(max-width: 720px\)/);
  assert.match(styles, /@media \(prefers-reduced-motion: reduce\)/);

  const combined = [...routeSources.values()].join("\n");
  assert.doesNotMatch(
    combined,
    /(BEGIN (?:RSA|OPENSSH|EC) PRIVATE KEY|\b(?:api[_-]?key|client_secret|password)\s*[=:])/i,
    "production HTML must not contain credentials",
  );

  return { routes: routeFiles.size, sitemapUrls: sitemapUrls.size };
}

const invokedDirectly =
  process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href;

if (invokedDirectly) {
  const result = await validateStaticSite();
  process.stdout.write(
    `static production validation passed (${result.routes} routes, ${result.sitemapUrls} sitemap URLs)\n`,
  );
}
