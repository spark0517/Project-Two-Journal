const Note = require("../models/journal")

module.exports = {
    create

}

function create(req, res) {
    Note.findById(req.params.id, function(err, journal) {
        if(err){
            console.log(err, "<-- this is an error")
            return res.send(err)
        }
      req.body.userId = req.user._id;
      req.body.userName = req.user.name;
      journal.notes.push(req.body);
      journal.save(function(err) {
        res.redirect(`/journals/${journal._id}`);
      });
    });
  } 
  