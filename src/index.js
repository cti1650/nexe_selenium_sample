const webdriver = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

let os = "linux"

for(var i = 0;i < process.argv.length; i++){
    if(~process.argv[i].indexOf("mac-")){
        os = "mac_m1"
        break
    }
    if(~process.argv[i].indexOf("windows-")){
        os = "windows"
        break
    }
}

const driver = new webdriver.Builder()
    .withCapabilities(webdriver.Capabilities.chrome())
    .setChromeService(new chrome.ServiceBuilder(__dirname + `/chrome/${os}/chromedriver${os==="windows"?".exe":""}`)) // windows用に出力する場合はchromedriver.exe
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