const {Builder,By,until} = require('selenium-webdriver');
const assert = require('assert');

describe('Web Ui Auotomation Test Sauce demo', function () {
    this.timeout(30000); 
    let driver;

    before(async function () {
      driver = await new Builder().forBrowser("chrome").build();
    });

    after(async function () {
      await driver.quit();
    });

    it("login successfully", async function () {
      await driver.get("https://www.saucedemo.com/");

      // login -> Input username and password
      await driver
        .findElement(By.xpath('//*[@id="user-name"]'))
        .sendKeys("standard_user");

      await driver
        .findElement(By.css('[data-test="password"]'))
        .sendKeys("secret_sauce");

      await driver.findElement(By.xpath('//*[@id="login-button"]')).click();

      //redirect to inventory page
      await driver.wait(until.urlContains("inventory"), 10000);

      // get url after login contains key 'inventory'
      const url = await driver.getCurrentUrl();
      assert.ok(url.includes("inventory"));
    });

    it("sort product Z to A ", async function () {
      // Wait for the sort dropdown to be visible
      const klikDropdown = await driver.wait(
        until.elementLocated(By.className("product_sort_container")),
        10000
      )

      // Select filter Z to A
      await klikDropdown.sendKeys("Name (Z to A)");

      // Verifikasi with first product name
      const firstProduct = await driver.findElement(
        By.className("inventory_item_name")
      );
      const productName = await firstProduct.getText();
      assert.strictEqual(productName, 'Test.allTheThings() T-Shirt (Red)')
    });
})