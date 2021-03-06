const Journal = require("../models/journal")

module.exports = {
    new: newJournal,
    create, 
    index,
    show,
    edit

}

function newJournal(req, res){
    res.render("journals/new")
}

function create(req, res) {
    const journal = new Journal(req.body);
    if (req.user){
        journal.user = req.user._id
    }
    journal.save(function(err) {
        console.log(err)
      if (err) return res.render("journals/new");
      res.redirect(`/journals`);
    });
  }

function index(req, res){
    console.log("index user", req.user)
    Journal.find({}, function(err, journalDoc){
        console.log(journalDoc)
        res.render("journals/index", {
            journals: journalDoc
        })
    })
}

function show(req, res){
    Journal.findById(req.params.id, function(err, journal){
        res.render("journals/show", {
            journal
        })
    })
}

function edit(req, res){
    Journal.findByIdAndUpdate(req.params.id, req.body, function(err, journal) {
        //if (!journal.user.equals(req.user._id)) return res.redirect("/journals");

        res.redirect(`/journals/${req.params.id}`);
    })
}