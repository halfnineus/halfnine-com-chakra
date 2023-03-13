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
      {
        source: '/en(/:path*)?',
        destination: '/:path*',
        permanent: false
      },  
      {
        source: '/services/:path*',
        destination: '/services/:path*',
        permanent: false
      },
      {
        source: '/industries/:path*',
        destination: '/industries/:path*',
        permanent: false
      },            
        // {
        //   source: '/es/:path*',
        //   destination: '/es-MX/:path*',
        //   permanent: false
        // },      
      {
        source: '/pages/:slug',
        destination: 'https://blog.zedir.com/posts/:slug',
        permanent: false,
      },
      {
        source: '/pages/blog/:slug',
        destination: 'https://blog.zedir.com/posts/:slug',
        permanent: false,
      },
      {
        source: '/submit',
        destination: '/contact',
        permanent: false,
      },
    ];
  },
}
)