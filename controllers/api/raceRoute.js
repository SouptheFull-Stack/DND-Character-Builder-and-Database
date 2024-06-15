const router = require("express").Router();
const { Race } = require("../../models");
// const withAuth = require("../../utils/auth");

// GET ALL RACES
router.get("/", async (req, res) => {
  try {
    const allRaces = await Race.findAll();
    res.status(200).json(allRaces);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error retrieving races!");
  }
});

// GET RACE BY ID
router.get("/:id", async (req, res) => {
  try {
    const idRace = await Race.findByPk(req.params.id);
    res.status(200).json(idRace);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error retrieving races!");
  }
});

// GET RACE BY NAME ?? NOT WORKING, REQUEST COMES BACK NULL HAVE TO DEBUG
router.get("/:name", async (req, res) => {
  try {
    const nameRace = await Race.findOne({
      where: {
        name: req.params.name,
      },
    });
    res.status(200).json(nameRace);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error retrieving class!");
  }
});

// AM WORKING ON NOW, JUST GOING TO MERGE TO MAIN FOR EVERYONE TO UPDATE OTHER CHANGES
router.post("/", async (req, res) => {
  try {
  } catch (err) {}
});

router.put("/", async (req, res) => {
  try {
  } catch (err) {}
});

module.exports = router;
