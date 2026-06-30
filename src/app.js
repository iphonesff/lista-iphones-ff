const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const routes = require("./routes");

const notFound = require("./middlewares/notFound");
const errorHandler = require("./middlewares/errorHandler");

const app = express();

// Middlewares globais
app.use(cors());

app.use(express.json());

app.use(morgan("dev"));

// Rotas
app.use("/api", routes);

// Rota não encontrada
app.use(notFound);

// Tratamento global de erros
app.use(errorHandler);

module.exports = app;