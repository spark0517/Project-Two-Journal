var router = require("express").Router()
const notesCtrl = require("../controllers/notes")

router.post("/journals/:id/notes", logged, notesCtrl.create);
router.delete("/journals/:id/notes/:noteid", logged, notesCtrl.deleteNote);

function logged(req, res, next){
    if (req.isAuthenticated()) {
        console.log("hitting log auth");
        return next();
    }

    res.redirect("/auth/google")
}



module.exports = router