import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.victorcitroen.com" }],
        destination: "https://victorcitroen.com/:path*",
        permanent: true,
      },
      // polypustech.com (the old company domain) → victorcitroen.com
      {
        source: "/:path*",
        has: [{ type: "host", value: "polypustech.com" }],
        destination: "https://victorcitroen.com/:path*",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.polypustech.com" }],
        destination: "https://victorcitroen.com/:path*",
        permanent: true,
      },
    ];
  },
  async rewrites() {
    return [{ source: "/privacy", destination: "/privacy.html" }];
  },
};

export default nextConfig;
