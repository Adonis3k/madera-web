import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    output: "export",
    images: {
          unoptimized: true,
    },
    // No basePath: once maderaweb.net is attached as a custom domain, GitHub
    // Pages serves this site from the domain root, not from /madera-web/.
    // (If the custom domain is ever removed and this goes back to being
    // served at adonis3k.github.io/madera-web/, basePath: "/madera-web"
    // would need to come back too.)
};

export default nextConfig;
