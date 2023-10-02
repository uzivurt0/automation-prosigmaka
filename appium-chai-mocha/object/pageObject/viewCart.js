/**@param {Promise<WebdriverIO.Browser>} driver @param {string} text @return {Promise<void>} */

async function viewCart(driver, text) {
  await driver.$("~cart badge").click();
  await driver.waitUntil(async () => {
    return (
      (await driver
        .$(
          '//android.view.ViewGroup[@content-desc="container header"]/android.widget.TextView'
        )
        .getText()) === text
    );
  });
}

module.exports = viewCart;
