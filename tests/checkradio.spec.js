const { test, expect } = require('@playwright/test')

test.describe('checkbox and radio buttons',()=>{
    test('checkbox test', async({ page })=>{
        await page.goto('https://the-internet.herokuapp.com/checkboxes')
        const checkboxButtons = await page.$$('input[type=checkbox]')

        await checkboxButtons[0].check()
        await checkboxButtons[1].uncheck()
    })

    test('select radio button',async ({ page })=>{
        await page.goto('https://www.w3schools.com/howto/howto_css_custom_checkbox.asp')
        const radio_btns = await page.$$('input[type=radio][name=radio]')
        await radio_btns[2].check()
    })
})