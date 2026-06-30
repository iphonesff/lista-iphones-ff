const price = require("../helpers/price.helper");

class ProductMapper {

    map(produto) {

        const preco = price.calcular(produto.preco);

        return {

            id: produto.id,

            titulo: this.getTitulo(produto),

            slug: this.getSlug(produto),

            categoria: this.getCategoria(produto),

            condicao: this.getCondicao(produto),

            memoria: produto.memoria,

            cor: produto.color,

            imagem: produto.image_url || null,

            garantia: produto.garantia || "",

            brindes: produto.brindes || "",

            destaque: Boolean(produto.is_destaque),

            preco,

            whatsapp: this.getWhatsapp(produto)

        };

    }

    mapList(lista = []) {

        return lista.map(produto => this.map(produto));

    }

    getTitulo(produto){

        if(
            produto.versao &&
            produto.versao !== "NORMAL"
        ){

            return `${produto.modelo} ${produto.versao}`;

        }

        return produto.modelo;

    }

    getSlug(produto){

        return this.getTitulo(produto)
            .toLowerCase()
            .replace(/\s+/g,"-");

    }

    getCategoria(produto){

        if(!produto.category) return "";

        if(produto.category.includes("IPHONES")){

            return "IPHONES";

        }

        return produto.category;

    }

    getCondicao(produto){

        if(!produto.category) return "";

        if(produto.category.includes("SEMINOVOS")){

            return "Seminovo";

        }

        if(produto.category.includes("LACRADOS")){

            return "Lacrado";

        }

        return "";

    }

    getWhatsapp(produto){

        return {

            modelo:this.getTitulo(produto),

            memoria:produto.memoria,

            cor:produto.color

        };

    }

}

module.exports = new ProductMapper();