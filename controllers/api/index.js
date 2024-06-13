const router = require('express').Router();

const characterRoutes = require("./characterRoute");
const userRoutes = require("./userRoute");

router.use("/characters", characterRoutes);
router.use("/users", userRoutes);

module.exports = router;
