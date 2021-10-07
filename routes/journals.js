var express = require("express");
var router = express.Router();
const journalsCtrl = require("../controllers/journals");

router.get("/new", journalsCtrl.new);
router.post("/", journalsCtrl.create);
router.get("/", journalsCtrl.index);
router.get("/:id", journalsCtrl.show);
router.post("/:id/edit", journalsCtrl.edit);

module.exports = router;