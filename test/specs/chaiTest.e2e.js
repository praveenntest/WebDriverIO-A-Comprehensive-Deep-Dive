import {expect} from 'chai';
describe('Chai Test',()=>{
    it('should assert the title of the webpage', async() =>{
        await browser.url('/');
        const title = await browser.getTitle();
        console.log(`Title before pause: ${title}`);
        expect(title).to.equal('ul-web-playground');
    })
})