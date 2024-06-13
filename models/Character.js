const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Character extends Model {}

Character.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
    },
    age: {
      type: DataTypes.INTEGER,
    },
    user_id: {
      type: DataTypes.INTEGER,
      reference: {
        model: 'user',
        key: 'id',
      }
    },
    race_id: {
      type: DataTypes.INTEGER,
      reference: {
        model: 'race',
        key: 'id',
      }
    },
    class_id: {
      type: DataTypes.INTEGER,
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
