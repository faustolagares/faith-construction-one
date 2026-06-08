import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Navbar } from "@/sections/Navbar";
import { Footer } from "@/sections/Footer";
import { PostView } from "@/components/blog/PostView";
import { JsonLd } from "@/components/JsonLd";
import { blogPostingSchema, breadcrumbSchema } from "@/lib/schema";
import { sanityClient, urlFor } from "@/lib/sanity";
import {
  postBySlugQuery,
  relatedPostsQuery,
  type Post,
  type PostListItem,
} from "@/lib/queries";

export const revalidate = 3600;

export async function generateStaticParams() {
  try {
    const slugs = await sanityClient.fetch<{ slug: string }[]>(
      `*[_type == "post" && defined(slug.current)]{ "slug": slug.current }`,
    );
    return slugs.map((s) => ({ slug: s.slug }));
  } catch {
    return [];
  }
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = await sanityClient.fetch<Post | null>(postBySlugQuery, {
    slug: params.slug,
  });
  if (!post) return { title: "Post not found" };

  const seo = (post as unknown as { seo?: { metaTitle?: string; metaDescription?: string } }).seo;
  const title = seo?.metaTitle || post.title;
  const description = seo?.metaDescription || post.excerpt || undefined;
  const image = post.mainImage?.asset
    ? urlFor(post.mainImage).width(1200).height(630).fit("crop").auto("format").url()
    : undefined;

  return {
    title,
    description,
    alternates: { canonical: `/blog/${params.slug}` },
    openGraph: {
      type: "article",
      title,
      description,
      url: `/blog/${params.slug}`,
      images: image ? [image] : undefined,
    },
  };
}

export default async function PostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = await sanityClient.fetch<Post | null>(postBySlugQuery, {
    slug: params.slug,
  });

  if (!post) notFound();

  let related: PostListItem[] = [];
  const categoryRefs = post.categories?.map((c) => c._id).filter(Boolean) || [];
  if (categoryRefs.length > 0) {
    try {
      related = await sanityClient.fetch<PostListItem[]>(relatedPostsQuery, {
        slug: params.slug,
        categoryRefs,
      });
    } catch {
      related = [];
    }
  }

  const postImage = post.mainImage?.asset
    ? urlFor(post.mainImage).width(1200).height(630).fit("crop").auto("format").url()
    : undefined;

  return (
    <div className="text-slate-800 text-base font-normal bg-white min-h-screen min-w-[320px] overflow-x-hidden font-space_grotesk">
      <JsonLd
        data={[
          blogPostingSchema({
            title: post.title,
            slug: params.slug,
            excerpt: post.excerpt,
            publishedAt: post.publishedAt,
            imageUrl: postImage,
            authorName: post.author?.name,
          }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Blog", path: "/blog" },
            { name: post.title, path: `/blog/${params.slug}` },
          ]),
        ]}
      />
      <Navbar />
      <PostView post={post} related={related || []} />
      <Footer />
    </div>
  );
}
