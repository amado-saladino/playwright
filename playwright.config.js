const config = {
    reporter: [ ['html', { open: 'never' }]
    ,['list'] ],
    timeout: 60000,
    testDir: 'tests',
    workers: 2,
    fullyParallel: true,
    use: {
        headless: true,
        locale : "en-uk",
        screenshot: 'only-on-failure',
        video: 'retain-on-failure',
        trace: 'retain-on-failure'
    }
}

module.exports = config
