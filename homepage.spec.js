describe('Home Page Related Tests',()=>{
    it("Launching the site",()=>{
        browser.get("http://d2gpromise.azurewebsites.net/");
        expect(element(by.className('input-md')).isPresent()).toBe(true);
    })
})