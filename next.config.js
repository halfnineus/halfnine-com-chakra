module.exports = {
  async redirects() {
    return [
      {
        source: '/services/',
        destination: '/',
        permanent: true,
      },
    ];
  },
  reactStrictMode: true,
  i18n: {
    locales: ["en", "es"],
    defaultLocale: "en",
    // Langs to add
    //  "zh-Hans", "zh-Hant", "ru", "fr", "id", "de", "pt", "it", "ja", "hi", "ar", "bn"
  },
  trailingSlash: true,
  experimental: {
    outputStandalone: true,
  }

}
