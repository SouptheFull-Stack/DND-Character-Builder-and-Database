const router = require('express').Router();
const withAuth = require('../utils/auth');
const { Class, User, Race, Character } = require('../models');

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

router.get('/profile', withAuth, async (req, res) => {
  res.render('profile', {
    loggedIn: req.session.logged_in,
    userId: req.session.user_id,
  });
});

router.get('/info', withAuth, async (req, res) => {
  res.render('info', {
    loggedIn: req.session.logged_in,
    userId: req.session.user_id,
  });
});

router.get('/profile/create', withAuth, async (req, res) => {
  res.render('create', {
    loggedIn: req.session.logged_in,
    userId: req.session.user_id,
  });
});

module.exports = router;
