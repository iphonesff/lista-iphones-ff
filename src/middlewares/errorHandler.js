const errorHandler = (err, req, res, next) => {

    console.error("================================");
    console.error("ERRO");
    console.error("URL:", req.originalUrl);
    console.error("Método:", req.method);
    console.error(err);
    console.error("================================");

    const status = err.status || 500;

    return res.status(status).json({

        success: false,

        message: err.message || "Erro interno do servidor."

    });

};

module.exports = errorHandler;