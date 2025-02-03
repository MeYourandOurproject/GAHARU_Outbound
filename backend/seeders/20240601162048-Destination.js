"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Destinations", [
      {
        paket_tour_id: 1,
        nama: "Situ Cileunca",
        alamat: "https://maps.app.goo.gl/6bzphUzJiMMybeS28",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        paket_tour_id: 1,
        nama: "Taman Lagit",
        alamat: "https://maps.app.goo.gl/ytftRRsqWriVEN1e7",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        paket_tour_id: 1,
        nama: "Riung Gunung",
        alamat: "https://maps.app.goo.gl/ZVPhELZ2ZgCXcYNn6",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        paket_tour_id: 1,
        nama: "Nimo Highland",
        alamat: "https://maps.app.goo.gl/ZVPhELZ2ZgCXcYNn6",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        paket_tour_id: 1,
        nama: "Teh Jangkung",
        alamat: "https://maps.app.goo.gl/ZVPhELZ2ZgCXcYNn6",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        paket_tour_id: 1,
        nama: "Cibolang Hotspring",
        alamat: "https://maps.app.goo.gl/ZVPhELZ2ZgCXcYNn6",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        paket_tour_id: 1,
        nama: "Penakaran Rusa",
        alamat: "https://maps.app.goo.gl/ZVPhELZ2ZgCXcYNn6",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        paket_tour_id: 1,
        nama: "Cerita Alam Hotspring",
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
