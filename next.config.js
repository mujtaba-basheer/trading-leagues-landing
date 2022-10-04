const { PHASE_PRODUCTION_BUILD } = require("next/constants");

module.exports = (phase, { defaultConfig }) => {
  /**
   * @type {import('next').NextConfig}
   */

  const isProd =
    phase === PHASE_PRODUCTION_BUILD && process.env.STAGING !== "1";
  console.log({ isProd, base_path: process.env.NEXT_PUBLIC_BASE_PATH });

  const nextConfig = {
    basePath: process.env.NEXT_PUBLIC_BASE_PATH,
    assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH,
    env: {},
  };
  return nextConfig;
};
