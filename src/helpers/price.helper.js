class PriceHelper {

    constructor() {

        this.PARCELAS = 10;
        this.ACRESCIMO = 0.10;

    }

    calcular(precoVista) {

        const vista = Number(precoVista);

        const parcelado = Number((vista * (1 + this.ACRESCIMO)).toFixed(2));

        const parcela = Number((parcelado / this.PARCELAS).toFixed(2));

        return {

            precoVista: vista,

            precoParcelado: parcelado,

            parcela,

            parcelas: this.PARCELAS,

            textoParcela: `${this.PARCELAS}x de R$ ${parcela.toFixed(2)}`,

            textoVista: `À vista por R$ ${vista.toFixed(2)}`

        };

    }

}

module.exports = new PriceHelper();