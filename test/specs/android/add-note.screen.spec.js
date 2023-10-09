const AddNoteScreen = require("../../screenobjects/android/add-note.screen");

describe('Add Notes', ()=>{
    before(async()=>{
        await AddNoteScreen.skipBtn.click();
        await expect(AddNoteScreen.addNoteTxt).toBeDisplayed();
    })
    // it('Skip tutorial',async()=>{
        
    // })

    it.skip('add a note, save changes & verify note', async()=>{
        await AddNoteScreen.addNoteTxt.click();
        await AddNoteScreen.texctOption.click();
        await expect(AddNoteScreen.txtEditing).toBeDisplayed();

        //add note 
        await AddNoteScreen.noteHeading.addValue("Fav Anime List");

        //add note body
        await AddNoteScreen.noteBody.addValue("Naruto\nOnePiece\nAOT");

        //save the changes
        await driver.back();
        await driver.back();

        //assertion
        await expect(AddNoteScreen.editBtn).toBeDisplayed();
        await expect(AddNoteScreen.viewNote).toHaveText("Naruto\nOnePiece\nAOT");

    })
    
    it('delete a note', async()=>{
        await AddNoteScreen.addNoteTxt.click();
        await AddNoteScreen.texctOption.click();
        await expect(AddNoteScreen.txtEditing).toBeDisplayed();

        //add note 
        await AddNoteScreen.noteHeading.addValue("Fav Anime List");

        //add note body
        await AddNoteScreen.noteBody.addValue("Naruto\nOnePiece\nAOT");

        //save the changes
        await driver.back();
        await driver.back();

        //assertion
        await expect(AddNoteScreen.editBtn).toBeDisplayed();
        await expect(AddNoteScreen.viewNote).toHaveText("Naruto\nOnePiece\nAOT");
        
        //get text
        const noteText = await driver.getText(AddNoteScreen.viewNote);

        //click the menu
        await $('~com.socialnmobile.dictapps.notepad.color.note:id/menu_btn').click();
        await $('//*[@Text="Delete"]').click();
        await $('~android:id/button1').click();
        await expect(AddNoteScreen.viewNote).not.toHaveText("Naruto\nOnePiece\nAOT");
        await $('//*[@id="com.socialnmobile.dictapps.notepad.color.note:id/icon_nav"]').click();
        await $('//*[@text="Trach Can"]').click();
        await expect($('~com.socialnmobile.dictapps.notepad.color.note:id/title')).toHaveText(noteText);    })
})