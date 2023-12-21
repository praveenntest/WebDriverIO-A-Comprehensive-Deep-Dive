describe('Visit Base URL Test',()=>{
    it('should navigate to the base URL and navigate the page title ',async() =>{
        await browser.url('/');
        const title = await browser.getTitle();
        console.log(`Title before pause: ${title}`);
        console.log("--Before Pause ---");
        await browser.pause(5000);
        console.log("--After Pause --");
        await expect(browser).toHaveTitle('ul-web-playground');
    })
})



