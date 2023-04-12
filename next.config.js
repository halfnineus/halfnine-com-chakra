const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

module.exports = withBundleAnalyzer({
  reactStrictMode: true,
  // swcMinify: true,
  // trailingSlash: true,
  output: 'standalone',
  images: {
    domains: ['images.pexels.com'],
  },
  i18n: {
    locales: ["en", "es"],
    defaultLocale: "en",
    // Langs to add
    //  "zh-Hans", "zh-Hant", "ru", "fr", "id", "de", "pt", "it", "ja", "hi", "ar", "bn"
  },
  async redirects() {
    return [
      // {
      //   source: '/es/:path*',
      //   destination: '/es-MX/:path*',
      //   permanent: false
      // },
      {
        source: '/en/:path*',
        destination: '/:path*',
        permanent: false
      },
      {
        source: '/submit',
        destination: '/contact',
        permanent: false,
      },
      {
        source: '/sitemap_index.xml',
        destination: '/sitemap.xml',
        permanent: false,
      },
    ];
  },
}
)