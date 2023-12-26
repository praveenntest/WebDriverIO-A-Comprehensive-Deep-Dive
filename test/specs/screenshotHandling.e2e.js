 describe('Screenshot Handling Test',()=>{
    it('should take a screenshot',async()=>{
        await browser.url('https://webdriver.io/');
        await browser.saveScreenshot('/Users/admin/Desktop/ttdWDIO/screenshots//webdriverio_home.png');
    })
 })