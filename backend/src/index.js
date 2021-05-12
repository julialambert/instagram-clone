const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb+srv://<username>:<password>n@cluster0.m8jun.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
  useNewUrlParser: true
});

app.use(require('./routes'));

app.listen(3333);