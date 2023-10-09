const AddNoteScreen = require("../../screenobjects/android/add-note.screen");

describe('Add Notes', ()=>{
    it('Skip tutorial',async()=>{
        await AddNoteScreen.skipBtn.click();
        await expect(AddNoteScreen.addNoteTxt).toBeDisplayed();
    })

    it('add a note, save changes & verify note', async()=>{
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
    
    it('delete a note and check the note in trash can',async()=>{
        await driver.back();

        const note = await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/title"]').getText();

        //click on the note
        await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/title"]').click();

        //click on more icon
        await $('~More').click();

        //click on delete item
        await $('//*[@text="Delete"]').click();

        //accept alert
        await driver.acceptAlert();

        //click on nav icon
        await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/icon_nav"]').click();

        //click on trash can item
        await $('//*[@text="Trash Can"]').click();

        //assertion
        const trashCanItem = await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/title"]');

        await expect(trashCanItem).toHaveText(note);
    })
})