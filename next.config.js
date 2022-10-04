const isProd = process.env.NODE_ENV === "production";

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  /* config options here */
  assetPrefix: isProd
    ? "https://mujtaba-basheer.github.io/trading-leagues-landing"
    : undefined,
};

module.exports = nextConfig;
