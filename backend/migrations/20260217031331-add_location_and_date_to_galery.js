"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn("Galeries", "location", {
      type: Sequelize.STRING,
      allowNull: true,
      after: "service_id",
    });
    await queryInterface.addColumn("Galeries", "date", {
      type: Sequelize.DATEONLY,
      allowNull: true,
      after: "location",
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn("Galeries", "location");
    await queryInterface.removeColumn("Galeries", "date");
  },
};