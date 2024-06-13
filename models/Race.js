const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Race extends Model {}

Race.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
    },
    extra: {
      type: DataTypes.STRING,
    },
    age: {
      type: DataTypes.STRING,
    },
    size: {
      type: DataTypes.STRING,
    },
    speed: {
      type: DataTypes.STRING,
    },
    // special_abilities: {
    //   type: DataTypes.ARRAY(DataTypes.STRING),
    // },
    // languages: {
    //   type: DataTypes.ARRAY(DataTypes.STRING),
    // },
    stats: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    modelName: "race",
    timestamps: false,
  }
);

module.exports = Race;
