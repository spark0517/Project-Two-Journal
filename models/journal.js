const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
    comment: String,
    created: Date,
    userId: { type : Schema.Types.ObjectId, ref: "User" }

})

const journalSchema = new mongoose.Schema({
    entry: String,
    date: Date,
    title: String,
    user: { type: Schema.Types.ObjectId, ref: "User" },
    notes: [noteSchema]

})

module.exports = mongoose.model("Journal", journalSchema);