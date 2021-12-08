const MasterBage = require('./master-page')

class LoginPage extends MasterBage {
    constructor(page) {
        super(page)
        this.username = page.locator('#username')
        this.password = page.locator('#password')
        this.loginBtn = page.locator('#log-in')
    }

    async open() {
        await this.navigateTo('index.html')
    }

    async login(username, password) {
        await this.username.type(username)
        await this.password.type(password)
        await this.loginBtn.click()
    }
}

module.exports = LoginPage