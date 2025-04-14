/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://ritualkez.ru',
    generateRobotsTxt: true,
    generateIndexSitemap: true,
    robotsTxtOptions: {
        policies: [
            {
                userAgent: '*',
                allow: '/',
            },
        ],
    },
}