"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn("Funactivities", "picture", {
      type: Sequelize.STRING,
      allowNull: false,
      after: "name",
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn("Funactivities", "picture");
  },
};
