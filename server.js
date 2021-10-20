const express = require('express');
const fs = require('fs');
const app = express();
const path = require ('path');
const notes = require('./db/db.json');
var PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(express.json());

app.get('/api/db', (req, res) => {
  res.json(notes);
});

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
  });
