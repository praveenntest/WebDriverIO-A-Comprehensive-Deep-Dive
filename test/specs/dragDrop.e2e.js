describe("Drag and Drop Interaction",()=>{
    it("should drag and drop the elements", async ()=>{
        await browser.url('https://demoqa.com/droppable/')
        await browser.pause(3000)
        const draggable = await $('[id="draggable"]');
        await browser.pause(3000)
        const droppable = await $('[id="droppable"]');
        await browser.pause(3000)
        await draggable.dragAndDrop(droppable);
        await browser.pause(5000)
    })
})