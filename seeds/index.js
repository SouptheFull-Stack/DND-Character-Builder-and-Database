const sequelize = require("../config/connection");

// const Character = require("../models/Character");
// const charData = require("./characterData.json");

const User = require("../models/User");
const userData = require("./userData.json");

const Class = require("../models/Class");
const classData = require("./classData.json");

const Race = require("../models/Race");
const raceData = require("./raceData.json");

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  //   await Character.bulkCreate(charData, {
  //     individualHooks: true,
  //     returning: true,
  //   });

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  await Class.bulkCreate(classData, {
    individualHooks: true,
    returning: true,
  });

  await Race.bulkCreate(raceData, {
    individualHooks: true,
    returning: true,
  });

  console.log("Seeding successful!");

  process.exit(0);
};

seedDatabase();
