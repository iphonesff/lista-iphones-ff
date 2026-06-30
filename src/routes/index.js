const router = require("express").Router();

router.get("/", (req, res) => {

    res.json({

        projeto: "FF Imports API",

        status: "ONLINE",

        versao: "1.0.0"

    });

});

router.use("/produtos", require("./produtos.routes"));

router.use("/categorias", require("./categorias.routes"));

router.use("/empresa", require("./empresa.routes"));

router.use("/busca", require("./busca.routes"));

router.use("/health", require("./health.routes"));

module.exports = router;