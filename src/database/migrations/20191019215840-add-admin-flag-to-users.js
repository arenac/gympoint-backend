module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('users', 'is_admin', Sequelize.BOOLEAN);
  },

  down: queryInterface => {
    return queryInterface.dropTable('users');
  },
};
