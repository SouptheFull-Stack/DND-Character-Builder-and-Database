const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Class extends Model {}

Class.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    subclass: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "class",
    timestamps: false,
  }
);

module.exports = Class;
