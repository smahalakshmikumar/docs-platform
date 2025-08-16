import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  compress: true,
  swcMinify: true,
  legacyBrowsers: false,
  browsersListForSwc: true,
};

export default nextConfig;
