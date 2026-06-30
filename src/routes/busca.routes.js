const router = require("express").Router();

const controller = require("../controllers/busca.controller");

router.get("/", controller.buscar);

module.exports = router;