const { test, expect } = require('@playwright/test')

/**
 * runs all tests in the same browser context
 */
test.describe('heroku app test',()=>{
    let page
    test.beforeAll(async ({ browser })=>{
        page = await browser.newPage()
    })

    test('open home page', async () =>{
        await page.goto('https://the-internet.herokuapp.com/')
        const link = page.locator('text=Challenging DOM')
        await expect(link).toBeVisible()
        await expect(link).toHaveAttribute('href',/challenging_dom$/)
        await link.click()
    })

    test('challenging dom',async ()=>{
        const header = await (await page.$('h3')).innerText()
        console.log(header)
    
        const btn_container = await page.$('div.large-2.columns')
        const side_links = await btn_container.$$('a')
        console.log(`# side links: ${side_links.length}`)
        console.log('side links texts:')
        side_links.forEach(async e=>console.log(await e.innerText()))
        
        console.log(await page.title())
        console.log(await page.url())
    })

    test.afterAll(async ({browser})=> {
        await page.close()
    })
})