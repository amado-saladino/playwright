const { test, expect } = require('@playwright/test')

test.describe('file uploading',()=>{
    test('upload file', async ({ page })=>{
        await page.goto('http://the-internet.herokuapp.com/upload', {timeout: 90000})
        await page.setInputFiles('#file-upload', 'uploads/img.jpg')
        await (await page.$('#file-submit')).click()

        const file = page.locator('#uploaded-files')
        await expect (file).toHaveText('img.jpg')
    })
})