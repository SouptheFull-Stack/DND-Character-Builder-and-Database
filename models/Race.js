const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Race extends Model {}

Race.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    age: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    stats: {
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
      type: DataTypes.ARRAY(DataTypes.TEXT),
      allowNull: true,
    },
    extra: {
      type: DataTypes.ARRAY(DataTypes.TEXT),
      allowNull: true,
    },
    languages: {
      type: DataTypes.ARRAY(DataTypes.TEXT),
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: "race",
  }
);

module.exports = Race;
