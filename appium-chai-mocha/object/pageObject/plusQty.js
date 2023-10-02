/**@param {Promise<WebdriverIO.Browser>} driver @param {number} qty @return {Promise<void>} */

async function plusQty(driver, qty) {
  let quantity = Number(
    await driver
      .$(
        '//android.view.ViewGroup[@content-desc="counter amount"]/android.widget.TextView'
      )
      .getText()
  );
  const final = qty + quantity;
  while (quantity !== final) {
    await driver.$("~counter plus button").click();
    quantity++;
  }
}

module.exports = plusQty;
