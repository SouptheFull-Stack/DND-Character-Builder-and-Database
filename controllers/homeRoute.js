const router = require("express").Router();
const withAuth = require("../utils/auth");
const { Class, User, Race, Character } = require("../models");

router.get("/", async (req, res) => {
  try {
    res.render("homepage", {
      loggedIn: req.session.logged_in,
      userId: req.session.user_id,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/login", async (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/profile");
    return;
  }

  res.render("login");
});

router.get("/profile", withAuth, async (req, res) => {
  const userChars = await Character.findAll({
    include: [{ model: Race }, { model: Class }],
    include: [{ model: Race }, { model: Class }],
    where: { user_id: req.session.user_id },
  });

  const characters = userChars.map((char) => char.get({ plain: true }));

  const characters = userChars.map((char) => char.get({ plain: true }));

  res.render("profile", {
    characters,
    loggedIn: req.session.logged_in,
    userId: req.session.user_id,
  });
});

router.get("/info", withAuth, async (req, res) => {
  res.render("info", {
    loggedIn: req.session.logged_in,
    userId: req.session.user_id,
  });
});

router.get("/profile/create", withAuth, async (req, res) => {
  try {
    const dbClassData = await Class.findAll();
    const dbRaceData = await Race.findAll();
    // Convert the objects into a plainer object where it is much easier to read the attributes
    const classses = dbClassData.map((classs) => classs.get({ plain: true }));
    const races = dbRaceData.map((race) => race.get({ plain: true }));
    res.render("create", {
      classses,
      races,
      loggedIn: req.session.logged_in,
      userId: req.session.user_id,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

module.exports = router;
