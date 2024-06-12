const characterRoutes = require("./characterRoute");
const userRoutes = require("./characterRoute");
const router = require("router");

router.use("/characters", characterRoutes);
router.use("/users", userRoutes);

module.exports = router;