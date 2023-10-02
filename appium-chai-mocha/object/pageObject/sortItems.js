/**@param {Promise<WebdriverIO.Browser>} driver @param {string} sortType @return {Promise<void>} */

async function sortItems(driver, sortType) {
  await driver
    .$(
      '//android.view.ViewGroup[@content-desc="sort button"]/android.widget.ImageView'
    )
    .click();

  await driver.waitUntil(
    async () => {
      return (
        (await driver
          .$(
            "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.TextView"
          )
          .getText()) === "Sort by:"
      );
    },
    { timeout: 3000, timeoutMsg: "Popup took too long to appeared" }
  );

  await driver.$(`~${sortType}`).click();

  // await driver.waitUntil(
  //   async () => {
  //     return (
  //       (await driver
  //         .$(
  //           "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.TextView"
  //         )
  //         .getText()) === "Sort by:"
  //     );
  //   },
  //   { timeout: 3000, timeoutMsg: "Popup took too long to appeared" }
  // );
}

module.exports = sortItems;
