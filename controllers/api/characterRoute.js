// initialise express
const router = require('express').Router();
// retrieve models
const { Character } = require('../../models');

// create a new character
router.post('/', async (req, res) => {
  try {
    const dbCharacterData = await Character.create();
    res.status(200).json(dbCharacterData);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

module.exports = router;