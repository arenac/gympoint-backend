module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.changeColumn('users', 'is_admin', {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    });
  },

  down: queryInterface => {
    return queryInterface.dropTable('users');
  },
};
