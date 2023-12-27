import homePage from "../pageobjects/home.page";

it("should place order successfully", async () => {
    await browser.url("/");
    await browser.pause(3000)
    homePage.clickLoginButton();
});