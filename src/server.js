require("dotenv").config();

const app = require("./app");

const PORT = process.env.PORT || 3000;

console.log("================================");
console.log("API URL:", process.env.IGEST_API_URL);
console.log("COMPANY:", process.env.IGEST_COMPANY_ID);
console.log("TOKEN:", process.env.IGEST_TOKEN ? "OK" : "NÃO CARREGADO");
console.log("================================");

app.listen(PORT, () => {

    console.log("===================================");
    console.log(" Iphones FF");
    console.log("===================================");
    console.log(`Servidor iniciado`);
    console.log(`http://localhost:${PORT}`);

});