const notes = require('express').Router();
const random = require('../helpers/random');
const {
 readAndAppend,
 readFromFile,
} = require('../helpers/fsUtils');

// Post route //
notes.post('/', (req, res) => {
 const {title, text} = req.body;

 if (title && text) {
  const newNote = {
   title,
   text,
   note_id: random(),
  };

// Get route //
notes.get('/', (req, res) =>
 readFromFile('./db/db.json').then((data) =>
  res.json(JSON.parse(data))
 )
);

readAndAppend(newNote, './db/db.json');

  const response = {
   status: 'success',
   body: newNote,
  };

  res.json(response);
 } else {
  res.json('An error has occured');
 }
});

module.exports = notes;