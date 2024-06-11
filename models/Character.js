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
    user_id: {
      type: DATATYPES.INTEGER,
      reference: {
        model: 'user',
        key: 'id',
      }
    },
    race_id: {
      type: DATATYPES.INTEGER,
      reference: {
        model: 'race',
        key: 'id',
      }
    },
    class: {
      type: DATATYPES.STRING,
      reference: {
        model: 'class',
        key: 'id',
      }
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
