const { test, expect } = require('@playwright/test')

test('play with mouse', async ({ page }) => {
    await page.goto('https://paint.js.org/')

    await page.mouse.move(200, 200);
    await page.mouse.down();
    await page.mouse.move(400, 200);
    await page.mouse.move(400, 400);
    await page.mouse.move(200, 400);
    await page.mouse.move(200, 200);

    await page.mouse.up();
})

test('drag and drop', async ({ page })=> {
    await page.goto('https://the-internet.herokuapp.com/drag_and_drop')
    await page.dragAndDrop('#column-a', '#column-b')
    await page.screenshot({ path: 'screenshots/screenshot.png' })
    const row = (await page.$$('.row')).at(1)
    row.screenshot({path: 'screenshots/row.png'})
})