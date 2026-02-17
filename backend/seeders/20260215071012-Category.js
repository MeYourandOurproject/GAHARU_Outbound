'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert("Categories", [

      {
        name: "Team Building",
        slug: "team-building",
        description: "Program team building untuk perusahaan dan komunitas.",
        meta_title: "Team Building Gaharu Outbound",
        meta_description: "Program team building terbaik untuk perusahaan di Bandung.",
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        name: "Corporate Gathering",
        slug: "corporate-gathering",
        description: "Paket gathering perusahaan dengan aktivitas outdoor.",
        meta_title: "Corporate Gathering Bandung",
        meta_description: "Paket gathering perusahaan seru dan profesional.",
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        name: "Outbound Sekolah",
        slug: "outbound-sekolah",
        description: "Outbound edukatif untuk siswa SD, SMP, dan SMA.",
        meta_title: "Outbound Sekolah Bandung",
        meta_description: "Program outbound edukatif untuk sekolah.",
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        name: "Leadership Training",
        slug: "leadership-training",
        description: "Pelatihan kepemimpinan berbasis experiential learning.",
        meta_title: "Leadership Training Outbound",
        meta_description: "Pelatihan kepemimpinan profesional.",
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        name: "Adventure Activities",
        slug: "adventure-activities",
        description: "Rafting, Offroad, ATV, Flying Fox, Paintball.",
        meta_title: "Adventure Activities Gaharu",
        meta_description: "Aktivitas adventure seru di Bandung.",
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        name: "Fun Games",
        slug: "fun-games",
        description: "Permainan seru untuk membangun kekompakan.",
        meta_title: "Fun Games Outbound",
        meta_description: "Fun games untuk event dan gathering.",
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        name: "Penginapan & Paket Wisata",
        slug: "penginapan-dan-paket-wisata",
        description: "Penginapan nyaman dan paket wisata lengkap.",
        meta_title: "Penginapan & Paket Wisata Gaharu",
        meta_description: "Paket wisata lengkap dengan penginapan nyaman.",
        createdAt: new Date(),
        updatedAt: new Date()
      }

    ]);

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Categories", null, {});
  }
};
