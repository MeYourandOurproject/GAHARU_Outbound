"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Social_media", [
      {
        nama: "Instagram",
        link: "https://www.instagram.com/adventure",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nama: "Facebook",
        link: "adventure@facebook.com",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Social_media", null, {
      restartIdentity: true,
      truncate: true,
      cascade: true,
    });
  },
};
