const router = require("express").Router();
const path = require("path");
const apiRoutes = require("./API");
const path = require("path");

router.use("/api", apiRoutes);
router.get("*", (req, res) => {
	res.sendFile(path.joim(_dirname, "../client/build/index.html"));
});

// router.get("*", (req, res) =>
// 	res.sendFile(path.join(__dirname, "../client/build/index.html"))
// );

module.exports = router;
