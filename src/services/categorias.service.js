const igest = require("./igestClient");

class CategoriasService{

    async listarTodas(){

        return await igest.get("/categories",{

            per_page:100

        });

    }

    async buscar(id){

        return await igest.get(`/categories/${id}`);

    }

}

module.exports = new CategoriasService();