const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Character extends Model {}

Character.init(
  {
    id: {
      type: DATATYPES.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DATATYPES.STRING,
    },
    age: {
      type: DATATYPES.INTEGER,
    },
    race: {
      type: DATATYPES.STRING,
    },
    class: {
      type: DATATYPES.STRING,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    modelName: "character",
  }
);

module.exports = Character;
