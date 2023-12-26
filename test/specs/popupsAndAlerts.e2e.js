describe("Alert Interaction",()=>{
    it("should interact with javascript alerts", async()=>{
        await browser.pause(2000);
        await browser.url("https://the-internet.herokuapp.com/javascript_alerts");

        const alertButton = await $('[onclick="jsAlert()"]');
        await alertButton.click()
        await browser.pause(2000);
        await browser.acceptAlert();

        const confirmButton = await $('[onclick="jsConfirm()"]');
        await confirmButton.click()
        await browser.pause(2000);
        await browser.dismissAlert();

        await alertButton.click();
        const alertText = await browser.getAlertText();
        console.log(alertText);
        await browser.pause(2000);
        await browser.acceptAlert();

        const promptButton = await $('[onclick="jsPrompt()"]');
        await promptButton.click();
        await browser.pause(2000);
        await browser.sendAlertText("Text Message");
        await browser.pause(2000);
        await browser.acceptAlert();

        //There are other alerts present in wdio like
        //browser.isAlertOpen()
        //browser.getAlertText()
        //browser.acceptAlert()
        //browser.dismissAlert()
    })
})