"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Destinations", [
      {
        paket_tour_id: 1,
        nama: "Sabilunajjah Boarding School",
        alamat: "https://maps.app.goo.gl/6bzphUzJiMMybeS28",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        paket_tour_id: 1,
        nama: "PT Fuji Seiki Indonesia",
        alamat: "https://maps.app.goo.gl/ytftRRsqWriVEN1e7",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        paket_tour_id: 1,
        nama: "Masjid Qudwah Majalaya",
        alamat: "https://maps.app.goo.gl/ZVPhELZ2ZgCXcYNn6",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Destinations", null, {
      restartIdentity: true,
      truncate: true,
      cascade: true,
    });
  },
};
