import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    appDir: true, // Tell Next.js you are using /app folder
  },
};

export default nextConfig;
