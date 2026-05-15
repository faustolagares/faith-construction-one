import { createClient, type SanityClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";

const projectId = (import.meta.env.VITE_SANITY_PROJECT_ID as string) || "s56qgtsd";
const dataset = (import.meta.env.VITE_SANITY_DATASET as string) || "production";
const apiVersion =
  (import.meta.env.VITE_SANITY_API_VERSION as string) || "2026-05-14";

export const sanityClient: SanityClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
  perspective: "published",
});

const builder = imageUrlBuilder(sanityClient);

export const urlFor = (source: SanityImageSource) => builder.image(source);
