const router = require("express").Router();

const controller = require("../controllers/produtos.controller");

router.get("/", controller.listar);

module.exports = router;