const { test, expect, webkit } = require('@playwright/test')

test.describe('heroku app test',()=>{
    let browser
    let page
    let btns
    let result

    test.beforeAll(async()=>{
        browser = await webkit.launch({headless: true, slowMo: 1000})
        page = await browser.newPage()
        await page.goto('https://the-internet.herokuapp.com/javascript_alerts')
        page.on('dialog', async dialog=>{
            console.log(dialog.message())
            await dialog.accept()
        })
        btns = await page.$$('button')
        result = page.locator("#result")
    })

    test('accept an alert', async ()=>{        
        await btns[0].click()        
        console.log(await result.textContent())
        await expect(result).toContainText("successfully clicked an alert")
    })

    test('confirm alert', async ()=>{
        await btns[1].click()
        console.log(await result.textContent())
        await expect(result).toContainText("Ok")
    })

    test.skip('prompt alert', async()=>{
        //can't handle the dialog twice, there is one dialog handled above
        page.on('dialog', async dialog=>{
            console.log(dialog.message())
            dialog.accept('Hello Ahmed!')
        })
        await btns[2].click()
        await expect(result).toContainText("Hello Ahmed!")
    })
})