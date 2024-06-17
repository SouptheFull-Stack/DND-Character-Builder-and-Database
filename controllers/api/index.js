const router = require("express").Router();

const characterRoutes = require("./characterRoute");
const userRoutes = require("./userRoute");
const raceRoutes = require("./raceRoute");
const classRoutes = require("./classRoute");
const subclassRoutes = require("./subclassRoute");
const alignmentRoutes = require("./alignmentRoute");

router.use("/characters", characterRoutes);
router.use("/users", userRoutes);
router.use("/races", raceRoutes);
router.use("/classes", classRoutes);
router.use("/subclasses", subclassRoutes);
router.use("/alignments", alignmentRoutes);

module.exports = router;
