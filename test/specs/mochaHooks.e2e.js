describe('Mocha Hooks Test',()=>{
    before(()=>{
        console.log('Executing before all tests')
    });
    beforeEach(()=>{
        console.log('Executing before each tests')
    });
    after(()=>{
        console.log('executing after all tests')
    })
    afterEach(()=>{
        console.log('executing after each test')
    })

    it('should naviagte to the webdriverIO website', async() =>{
        await browser.url('/');
        const title = browser.getTitle()
        console.log(`The Title is, ${title}`)
    })
})