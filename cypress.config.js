/// <reference types="cypress" />
const { defineConfig } = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default;
const fs = require('fs');

const {
  addCucumberPreprocessorPlugin,
} = require("@badeball/cypress-cucumber-preprocessor");
const {
  preprocessor,
} = require("@badeball/cypress-cucumber-preprocessor/browserify");

function setupNodeEvents(on, config) {
  // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
  on('file:preprocessor', cucumber());
  on('after:run', (results) => {
    fs.mkdirSync("cypress/.run", { recursive: true });
    fs.writeFile("cypress/.run/results.json", JSON.stringify(results));
  })
  addCucumberPreprocessorPlugin(on, config);

  on("file:preprocessor", preprocessor(config));

  // Make sure to return the config object as it might have been modified by the plugin.
  return config;
}

module.exports = defineConfig({
  projectId: "5iqtxt",
  e2e: {
    baseUrl: "http://localhost:3000/employees.html",
    specPattern: "cypress/e2e/BDD/*.feature",
    setupNodeEvents,
  },
  "pageLoadTimeout": 30000,
  "defaultCommandTimeout": 10000,
  "video": true
});