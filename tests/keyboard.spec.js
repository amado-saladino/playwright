const { test, expect } = require('@playwright/test')

test('play with keys', async ({ page })=>{
    await page.goto('https://the-internet.herokuapp.com/key_presses')
    await page.click('#target')
    await page.keyboard.type("one does not simply exit vim")
    await page.keyboard.down('Shift')

    for (let i = 0; i < ' exit vim'.length; i++) {
        await page.keyboard.press('ArrowLeft')
    }

    await page.keyboard.up('Shift')
    await page.keyboard.press('Delete')
    await page.keyboard.type(' swim in the waves', {delay: 100})
    console.log(await (await page.$('#target')).inputValue())
})