const empresaService = require("../services/empresa.service");
const mapper = require("../mappers/company.mapper");

class EmpresaController {

    async obter(req, res) {

        try {

            const resposta = await empresaService.obter();

            return res.json(
                mapper.map(resposta.data)
            );

        } catch (error) {

            return res.status(500).json({
                success: false,
                message: "Erro ao obter empresa.",
                error: error.message
            });

        }

    }

}

module.exports = new EmpresaController();