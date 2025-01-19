const WebDriver = require("../../driver/WebDriver.js");
const LoginPage = require("../../pages/LoginPage.js");
const HomePage = require("../../pages/HomePage.js");
const assert = require("assert");
const fs = require('fs');
require("dotenv").config();

const screenshotDir = './screenshots/';
if(!fs.existsSync(screenshotDir)) {
    fs.mkdirSync(screenshotDir, {recursive: true});
}

describe("Test Case [login] #Negative", function () {
    this.timeout(40000);
    let driver;
    let loginPage;
    let homePage;

    async function takeScreenshotOnFailure(testName) {
        try {
            await new WebDriver().takeScreenshot(driver, `${testName}.png`);
        } catch (err) {
            console.log('Error taking screenshot: ', err);
        }
    } 

    before(async function () {
        // Menyiapkan WebDriver
        driver = new WebDriver(process.env.BROWSER).getDriver();
        loginPage = new LoginPage(driver);
        homePage = new HomePage(driver);
    })

    beforeEach(async function () {
        await loginPage.goToUrl(process.env.BASE_URL);
    })

    it("Login with invalid email", async function () {
        const testName = this.test.title.replace(/\s+/g, '_') + Date.now();
        try {
            await loginPage.login(process.env.WRONG_EMAIL, process.env.INCORRECT_PASSWORD);
            let errorMessage = await loginPage.getErrorLoginMessage();
            assert.strictEqual("Join the DEV Community", errorMessage, "The display error does not match");
        } catch (err) {
            await takeScreenshotOnFailure(testName);
            throw err;
        }
    })

    it("Login with incorrect email", async function () {
        const testName = this.test.title.replace(/\s+/g, '_') + Date.now();
        try {
            await loginPage.login(process.env.INCORRECT_EMAIL, process.env.PASSWORD);
            let errorMessage = await loginPage.getErrorMessage();
            assert.strictEqual("Unable to login.", errorMessage, "The display error does not match");
        } catch (err) {
            await takeScreenshotOnFailure(testName);
            throw err;
        }
    })

    it("Login with incorrect password", async function () {
        const testName = this.test.title.replace(/\s+/g, '_') + Date.now();
        try {
            await loginPage.login(process.env.EMAIL, process.env.INCORRECT_PASSWORD);
            let errorMessage = await loginPage.getErrorMessage();
            assert.strictEqual("Unable to login.", errorMessage, "The display error does not match");
        } catch (err) {
            await takeScreenshotOnFailure(testName);
            throw err;
        }
    })

    it("Check empty email or password fields", async function () {
        const testName = this.test.title.replace(/\s+/g, '_') + Date.now();
        try {
            await loginPage.login("", process.env.INCORRECT_PASSWORD);
            let errorMessage = await loginPage.getErrorMessage();
            assert.strictEqual("Unable to login.", errorMessage, "The display error does not match");
        } catch (err) {
            await takeScreenshotOnFailure(testName);
            throw err;
        }
    })

    it("SQL injection attack prevention", async function () {
        const testName = this.test.title.replace(/\s+/g, '_') + Date.now();
        try {
            await loginPage.login(process.env.SQL_QUERY, process.env.INCORRECT_PASSWORD);
            let errorMessage = await loginPage.getErrorLoginMessage();
            assert.strictEqual("Join the DEV Community", errorMessage, "The display error does not match");
        } catch (err) {
            await takeScreenshotOnFailure(testName);
            throw err;
        }
    })

    after(async function () { 
        // Menutup WebDriver
        await new WebDriver().closeDriver(driver);
    });
})