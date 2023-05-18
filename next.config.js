/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    // providing the locales supported by your application
    locales: ["ua", "ru"],
    //  default locale used when the non-locale paths are visited
    defaultLocale: "ua",
    localeDetection: false,
  },
};

module.exports = nextConfig;
