/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.SITE_URL || 'https://www.halfnine.com',
    generateRobotsTxt: false,
    autoLastmod: false,
    changefreq: 'monthly',
    alternateRefs: [
        {
            href: 'https://www.halfnine.com/es/',
            hreflang: 'es',
        },
    ],
    exclude: [
        "/contact",
    ],
}