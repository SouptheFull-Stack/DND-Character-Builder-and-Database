const router = require("express").Router();

// Setting up rendering template for the homepage with sequelize
router.get("/", async (req, res) => {
  res.render("homepage");
});

module.exports = router;
