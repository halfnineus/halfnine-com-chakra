const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  // async redirects() {
  //   return [
  //     {
  //       source: '/services/',
  //       destination: '/',
  //       permanent: true,
  //     },
  //     {
  //       source: '/services/development/',
  //       destination: '/',
  //       permanent: true,
  //     },
  //     // {
  //     //   source: '/services/manufacturing/',
  //     //   destination: '/',
  //     //   permanent: true,
  //     // },
  //   ];
  // },
  images: {
    domains: ['external-content.duckduckgo.com'],
  },
  reactStrictMode: true,
  i18n: {
    // providing the locales supported the application
    locales: ["en", "es"],
    //  default locale used when the non-locale paths are visited
    defaultLocale: "en",
    // locale detection true by default
    // localeDetection: true,
  },
  trailingSlash: true,

  // Langs to add
  //  "zh-Hans", "zh-Hant", "ru", "fr", "id", "de", "pt", "it", "ja", "hi", "ar", "bn"


  // nextConfig,
  experimental: {
    outputStandalone: true,
  }

}
