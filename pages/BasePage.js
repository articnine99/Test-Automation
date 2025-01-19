const { By, until } = require('selenium-webdriver');

class BasePage {
    constructor(driver) {
        this.driver = driver;
    }

    // Fungsi untuk menavigasi ke URL
    async goToUrl(baseUrl) {
        await this.driver.get(baseUrl);
    }

    // Click pada sebuah elemen
    async clickElement(locator) {
        const element = await this.driver.findElement(locator);
        await element.click();
    }

    // Masukkan input ke dalam form
    async inputForm(locator, input) {
        const element = await this.driver.findElement(locator);
        await element.sendKeys(input);
    }

    // Mendapatkan value berupa text
    async getText(locator) {
        const element = await this.driver.findElement(locator);
        return await element.getText();
    }
}

module.exports = BasePage;