const router = require('express').Router();
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    res.render('homepage');

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
  
  res.render('profile');
});

router.get('/info', withAuth, async (req, res) => {
  if (!req.session.logged_in) {
    res.redirect('/login');
    return;
  }

  res.render('info');
});

router.get('/create', withAuth, async (req, res) => {
  if (!req.session.logged_in) {
    res.redirect('/login');
    return;
  }

  res.render('create');
});

router.get('/logout', (res) => {

  res.render('homepage');
});

module.exports = router;
