describe('Android Elements Tests',()=>{
    it('Find element by accessibility id', async()=>{
        //find element by accessibilty id
        const appOption = await $('~App');

        await appOption.click();

        const actionBar = await $('~Action Bar');
        await expect(actionBar).toBeExisting();
    })

    it('Find element by class name',async()=>{
        const className = await $('android.widget.TextView');
        console.log(await className.getText());

        //Assertion
        await expect(className).toHaveText("API Demos");
    })

    xit('Find element by xpath',async()=>{
        //xpath - (//tagname[@attribute=value])
        await $('//android.widget.TextView[@content-desc="Alert Dialogs"]').click();

        //find by resourceID
        await $('//android.widget.Button[@resource-id="io.appium.android.apis:id/select_button"]').click();

        //find by text
        await $('//android.widget.TextView[@text="Command two"]').click();

        //find by class
        const textAssertion = await $('//android.widget.TextView');
        await expect(textAssertion).toHaveText("You selected: 1 , Command two");
    })

    it('Find element by UIAutomator',async()=>{
        await $('android=new UiSelector().textContains("Alert")').click();
    })

    it('Find multiple elements',async()=>{
        const expectedList = [
            'API Demos', "Access'ibility",
            'Accessibility', 'Animation',
            'App', 'Content',
            'Graphics', 'Media',
            'NFC', 'OS',
            'Preference', 'Text',
            'Views'
        ]
        const actualList = []
        //find multiple elements
        const textList = await $$('android.widget.TextView');
        //loop through them
        for (const element of textList){
            actualList.push(await element.getText());
        }

        //assert the list
        await expect(actualList).toEqual(expectedList);
    })

    it('exercise1',async()=>{
        await $('~Views').click();
        await $("//android.widget.TextView[@index='1']").click();
        await $('android= new UiSelector().textContains("Screen Top")').click();
        await $('//android.widget.AutoCompleteTextView[@index="1"]').setValue("ph");
        await $('//*[@text="Philippines"]').click();
        await $('//android.widget.AutoCompleteTextView[@index="1"]').toHaveText("Philippines");
    })
})