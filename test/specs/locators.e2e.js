describe("Locator Test",()=>{
    it("should naviagte to the base url and locate elements", async()=>{
        await browser.url("/")
        //Getting the single element
        let singleElement = await $('[class="card-information__text h5"]'); //here i have used class selector
        let singleElementText = await singleElement.getText();
        console.log(`Text of Single element: ${singleElementText}`);

        //To get the multiple elements
        let multipleElement = await $$('[class="card-information__text h5"]');
        console.log(`Text of Multiple element: ${multipleElement.length}`)

        //Accessing individual elements from multiple elements
        let firstelement  = multipleElement[0];
        let firstelementtext = firstelement.getText();
        console.log(`The text element of first from multiple element is ${firstelementtext}`)
    })
})