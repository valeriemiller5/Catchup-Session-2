const Burger = require('./burger');
const Customer = require('./customer');

Burger.belongsTo(Customer, {
  foreignKey: 'customer_id'
});

Customer.hasMany(Burger, {
  foreignKey: 'customer_id'
});

module.exports = { Burger, Customer };