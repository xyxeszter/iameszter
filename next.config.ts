const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  output: "export",
  distDir: "out",
  images: { unoptimized: true },
  trailingSlash: true,
  assetPrefix: isProd ? "https://xyxeszter.github.io/iameszter/" : "",
};

export default nextConfig;