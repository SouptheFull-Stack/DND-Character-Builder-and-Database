const router = require("express").Router();
const { Class } = require("../../models");
// const withAuth = require("../../utils/auth"); removing to debug error and figure out what problem is

// removed withAuth middleware to test error
router.get("/", async (req, res) => {
  try {
    const allClasses = await Class.findAll();
    res.status(200).json(allClasses);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error retrieving classes!");
  }
});

// GET ONE CLASS BY NAME?!?!
router.get("/:name", async (req, res) => {
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

// GET ONE CLASS BY PRIMARY KEY
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
// router.get("/:name", async (req, res) => {
//   try {
//     const nameClass = await Class.findOne({
//       where: {
//         name: req.params.name,
//       },
//     });
//     if (nameClass) {
//       res.status(200).json(nameClass);
//     } else {
//       res.status(404).send("Class not found!");
//     }
//   } catch (err) {
//     console.error(err);
//     res.status(500).send("Error retrieving class!");
//   }
// });

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
