"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Contact_social_media", [
      {
        contact_id: 1,
        social_media_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        contact_id: 1,
        social_media_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Contact_social_media", null, {
      restartIdentity: true,
      truncate: true,
      cascade: true,
    });
  },
};
