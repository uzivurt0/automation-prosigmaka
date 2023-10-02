/**@param {Promise<WebdriverIO.Browser>} driver @param {number} qty @return {Promise<void>} */

async function minQty(driver, qty) {
  let quantity = Number(
    await driver
      .$(
        '//android.view.ViewGroup[@content-desc="counter amount"]/android.widget.TextView'
      )
      .getText()
  );
  while (quantity !== 0) {
    await driver.$("~counter minus button").click();
    quantity--;
  }
}

module.exports = minQty;
