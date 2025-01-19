const BasePage = require('./BasePage');
const { By } = require('selenium-webdriver');

class HomePage extends BasePage {
    constructor(driver) {
        super(driver);
        this.textHomepage = By.xpath("//span[@class='hidden m:flex ml-auto']/a[contains(.,'Create Post')]");
    }

    // Fugsi untuk mendapatkan text ketika berhasil login
    async getTextHomepage() {
        return await this.getText(this.textHomepage);
    }
}

module.exports = HomePage;