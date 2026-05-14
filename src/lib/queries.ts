const imageFields = /* groq */ `
  asset,
  alt,
  "lqip": asset->metadata.lqip,
  "dimensions": asset->metadata.dimensions
`;

export const postsListQuery = /* groq */ `
  *[_type == "post" && defined(slug.current)] | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    publishedAt,
    mainImage { ${imageFields} },
    "author": author->{ name, "slug": slug.current, role, image { ${imageFields} }, bio },
    "categories": categories[]->{ _id, title, "slug": slug.current }
  }
`;

export const postBySlugQuery = /* groq */ `
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    publishedAt,
    mainImage { ${imageFields} },
    body,
    "author": author->{ name, "slug": slug.current, role, image { ${imageFields} }, bio },
    "categories": categories[]->{ _id, title, "slug": slug.current },
    seo
  }
`;

export const relatedPostsQuery = /* groq */ `
  *[_type == "post" && slug.current != $slug && count(categories[@._ref in $categoryRefs]) > 0]
    | order(publishedAt desc)[0...3] {
      _id,
      title,
      "slug": slug.current,
      excerpt,
      publishedAt,
      mainImage { ${imageFields} }
    }
`;

export type SanityImage = {
  asset: { _ref: string };
  alt?: string;
  lqip?: string;
  dimensions?: { width: number; height: number };
};

export type PostCategory = {
  _id: string;
  title: string;
  slug: string;
};

export type PostAuthor = {
  name: string;
  slug: string;
  role?: string;
  image?: SanityImage;
  bio?: unknown[];
};

export type PostListItem = {
  _id: string;
  title: string;
  slug: string;
  excerpt?: string;
  publishedAt: string;
  mainImage?: SanityImage;
  author?: PostAuthor;
  categories?: PostCategory[];
};

export type Post = PostListItem & {
  body?: unknown[];
  seo?: {
    metaTitle?: string;
    metaDescription?: string;
    ogImage?: SanityImage;
    noIndex?: boolean;
  };
};
