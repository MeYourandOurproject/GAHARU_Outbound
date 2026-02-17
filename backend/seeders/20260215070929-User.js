'use strict';
const bcrypt = require("bcrypt");

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Users", [
      {
        name: "Super Admin",
        email: "superadmin@gaharuoutbound.com",
        password: await bcrypt.hash("sadmin", 10),
        role: "super_admin",
        avatar: null,
        is_active: true,
        last_login: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Admin",
        email: "admin@gaharuoutbound.com",
        password: await bcrypt.hash("admin", 10),
        role: "admin",
        avatar: null,
        is_active: true,
        last_login: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Author",
        email: "author@gaharuoutbound.com",
        password: await bcrypt.hash("author", 10),
        role: "author",
        avatar: null,
        is_active: true,
        last_login: null,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Users", null, {});
  }
};
