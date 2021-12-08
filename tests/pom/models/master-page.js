class MasterPage {
    constructor(page) {
        this.page = page
    }

    async navigateTo(path) {
        await this.page.goto(`https://demo.applitools.com/${path}`)
    }
}

module.exports = MasterPage