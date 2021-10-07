var router = require("express").Router()
const notesCtrl = require("../controllers/notes")

router.post("/journals/:id/notes", logged, notesCtrl.create);

function logged(req, res, next){
    if (req.isAuthenticated()) return next();
    res.redirect("/auth/google")
}

module.exports = router