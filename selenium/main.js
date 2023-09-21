const { Builder, Browser, By, until } = require("selenium-webdriver");

async function main() {
  const driver = await new Builder().forBrowser(Browser.CHROME).build();

  await driver.get("https://www.saucedemo.com/v1/");
  await driver.findElement(By.id("user-name")).sendKeys("standard_user");
  await driver.findElement(By.id("password")).sendKeys("secret_sauce");
  await driver.findElement(By.id("login-button")).click();

  await driver.findElement(By.className("btn_inventory")).click();

  await driver.findElement(By.css(".shopping_cart_link")).click();
  await driver.findElement(By.css(".checkout_button")).click();

  await driver.findElement(By.id("first-name")).sendKeys("Faisal");
  await driver.findElement(By.id("last-name")).sendKeys("Farhan");
  await driver.findElement(By.id("postal-code")).sendKeys("12345");
  await driver.findElement(By.css(".cart_button")).click();

  await new Promise((done) => setTimeout(done, 2000));

  await driver.findElement(By.css(".cart_button")).click();

  await driver.findElement(By.className("bm-burger-button")).click();

  const out = await driver.findElement(By.id("logout_sidebar_link"));
  await driver.wait(until.elementIsVisible(out), 3000);
  await out.click();

  await new Promise((done) => setTimeout(done, 3000));
  await driver.close();
}

main();
