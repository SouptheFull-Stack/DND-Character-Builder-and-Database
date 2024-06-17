const router = require("express").Router();
const { Alignment } = require("../../models");

// CREATE NEW Alignment
router.post("/", async (req, res) => {
  try {
    const newAlignment = await Alignment.post(req.body);
    res.status(200).json(newAlignment);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error creating!");
  }
});

// GET ALL Alignment
router.get("/", async (req, res) => {
  try {
    const allAlignment = await Alignment.findAll();
    res.status(200).json(allAlignment);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error retrieving Subclass!");
  }
});

// GET Alignment BY ID
router.get("/:id", async (req, res) => {
  try {
    const idAlignment = await Alignment.findByPk(req.params.id);
    res.status(200).json(idAlignment);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error retrieving Subclass!");
  }
});

// GET Alignment BY NAME
router.get("/name/:name", async (req, res) => {
  try {
    const nameAlignment = await Alignment.findOne({
      where: {
        name: req.params.name,
      },
    });
    res.status(200).json(nameAlignment);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error retrieving class!");
  }
});

// UPDATE Alignment
router.put("/:id", async (req, res) => {
  try {
    const updateAlignment = await Alignment.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(updateAlignment);
  } catch (err) {
    res.status(400).json({ message: "Something went wrong", detail: err });
  }
});

// DELETE Alignment
router.delete("/:id", async (req, res) => {
  try {
    const deleteAlignment = await Alignment.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(deleteAlignment);
  } catch (err) {
    res.status(400).json({ message: "Something went wrong", detail: err });
  }
});

module.exports = router;
