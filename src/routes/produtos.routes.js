const router = require("express").Router();

const controller = require("../controllers/produtos.controller");

router.get("/", controller.listar);

router.get("/:id", controller.buscar);

module.exports = router;