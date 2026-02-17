'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert("Services", [

      {
        id: 1,
        name: "Rafting",
        slug: "rafting-bandung",
        description: "Paket rafting seru dengan instruktur profesional dan perlengkapan lengkap.",
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
        meta_title: "Rafting Bandung - Gaharu Outbound",
        meta_description: "Paket rafting terbaik di Bandung dengan fasilitas lengkap.",
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        id: 2,
        name: "Offroad",
        slug: "offroad-bandung",
        description: "Petualangan offroad menantang dengan jeep 4x4 di jalur ekstrem.",
        image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
        meta_title: "Offroad Bandung - Gaharu Outbound",
        meta_description: "Pengalaman offroad terbaik di Bandung.",
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        id: 3,
        name: "ATV Adventure",
        slug: "atv-adventure-bandung",
        description: "ATV adventure dengan trek hutan dan lumpur yang menantang.",
        image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e",
        meta_title: "ATV Adventure Bandung",
        meta_description: "Paket ATV seru dan aman untuk semua usia.",
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        id: 4,
        name: "Paintball",
        slug: "paintball-bandung",
        description: "Game paintball strategis untuk team building dan gathering.",
        image: "https://images.unsplash.com/photo-1605632566803-4a8a9e8b9a3e",
        meta_title: "Paintball Bandung",
        meta_description: "Arena paintball profesional untuk event dan gathering.",
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        id: 5,
        name: "Flying Fox",
        slug: "flying-fox-bandung",
        description: "Flying fox dengan standar keamanan tinggi dan instruktur berpengalaman.",
        image: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429",
        meta_title: "Flying Fox Bandung",
        meta_description: "Flying fox seru untuk anak dan dewasa.",
        createdAt: new Date(),
        updatedAt: new Date()
      }

    ]);

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Services", null, {});
  }
};
