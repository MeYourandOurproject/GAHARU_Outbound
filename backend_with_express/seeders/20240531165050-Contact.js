"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Contacts", [
      {
        email: "pesona_linggarjati@gmail.com",
        website: "pesona_linggarjati.com",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Contacts", null, {
      retartIndentity: true,
      truncate: true,
      cascade: true,
    });
  },
};
