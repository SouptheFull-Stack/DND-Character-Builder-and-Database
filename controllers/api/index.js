const router = require("express").Router();

const characterRoutes = require("./characterRoute");
const userRoutes = require("./userRoute");
const raceRoutes = require("./raceRoute");
const classRoutes = require("./classRoute");

router.use("/characters", characterRoutes);
router.use("/users", userRoutes);
router.use("/races", raceRoutes);
router.use("/classes", classRoutes);

module.exports = router;
