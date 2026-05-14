/**
 * Seed / refresh the Faith Construction blog content in Sanity.
 *
 * Usage:
 *   SANITY_WRITE_TOKEN=<token> pnpm run seed:blog          # upsert content
 *   SANITY_WRITE_TOKEN=<token> pnpm run seed:blog -- --clean   # delete existing posts first
 *
 * Get a write token at: https://www.sanity.io/manage/project/s56qgtsd/api
 *   Tokens → Add API token → Editor role
 */

import { createClient } from "@sanity/client";
import { randomUUID } from "node:crypto";
import { Buffer } from "node:buffer";
import { posts, AUTHOR_NAME, categories, type Block } from "./blog-content.js";

const PROJECT_ID = "s56qgtsd";
const DATASET = "production";
const API_VERSION = "2026-05-14";

const token = process.env.SANITY_WRITE_TOKEN;
if (!token) {
  console.error(
    "\nMissing SANITY_WRITE_TOKEN.\n" +
      "Create a token with Editor role at:\n" +
      `  https://www.sanity.io/manage/project/${PROJECT_ID}/api\n` +
      "Then run:\n" +
      "  SANITY_WRITE_TOKEN=skXXXX pnpm run seed:blog\n",
  );
  process.exit(1);
}

const client = createClient({
  projectId: PROJECT_ID,
  dataset: DATASET,
  apiVersion: API_VERSION,
  token,
  useCdn: false,
});

const cleanMode = process.argv.includes("--clean");

const slugify = (s: string) =>
  s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

/** Convert our simple Block[] structure into Sanity Portable Text. */
const toPortableText = (blocks: Block[]) =>
  blocks.map((b) => {
    const _key = randomUUID().replace(/-/g, "").slice(0, 12);
    if (b.type === "ul" || b.type === "ol") {
      return b.items.map((text) => ({
        _key: randomUUID().replace(/-/g, "").slice(0, 12),
        _type: "block",
        style: "normal",
        listItem: b.type === "ul" ? "bullet" : "number",
        level: 1,
        markDefs: [],
        children: [
          {
            _key: randomUUID().replace(/-/g, "").slice(0, 12),
            _type: "span",
            text,
            marks: [],
          },
        ],
      }));
    }
    const style =
      b.type === "h2"
        ? "h2"
        : b.type === "h3"
          ? "h3"
          : b.type === "quote"
            ? "blockquote"
            : "normal";
    return {
      _key,
      _type: "block",
      style,
      markDefs: [],
      children: [
        {
          _key: randomUUID().replace(/-/g, "").slice(0, 12),
          _type: "span",
          text: b.text,
          marks: [],
        },
      ],
    };
  }).flat();

/** Download an image URL and upload it to Sanity. Returns asset _id or null. */
async function uploadImageFromUrl(
  url: string,
  filename: string,
): Promise<string | null> {
  try {
    const res = await fetch(url);
    if (!res.ok) {
      console.warn(`  ! image fetch failed (${res.status}): ${url}`);
      return null;
    }
    const buf = Buffer.from(await res.arrayBuffer());
    const asset = await client.assets.upload("image", buf, { filename });
    return asset._id;
  } catch (err) {
    console.warn(`  ! image upload error: ${(err as Error).message}`);
    return null;
  }
}

async function upsertCategories() {
  console.log("\nCategories:");
  for (const cat of categories) {
    const _id = `category-${cat.slug}`;
    await client.createOrReplace({
      _id,
      _type: "category",
      title: cat.title,
      slug: { _type: "slug", current: cat.slug },
      description: cat.description,
    });
    console.log(`  ✓ ${cat.title}`);
  }
}

/**
 * Look up the existing author by name and return its _id.
 * Also deletes any other author documents so the dataset stays clean.
 */
async function resolveAuthorId(): Promise<string> {
  console.log(`\nAuthor (looking up "${AUTHOR_NAME}"):`);
  const all: Array<{ _id: string; name: string }> = await client.fetch(
    `*[_type=="author"]{_id, name}`,
  );
  const keep = all.find(
    (a) => a.name?.trim().toLowerCase() === AUTHOR_NAME.toLowerCase(),
  );
  if (!keep) {
    throw new Error(
      `Could not find an author named "${AUTHOR_NAME}" in Sanity. ` +
        `Open the Studio, create the author, then re-run.`,
    );
  }
  console.log(`  ✓ found ${keep.name} (${keep._id})`);

  const others = all.filter((a) => a._id !== keep._id);
  for (const o of others) {
    try {
      await client.delete(o._id);
      console.log(`  ✗ deleted other author: ${o.name || o._id}`);
    } catch (err) {
      // A reference from a post can block deletion; we'll retry after posts are repointed.
      console.warn(
        `  ! could not delete ${o.name || o._id} yet (will retry): ${(err as Error).message}`,
      );
    }
  }

  return keep._id;
}

/**
 * Final pass to remove any author docs that survived the first delete
 * (typically because old posts still referenced them).
 */
async function cleanupOtherAuthors(keepId: string) {
  const stragglers: Array<{ _id: string; name: string }> = await client.fetch(
    `*[_type=="author" && _id != $keepId]{_id, name}`,
    { keepId },
  );
  for (const s of stragglers) {
    try {
      await client.delete(s._id);
      console.log(`  ✗ deleted leftover author: ${s.name || s._id}`);
    } catch (err) {
      console.warn(
        `  ! still could not delete ${s.name || s._id}: ${(err as Error).message}`,
      );
    }
  }
}

async function cleanPosts() {
  console.log("\nCleaning existing posts...");
  const ids: string[] = await client.fetch(`*[_type=="post"]._id`);
  if (ids.length === 0) {
    console.log("  (none found)");
    return;
  }
  for (const id of ids) {
    await client.delete(id);
  }
  console.log(`  ✓ deleted ${ids.length} post(s)`);
}

async function upsertPosts(authorId: string) {
  console.log("\nPosts:");
  for (const p of posts) {
    const _id = `post-${p.slug}`;
    console.log(`  → ${p.title}`);
    const imageRef = await uploadImageFromUrl(
      p.imageUrl,
      `post-${p.slug}.jpg`,
    );

    const doc: { _id: string; _type: string; [k: string]: unknown } = {
      _id,
      _type: "post",
      title: p.title,
      slug: { _type: "slug", current: p.slug },
      excerpt: p.excerpt,
      publishedAt: p.publishedAt,
      body: toPortableText(p.body),
      author: {
        _type: "reference",
        _ref: authorId,
      },
      categories: p.categories.map((c) => ({
        _type: "reference",
        _key: randomUUID().replace(/-/g, "").slice(0, 12),
        _ref: `category-${slugify(c)}`,
      })),
      seo: {
        metaTitle: p.seo.metaTitle,
        metaDescription: p.seo.metaDescription,
      },
    };

    if (imageRef) {
      doc.mainImage = {
        _type: "image",
        alt: p.imageAlt,
        asset: { _type: "reference", _ref: imageRef },
      };
    }

    await client.createOrReplace(doc);
    console.log(`    ✓ published`);
  }
}

async function main() {
  console.log(`\nFaith Construction blog seed`);
  console.log(`  project: ${PROJECT_ID}`);
  console.log(`  dataset: ${DATASET}`);
  console.log(`  mode:    ${cleanMode ? "clean + seed" : "upsert"}`);

  await upsertCategories();
  const authorId = await resolveAuthorId();
  if (cleanMode) await cleanPosts();
  await upsertPosts(authorId);
  // Retry deleting any other author docs now that posts no longer reference them.
  await cleanupOtherAuthors(authorId);

  console.log(`\nDone. ${posts.length} post(s) published to /blog.\n`);
}

main().catch((err) => {
  console.error("\nSeed failed:", err.message || err);
  process.exit(1);
});
