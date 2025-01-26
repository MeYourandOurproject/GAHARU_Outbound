"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn("Paket_tours", "slug", {
      type: Sequelize.STRING,
      allowNull: true,
      after: "name",
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn("Paket_tours", "slug");
  },
};
