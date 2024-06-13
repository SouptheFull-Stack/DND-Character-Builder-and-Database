const router = require('express').Router();
const withAuth = require('../utils/auth');

router.get('/', withAuth, async (req, res) => {
  try {
    res.render('homepage');

  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', withAuth, async (req, res) => {
    if (req.session.logged_in) {
      res.redirect('/profile');
      return;
    }
    
    res.render('login');
});

router.get('/profile', (req, res) => {
  if (!req.session.logged_in) {
    res.redirect('/login');
    return;
  }
  
  res.render('profile');
});

router.get('/info', (req, res) => {
  if (!req.session.logged_in) {
    res.redirect('/login');
    return;
  }

  res.render('info');
});

router.get('/create', (req, res) => {
  if (!req.session.logged_in) {
    res.redirect('/login');
    return;
  }

  res.render('create');
});

router.get('/logout', (req, res) => {

  res.render('homepage');
});

module.exports = router;
