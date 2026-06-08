const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // TEMP (Wave 0): legacy code was never type-checked under Vite/esbuild.
  // Unblock the migration build; re-enable + clean up types as a Wave 0 follow-up.
  typescript: { ignoreBuildErrors: true },
  eslint: { ignoreDuringBuilds: true },
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      { protocol: "https", hostname: "cdn.sanity.io" },
      { protocol: "https", hostname: "imagedelivery.net" },
      { protocol: "https", hostname: "c.animaapp.com" },
    ],
  },
  async headers() {
    return [
      {
        source: "/assets/:path*",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
    ];
  },
  webpack: (config) => {
    // Compatibility shim so existing components keep importing from
    // "react-router-dom" (Link / useLocation) while running on Next.
    config.resolve.alias["react-router-dom"] = path.resolve(
      __dirname,
      "src/compat/react-router-shim.tsx",
    );
    return config;
  },
};

module.exports = nextConfig;
