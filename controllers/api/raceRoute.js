const router = require("express").Router();
const { Race } = require("../../models");

// CREATE NEW RACE
router.post("/", async (req, res) => {
  try {
    const newRace = await Race.post(req.body);
    res.status(200).json(newRace);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error creating!");
  }
});

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

// GET RACE BY NAME
// add in converter of lowercase to correct Case/Capitals
router.get("/name/:name", async (req, res) => {
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

// UPDATE RACE
router.put("/:id", async (req, res) => {
  try {
    const updateRace = await Race.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(updateRace);
  } catch (err) {
    res.status(400).json({ message: "Something went wrong", detail: err });
  }
});

// DELETE RACE
router.delete("/:id", async (req, res) => {
  try {
    const deleteRace = await Race.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(deleteRace);
  } catch (err) {
    res.status(400).json({ message: "Something went wrong", detail: err });
  }
});

module.exports = router;
