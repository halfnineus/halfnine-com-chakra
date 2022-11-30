module.exports = {
  reactStrictMode: true,
  // swcMinify: true,
  // trailingSlash: true,
  images: {
    domains: ['picsum.photos'],
  },
  output: 'standalone',
  i18n: {
    locales: ["en", "es"],
    defaultLocale: "en",
    // Langs to add
    //  "zh-Hans", "zh-Hant", "ru", "fr", "id", "de", "pt", "it", "ja", "hi", "ar", "bn"
  },
  async redirects() {
    return [
      {
        source: '/pages',
        destination: '/',
        permanent: true,
      },
      {
        source: '/submit',
        destination: '/contact',
        permanent: true,
      },
    ];
  },
}
