const { Builder, Browser } = require("selenium-webdriver");

async function driverSetup() {
  const driver = await new Builder().forBrowser(Browser.CHROME).build();

  return driver;
}

module.exports = driverSetup;
