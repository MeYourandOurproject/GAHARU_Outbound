"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Price_list_1_days", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      paket_tour_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "Paket_tours",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      package: {
        type: Sequelize.STRING,
      },
      _33_pax: {
        type: Sequelize.DECIMAL,
      },
      _50_pax: {
        type: Sequelize.DECIMAL,
      },
      _55_pax: {
        type: Sequelize.DECIMAL,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Price_list_1_days");
  },
};
