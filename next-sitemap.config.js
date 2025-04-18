/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://ritualkez.ru',
    generateRobotsTxt: true,
    generateIndexSitemap: true,
    changefreq: 'never',
    priority: 0.6,
    sitemapSize: 5000,
    robotsTxtOptions: {
        policies: [
            {
                userAgent: '*',
                allow: '/',
            },
        ],
    },
    additionalPaths: async (config) => {
        return [
            {
                loc: '/', // Главная страница
                changefreq: 'weekly',
                priority: 1.0,
            },
            {
                loc: '/center', // Страница Ритуального центра
                changefreq: 'weekly',
                priority: 0.9,
            },
            {
                loc: '/memory', // Страница "Память"
                changefreq: 'monthly',
                priority: 0.8,
            },

        ]
    }
}