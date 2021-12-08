const { test, expect } = require('@playwright/test')

test('search in Google', async ({ page })=>{
    page.once('load', ()=> console.log('page loaded!!'))
    await page.goto('https://www.google.de/')
    const txt_srch = await page.$('input[name=q]')
    await txt_srch.type("create node port service in kubernetes", {delay: 20})
    await txt_srch.press('Enter')
})

test('select an option', async ({ page })=>{
    page.on('load', async (p)=>{
        const t = await p.title()
        console.log(t)
    })
    await page.goto('https://the-internet.herokuapp.com/dropdown')
    const menu = await page.$('#dropdown')
    await menu.selectOption({'label': 'Option 1'})

    let val = await menu.inputValue()
    console.log('the selected value: ',val)

    await menu.selectOption({'index': 1})
    await menu.selectOption({'value': '2'})
    
    val = await menu.inputValue()
    console.log('the selected value: ',val)

    console.log('---')
    const options = await menu.$$('option')
    options.forEach(async e=>{
        const opt = await e.innerText()
        console.log(opt)
    })

    await menu.selectOption({index: 1})

    // options.filter(async e=>{
    //     const selected = await e.getAttribute('selected')
    //     const opt = await e.innerText()
    //     console.log(`${opt} is selected: ${selected}`)
    //     return selected === 'selected'
    // })

    console.log('===')
    // const selected = await getSelected(options)
    const selected = await getSelected(options)
    console.log('selected text: ',selected)
})

async function getSelected(options) {
    for (let index = 0; index < options.length; index++) {
        const txt = await options.at(index).innerText()
        const is_selected = await options.at(index).getAttribute('selected')
        if (is_selected === 'selected') return txt
    }
}
