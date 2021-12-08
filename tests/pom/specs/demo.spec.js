const { test, expect } = require('@playwright/test')
const LoginPage = require('../models/login-page')
const HomePage = require('../models/home-page')

test.describe('ACME e2e test', ()=>{
    test('validate balance values', async ({ page })=>{
        const loginPage = new LoginPage(page)
        const homePage = new HomePage(page)

        await loginPage.open()
        await loginPage.login('ahmed', 'ahmed')

        const balance = homePage.getTotalBalance()
        console.log(`Total Balance: ${await balance.innerText()}`)

        const credit = homePage.getCreditAvailable()
        console.log(`Credit Available: ${await credit.innerText()}`)

        const due = homePage.getDueToday()
        console.log(`Due: ${await due.innerText()}`)

        const user = await homePage.getUser().innerText()
        console.log(`User: ${user.trim().toLowerCase()}`)
        await expect(user).toBe('Jack Gomez')

        await expect(homePage.getTotalBalance()).toContainText('350')
        await expect(homePage.getCreditAvailable()).toContainText('17,800')
        await expect(homePage.getDueToday()).toContainText('$180')
        await expect(homePage.getUser()).toContainText('Jack Gomez')
    })
})