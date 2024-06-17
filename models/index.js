// retrieve the models that were created
const User = require("./User");
const Character = require("./Character");
const Class = require("./Class");
const Race = require("./Race");
const Subclass = require("./Subclass");
const Alignment = require("./Alignment");

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

// many to one (character has one alignment, alignments have a lot of characters)
Alignment.hasMany(Character, {
  foreignKey: "alignment_id",
  onDelete: "CASCADE",
});

Character.belongsTo(Alignment, {
  foreignKey: "alignment_id",
});

// class to subclass => one to many
Class.hasMany(Subclass, {
  foreignKey: "class_id",
  onDelete: "CASCADE",
});

Subclass.belongsTo(Class, {
  foreignKey: "class_id",
});

module.exports = { User, Character, Class, Race, Subclass, Alignment };

// I HATE DOING THE EXPORTING PLZ SOMEONE ELSE DO IT - Mitra
// No worries Mitra - Mimi
