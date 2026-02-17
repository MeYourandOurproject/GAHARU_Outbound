'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert("PriceLists", [

      // =========================
      // RAFTING (service_id: 1)
      // =========================
      {
        service_id: 1,
        title: "Rafting Paket Hemat",
        slug: "rafting-paket-hemat",
        price: 175000,
        unit: "per orang",
        duration: "2 Jam",
        facilities: JSON.stringify([
          "Perlengkapan rafting lengkap",
          "Instruktur profesional",
          "Asuransi",
          "Welcome drink"
        ]),
        description: "Paket rafting seru cocok untuk pemula dan rombongan kecil.",
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
        meta_title: "Rafting Paket Hemat Bandung",
        meta_description: "Paket rafting murah dan aman di Bandung.",
        is_featured: true,
        is_active: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        service_id: 1,
        title: "Rafting Paket Gathering",
        slug: "rafting-paket-gathering",
        price: 225000,
        unit: "per orang",
        duration: "3 Jam",
        facilities: JSON.stringify([
          "Perlengkapan rafting",
          "Instruktur & rescue team",
          "Makan siang",
          "Dokumentasi"
        ]),
        description: "Paket rafting lengkap untuk company gathering.",
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
        meta_title: "Rafting Gathering Bandung",
        meta_description: "Paket rafting untuk acara perusahaan.",
        is_featured: false,
        is_active: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      // =========================
      // OFFROAD (service_id: 2)
      // =========================
      {
        service_id: 2,
        title: "Offroad Short Trip",
        slug: "offroad-short-trip",
        price: 3500000,
        unit: "per jeep",
        duration: "2 Jam",
        facilities: JSON.stringify([
          "Jeep 4x4",
          "Driver berpengalaman",
          "BBM",
          "Snack"
        ]),
        description: "Petualangan offroad singkat namun tetap menantang.",
        image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
        meta_title: "Offroad Short Trip Bandung",
        meta_description: "Offroad jeep Bandung durasi pendek.",
        is_featured: true,
        is_active: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        service_id: 2,
        title: "Offroad Long Adventure",
        slug: "offroad-long-adventure",
        price: 5000000,
        unit: "per jeep",
        duration: "4 Jam",
        facilities: JSON.stringify([
          "Jeep 4x4",
          "Driver",
          "BBM",
          "Makan siang",
          "Dokumentasi"
        ]),
        description: "Offroad ekstrem dengan jalur lebih panjang dan menantang.",
        image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
        meta_title: "Offroad Adventure Bandung",
        meta_description: "Paket offroad ekstrem Bandung.",
        is_featured: false,
        is_active: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      // =========================
      // ATV (service_id: 3)
      // =========================
      {
        service_id: 3,
        title: "ATV Fun Track",
        slug: "atv-fun-track",
        price: 150000,
        unit: "per orang",
        duration: "30 Menit",
        facilities: JSON.stringify([
          "ATV",
          "Helm & pelindung",
          "Instruktur"
        ]),
        description: "ATV santai cocok untuk pemula.",
        image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e",
        meta_title: "ATV Fun Track Bandung",
        meta_description: "ATV santai dan aman.",
        is_featured: false,
        is_active: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        service_id: 3,
        title: "ATV Extreme Track",
        slug: "atv-extreme-track",
        price: 250000,
        unit: "per orang",
        duration: "1 Jam",
        facilities: JSON.stringify([
          "ATV",
          "Safety gear lengkap",
          "Instruktur",
          "Dokumentasi"
        ]),
        description: "ATV dengan trek lumpur dan hutan ekstrem.",
        image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e",
        meta_title: "ATV Extreme Bandung",
        meta_description: "ATV ekstrem Bandung.",
        is_featured: true,
        is_active: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      // =========================
      // PAINTBALL (service_id: 4)
      // =========================
      {
        service_id: 4,
        title: "Paintball Basic",
        slug: "paintball-basic",
        price: 120000,
        unit: "per orang",
        duration: "1 Game",
        facilities: JSON.stringify([
          "Senjata paintball",
          "Peluru 50 butir",
          "Seragam & masker"
        ]),
        description: "Game paintball seru untuk tim kecil.",
        image: "https://images.unsplash.com/photo-1605632566803-4a8a9e8b9a3e",
        meta_title: "Paintball Basic Bandung",
        meta_description: "Paintball murah Bandung.",
        is_featured: false,
        is_active: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        service_id: 4,
        title: "Paintball War Game",
        slug: "paintball-war-game",
        price: 200000,
        unit: "per orang",
        duration: "2 Game",
        facilities: JSON.stringify([
          "Senjata paintball",
          "Peluru 100 butir",
          "Seragam",
          "Wasit game"
        ]),
        description: "Game paintball strategis untuk team building.",
        image: "https://images.unsplash.com/photo-1605632566803-4a8a9e8b9a3e",
        meta_title: "Paintball War Game Bandung",
        meta_description: "Paintball team building Bandung.",
        is_featured: true,
        is_active: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      // =========================
      // FLYING FOX (service_id: 5)
      // =========================
      {
        service_id: 5,
        title: "Flying Fox Single Ride",
        slug: "flying-fox-single-ride",
        price: 50000,
        unit: "per orang",
        duration: "1 Kali Luncur",
        facilities: JSON.stringify([
          "Safety harness",
          "Instruktur",
          "Helm"
        ]),
        description: "Flying fox seru untuk anak dan dewasa.",
        image: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429",
        meta_title: "Flying Fox Bandung",
        meta_description: "Flying fox aman dan seru.",
        is_featured: false,
        is_active: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        service_id: 5,
        title: "Flying Fox Unlimited",
        slug: "flying-fox-unlimited",
        price: 150000,
        unit: "per orang",
        duration: "1 Jam",
        facilities: JSON.stringify([
          "Unlimited ride",
          "Safety gear lengkap",
          "Instruktur"
        ]),
        description: "Flying fox sepuasnya selama 1 jam.",
        image: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429",
        meta_title: "Flying Fox Unlimited Bandung",
        meta_description: "Flying fox unlimited Bandung.",
        is_featured: true,
        is_active: true,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("PriceLists", null, {});
  }
};
