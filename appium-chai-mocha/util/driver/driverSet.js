const { remote } = require("webdriverio");

async function driverSet(options) {
  const driver = await remote(options);
  return driver;
}

module.exports = driverSet;
