const produtosService = require("../services/produtos.service");
const mapper = require("../mappers/product.mapper");
const cache = require("../cache/memoryCache");

class ProdutosController {

    async listar(req, res) {

        try {

            const cacheKey = JSON.stringify(req.query);

            const cacheProdutos = cache.get(cacheKey);

            if (cacheProdutos) {
                return res.json(cacheProdutos);
            }

            const resposta = await produtosService.listar(req.query);

            const produtos = mapper.mapList(resposta.data);

            const resultado = {
                data: produtos,
                meta: resposta.meta
            };

            cache.set(cacheKey, resultado);

            return res.json(resultado);

        } catch (error) {

            return res.status(500).json({
                success: false,
                message: "Erro ao listar produtos.",
                error: error.message
            });

        }

    }

    async buscar(req, res) {

        try {

            const resposta = await produtosService.buscar(req.params.id);

            return res.json(
                mapper.map(resposta.data)
            );

        } catch (error) {

            return res.status(500).json({
                success: false,
                message: "Erro ao buscar produto.",
                error: error.message
            });

        }

    }

}

module.exports = new ProdutosController();