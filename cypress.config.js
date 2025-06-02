const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on('after:screenshot', (details) => {
        console.log('Screenshot saved:', details.path);
      });

      on('task', {
        log(message) {
          console.log(message);
          return null;
        },
      });
    },

    screenshotOnRunFailure: true,
    baseUrl: 'https://demoqa.com',

    pageLoadTimeout: 120000,
    defaultCommandTimeout: 10000,
  },

  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/reports',
    overwrite: false,
    html: true,
    json: true,
  },
});
