const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
    note: String,
    created: Date,
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" }

})

const journalSchema = new mongoose.Schema({
    entry: String,
    date: Date,
    title: String,
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    notes: [noteSchema]

})

module.exports = mongoose.model("Journal", journalSchema);