const { PHASE_PRODUCTION_BUILD } = require("next/constants");

module.exports = (phase, { defaultConfig }) => {
  /**
   * @type {import('next').NextConfig}
   */

  const isProd =
    phase === PHASE_PRODUCTION_BUILD && process.env.STAGING !== "1";

  const nextConfig = {
    basePath: process.env.NEXT_PUBLIC_BASE_PATH,
    assetPrefix: isProd ? "/trading-leagues-landing" : "",
    env: {},
  };
  return nextConfig;
};
