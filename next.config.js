const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  // async redirects() {
  //   return [
  //     {
  //       source: '/services',
  //       destination: '/',
  //       permanent: true,
  //     },
  //     {
  //       source: '/services/development',
  //       destination: '/',
  //       permanent: true,
  //     },
  //     // {
  //     //   source: '/services/manufacturing',
  //     //   destination: '/',
  //     //   permanent: true,
  //     // },
  //   ];
  // },
  reactStrictMode: true,
  i18n: {
    // providing the locales supported the application
    locales: ["en", "es"],
    //  default locale used when the non-locale paths are visited
    defaultLocale: "en",
  },

  // i18n: {
  //   // providing the locales supported by your application
  //   locales: ["en", "es", "zh-CN", "zh-CN", "ru", "fr", "id", "de", "pt", "it", "ja", "hi", "ar","bn"],
  //   //  default locale used when the non-locale paths are visited
  //   defaultLocale: "en-US",
  // },

  // nextConfig,
  experimental: {
    outputStandalone: true,
  }

}
