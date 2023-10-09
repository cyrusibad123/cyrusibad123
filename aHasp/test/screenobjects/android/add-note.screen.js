class AddNoteScreen{
    get skipBtn(){
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/btn_start_skip"]')
    }
    get addNoteTxt(){
        return $('//*[@text="Add note"]');
    }
    get texctOption(){
        return $('//*[@text="Text"]');
    }
    get txtEditing(){
        return $('//*[@text="Editing"]');
    }
    get noteHeading(){
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_title"]');
    }
    get noteBody(){
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_note"]');
    }
    get editBtn(){
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_btn"]');
    }
    get viewNote(){
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/view_note"]');
    }
}

module.exports = new AddNoteScreen();