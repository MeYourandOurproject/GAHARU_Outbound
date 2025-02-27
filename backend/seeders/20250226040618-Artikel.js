"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Artikels", [
      {
        title: "Fakta-Fakta Situ Cileunca, Pangalengan",
        slug: "fakta-fakta-situ-cileunca-pangalengan",
        thumbnail: "https://placehold.co/600x400",
        author: "Ruly Abdul Rasyid",
        content: `Situ Cileunca adalah danau buatan yang terletak di Pangalengan, Kabupaten Bandung, Jawa Barat. Berikut beberapa fakta menarik tentang Situ Cileunca:

1. Danau Buatan Sejak Zaman Kolonial
Situ Cileunca dibuat pada masa kolonial Belanda sekitar tahun 1918-1926 dengan tujuan sebagai sumber air untuk PLTA dan irigasi pertanian di daerah Pangalengan.

2. Luas dan Kedalaman
Danau ini memiliki luas sekitar 1.400 hektar dengan kedalaman sekitar 17 meter di titik terdalamnya.

3. Sumber Air Bersih untuk Kota Bandung
Air dari Situ Cileunca mengalir melalui Sungai Palayangan dan digunakan sebagai sumber air bersih untuk Kota Bandung.

4. Wisata Alam dan Adventure
Situ Cileunca menawarkan berbagai aktivitas wisata, seperti:

Rafting di Sungai Palayangan
Camping dan glamping di sekitar danau
Naik perahu mengelilingi danau
Menikmati sunrise dan sunset yang indah
5. Jembatan Cinta
Ada sebuah jembatan yang menghubungkan dua desa di sekitar danau, yang dikenal sebagai Jembatan Cinta. Konon, banyak pasangan yang datang ke sini untuk mengabadikan momen romantis.

6. Suhu Sejuk dan Berkabut
Karena berada di ketinggian sekitar 1.550 mdpl, udara di Situ Cileunca sangat sejuk dengan suhu bisa mencapai 10-20°C, terutama saat pagi dan malam hari.

7. Dikelilingi Kebun Teh dan Perkebunan Sayur
Daerah sekitar Situ Cileunca terkenal dengan hamparan kebun teh dan perkebunan sayur seperti wortel, kentang, dan kol, yang menjadi mata pencaharian utama warga sekitar.`,
        picture: JSON.stringify([
          "https://placehold.co/600x400",
          "https://placehold.co/600x400",
          "https://placehold.co/600x400",
        ]),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Artikels", null, {
      restartIdenrestartIdentity: true,
      truncate: true,
      cascade: true,
    });
  },
};
