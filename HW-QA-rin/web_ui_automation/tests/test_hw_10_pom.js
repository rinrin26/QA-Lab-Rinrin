const { Builder, By, until } = require("selenium-webdriver");
const assert = require("assert");
const LoginPage = require('../pages/login_page');
const inventory_page = require('../pages/inventory_page');

describe("POM Web Ui Auotomation Test Saucedemo", function () {
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
    let inputUserName = await driver.findElement(LoginPage.inputUsername);
    let inputPwd = await driver.findElement(LoginPage.inputPwd);

    await inputUserName.sendKeys("standard_user");
    await inputPwd.sendKeys("secret_sauce");
    
    const btnLogin = await driver.findElement(LoginPage.buttonLogin);
    await btnLogin.click();
    

    //redirect to inventory page
    await driver.wait(until.urlContains("inventory"), 10000);

    // get url after login contains key 'inventory'
    const url = await driver.getCurrentUrl();
    assert.ok(url.includes("inventory"));
  });

  it("sort product Z to A ", async function () {
    // Wait for the sort dropdown to be visible
    const klikDropdown = await driver.wait(
      until.elementLocated(inventory_page.dropdown),
      10000
    );

    // Select filter Z to A
    await klikDropdown.sendKeys("Name (Z to A)");

    // Verifikasi with first product name
    const firstProduct = await driver.findElement(
      By.className("inventory_item_name")
    );
    const productName = await firstProduct.getText();
    assert.strictEqual(productName, "Test.allTheThings() T-Shirt (Red)");
  });

  it("should open product detail page and validate content", async function () {
    // Wait for product link to be display
    await driver.wait(until.elementLocated(inventory_page.productLink), 5000);

    // Click on the product
    await driver.findElement(inventory_page.productLink).click();

    // find first Product and klik product to redirect the detail product
    await driver.wait(until.elementLocated(inventory_page.firstProduct), 10000);
    const product = await driver.findElement(inventory_page.foundProduct);
    await product.click();

    // Wait redirect to detail page
    await driver.wait(
      until.urlContains(inventory_page.urlDetailProduct),
      10000
    );

    // Validate product detail
    const name = await driver.findElement(inventory_page.detailsName).getText();
    const desc = await driver.findElement(inventory_page.description).getText();
    const price = await driver.findElement(inventory_page.price).getText();

    console.log("Nama Produk:", name);
    console.log("Deskripsi:", desc);
    console.log("Harga:", price);

    assert.strictEqual(name, "Test.allTheThings() T-Shirt (Red)");
    assert.ok(desc.length > 10);
    assert.ok(price.startsWith("$"));
  });
});
