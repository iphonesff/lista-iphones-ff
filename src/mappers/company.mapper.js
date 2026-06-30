class CompanyMapper{

    map(empresa){

        return{

            nome:empresa.name,

            telefone:empresa.phone,

            email:empresa.email,

            cidade:empresa.city,

            estado:empresa.state,

            endereco:`${empresa.address}, ${empresa.number}`

        };

    }

}

module.exports = new CompanyMapper();