'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Funactivities', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      cost_1: {
        type: Sequelize.INTEGER
      },
      ket_cost_1: {
        type: Sequelize.STRING
      },
      cost_2: {
        type: Sequelize.INTEGER
      },
      ket_cost_2: {
        type: Sequelize.STRING
      },
      cost_add: {
        type: Sequelize.INTEGER
      },
      ket_cost_add: {
        type: Sequelize.STRING
      },
      satuan: {
        type: Sequelize.STRING
      },
      min_person: {
        type: Sequelize.INTEGER
      },
      ket_person: {
        type: Sequelize.STRING
      },
      lokasi: {
        type: Sequelize.STRING
      },
      jarak: {
        type: Sequelize.INTEGER
      },
      waktu: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Funactivities');
  }
};