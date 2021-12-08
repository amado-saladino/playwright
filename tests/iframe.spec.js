const { test, expect } = require('@playwright/test')

test('locate iframe elements',async ({ page })=>{
    await page.goto('https://the-internet.herokuapp.com/nested_frames')
    const frame = page.frame('frame-middle')
    const div = await frame.$('#content')
    await div.dblclick()
    const txt = (await div.innerText()).toLowerCase()
    console.log(`frame contents: ${txt}`)
    expect(txt).toEqual('middle')
})