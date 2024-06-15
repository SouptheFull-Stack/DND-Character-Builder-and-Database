// retrieve the models that were created
const User = require("./User");
const Character = require("./Character");
const Class = require("./Class");
const Race = require("./Race");

// user to character => one to many
User.hasMany(Character, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

Character.belongsTo(User, {
  foreignKey: "user_id",
});

// character to race => one to many
Race.hasMany(Character, {
  foreignKey: "race_id",
  onDelete: "CASCADE",
});

Character.belongsTo(Race, {
  foreignKey: "race_id",
});

// character to class => one to many
Class.hasMany(Character, {
  foreignKey: "class_id",
  onDelete: "CASCADE",
});

Character.belongsTo(Class, {
  foreignKey: "class_id",
});

module.exports = { User, Character, Class, Race };

// I HATE DOING THE EXPORTING PLZ SOMEONE ELSE DO IT - Mitra
// No worries Mitra - Mimi
