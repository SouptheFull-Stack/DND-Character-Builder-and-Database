// initialise express
const router = require("express").Router();
// retrieve models
const { Character } = require("../../models");

// create a character
router.post("/", async (req, res) => {
  try {
    const newCharacter = await Character.create({
      name: req.body.charName,
      age: req.body.charAge,
      alignment_id: req.body.charAlign,
      user_id: req.body.charUser,
      race_id: req.body.charRace,
      class_id: req.body.charClass,
      subclass_id: req.body.charSubclass,
    });
    res.status(200).json(newCharacter);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error creating!");
  }
});

// Find all characters
router.get("/", async (req, res) => {
  try {
    const allCharacters = await Character.findAll();
    res.status(200).json(allCharacters);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error retrieving characters!");
  }
});

// Find character by ID
router.get("/:id", async (req, res) => {
  try {
    // matching user input id to database id of character
    const idCharacter = await Character.findByPk(req.params.id);
    res.status(200).json(idCharacter);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error retrieving character!");
  }
});

// Finding characters by name
router.get("/name/:name", async (req, res) => {
  try {
    const nameCharacter = await Character.findOne({
      // matching user input name to database name of character
      where: {
        name: req.params.name,
      },
    });
    res.status(200).json(nameCharacter);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error retrieving class!");
  }
});

// update a character (will be linked to a user in the homeRoutes)
router.put("/:id", async (req, res) => {
  try {
    const updateCharacter = await Character.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(updateCharacter);
  } catch (err) {
    res.status(400).json({ message: "Something went wrong", detail: err });
  }
});

// DELETE CHARACTER
router.delete("/:id", async (req, res) => {
  try {
    const deleteCharacter = await Character.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(deleteCharacter);
  } catch (err) {
    res.status(400).json({ message: "Something went wrong", detail: err });
  }
});

// WITHOUT FRONT END RENDERING
// router.get("/", async (req, res) => {
//   try {
//     const user = await User.findbyPk(req.user.id);
//     const userCharsAll = await Character.findAll({
//       where: { userID: user.id },
//     });
//     res.render("userCharsAll", { userCharsAll });
//     res.status(200).json(userCharsAll);
//   } catch (err) {
//     console.err(err);
//     res.status(500).send("Error retrieving characters!");
//   }
// });

// POST REQUEST TESTING BODY FOR JSON
// {
// 	"name": "Dumbo",
// 	"age": "17",
// 	"user_id": "3",
// 	"race_id": "1",
// 	"class_id": "7"
// }

module.exports = router;
