const { defineConfig } = require('cypress')

module.exports = defineConfig({
  chromeWebSecurity: false,
  projectId: 't7n1k8',
  e2e: {
    baseUrl: 'https://notes-serverless-app.com',
    env: {
      viewportWidthBreakpoint: 768,
    },
    setupNodeEvents(on, config) {
      require('@cypress/grep/src/plugin')(config)
      return config
    }
  },
  'defaultCommandTimeout': 10000,
})
