const router = require("express").Router();
const withAuth = require("../utils/auth");
const {
  Class,
  User,
  Race,
  Character,
  Subclass,
  Alignment,
} = require("../models");

router.get('/', async (req, res) => {
  try {
    res.render('homepage', {
      loggedIn: req.session.logged_in,
      userId: req.session.user_id,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', async (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }

  res.render('login');
});

// WRITING RENDER REQUEST FOR LOGGED IN -> CHARACTERS
router.get("/characters", withAuth, async (req, res) => {
  // get all the characters that belong to user_id
  const userChars = await Character.findAll({
    include: [{ model: Race }, { model: Class }, { model: Alignment }],
    where: { user_id: req.session.user_id },
  });

  // serialize the data
  const characters = userChars.map((char) => char.get({ plain: true }));

  // getting the logged in user's name
  const loggedInUser = await User.findByPk(req.session.user_id, {
    attributes: ['name'],
  });

  console.log(characters);
  // declaring what we want to link to the handlebars for rendering on the html
  res.render('characters', {
    characters,
    loggedIn: req.session.logged_in,
    userId: req.session.user_id,
    userName: loggedInUser.name,
  });
});

// WRITING A RENDER REQUEST FOR LOGGED IN -> CHARACTERS -> SINGLE CHARACTER DISPLAY
router.get("/characters/characterInfo/:name", withAuth, async (req, res) => {
  const characterName = req.params.name;

  // get one clicked character that belong to user_id
  const userCharOne = await Character.findOne({
    where: { user_id: req.session.user_id, name: characterName },
    include: [
      { model: Race },
      { model: Class },
      { model: Subclass },
      { model: Alignment },
    ],
  });

  // if user puts wrong name in url path, error handle
  if (!userCharOne) {
    return res.status(404).send('Character not found!');
  }

  // serialize the data
  const characterSingle = userCharOne.get({ plain: true });

  // declaring what we want to link to the handlebars for rendering on the html
  res.render('character', {
    characterSingle,
    loggedIn: req.session.logged_in,
    userId: req.session.user_id,
  });
});

router.get('/characters/create', withAuth, async (req, res) => {
  try {
    const dbClassData = await Class.findAll();
    const dbRaceData = await Race.findAll();
    // Convert the objects into a plainer object where it is much easier to read the attributes
    const classses = dbClassData.map((classs) => classs.get({ plain: true }));
    const races = dbRaceData.map((race) => race.get({ plain: true }));
    res.render('create', {
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

// dice page
router.get('/dice', async (req, res) => {
  try {
    res.render('dice', {
      loggedIn: req.session.logged_in,
      userId: req.session.user_id,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
