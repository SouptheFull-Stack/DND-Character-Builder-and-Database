// initialise express
const router = require("express").Router();
// retrieve models
const { Character, User } = require("../../models");
const withAuth = require("../../utils/auth");

// create a new character
router.get("/", withAuth, async (req, res) => {
  try {
    const user = await User.findbyPk(req.user.id);
    const userCharsAll = await Character.findAll({
      where: { userID: user.id },
    });
    res.render("userCharsAll", { userCharsAll });
    res.status(200).json(userCharsAll);
  } catch (err) {
    console.err(err);
    res.status(500).send("Error retrieving characters!");
  }
});

module.exports = router;
