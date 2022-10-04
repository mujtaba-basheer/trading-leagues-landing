const isProd = process.env.NODE_ENV === "production";

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  /* config options here */
  basePath: isProd ? "trading-leagues-landing" : "",
  assetPrefix: isProd ? "/trading-leagues-landing" : undefined,
};

module.exports = nextConfig;
