describe('Window Management Test', () => {
    it('should switch between parent and child windows', async () => {
        await browser.url('/');
        await browser.newWindow('https://webdriver.io');
        const windowHandles = await browser.getWindowHandles();
        await browser.switchToWindow(windowHandles[1]);
        await browser.closeWindow();
        await browser.switchToWindow(windowHandles[0]);
    });
});