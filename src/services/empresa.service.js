const igest = require("./igestClient");

class EmpresaService{

    async obter(){

        return await igest.get("/company");

    }

}

module.exports = new EmpresaService();