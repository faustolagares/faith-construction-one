import type { Metadata } from "next";
import { Navbar } from "@/sections/Navbar";
import { Footer } from "@/sections/Footer";
import { BlogList } from "@/components/blog/BlogList";
import { sanityClient } from "@/lib/sanity";
import { postsListQuery, type PostListItem } from "@/lib/queries";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Blog — Field Notes from the Build Site",
  description:
    "Real projects, costs, and hard-won lessons from Faith Construction One — remodeling and construction insight for Northeast Florida homeowners.",
  alternates: { canonical: "/blog" },
};

export default async function BlogPage() {
  let posts: PostListItem[] = [];
  try {
    posts = await sanityClient.fetch<PostListItem[]>(postsListQuery);
  } catch {
    posts = [];
  }

  return (
    <div className="text-slate-800 text-base font-normal bg-white min-h-screen min-w-[320px] overflow-x-hidden font-space_grotesk">
      <Navbar />
      <BlogList posts={posts || []} />
      <Footer />
    </div>
  );
}
