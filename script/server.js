// server.js
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/namesDB', { useNewUrlParser: true, useUnifiedTopology: true });

// Create a schema for names
const nameSchema = new mongoose.Schema({
    name: String
});

const Name = mongoose.model('Name', nameSchema);

app.use(bodyParser.urlencoded({ extended: true }));

// Route to display form
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// Route to handle form submission
app.post('/', (req, res) => {
    const newName = new Name({
        name: req.body.name
    });
    newName.save();
    res.redirect('/');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

