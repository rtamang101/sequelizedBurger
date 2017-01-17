'use strict';

var sequelize = require('../models').sequelize;
var models = require('../models');

module.exports = {
  up: function (queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
    return models.burger.bulkCreate(
      [
        {burger_name: 'Hotdog Burger', devoured: false},
        {burger_name: 'Sushi Burger', devoured: false},
        {burger_name: 'Viggie Burger', devoured: false}
      ]
      )
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
    return models.burger.destroy({
      where:{
        burger_name: [
            'Hotdog Burger',
            'Shushi Burger',
            'Viggie Burger'
        ]
      }
    })
    .then(function(){
      return sequelize.query('ALTER TABLE burgers AUTO_INCREMENT=1');
    })
  }
};
