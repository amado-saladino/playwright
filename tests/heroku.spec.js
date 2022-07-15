const { test, expect } = require('@playwright/test')
const {faker} = require('@faker-js/faker')

/**
 * runs all tests in the same browser context
 */
test.describe('heroku app test',()=>{
    let page
    const rnd = `Random is: ${faker.random.numeric(5)}`
    test.beforeAll(async ({ browser })=>{
        page = await browser.newPage()
        console.log(rnd)
    })

    test('open home page', async () =>{
        console.log(rnd)
        await page.goto('https://the-internet.herokuapp.com/')
        const link = page.locator('text=Challenging DOM')
        await expect(link).toBeVisible()
        await expect(link).toHaveAttribute('href',/challenging_dom$/)
        await link.click()
    })

    test('challenging dom',async ()=>{
        console.log(rnd)
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

    test.afterAll(async ()=> {
        await page.close()
    })
})