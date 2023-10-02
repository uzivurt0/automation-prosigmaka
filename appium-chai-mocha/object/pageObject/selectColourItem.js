/**@param {Promise<WebdriverIO.Browser>} driver @param {string} colour @return {Promise<void>} */

async function selectColourItem(driver, colour) {
  await driver
    .$(
      `//android.view.ViewGroup[@content-desc="${colour} circle"]/android.view.ViewGroup`
    )
    .click();
}

module.exports = selectColourItem;
