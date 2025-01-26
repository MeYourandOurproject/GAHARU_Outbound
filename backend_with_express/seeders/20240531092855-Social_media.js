"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Social_media", [
      {
        nama: "Instagram",
        link: "https://www.instagram.com/pesonalinggarjati/?igsh=bnlmejF6bjNubjRz",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nama: "Facebook",
        link: "pesona_linggarjari@facebook.com",
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
