/**
 * @param {Promise<WebdriverIO.Browser>} driver
 * @param {number} itemNum
 * @returns {Promise<void>} */

async function selectCatalogItem(driver, itemNum) {
  await driver
    .$(
      `(//android.view.ViewGroup[@content-desc="store item"])[${itemNum}]/android.view.ViewGroup[1]`
    )
    .click();
}

module.exports = selectCatalogItem;
