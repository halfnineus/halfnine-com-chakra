const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  async redirects() {
    return [
       {
        source: '/services',
        destination: '/',
        permanent: true,
      },
      {
        source: '/services/development',
        destination: '/',
        permanent: true,
      },
      {
        source: '/services/manufacturing',
        destination: '/',
        permanent: true,
      },
    ];
  },
  nextConfig,
  experimental: {
    outputStandalone: true,
  }

}
