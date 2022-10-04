const { PHASE_PRODUCTION_BUILD } = require("next/constants");

const isProd = phase === PHASE_PRODUCTION_BUILD && process.env.STAGING !== "1";

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  basePath: isProd ? "/trading-leagues-landing" : undefined,
  assetPrefix: isProd ? "/trading-leagues-landing" : undefined,
  env: {},
};

module.exports = nextConfig;
