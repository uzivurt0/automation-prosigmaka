const { remote } = require("webdriverio");
const { expect } = require("chai");
const path = require("path");

const options = {
  hostname: "0.0.0.0",
  port: 4723,
  logLevel: "error",
  capabilities: {
    platformName: "Android",
    "appium:automationName": "UiAutomator2",
    "appium:deviceName": "emulator-5554",
    "appium:app": path.join(process.cwd(), "apk/dummy.apk"),
    "appium:appActivity": ".MainActivity",
  },
};
let driver;
describe("TESTING ANDROID DUMMY APK", () => {
  before(async () => {
    driver = await remote(options);
    await driver.$("~Login").click();
  });
  after(async () => {
    await driver.deleteSession();
  });
  describe("NEGATIVE TEST", () => {
    it("EMPTY EMAIL & PASSWORD", async function () {
      await driver.$("~input-email").setValue("");
      await driver.$("~input-password").setValue("");
      await driver.$('//*[@content-desc="button-LOGIN"]').click();
      await driver.pause(500);
    });
    it("EMPTY EMAIL", async function () {
      await driver.$("~input-email").setValue("");
      await driver.$("~input-password").setValue("admin123");
      await driver.$('//*[@content-desc="button-LOGIN"]').click();
      await driver.pause(500);
    });
    it("EMPTY PASS", async function () {
      await driver.$("~input-email").setValue("blabla@mail.com");
      await driver.$("~input-password").setValue("");
      await driver.$('//*[@content-desc="button-LOGIN"]').click();
      await driver.pause(500);
    });
  });
  describe("POSITIVE TEST", () => {
    it("COMPLETED FORM", async function () {
      await driver.$("~input-email").setValue("blabla@mail.com");
      await driver.$("~input-password").setValue("admin123");
      await driver.$('//*[@content-desc="button-LOGIN"]').click();
      await driver.pause(5000);
    });
  });
});
