const Note = require("../models/journal")

module.exports = {
    create

}

function create(req, res) {
    Journal.findById(req.params.id, function(err, book) {
      req.body.userId = req.user._id;
      req.body.userName = req.user.name;
      
      journal.notes.push(req.body);
      journal.save(function(err) {
        res.redirect(`/journals/${journal._id}`);
      });
    });
  } 