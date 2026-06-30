const produtosService = require("../services/produtos.service");
const mapper = require("../mappers/product.mapper");

class BuscaController {

    async buscar(req, res) {

        try {

            const { search } = req.query;

            const resposta = await produtosService.pesquisar(search);

            return res.json(
                mapper.mapList(resposta.data)
            );

        } catch (error) {

            return res.status(500).json({
                success: false,
                message: "Erro na busca.",
                error: error.message
            });

        }

    }

}

module.exports = new BuscaController();