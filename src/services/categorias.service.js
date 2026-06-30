const igest = require("./igestClient");

class CategoriasService {

    async listar(filtros = {}) {

        return await igest.get("/categories", {

            per_page: 100,

            ...filtros

        });

    }

    async buscar(id) {

        return await igest.get(`/categories/${id}`);

    }

}

module.exports = new CategoriasService();