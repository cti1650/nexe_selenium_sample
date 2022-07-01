require('chromedriver');
const webdriver = require('selenium-webdriver');

const driver = new webdriver.Builder()
    .forBrowser('chrome')
    .build();

async function main() {
    await driver.get('https://www.google.com/');
    await driver.findElement(webdriver.By.css('[name="q"]')).sendKeys('上尾　天気');

    await driver.executeScript("document.querySelector('" + '[name="btnK"]' + "').click()");

    // リンクの出現を待つ
    const locatorYahoo = webdriver.By.xpath('//h3[contains(text(), "Yahoo!天気・災害")]')
    await driver.wait(webdriver.until.elementLocated(locatorYahoo), 10000);
    await driver.findElement(locatorYahoo).click();
}
main();