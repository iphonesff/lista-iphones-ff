class CategoryMapper {

    map(categoria){

        return{

            id:categoria.id,

            nome:categoria.name,

            imagem:categoria.image_url,

            quantidade:categoria.product_count,

            tipo:categoria.type

        };

    }

    mapList(lista=[]){

        return lista.map(c=>this.map(c));

    }

}

module.exports = new CategoryMapper();