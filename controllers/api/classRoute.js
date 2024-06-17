const router = require("express").Router();
const { Class, Subclass } = require("../../models");

// CREATE NEW CLASS
router.post("/", async (req, res) => {
  try {
    const newClass = await Class.create(req.body);
    res.status(200).json(newClass);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error creating!");
  }
});

// GET ALL CLASSES
router.get("/", async (req, res) => {
  try {
    const allClasses = await Class.findAll();
    res.status(200).json(allClasses);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error retrieving classes!");
  }
});

// GET ONE CLASS BY ID
router.get("/:id", async (req, res) => {
  try {
    const idClass = await Class.findByPk(req.params.id);
    res.status(200).json(idClass);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error retrieving class!");
  }
});

// GET ONE CLASS BY NAME?!?!
router.get("/name/:name", async (req, res) => {
  try {
    const nameClass = await Class.findOne({
      where: {
        name: req.params.name,
      },
    });
    res.status(200).json(nameClass);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error retrieving class!");
  }
});

// GET SUBCLASS BASED ON PICKED OPTION IN CLASS
router.get("/subclasses/:classId", async (req, res) => {
  try {
    const subclasses = await Subclass.findAll({
      where: { classId: req.params.classId },
    });

    res.json(subclasses);
  } catch (err) {
    res.status(500).json(err);
  }
});

// UPDATE CLASS
router.put("/:id", async (req, res) => {
  try {
    const updateClass = await Class.update({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(updateClass);
  } catch (err) {
    console.error(err);
    res.status(400).json({ message: "Something went wrong", detail: err });
  }
});

// DELETE CLASS
router.delete("/:id", async (req, res) => {
  try {
    const deleteClass = await Class.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(deleteClass);
  } catch (err) {
    res.status(400).json({ message: "Something went wrong", detail: err });
  }
});

module.exports = router;

// INSOMNIA TESTING BODY FOR POST
// {
// 	"name": "Peepee",
// 	"subclass":  ["Poopoo", "Poopo", "Poop", "Poo", "Po", "P"],
// 	"description": "This is the peepiest poopoo you will ever see."
// }
