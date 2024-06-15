const router = require('express').Router();
const { User } = require('../../models');

// create a new user
router.post('/', async (req, res) => {
  try {
    const dbUserData = await User.create({
      name: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });

    req.session.save(() => {
      req.session.loggedIn = true;
      req.session.userId = dbUserData.id;
      res.status(200).json(dbUserData);
    });
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

router.post('/login', async (req, res) => {
  try {
    const userData = await User.findOne({ 
      where: { 
        email: req.body.email, 
      }, 
    });

    if (!userData) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again.' });
        return;
    }

    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again.' });
      return;
    }

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
      
      res.status(200).json({ user: userData, message: 'You are now logged in!' });
    });

  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => { 
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

// retrieve users to test
router.get('/', async (req, res) => {
  try {
    const dbUserData = await User.findAll();
    // return as a json object
    res.status(200).json(dbUserData);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

module.exports = router;
