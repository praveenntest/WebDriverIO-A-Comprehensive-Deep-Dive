describe("Basic UI Actions Test", () => {
    it("should demonstrate the basic UI actions in WebDriverIO", async () => {
        await browser.url("/");
        let searchIcon = await $('[class="modal__toggle-open icon icon-search"]')
        await searchIcon.click()
        await browser.pause(5000)
        let searchFeild = await $('[id="Search-In-Modal"]')
        await searchFeild.setValue('shoes');
        await browser.pause(2000);
        await searchFeild.addValue(' for men');
        await browser.pause(2000);
        let dropdown = await $('[class="predictive-search__item predictive-search__item--link link link--text"]');
        await browser.pause(3000)
        await dropdown.click()
        let url = await browser.getUrl();
        console.log('URL: ', url)
    });
});