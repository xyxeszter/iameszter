import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // Enables static export for GitHub Pages
  distDir: "out",   // Ensures Next.js builds to the correct folder
  images: { unoptimized: true }, // Disables Next.js image optimization for GitHub Pages
  trailingSlash: true, // Ensures correct routing on GitHub Pages
};

export default nextConfig;
