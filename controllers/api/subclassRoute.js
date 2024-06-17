const router = require("express").Router();
const { Subclass } = require("../../models");

// CREATE NEW Subclass
router.post("/", async (req, res) => {
  try {
    const newSubclass = await Subclass.post(req.body);
    res.status(200).json(newSubclass);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error creating!");
  }
});

// GET ALL Subclass
router.get("/", async (req, res) => {
  try {
    const allSubclass = await Subclass.findAll();
    res.status(200).json(allSubclass);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error retrieving Subclass!");
  }
});

// GET Subclass BY ID
router.get("/:id", async (req, res) => {
  try {
    const idSubclass = await Subclass.findByPk(req.params.id);
    res.status(200).json(idSubclass);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error retrieving Subclass!");
  }
});

// GET Subclass BY NAME
// add in converter of lowercase to correct Case/Capitals
router.get("/name/:name", async (req, res) => {
  try {
    const nameSubclass = await Subclass.findOne({
      where: {
        name: req.params.name,
      },
    });
    res.status(200).json(nameSubclass);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error retrieving class!");
  }
});

// GET SUBCLASSES BY CLASS ID
router.get("/classID/:class_id", async (req, res) => {
  try {
    const subclassList = await Subclass.findAll({
      where: {
        class_id: req.params.class_id,
      },
    });
    res.status(200).json(subclassList);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error retrieving subclass!");
  }
});

// UPDATE Subclass
router.put("/:id", async (req, res) => {
  try {
    const updateSubclass = await Subclass.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(updateSubclass);
  } catch (err) {
    res.status(400).json({ message: "Something went wrong", detail: err });
  }
});

// DELETE Subclass
router.delete("/:id", async (req, res) => {
  try {
    const deleteSubclass = await Subclass.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(deleteSubclass);
  } catch (err) {
    res.status(400).json({ message: "Something went wrong", detail: err });
  }
});

module.exports = router;
