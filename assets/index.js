const $newNoteBtn = $(".new-note");
const $noteList = $(".list-container .list-group");
const $noteTitle = $(".note-title");
const $noteText = $(".note-textarea");
const $saveNoteBtn = $(".save-note");

let activeNote = {};

// to grab all the notes from DB //
let getNotes = function() {
    return $.ajax({
      url: "/public/notes",
      method: "GET"
    });
  };
// Hypothically, should save the note // 
  let saveNote = function(note) {
    return $.ajax({
      url: "/public/notes",
      data: note,
      method: "POST"
    });
  };