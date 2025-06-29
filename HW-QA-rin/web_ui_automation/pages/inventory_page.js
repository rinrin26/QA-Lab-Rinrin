const { By } = require("selenium-webdriver");
class InventoryPage {
  static dropdown = By.className("product_sort_container");
  static itemName = By.className("inventory_item_name");

  //product detail
  static productLink = By.className("inventory_item_name");
  static urlDetailProduct = "inventory-item.html";
  static firstProduct = By.xpath(
    "//div[text()='Test.allTheThings() T-Shirt (Red)']"
  );
  static foundProduct = By.xpath(
    "//div[text()='Test.allTheThings() T-Shirt (Red)']"
  );
  static detailsName = By.className("inventory_details_name");
  static description = By.className("inventory_details_desc");
  static price = By.className("inventory_details_price");
}
module.exports = InventoryPage;