const mongoose = require('mongoose');

// Create your User Model

const journalSchema = new mongoose.Schema({
    entry: String,
    date: Date,


})

module.exports = mongoose.model("Journal", journalSchema);