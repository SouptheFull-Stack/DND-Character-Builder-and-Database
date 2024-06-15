// initialise express
const router = require("express").Router();
// retrieve models
const { Character, User } = require("../../models");
// const withAuth = require("../../utils/auth");

// get all characters the user has made
// router.get("/", async (req, res) => {
//   try {
//     const user = await User.findbyPk(req.user.id);
//     const userCharsAll = await Character.findAll();
//     res.status(200).json(userCharsAll);
//   } catch (err) {
//     console.error(err);
//     res.status(500).send("Error retrieving characters!");
//   }
// });

router.post("/", async (req, res) => {
  try {
    const newCharacter = await Character.create(req.body);
    res.status(200).json(newCharacter);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error creating!");
  }
});

router.get("/", async (req, res) => {
  try {
    const allCharacters = await Character.findAll();
    res.status(200).json(allCharacters);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error retrieving characters!");
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
