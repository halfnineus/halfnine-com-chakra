/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.SITE_URL || 'https://www.zedir.com',
    generateRobotsTxt: false, // (optional)
    robotsTxtOptions: {
        additionalSitemaps: [`https://blog.zedir.com/sitemap-blog.xml`],
    },
    alternateRefs: [
        {
            href: 'https://www.zedir.com/es/',
            hreflang: 'es',
        },
    ],
}