module.exports = {
    new: newJournal,
    create

}

function newJournal(req, res){
    res.render("journals/new")
}

function create(req, res){
    res.send
}