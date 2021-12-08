const { test, expect } = require('@playwright/test')

test('mouse hover', async ({ page })=>{
    await page.goto('http://the-internet.herokuapp.com/hovers')
    const users = await page.$$('div.figure')
    const user1 = users.at(0)
    await user1.hover()

    const name = await (await user1.$('h5')).innerText()
    console.log(name)
    await page.waitForTimeout(5000)
})