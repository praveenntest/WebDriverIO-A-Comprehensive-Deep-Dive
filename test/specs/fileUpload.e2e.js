describe("File Upload Test",()=>{
    it("should upload a file successfully", async()=>{
        await browser.url('http://the-internet.herokuapp.com/upload');
        const filepath = '/Users/admin/Desktop/ttdWDIO/file.txt';
        const filepathButton = await $('input[id="file-upload"]');
        await filepathButton.setValue(filepath);

        const uploadButton = await $('#file-submit');
        await uploadButton.click();

        const uploadedFileName = await $('#uploaded-files'); 
        await expect(uploadedFileName).toHaveText('file.txt');
    })
})