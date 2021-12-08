const { test, expect } = require('@playwright/test')

test.describe('multiple window',()=>{
    test('open new tab', async ({ page })=>{
        await page.goto('http://the-internet.herokuapp.com/windows')
        const context = page.context()

        const [other_tab, _] = await Promise.all([
            context.waitForEvent('page'),
            await page.click('text=Click Here')
        ])

        const text_on_page = await other_tab.$('h3')
        const title = await other_tab.title()
        console.log(`title of the new tab: ${title}`)        
        console.log(await text_on_page.innerText())

        expect(title).toBe('New Window')

        const main_header = await (await page.$('h3')).innerText()
        console.log(main_header)
    })
})