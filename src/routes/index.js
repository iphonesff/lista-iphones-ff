const router = require("express").Router();

router.get("/", (req, res) => {

    res.json({

        projeto: "FF Imports API",

        status: "ONLINE"

    });

});

router.use("/produtos", require("./produtos.routes"));

module.exports = router;