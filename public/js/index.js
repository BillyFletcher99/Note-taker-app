let $newNoteBtn = $(".new-note");
let $noteList = $(".list-container .list-group");
let $noteTitle = $(".note-title");
let $noteText = $(".note-textarea");
let $saveNoteBtn = $(".save-note");

let activeNote = {};

const getNotes = () =>
  fetch("/routes/notes", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",},});

const saveNote = (note) =>
  fetch("/routes/notes", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(note),});

const deleteNote = (id) =>
  fetch(`/routes/notes/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",},});
