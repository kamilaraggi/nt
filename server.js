const express = require('express');
const fs = require('fs');
const path = require ('path');
const notes = require('./db/db.json');


const app = express();
var PORT = process.env.PORT || 8000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));



app.get("/api/notes",(req, res) => { 
  fs.readFile("./db/db.json", "Utf-8", (err, data) => {
    if (err) console.log('Error');
    res.json(JSON.parse(data)); 
  }); 
 });  

 app.post("/api/notes",(req, res) => { 
  fs.readFile("./db/db.json", "Utf-8", (err, data) => {
    if (err) console.log('Error');
    var db = JSON.parse(data); 
    var obj = req.body;
    obj.id = db.lenght + 1 ;
    db.push(obj);
    console.log(db);
    fs.writeFileSync("./db/db.json", JSON.stringify(db))
    res.json(db);
  });
  });  

  //app.delete("/api/notes",(req, res) => { 
  //  fs.readFile("./db/db.json", "Utf-8", (err, data) => {
  //    if (err) console.log('Error');
  //    var db = JSON.parse(data); 
  //    var deleteNote = db.filter((delDb) => delDb.id !==req.params.id);
  //   fs.writeFileSync("./db/db.json", JSON.stringify(deleteNote))
  //  res.json(deleteNote);
  //  });
  // });

  

// HTML routes\\


 app.get("/notes", (req, res) => {
  console.log(path.join(__dirname, "./public/notes.html"));
  res.sendFile(path.join(__dirname, "./public/notes.html"));
 });

 app.get("/", (req, res) => {
  console.log(path.join(__dirname, "./public/index.html"));
  res.sendFile(path.join(__dirname, "./public/index.html"));
 });


app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
  })
