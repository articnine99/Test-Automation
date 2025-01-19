const BasePage = require("./BasePage");
const { By } = require('selenium-webdriver');

class LoginPage extends BasePage {
    constructor(driver) {
        super(driver)
        this.email = By.id("user_email");
        this.password = By.id("user_password");
        this.btnLogin = By.name("commit");
        this.errMessage = By.xpath("//strong[contains(.,'Unable to login.')]");
        this.clickProfile = By.id("member-menu-button");
        this.clickSignOut = By.id("last-nav-link");
        this.btnSignOut = By.className("crayons-btn");
        this.errLoginMsg = By.xpath("//h1[@class='registration__title']");
    }

    // fungsi untuk melakukan tindakan login
    async login(email, password) {
        await this.inputForm(this.email, email);
        await this.inputForm(this.password, password);
        await this.clickElement(this.btnLogin);
    }

    // Mendapatkan pesan error ketika gagal login
    async getErrorMessage() {
        return await this.getText(this.errMessage);
    }

    // Mendapatkan pesan error ketika gagal login 
    async getErrorLoginMessage() {
        return await this.getText(this.errLoginMsg);
    }
}

module.exports = LoginPage;
