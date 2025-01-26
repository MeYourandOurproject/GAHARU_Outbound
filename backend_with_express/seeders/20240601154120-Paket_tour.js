"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Paket_tours", [
      {
        name: "Sapan Menyala",
        picture: "e",
        price: 250000,
        country: "Indonesia",
        city: "Bandung Regency",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Paket_tours", null, {
      restartIdentity: true,
      truncate: true,
      cascade: true,
    });
  },
};
