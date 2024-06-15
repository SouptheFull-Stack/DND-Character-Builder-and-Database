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
      allowNull: false,
    },
    extra: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    age: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    size: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    speed: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    special_abilities: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false,
    },
    languages: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false,
    },
    stats: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "race",
    timestamps: false,
  }
);

module.exports = Race;
