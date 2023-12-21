describe("Basic UI Actions Test", () => {
    it.skip("should demonstrate the basic UI actions in WebDriverIO", async () => {
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


    it("should demonstrate the basic UI actions in WebDriverIO", async () => {
        await browser.url("/");
        let searchIcon = await $('[class="modal__toggle-open icon icon-search"]')
        await searchIcon.click()
        await browser.pause(5000)
        await browser.keys('shoes');
        await browser.keys('\uE007');
        await browser.pause(2000)

        let element = await $('#shopify-section-template--15328405749981__1635852374581d2a7e > div > div.title-wrapper-with-link.title-wrapper--self-padded-tablet-down > h2')
        await browser.pause(3000)
        await browser.execute((el) => {
            el.style.backgroundColor = 'red';
        }, element);

        let displayed = await element.isDisplayed();
        console.log('Is Displayed: ', displayed);

        let existing = await element.isExisting();
        console.log('Is Existing: ', existing);

        let enabled = await element.isEnabled();
        console.log('Is Enabled: ', enabled);

        await browser.setWindowSize(800, 600);

        //await browser.back();
        await browser.pause(2000); // Wait for 2 seconds to observe the change
        //await browser.forward();
        

        });
    });
