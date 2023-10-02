const { expect } = require("chai");
const driverSet = require("./util/driver/driverSet");
const options = require("./util/driverOption/options");
const selectCatalogItem = require("./object/pageObject/selectCatalogItem");
const rateCatalogItem = require("./object/pageObject/rateCatalogItem");
const sortItems = require("./object/pageObject/sortItems");
const selectColourItem = require("./object/pageObject/selectColourItem");
const plusQty = require("./object/pageObject/plusQty");
const minQty = require("./object/pageObject/minQty");
const viewCart = require("./object/pageObject/viewCart");

describe("TESTING ANDROID DUMMY APK", () => {
  /**@type {Promise<WebdriverIO.Browser} */ let driver;
  before(async function () {
    driver = await driverSet(options);
  });
  after(async function () {
    await driver.pause(1000);
    await driver.closeApp();
  });

  describe("TEST IN MAINMENU", () => {
    it("RATE ITEM", async function () {
      await rateCatalogItem(driver, 5);
    });
    it("SORT BY NAME (DESC)", async function () {
      await sortItems(driver, "nameDesc");
      await driver.pause(1000);
    });
    it("SORT BY NAME (ASC)", async function () {
      await sortItems(driver, "nameAsc");
      await driver.pause(1000);
    });
    it("SORT BY PRICE (ASC)", async function () {
      await sortItems(driver, "priceAsc");
      await driver.pause(1000);
    });
    it("SORT BY PRICE (DESC)", async function () {
      await sortItems(driver, "priceDesc");
      await driver.pause(1000);
    });
    it("SORT BY NAME (ASC)", async function () {
      await sortItems(driver, "nameAsc");
      await driver.pause(1000);
    });
  });

  describe("TEST IN DETAIL MENU", () => {
    it("VIEW ITEM DETAIL", async function () {
      await selectCatalogItem(driver, 1);

      expect.apply();
    });
    it("SELECTING COLOUR", async function () {
      await selectColourItem(driver, "blue");
      await selectColourItem(driver, "red");
    });
    it("ADD QUANTITY", async function () {
      await driver.touchPerform([
        { action: "press", options: { x: 317, y: 643 } },
        { action: "wait", options: { ms: 500 } },
        { action: "moveTo", options: { x: 317, y: 127 } },
        { action: "release" },
      ]);
      await plusQty(driver, 3);
    });
    it("MIN QUANTITY", async function () {
      await minQty(driver, 4);
    });
    it("CLICK ADD TO CART BUTTON WHILE QTY IS 0", async function () {
      let state = await driver.$("~Add To Cart button").isEnabled();
      expect(state).is.equal(false);
    });
    it("CLICK VIEW CART WHILE QTY IS 0", async function () {
      await viewCart(driver, "No Items");
      const text = (
        await driver.$(
          '//android.view.ViewGroup[@content-desc="container header"]/android.widget.TextView'
        )
      ).getText();
      // expect(text).to.equal("No Items");
      await driver.pause(1000);
      await driver.back();
      await plusQty(driver, 3);
    });
    it("ADD TO CART", async function () {
      await plusQty(driver, 3);
      await driver.$("~Add To Cart button").click();
      await driver.pause(3000);
      const cartNum = await driver
        .$("~cart badge")
        .$("//android.widget.TextView")
        .getText();
      expect(cartNum).to.equal("6");
      await viewCart(driver, "My Cart");
    });
  });
});
