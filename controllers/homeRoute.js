const router = require('express').Router();
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    res.render('homepage', {
      loggedIn: req.session.logged_in
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
  if (!req.session.logged_in) {
    res.redirect('/login');
    return;
  }
  
  res.render('profile', {
    loggedIn: req.session.logged_in
  });
});

router.get('/info', withAuth, async (req, res) => {
  if (!req.session.logged_in) {
    res.redirect('/login');
    return;
  }

  res.render('info', {
    loggedIn: req.session.logged_in
  });
});

router.get('/create', withAuth, async (req, res) => {
  if (!req.session.logged_in) {
    res.redirect('/login');
    return;
  }

  res.render('create', {
    loggedIn: req.session.logged_in
  });
});

router.get('/logout', (res) => {

  res.render('homepage', {
    loggedIn: req.session.logged_in
  });
});

module.exports = router;
