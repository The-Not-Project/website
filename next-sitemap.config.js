module.exports = {
  siteUrl: 'https://www.thenotproject.com',
  generateRobotsTxt: true,
  exclude: ['/admin/**'],
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' },
      { userAgent: '*', disallow: '/admin' },
    ],
  },
};
