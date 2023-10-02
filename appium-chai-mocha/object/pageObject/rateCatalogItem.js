/**
 * @param {Promise<WebdriverIO.Browser>} driver
 * @param {number} itemNum
 * @returns {Promise<void>} */

async function rateCatalogItem(driver, itemNum) {
  await driver
    .$(`(//android.view.ViewGroup[@content-desc="review star ${itemNum}"])`)
    .click();
  await driver.waitUntil(
    async () => {
      return (
        (await driver
          .$(
            "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.TextView"
          )
          .getText()) === "Thank you for submitting your review!"
      );
    },
    { timeout: 3000, timeoutMsg: "Popup supposed to be appeared" }
  );

  await driver
    .$('//android.view.ViewGroup[@content-desc="Close Modal button"]')
    .click();
}

module.exports = rateCatalogItem;
