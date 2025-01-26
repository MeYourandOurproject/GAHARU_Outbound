"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Phones", [
      {
        contact_id: 1,
        nama: "Admin",
        phone: "087708972304",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        contact_id: 1,
        nama: "Admin2",
        phone: "087708972304",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        contact_id: 1,
        nama: "Admin3",
        phone: "087708972304",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Phones", null, {
      restartIdentity: true,
      truncate: true,
      cascade: true,
    });
  },
};
