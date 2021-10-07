const Note = require("../models/journal")

module.exports = {
    create,
    deleteNote

}

function create(req, res) {
    Note.findById(req.params.id, function(err, journal) {
        if(err){
            console.log(err, "<-- this is an error")
            return res.send(err)
        }
        console.log("Journal", journal)
      //req.body.userId = req.user._id;
      journal.notes.push(req.body);
      journal.save(function(err) {
        console.log("journal saved", journal)
        res.redirect(`/journals/${journal._id}`);
      });
    });
  } 
  
function deleteNote(req, res) {
  Note.findById(req.params.id, function(err, journal) {
    journal.notes.id(req.params.noteid).remove()
    journal.save(function(err) {
      res.redirect(`back`)
    })
  })
}