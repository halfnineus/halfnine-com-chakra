/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.SITE_URL || 'https://www.zedir.com',
    generateRobotsTxt: false,
    autoLastmod: false,
    changefreq: 'monthly',
    robotsTxtOptions: {
        additionalSitemaps: [`https://blog.zedir.com/blog-sitemap.xml`],
    },
    alternateRefs: [
        {
            href: 'https://www.zedir.com/es/',
            hreflang: 'es',
        },
    ],
}