// Customer model

// The Customer has a "customer" attribute of type DataTypes.String
const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/config');

class Customer extends Model {};

Customer.init(
  {
    customer: {
      type: DataTypes.STRING,
      // If a customer is to be created, they must have a name
      allowNull: false
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'customer'
  }
);

module.exports = Customer;
