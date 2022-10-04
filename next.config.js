const { PHASE_PRODUCTION_BUILD } = require("next/constants");

module.exports = (phase, { defaultConfig }) => {
  /**
   * @type {import('next').NextConfig}
   */

  const isProd =
    phase === PHASE_PRODUCTION_BUILD && process.env.STAGING !== "1";

  const nextConfig = {
    basePath: isProd ? "/trading-leagues-landing" : undefined,
    assetPrefix: isProd ? "/trading-leagues-landing" : undefined,
    env: {},
  };
  return nextConfig;
};
