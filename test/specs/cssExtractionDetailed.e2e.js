import { expect } from "chai";
describe('CSS Extraction Test - Detailed',()=>{
    it("should extract CSS properties and verify their values",async()=>{
        await browser.url('https://web-playground.ultralesson.com/');
        const header = await $('h1');
        const headerColor = await header.getCSSProperty('color');
        expect(headerColor.parsed.hex).to.equal('#121212')

        const searchInput = await $('#shopify-section-header > sticky-header > header > div > details-modal > details > summary > span > svg.modal__toggle-open.icon.icon-search')
        const searchInputBgColor = await searchInput.getCSSProperty('background-color');
        expect(searchInputBgColor.parsed.hex).to.equal('#000000');

        const searchButton = await $('#shopify-section-template--15328405749981__featured_products > div > div.title-wrapper-with-link > h2');
        const searchButtonFontSize = await searchButton.getCSSProperty('font-size');
        expect(searchButtonFontSize.value).to.equal('24px');
    })
})