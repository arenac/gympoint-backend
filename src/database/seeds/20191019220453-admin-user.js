/*
This seed didn't run.
Data inserted through the first seed
*/
const bcrypt = require('bcryptjs');

module.exports = {
  up: queryInterface => {
    return queryInterface.bulkInsert(
      'users',
      [
        {
          name: 'Administrator',
          email: 'admin@gympoint.com',
          password_hash: bcrypt.hashSync('123456', 8),
          created_at: new Date(),
          updated_at: new Date(),
          is_admin: true,
        },
      ],
      {}
    );
  },

  down: () => {},
};
