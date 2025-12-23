import type { NextConfig } from "next";

  /** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
   output: 'standalone',
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
