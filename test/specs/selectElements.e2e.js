describe("Select Elements Test", () => {
    it("should demonstrate interactions with select elements in WebDriverIO", async () => {
        await browser.url("https://www.globalsqa.com/demo-site/select-dropdown-menu/");
        let selectelement = await $('#post-2646 > div.twelve.columns > div > div > div > p > select')
        await selectelement.selectByIndex(5);
        await browser.pause(3000)
        await selectelement.selectByVisibleText('Andorra');
    });
});