"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Price_list_1_days", [
      {
        paket_tour_id: 1,
        package: "Executive",
        _33_pax: 350000,
        _50_pax: 500000,
        _55_pax: 600000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        paket_tour_id: 1,
        package: "Premium",
        _33_pax: 250000,
        _50_pax: 400000,
        _55_pax: 500000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        paket_tour_id: 1,
        package: "Students",
        _33_pax: 150000,
        _50_pax: 300000,
        _55_pax: 400000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Price_list_1_days", null, {
      restartIdentity: true,
      truncate: true,
      cascade: true,
    });
  },
};
