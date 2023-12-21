describe('Webdriver IO waits for Command Test',()=>{
    it("should demonstrate the use of waitof commands", async()=>{
        await browser.url('/')
        let element = await $('[class="card-information__text h5"]')
        await element.waitForDisplayed();
        console.log('Element is displayed');
    })
    it("should demonstrate the use of waitFor commands", async () => {
        await browser.url("/");
        await browser.pause(10000)
        let element=await $('[class="card-information__text h5"]');
        await element.waitForClickable();
        await browser.pause(10000)
    });
    it("should demonstrate the use of waitFor commands", async()=>{
        await browser.url("/");
        let element = await $('[class="card-information__text h5"]');
        await element.waitForDisplayed();
        console.log('Element is displayed');
  
        await element.waitForClickable();
        console.log('Element is clickable');
  
        await element.waitForExist();
        console.log('Element exists in DOM');
    })

})

