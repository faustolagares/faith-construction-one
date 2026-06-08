"use client";

import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { urlFor } from "@/lib/sanity";
import { type PostListItem } from "@/lib/queries";
import { fadeUp, staggerContainer, viewport } from "@/lib/motion";

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

export const BlogList = ({ posts }: { posts: PostListItem[] }) => {
  const [featured, ...rest] = posts;

  return (
    <>
      {/* Hero */}
      <section className="relative bg-stone-50 overflow-hidden px-5 md:px-8 lg:px-10 pt-20 pb-16 md:pt-28 md:pb-24 border-b border-slate-200">
        <div className="mx-auto w-full max-w-[1440px]">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
            <motion.div
              variants={fadeUp}
              className="text-red-600 text-[11px] font-bold tracking-[2.64px] uppercase border-t-2 border-red-600 inline-block pt-3 mb-8"
            >
              Field Notes
            </motion.div>
            <motion.h1
              variants={fadeUp}
              className="font-playfair_display text-[44px] md:text-[80px] tracking-[-1.12px] leading-[1.05] max-w-3xl mb-6 text-slate-900"
            >
              Stories from the build site<span className="text-red-600">.</span>
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="text-slate-600 text-base md:text-lg leading-[1.65] max-w-xl"
            >
              Real projects, hard-won lessons, and the craft behind every Faith
              Construction home — straight from our crew.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Posts list */}
      <section className="px-5 md:px-8 lg:px-10 py-16 md:py-24">
        <div className="mx-auto w-full max-w-[1440px]">
          {posts.length === 0 && (
            <div className="rounded border border-slate-200 bg-stone-50 p-8 text-center">
              <p className="text-slate-700">
                No posts yet. Once you publish in Sanity Studio, they appear here.
              </p>
            </div>
          )}

          {featured && (
            <article className="mb-16 md:mb-24">
              <Link to={`/blog/${featured.slug}`} className="group block">
                {featured.mainImage?.asset && (
                  <div className="aspect-[16/9] md:aspect-[21/9] overflow-hidden bg-slate-100 mb-8 md:mb-10">
                    <img
                      src={urlFor(featured.mainImage).width(2100).height(900).fit("crop").auto("format").url()}
                      alt={featured.mainImage.alt || featured.title}
                      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    />
                  </div>
                )}
                <div className="flex items-center gap-3 text-[11px] font-semibold tracking-[1.8px] uppercase mb-5">
                  <span className="text-red-600">Featured</span>
                  <span className="h-px w-8 bg-slate-300" />
                  <span className="text-slate-500">{formatDate(featured.publishedAt)}</span>
                </div>
                <h2 className="font-playfair_display text-3xl md:text-5xl tracking-[-0.8px] leading-[1.08] mb-5 text-slate-900 group-hover:text-red-600 transition-colors max-w-3xl">
                  {featured.title}
                </h2>
                {featured.excerpt && (
                  <p className="text-slate-600 text-base md:text-lg leading-[1.7] mb-6 max-w-2xl">
                    {featured.excerpt}
                  </p>
                )}
                <span className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[1.76px] uppercase text-slate-900">
                  Read the story
                  <span className="h-px w-6 bg-red-600 transition-all group-hover:w-10" />
                </span>
              </Link>
            </article>
          )}

          {rest.length > 0 && (
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14"
            >
              {rest.map((post) => (
                <motion.article key={post._id} variants={fadeUp}>
                  <Link to={`/blog/${post.slug}`} className="group block">
                    {post.mainImage?.asset && (
                      <div className="aspect-[4/3] overflow-hidden bg-slate-100 mb-6">
                        <img
                          src={urlFor(post.mainImage).width(800).height(600).fit("crop").auto("format").url()}
                          alt={post.mainImage.alt || post.title}
                          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                        />
                      </div>
                    )}
                    <div className="flex items-center gap-3 text-[11px] font-semibold tracking-[1.8px] uppercase mb-3">
                      {post.categories?.[0] && (
                        <>
                          <span className="text-red-600">{post.categories[0].title}</span>
                          <span className="h-px w-6 bg-slate-300" />
                        </>
                      )}
                      <span className="text-slate-500">{formatDate(post.publishedAt)}</span>
                    </div>
                    <h3 className="font-playfair_display text-2xl md:text-[28px] tracking-[-0.4px] leading-[1.15] mb-3 text-slate-900 group-hover:text-red-600 transition-colors">
                      {post.title}
                    </h3>
                    {post.excerpt && (
                      <p className="text-slate-600 text-sm leading-[1.65]">{post.excerpt}</p>
                    )}
                  </Link>
                </motion.article>
              ))}
            </motion.div>
          )}
        </div>
      </section>
    </>
  );
};
