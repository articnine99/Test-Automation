const { Builder } = require('selenium-webdriver');
const fs = require('fs');
require("dotenv").config();

class WebDriver {
    constructor(browser) {
        this.browser = browser;
    }

    getDriver() {
        let options;

        switch(this.browser) {
            case 'firefox':
                const firefox = require('selenium-webdriver/firefox');
                options = new firefox.Options();
                options.addArguments('--headless');
            case 'MicrosoftEdge':
                const edge = require('selenium-webdriver/edge');
                options = new edge.Options();
                options.addArguments('--headless=new');
            case 'chrome':
            default:
                const chrome = require('selenium-webdriver/chrome');
                options = new chrome.Options();
                options.addArguments('--headless');
        }

        return this.browser == 'chrome' ? new Builder().forBrowser(this.browser).setChromeOptions(options).build() :
            this.browser == 'firefox' ? new Builder().forBrowser(this.browser).setFirefoxOptions(options).build() :
            new Builder().forBrowser(this.browser).setEdgeOptions(options).build()
    }

    async closeDriver(driver) {
        await driver.quit();
    }

    async takeScreenshot(driver, filename) {
        const screenshot = await driver.takeScreenshot();
        const filepath = `./screenshots/${filename}`;
        fs.writeFileSync(filepath, screenshot, 'base64');
    }
}

module.exports = WebDriver;