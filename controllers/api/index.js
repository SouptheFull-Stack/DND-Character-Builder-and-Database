const characterRoutes = require("./characterRoute");
const userRoutes = require("./userRoute");
const router = require("router");

router.use("/characters", characterRoutes);
router.use("/users", userRoutes);

module.exports = router;
