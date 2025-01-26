"use strict";

const bcrypt = require("bcrypt");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Users", [
      {
        firstname: "developer",
        lastname: "developer",
        role: "developer",
        username: "developer",
        email: "developer@pesona_linggarjati.com",
        password: await bcrypt.hash("developer", 10),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstname: "super",
        lastname: "admin",
        role: "super_admin",
        username: "super_admin",
        email: "super_admin@pesona_linggarjati.com",
        password: await bcrypt.hash("super_admin", 10),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstname: "admin",
        lastname: "admin",
        role: "admin",
        username: "admin",
        email: "admin@pesona_linggarjati.com",
        password: await bcrypt.hash("admin", 10),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstname: "costumer",
        lastname: "costumer",
        role: "costumer",
        username: "costumer",
        email: "costumer@pesona_linggarjati.com",
        password: await bcrypt.hash("costumer", 10),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Users", null, {
      restartIdentity: true,
      truncate: true,
      cascade: true,
    });
  },
};
