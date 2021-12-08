const { test, expect, chromium } = require('@playwright/test')

test('record a video', async ()=>{
    const browser = await chromium.launch({headless: true, slowMo: 1000})
    const context = await browser.newContext({
        recordVideo: {dir: "video/"}
    })

    const page = await context.newPage()
    await page.goto("https://the-internet.herokuapp.com/dynamic_loading/1")
    await page.click('text=Start')

   /* 
    * this block could also be used
    await page.waitForSelector('#loading');
    await page.waitForSelector('#loading', { state: 'hidden' }); 
    */

    await page.waitForSelector("#finish")
    const welcome = await (await page.$('#finish h4')).innerText()
    console.log(welcome)
    await context.close()
})