const MasterBage = require('./master-page')

class HomePage extends MasterBage {
    constructor(page) {
        super(page)

        this.logged_user = page.locator('div.logged-user-name')
        this.balances = page.locator('div.balance-value')
    }

    /*
    * Total Balance value
    */
    getTotalBalance() {
        return this.balances.nth(0).locator('span').nth(0)
    }

    /**
     * Credit Available value
     * @returns inner text of credit available field
     */
    getCreditAvailable() {
        return this.balances.nth(1)
    }

    /**
     * Due Today value
     * @returns inner text of due today field
     */
    getDueToday() {
        return this.balances.nth(2)
    }

    getUser() {
        return this.logged_user
    }
}

module.exports = HomePage