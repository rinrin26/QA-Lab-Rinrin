const { By } = require("selenium-webdriver");
class LoginPage {
  static inputUsername = By.xpath('//*[@id="user-name"]');
  static buttonLogin = By.xpath('//*[@id="login-button"]');
  static inputPwd = By.css('[data-test="password"]');
}
module.exports = LoginPage;