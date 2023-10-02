const path = require("path");

const options = {
  hostname: "0.0.0.0",
  port: 4723,
  logLevel: "error",
  capabilities: {
    platformName: "Android",
    "appium:automationName": "UiAutomator2",
    "appium:deviceName": "emulator-5554",
    "appium:app": path.join(process.cwd(), "apk/SauceLabs.apk"),
    "appium:appActivity": ".MainActivity",
  },
};

module.exports = options;
