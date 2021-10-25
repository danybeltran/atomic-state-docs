// next.config.js
const withNextra = require('nextra')('nextra-theme-docs', './theme.config.js')
module.exports = withNextra({
  i18n: {
    locales: ['en', 'es'],
    defaultLocale: 'en',
  },
})
