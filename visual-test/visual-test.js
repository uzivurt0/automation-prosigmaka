const { existsSync, writeFileSync, readFileSync } = require("fs");
const driverSetup = require("./utils/driverSetup");
const chai = require("chai");
const { chaiImage } = require("chai-image");

chai.use(chaiImage);
const { expect } = chai;

async function visualTest1() {
  const PAGE_NAME = "APPLE";
  const PAGE_URL = "https://www.apple.com/id";

  const driver = await driverSetup();
  await driver.get(PAGE_URL);

  const baseScreenshotPath = `screenshot/base/${PAGE_NAME}.jpg`;
  const actualScreenshotPath = `screenshot/actual/${PAGE_NAME}.jpg`;
  const isBaseScreenshotExist = existsSync(baseScreenshotPath);
  const pageScreenshot = await driver.takeScreenshot();
  const pageScreenshotBuffer = Buffer.from(pageScreenshot, "base64");
  if (isBaseScreenshotExist) {
    const baseScreenshotBuffer = readFileSync(baseScreenshotPath);

    writeFileSync(actualScreenshotPath, pageScreenshotBuffer);
    expect(pageScreenshotBuffer).to.matchImage(baseScreenshotBuffer);
  } else {
    writeFileSync(baseScreenshotPath, pageScreenshotBuffer);
  }

  await driver.close();
}

async function visualTest2() {
  const PAGE_NAME = "APPLE2";
  const PAGE_URL = "https://www.apple.com/id/iphone/";

  const driver = await driverSetup();
  await driver.get(PAGE_URL);

  const baseScreenshotPath = `screenshot/base/${PAGE_NAME}.jpg`;
  const actualScreenshotPath = `screenshot/actual/${PAGE_NAME}.jpg`;
  const isBaseScreenshotExist = existsSync(baseScreenshotPath);
  const pageScreenshot = await driver.takeScreenshot();
  const pageScreenshotBuffer = Buffer.from(pageScreenshot, "base64");
  if (isBaseScreenshotExist) {
    const baseScreenshotBuffer = readFileSync(baseScreenshotPath);

    writeFileSync(actualScreenshotPath, pageScreenshotBuffer);
    expect(pageScreenshotBuffer).to.matchImage(baseScreenshotBuffer);
  } else {
    writeFileSync(baseScreenshotPath, pageScreenshotBuffer);
  }

  await driver.close();
}

async function visualTest3() {
  const PAGE_NAME = "APPLE3";
  const PAGE_URL = "https://www.apple.com/id/watch/";

  const driver = await driverSetup();
  await driver.get(PAGE_URL);

  const baseScreenshotPath = `screenshot/base/${PAGE_NAME}.jpg`;
  const actualScreenshotPath = `screenshot/actual/${PAGE_NAME}.jpg`;
  const isBaseScreenshotExist = existsSync(baseScreenshotPath);
  const pageScreenshot = await driver.takeScreenshot();
  const pageScreenshotBuffer = Buffer.from(pageScreenshot, "base64");
  if (isBaseScreenshotExist) {
    const baseScreenshotBuffer = readFileSync(baseScreenshotPath);

    writeFileSync(actualScreenshotPath, pageScreenshotBuffer);
    expect(pageScreenshotBuffer).to.matchImage(baseScreenshotBuffer);
  } else {
    writeFileSync(baseScreenshotPath, pageScreenshotBuffer);
  }

  await driver.close();
}

async function visualTest4() {
  const PAGE_NAME = "APPLE4";
  const PAGE_URL = "https://www.apple.com/id/airpods/";

  const driver = await driverSetup();
  await driver.get(PAGE_URL);

  const baseScreenshotPath = `screenshot/base/${PAGE_NAME}.jpg`;
  const actualScreenshotPath = `screenshot/actual/${PAGE_NAME}.jpg`;
  const isBaseScreenshotExist = existsSync(baseScreenshotPath);
  const pageScreenshot = await driver.takeScreenshot();
  const pageScreenshotBuffer = Buffer.from(pageScreenshot, "base64");
  if (isBaseScreenshotExist) {
    const baseScreenshotBuffer = readFileSync(baseScreenshotPath);

    writeFileSync(actualScreenshotPath, pageScreenshotBuffer);
    expect(pageScreenshotBuffer).to.matchImage(baseScreenshotBuffer);
  } else {
    writeFileSync(baseScreenshotPath, pageScreenshotBuffer);
  }

  await driver.close();
}

async function visualTest5() {
  const PAGE_NAME = "APPLE5";
  const PAGE_URL = "https://www.apple.com/id/ipad/";

  const driver = await driverSetup();
  await driver.get(PAGE_URL);

  const baseScreenshotPath = `screenshot/base/${PAGE_NAME}.jpg`;
  const actualScreenshotPath = `screenshot/actual/${PAGE_NAME}.jpg`;
  const isBaseScreenshotExist = existsSync(baseScreenshotPath);
  const pageScreenshot = await driver.takeScreenshot();
  const pageScreenshotBuffer = Buffer.from(pageScreenshot, "base64");
  if (isBaseScreenshotExist) {
    const baseScreenshotBuffer = readFileSync(baseScreenshotPath);

    writeFileSync(actualScreenshotPath, pageScreenshotBuffer);
    expect(pageScreenshotBuffer).to.matchImage(baseScreenshotBuffer);
  } else {
    writeFileSync(baseScreenshotPath, pageScreenshotBuffer);
  }

  await driver.close();
}

visualTest1();
visualTest2();
visualTest3();
visualTest4();
visualTest5();
