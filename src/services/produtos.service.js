const igest = require("./igestClient");

class ProdutosService {

    async listar(filtros = {}) {

        return await igest.get("/products",{

            per_page:100,

            ...filtros

        });

    }

    async buscar(id){

        return await igest.get(`/products/${id}`);

    }

    async buscarCategoria(category){

        return await igest.get("/products",{

            category_id:category

        });

    }

    async pesquisar(search){

        return await igest.get("/products",{

            search

        });

    }
    async listarDestaques() {}

    async listarPorModelo(modelo) {}

}

module.exports = new ProdutosService();