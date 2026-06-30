const categoriasService = require("../services/categorias.service");
const mapper = require("../mappers/category.mapper");

class CategoriasController {

    async listar(req, res) {

        try {

            const resposta = await categoriasService.listar();

            return res.json(
                mapper.mapList(resposta.data)
            );

        } catch (error) {

            return res.status(500).json({
                success: false,
                message: "Erro ao listar categorias.",
                error: error.message
            });

        }

    }

}

module.exports = new CategoriasController();