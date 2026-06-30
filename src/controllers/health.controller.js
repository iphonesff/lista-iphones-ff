class HealthController {

    status(req, res) {

        res.json({

            success: true,

            status: "ONLINE",

            api: "FF Imports",

            version: "1.0.0"

        });

    }

}

module.exports = new HealthController();