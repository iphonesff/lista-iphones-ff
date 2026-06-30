const router = require("express").Router();

const controller = require("../controllers/health.controller");

router.get("/", controller.status);

module.exports = router;