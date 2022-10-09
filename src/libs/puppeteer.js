const puppeteer = require('puppeteer');

async function GetPage() {
    console.log("get page clicked");

    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto("https://youtube.com");
    const title = await page.title();
    console.log("title = " + title);
}

module.exports = { GetPage };