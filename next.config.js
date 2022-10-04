const isProd = process.env.NODE_ENV === "production";

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  basePath: isProd ? "/trading-leagues-landing" : "",
  assetPrefix: isProd ? "/trading-leagues-landing" : undefined,
};

module.exports = nextConfig;
