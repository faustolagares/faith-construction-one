import { createClient, type SanityClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";

const projectId = import.meta.env.VITE_SANITY_PROJECT_ID as string;
const dataset = import.meta.env.VITE_SANITY_DATASET as string;
const apiVersion =
  (import.meta.env.VITE_SANITY_API_VERSION as string) || "2026-05-14";

if (!projectId || !dataset) {
  throw new Error(
    "Missing Sanity env vars. Set VITE_SANITY_PROJECT_ID and VITE_SANITY_DATASET in .env.local",
  );
}

export const sanityClient: SanityClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
  perspective: "published",
});

const builder = imageUrlBuilder(sanityClient);

export const urlFor = (source: SanityImageSource) => builder.image(source);
