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
  assert.deepEqual(result, { routes: 9, sitemapUrls: 9 });
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
    "/sources/",
  ]);
});

test("the static interactions remain self-contained", async () => {
  const script = await readPublic("app.js");
  assert.match(script, /navigator\.clipboard\.writeText/);
  assert.match(script, /tank-game-beginner-progress-v1/);
  assert.doesNotMatch(script, /https?:\/\//);
});

const bannerKeys = [
  "a25006026a9ab6a8763b1af6a62629bb",
  "498de268b88eb2050607a8847c9659d3",
  "3293b656614f69c13c33194a364deab6",
  "a53b43564a51900f5d0ab2ccb31507a4",
  "47805a4b91c85b8c7b4b22581b6c585b",
  "edcc3f0fb0782e01e96d9111c8b83247",
];

test("content pages wire banner and native, and the sources page stays clean", async () => {
  const contentRoutes = [...routeFiles.keys()].filter((route) => route !== "/sources/");
  assert.equal(contentRoutes.length, 8);

  for (const route of contentRoutes) {
    const source = await readPublic(routeFiles.get(route));
    assert.ok(
      source.indexOf("<h1") < source.indexOf('<aside class="ad-placement"'),
      `${route} must render content before the first ad`,
    );
    const placements = source.match(/<aside class="ad-placement"/g) || [];
    assert.equal(placements.length, 3, `${route} must expose at most three ad slots`);
    assert.match(source, /data-ad-host="top"/);
    assert.match(source, /data-ad-host="mid"/);
    assert.match(source, /data-ad-host="bottom"/);

    const configMatch = source.match(
      /<script type="application\/json" id="adsterra-config">([\s\S]*?)<\/script>/,
    );
    assert.ok(configMatch, `${route} must include the adsterra config`);
    const config = JSON.parse(configMatch[1]);
    assert.equal(config.adNetwork, "adsterra");
    assert.equal(config.status, "ready");
    assert.equal(config.cleanPage, false);
    assert.equal(config.enablePopunder, false);
    assert.equal(config.enableSocialBar, false);
    assert.equal(config.popunderScriptUrl, "");
    assert.equal(config.socialBarScriptUrl, "");
    assert.equal(config.slots.length, 3);
    assert.deepEqual(
      config.slots.map((slot) => slot.id),
      ["top", "mid", "bottom"],
    );
    assert.equal(config.slots[1].format, "native");
    assert.equal(
      config.slots[1].scriptUrl,
      "https://bauval.org/21/7f071c68dcc28f5afb6a562cd82fc6f3",
    );
    assert.equal(
      config.slots[1].containerId,
      "container-7f071c68dcc28f5afb6a562cd82fc6f3",
    );

    const urls = config.slots.flatMap((slot) =>
      slot.format === "native" ? [slot.scriptUrl] : slot.variants.map((variant) => variant.scriptUrl),
    );
    for (const key of bannerKeys) {
      assert.ok(
        urls.includes(`https://bauval.org/22/${key}`),
        `${route} is missing banner ${key}`,
      );
    }
    assert.doesNotMatch(source, /highperformanceformat|effectivecpmnetwork/i);
    assert.doesNotMatch(source, /adsterra-popunder|adsterra-social-bar/);
  }

  const sources = await readPublic("sources/index.html");
  assert.doesNotMatch(sources, /adsterra|bauval\.org|ad-placement|ad-host/i);
});

test("the content security policy allows ad creative schemes without a host allowlist", async () => {
  const vercel = JSON.parse(
    await readFile(new URL("../vercel.json", import.meta.url), "utf8"),
  );
  const csp = vercel.headers
    .flatMap((group) => group.headers)
    .find((header) => header.key === "Content-Security-Policy").value;
  assert.match(csp, /default-src 'self'/);
  for (const directive of ["script-src", "frame-src", "img-src", "connect-src", "worker-src"]) {
    const value = csp.split(";").map((part) => part.trim()).find((part) => part.startsWith(`${directive} `));
    assert.ok(value, `missing ${directive}`);
    for (const scheme of ["https:", "blob:", "data:", "wss:"]) {
      assert.ok(value.includes(scheme), `${directive} must allow ${scheme}`);
    }
  }
  assert.doesNotMatch(csp, /bauval|highperformanceformat|effectivecpmnetwork|adsterra/i);
});
