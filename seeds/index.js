const sequelize = require("../config/connection");

const User = require("../models/User");
const userData = require("./userData.json");

const Class = require("../models/Class");
const classData = require("./classData.json");

const Race = require("../models/Race");
const raceData = require("./raceData.json");

const Character = require("../models/Character");
const characterData = require("./characterData.json");

const Subclass = require("../models/Subclass");
const subclassData = require("./subclassData.json");

const Alignment = require("../models/Alignment");
const alignmentData = require("./alignmentData.json");

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  await Alignment.bulkCreate(alignmentData, {
    individualHooks: true,
    returning: true,
  });

  await Class.bulkCreate(classData, {
    individualHooks: true,
    returning: true,
  });

  await Subclass.bulkCreate(subclassData, {
    individualHooks: true,
    returning: true,
  });

  await Race.bulkCreate(raceData, {
    individualHooks: true,
    returning: true,
  });

  await Character.bulkCreate(characterData, {
    individualHooks: true,
    returning: true,
  });

  console.log("Seeding successful!");

  process.exit(0);
};

seedDatabase();
