const api = require("../config/igest");

class IgestClient {

    async get(endpoint, params = {}) {

        try {

            const response = await api.get(endpoint, {
                params
            });

            return response.data;

        } catch (error) {

            console.error("================================");
            console.error("Erro API iGest");
            console.error("Endpoint:", endpoint);

            if (error.response) {

                console.error("Status:", error.response.status);
                console.error(error.response.data);

            } else {

                console.error(error.message);

            }

            console.error("================================");

            throw error;

        }

    }

}

module.exports = new IgestClient();