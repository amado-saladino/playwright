const { test, expect, devices, chromium } = require('@playwright/test')

test.describe('devices test',()=>{
    test('test iPhone device', async ()=>{
        const iPhone = devices['iPhone 11']
        const browser = await chromium.launch()
        const context = await browser.newContext({
            ...devices,
            permissions: ['geolocation'],
            geolocation: { longitude: 21.4226727, latitude: 39.826123 },
            locale: 'ar-EG'
        })

        const page = await context.newPage()
        await page.goto('https://www.google.com/maps')
    })
})
