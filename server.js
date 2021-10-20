const express = require('express');
const fs = require('fs');
const path = require ('path');
const notes = require('./db/db.json');
const index = require ('./public/index.html');
const notesHtml = require('./public/notes.html')

const app = express();
var PORT = process.env.PORT || 8000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("./public"));
app.use("./api/notes", notes);
app.use("/", index);
app.use("/notes", notesHtml);

app.get("/api/notes"), (req, res) => {
  res.sendFile(path.join(__dirname, "./public/notes.html"));
};

app.post("/api/notes", (req, res) => {
const notes = req.body;
});
// HTML\\
app.get("/notes"), (req, res) => {
  res.sendFile(path.join(__dirname, "./public/notes.html"));
};

app.get("/"), function (req, res) {
  res.sendFile(path.join(__dirname, "./public/index.html"));
};


app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
  });
