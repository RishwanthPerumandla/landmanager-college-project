var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res) {
	
	res.json({ title: "Landmanager Backend API" });
});
/* GET health check. */
router.get("/health", function (req, res) {
	const healthcheck = {
        uptime: process.uptime(),
		responsetime:process.hrtime(),
        message: 'OK',
        timestamp: Date.now()
    };
    try {
        res.send(healthcheck);
    } catch (error) {
        healthcheck.message = error;
        res.status(503).send();
    }
});

module.exports = router;
