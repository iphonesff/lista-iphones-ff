const axios = require("axios");

const api = axios.create({
    baseURL: process.env.IGEST_API_URL,
    timeout: 10000,
    headers: {
        Authorization: `Bearer ${process.env.IGEST_TOKEN}`,
        "X-Company-ID": process.env.IGEST_COMPANY_ID,
        Accept: "application/json",
        "Content-Type": "application/json"
    }
});

api.interceptors.response.use(
    response => response,
    error => {

        console.error("================================");
        console.error("Erro API iGest");

        if (error.response) {

            console.error("Status:", error.response.status);
            console.error(error.response.data);

        } else {

            console.error(error.message);

        }

        console.error("================================");

        return Promise.reject(error);

    }
);

module.exports = api;