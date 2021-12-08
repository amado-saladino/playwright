const config = {
    reporter: [ ['html', { open: 'never' }]
    ,['list'] ],
    timeout: 60000,
    testDir: 'tests',
    use: {
        headless: true,
        locale : "en-uk",
        screenshot: 'only-on-failure',
        video: 'retain-on-failure'
    }
}

module.exports = config