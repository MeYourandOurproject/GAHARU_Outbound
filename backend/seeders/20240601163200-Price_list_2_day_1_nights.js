"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Price_list_2_day_1_nights", [
      {
        paket_tour_id: 1,
        package: "Executive",
        _33_pax: 550000,
        _50_pax: 700000,
        _56_pax: 800000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        paket_tour_id: 1,
        package: "Premium",
        _33_pax: 450000,
        _50_pax: 600000,
        _56_pax: 700000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        paket_tour_id: 1,
        package: "Students",
        _33_pax: 350000,
        _50_pax: 500000,
        _56_pax: 600000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Price_list_2_day_1_nights", null, {
      restartIdentity: true,
      truncate: true,
      cascade: true,
    });
  },
};
