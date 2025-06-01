const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on('after:screenshot', (details) => {
        console.log('Screenshot saved:', details.path);
      });
    },
    screenshotOnRunFailure: true,
    baseUrl: 'https://demoqa.com',
  },
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/reports',
    overwrite: false,
    html: true,
    json: true,
  },
});
