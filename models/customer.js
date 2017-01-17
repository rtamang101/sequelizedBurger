'use strict';
module.exports = function(sequelize, DataTypes) {
  var Customer = sequelize.define('customer', {
    customer_name: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
      }
    }
  });
  return Customer;
};