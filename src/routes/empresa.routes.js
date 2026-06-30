const router = require("express").Router();

const controller = require("../controllers/empresa.controller");

router.get("/", controller.obter);

module.exports = router;