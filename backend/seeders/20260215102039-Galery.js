'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {

    const now = new Date();

    await queryInterface.bulkInsert("Galeries", [

      // RAFTING
      {
        img_url: '[ "https://images.unsplash.com/photo-1507525428034-b723cf961d3e" ]',
        title: "Rafting Seru",
        description: "Keseruan rafting bersama tim.",
        service_id: 1,
        location: "Pangalengan, Bandung",
        date: "2026-01-15",
        createdAt: now,
        updatedAt: now
      },
      {
        img_url: '[ "https://images.unsplash.com/photo-1529336953121-ad5a0d43d0d2" ]',
        title: "Rafting Adventure",
        description: "Arung jeram penuh tantangan.",
        service_id: 1,
        location: "Pangalengan, Bandung",
        date: "2026-01-20",
        createdAt: now,
        updatedAt: now
      },

      // OFFROAD
      {
        img_url: '[ "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee" ]',
        title: "Offroad Jeep",
        description: "Jeep 4x4 di jalur ekstrem.",
        service_id: 2,
        location: "Ciwidey, Bandung",
        date: "2026-02-01",
        createdAt: now,
        updatedAt: now
      },
      {
        img_url: '[ "https://images.unsplash.com/photo-1542367592-8849eb950fd8" ]',
        title: "Offroad Adventure",
        description: "Petualangan offroad menantang.",
        service_id: 2,
        location: "Ciwidey, Bandung",
        date: "2026-02-05",
        createdAt: now,
        updatedAt: now
      },

      // ATV
      {
        img_url: '[ "https://images.unsplash.com/photo-1607746882042-944635dfe10e" ]',
        title: "ATV Track",
        description: "ATV di trek lumpur.",
        service_id: 3,
        location: "Lembang, Bandung",
        date: "2026-02-10",
        createdAt: now,
        updatedAt: now
      },
      {
        img_url: '[ "https://images.unsplash.com/photo-1599058917212-d750089bc07e" ]',
        title: "ATV Hutan",
        description: "Petualangan ATV di hutan.",
        service_id: 3,
        location: "Lembang, Bandung",
        date: "2026-02-12",
        createdAt: now,
        updatedAt: now
      },

      // PAINTBALL
      {
        img_url: '[ "https://images.unsplash.com/photo-1605632566803-4a8a9e8b9a3e" ]',
        title: "Paintball War",
        description: "Strategi dan kerjasama tim.",
        service_id: 4,
        location: "Bandung Timur",
        date: "2026-02-14",
        createdAt: now,
        updatedAt: now
      },
      {
        img_url: '[ "https://images.unsplash.com/photo-1529336953121-ad5a0d43d0d2" ]',
        title: "Paintball Arena",
        description: "Arena paintball profesional.",
        service_id: 4,
        location: "Bandung Timur",
        date: "2026-02-16",
        createdAt: now,
        updatedAt: now
      },

      // FLYING FOX
      {
        img_url: '[ "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429" ]',
        title: "Flying Fox View",
        description: "Flying fox dengan pemandangan indah.",
        service_id: 5,
        location: "Dago Atas, Bandung",
        date: "2026-02-18",
        createdAt: now,
        updatedAt: now
      },
      {
        img_url: '[ "https://images.unsplash.com/photo-1507525428034-b723cf961d3e" ]',
        title: "Flying Fox Adventure",
        description: "Seru dan aman untuk semua usia.",
        service_id: 5,
        location: "Dago Atas, Bandung",
        date: "2026-02-20",
        createdAt: now,
        updatedAt: now
      }

    ]);

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Galeries", null, {});
  }
};
