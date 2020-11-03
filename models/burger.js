// Burger models

// The burger has a burger_name attribute of type DataTypes.String
// and a devoured attribute that is false by default
const { Model, DataTypes } = require('sequelize');

const sequelize = require("../config/config");

class Burger extends Model {};

Burger.init(
  {
    burger_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    devoured: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  }, 
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'burger'
  }
);

module.exports = Burger;
