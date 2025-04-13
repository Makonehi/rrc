/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://ritualkez.ru',
    generateRobotsTxt: true,
    generateIndexSitemap: false,
    robotsTxtOptions: {
        policies: [
            {
                userAgent: '*',
                allow: '/',
            },
        ],
    },
}