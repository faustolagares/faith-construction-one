"use client";

import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { PortableTextRenderer } from "@/components/PortableTextRenderer";
import { urlFor } from "@/lib/sanity";
import { type Post, type PostListItem } from "@/lib/queries";
import { fadeUp, staggerContainer, viewport } from "@/lib/motion";

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

export const PostView = ({
  post,
  related,
}: {
  post: Post;
  related: PostListItem[];
}) => {
  return (
    <>
      <article>
        {/* Hero */}
        <header className="relative bg-stone-50 px-5 md:px-8 lg:px-10 pt-16 md:pt-24 pb-12 md:pb-16 border-b border-slate-200">
          <div className="mx-auto w-full max-w-[760px]">
            <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
              <motion.div
                variants={fadeUp}
                className="flex flex-wrap items-center gap-x-3 gap-y-2 text-[11px] font-semibold tracking-[1.8px] uppercase mb-6"
              >
                {post.categories?.map((cat, idx) => (
                  <span key={cat._id} className="flex items-center gap-3">
                    <span className="text-red-600">{cat.title}</span>
                    {idx < (post.categories?.length || 0) - 1 && (
                      <span className="text-slate-300">/</span>
                    )}
                  </span>
                ))}
                {post.categories && post.categories.length > 0 && (
                  <span className="h-px w-8 bg-slate-300" />
                )}
                <span className="text-slate-500">{formatDate(post.publishedAt)}</span>
              </motion.div>
              <motion.h1
                variants={fadeUp}
                className="font-playfair_display text-4xl md:text-[64px] tracking-[-1.12px] leading-[1.07] mb-6 text-slate-900"
              >
                {post.title}
              </motion.h1>
              {post.excerpt && (
                <motion.p
                  variants={fadeUp}
                  className="text-slate-600 text-lg md:text-xl leading-[1.55] max-w-2xl"
                >
                  {post.excerpt}
                </motion.p>
              )}
              {post.author && (
                <motion.div variants={fadeUp} className="mt-10 flex items-center gap-4">
                  {post.author.image?.asset && (
                    <img
                      src={urlFor(post.author.image).width(96).height(96).fit("crop").auto("format").url()}
                      alt={post.author.image.alt || post.author.name}
                      className="h-12 w-12 rounded-full object-cover border border-slate-200"
                    />
                  )}
                  <div>
                    <div className="text-sm font-semibold text-slate-900">{post.author.name}</div>
                    {post.author.role && (
                      <div className="text-xs text-slate-600 tracking-wide">{post.author.role}</div>
                    )}
                  </div>
                </motion.div>
              )}
            </motion.div>
          </div>
        </header>

        {/* Cover */}
        {post.mainImage?.asset && (
          <div className="px-5 md:px-8 lg:px-10 -mt-2">
            <div className="mx-auto w-full max-w-[1100px] aspect-[16/9] overflow-hidden bg-slate-100">
              <img
                src={urlFor(post.mainImage).width(2000).height(1125).fit("crop").auto("format").url()}
                alt={post.mainImage.alt || post.title}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        )}

        {/* Body */}
        <div className="px-5 md:px-8 lg:px-10 py-16 md:py-24">
          <div className="mx-auto w-full max-w-[760px]">
            {post.body && Array.isArray(post.body) && <PortableTextRenderer value={post.body} />}

            {post.author && (
              <aside className="mt-16 md:mt-20 border-t border-slate-200 pt-10 md:pt-12">
                <div className="text-red-600 text-[11px] font-bold tracking-[2.64px] uppercase mb-6">
                  About the author
                </div>
                <div className="flex flex-col sm:flex-row sm:items-start gap-6 sm:gap-8">
                  {post.author.image?.asset && (
                    <img
                      src={urlFor(post.author.image).width(240).height(240).fit("crop").auto("format").url()}
                      alt={post.author.image.alt || post.author.name}
                      className="h-20 w-20 sm:h-24 sm:w-24 rounded-full object-cover border border-slate-200 shrink-0"
                    />
                  )}
                  <div className="min-w-0">
                    <h3 className="font-playfair_display text-2xl md:text-3xl tracking-[-0.4px] text-slate-900">
                      {post.author.name}
                    </h3>
                    {post.author.role && (
                      <div className="text-[11px] font-semibold tracking-[1.8px] uppercase text-slate-500 mt-1.5">
                        {post.author.role}
                      </div>
                    )}
                    {post.author.bio && Array.isArray(post.author.bio) && post.author.bio.length > 0 && (
                      <div className="mt-2 [&_p]:mb-2 [&_p:last-child]:mb-0 [&_p]:!leading-[1.6]">
                        <PortableTextRenderer value={post.author.bio} />
                      </div>
                    )}
                  </div>
                </div>
              </aside>
            )}
          </div>
        </div>
      </article>

      {related.length > 0 && (
        <section className="bg-stone-50 px-5 md:px-8 lg:px-10 py-16 md:py-20 border-t border-slate-200">
          <div className="mx-auto w-full max-w-[1440px]">
            <div className="mb-10">
              <div className="text-red-600 text-[11px] font-bold tracking-[2.64px] uppercase border-t-2 border-red-600 inline-block pt-3 mb-5">
                Keep reading
              </div>
              <h2 className="font-playfair_display text-3xl md:text-4xl tracking-[-0.64px] text-slate-900">
                More from the site<span className="text-red-600">.</span>
              </h2>
            </div>
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-12"
            >
              {related.map((p) => (
                <motion.article key={p._id} variants={fadeUp}>
                  <Link to={`/blog/${p.slug}`} className="group block">
                    {p.mainImage?.asset && (
                      <div className="aspect-[4/3] overflow-hidden bg-slate-100 mb-5">
                        <img
                          src={urlFor(p.mainImage).width(700).height(525).fit("crop").auto("format").url()}
                          alt={p.mainImage.alt || p.title}
                          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                        />
                      </div>
                    )}
                    <div className="text-[11px] font-semibold tracking-[1.8px] uppercase text-slate-500 mb-3">
                      {formatDate(p.publishedAt)}
                    </div>
                    <h3 className="font-playfair_display text-xl md:text-2xl tracking-[-0.32px] leading-[1.2] text-slate-900 group-hover:text-red-600 transition-colors">
                      {p.title}
                    </h3>
                  </Link>
                </motion.article>
              ))}
            </motion.div>
          </div>
        </section>
      )}
    </>
  );
};
