const produtosService = require("../services/produtos.service");
const mapper = require("../mappers/product.mapper");
const cache = require("../cache/memoryCache");

class ProdutosController {

    async listar(req, res) {

        const cacheProdutos = cache.get("produtos");

        if (cacheProdutos) {

            return res.json(cacheProdutos);

        }

        const produtos = await produtosService.listar();

        const resultado = mapper.mapList(produtos.data);

        cache.set("produtos", resultado);

        return res.json(resultado);

    }

}

module.exports = new ProdutosController();