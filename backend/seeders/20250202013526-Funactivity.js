"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Funactivities", [
      {
        name: "Rafting Pangalengan",
        picture: "https://placehold.co/600x400",
        cost_1: 150000,
        ket_cost_1: "",
        cost_2: 175000,
        ket_cost_2: "(1 x Makan)",
        cost_add: 0,
        ket_cost_add: "",
        satuan: "orang",
        min_person: 5,
        ket_person: "Orang",
        lokasi: "Sungai Palayangan",
        jarak: 5,
        waktu: "(90 Menit)",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "ATV Pangalengan",
        picture: "https://placehold.co/600x400",
        cost_1: 175000,
        ket_cost_1: "(Single: 1 ATV untuk 1 orang)",
        cost_2: 225000,
        ket_cost_2: "(Tandem: 1 ATV untuk 2 orang)",
        cost_add: 0,
        ket_cost_add: "",
        satuan: "ATV",
        min_person: 3,
        ket_person: "unit ATV (3-6 orang)",
        lokasi: "Kebun Teh Wanasari, Pangalengan, Bandung",
        jarak: 6,
        waktu: "(90 Menit)",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Funactivities", null, {
      restartIdenrestartIdentity: true,
      truncate: true,
      cascade: true,
    });
  },
};
