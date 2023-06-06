/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    // providing the locales supported by your application
    locales: ["ua", "ru"],
    //  default locale used when the non-locale paths are visited
    defaultLocale: "ua",
    localeDetection: false,
  },
  compiler: {
    // Enables the styled-components SWC transform
    styledComponents: true,
  },
  env: {
    GOOGLE_MAP_API: process.env.GOOGLE_MAP_API,
    GA_MEASUREMENT_ID: process.env.GA_MEASUREMENT_ID,
  },
};

module.exports = nextConfig;
