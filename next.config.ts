import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    output: "export",
    images: {
          unoptimized: true,
    },
    basePath: "/madera-web",
};

export default nextConfig;
