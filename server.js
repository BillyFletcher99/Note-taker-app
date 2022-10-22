const express = require('express');
const app = express(); 
const path = require('path'); 
const PORT = 3005;


// get routes //
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, "/public/index.html"))
);

app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname,'./public/notes.html'));
}); 


app.listen(PORT, () => {
    console.log(`You are now listening on port ${PORT}!`);
});