/*
This file has been generated through:
yarn sequelize migration:create --name=create-users

The entity has been created inside the db gympoint through:
yarn sequelize db:migrate
*/
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('users', {
      admin: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        default: false,
      },
    });
  },

  down: queryInterface => {
    return queryInterface.dropTable('users');
  },
};
