// retrieve the models that were created
const User = require("./User");
const Character = require("./Character");
const Class = require("./Class");
const Race = require("./Race");
const Subclass = require("./Subclass");
const Alignment = require("./Alignment");

// character to user => one to many
User.hasMany(Character, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

Character.belongsTo(User, {
  foreignKey: "user_id",
});

// race to character => one to many
Race.hasMany(Character, {
  foreignKey: "race_id",
  onDelete: "CASCADE",
});

Character.belongsTo(Race, {
  foreignKey: "race_id",
});

// class to character => one to many
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

// subclass to class => one to many
Class.hasMany(Subclass, {
  foreignKey: "class_id",
  onDelete: "CASCADE",
});

Subclass.belongsTo(Class, {
  foreignKey: "class_id",
});

Subclass.hasMany(Character, {
  foreignKey: "subclass_id",
  onDelete: "CASCADE",
});

Character.belongsTo(Subclass, {
  foreignKey: "subclass_id",
});

module.exports = { User, Character, Class, Race, Subclass, Alignment };

// I HATE DOING THE EXPORTING PLZ SOMEONE ELSE DO IT - Mitra
// No worries Mitra - Mimi
