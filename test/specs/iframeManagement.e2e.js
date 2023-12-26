describe('Tutorialspoint application', function(){
    it('Frames', function(){   
        browser.url('https://the-internet.herokuapp.com/nested_frames') 
        browser.switchToFrame($("frame[name='frame-bottom']"))
        const p = $('<body>')
        console.log(p.getText() + ' - Text inside frame')
        browser.switchToFrame(null)          
    })
})

