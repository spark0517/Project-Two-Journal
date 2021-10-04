var express = require("express");
var router = express.Router();
const journalsCtrl = require("../controllers/journals");

router.get("/new", journalsCtrl.new);
router.post("/journals", journalsCtrl.create)

module.exports = router;