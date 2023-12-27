describe('WebDriverIO Hooks Test', () => {
    it('should navigate to the playground page and perform some actions', async () => {
        await browser.url('https://web-playground.ultralesson.com/');
        const searchInput = await $('summary[aria-label="Search"]').click();
        await browser.pause(3000)
        const searchInputdata  = await $('input[id="Search-In-Modal"]')
        await searchInputdata.setValue('WebDriverIO Hooks');
        await browser.pause(3000)
    });
});
