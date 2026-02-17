'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert("Artikels", [

      {
        title: "Manfaat Team Building untuk Perusahaan",
        slug: "manfaat-team-building-untuk-perusahaan",
        excerpt: "Team building membantu meningkatkan komunikasi dan kekompakan tim dalam perusahaan.",
        content: `<p>Program team building sangat penting untuk meningkatkan kerja sama tim, komunikasi, dan produktivitas perusahaan.</p>
        <p>Melalui aktivitas outbound seperti fun games dan problem solving challenge, peserta belajar bekerja dalam tekanan dan membangun kepercayaan.</p>`,
        pictures: null,
        thumbnail: "/images/team-building.jpg",
        category_id: 1,
        author_id: 3,
        status: "published",
        views: 120,
        meta_title: "Manfaat Team Building untuk Perusahaan | Gaharu Outbound",
        meta_description: "Ketahui manfaat team building untuk meningkatkan kinerja dan kekompakan tim perusahaan Anda.",
        published_at: new Date(),
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        title: "Outbound Sekolah untuk Meningkatkan Leadership Siswa",
        slug: "outbound-sekolah-meningkatkan-leadership-siswa",
        excerpt: "Outbound sekolah membantu membentuk karakter dan jiwa kepemimpinan siswa.",
        content: `<p>Program outbound sekolah dirancang untuk meningkatkan keberanian, tanggung jawab, dan kepemimpinan siswa.</p>
        <p>Kegiatan dilakukan secara menyenangkan namun tetap edukatif.</p>`,
        pictures: null,
        thumbnail: "/images/outbound-sekolah.jpg",
        category_id: 3,
        author_id: 3,
        status: "published",
        views: 85,
        meta_title: "Outbound Sekolah Bandung | Gaharu Outbound",
        meta_description: "Program outbound sekolah untuk meningkatkan leadership dan karakter siswa.",
        published_at: new Date(),
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        title: "Keseruan Rafting di Bandung Bersama Gaharu",
        slug: "keseruan-rafting-di-bandung",
        excerpt: "Nikmati pengalaman rafting seru dan aman bersama tim profesional Gaharu.",
        content: `<p>Rafting menjadi salah satu aktivitas favorit dalam paket adventure activities.</p>
        <p>Didampingi instruktur berpengalaman dan standar keamanan tinggi.</p>`,
        pictures: null,
        thumbnail: "/images/rafting.jpg",
        category_id: 5,
        author_id: 3,
        status: "published",
        views: 200,
        meta_title: "Rafting Bandung Seru & Aman | Gaharu Outbound",
        meta_description: "Paket rafting terbaik di Bandung dengan standar keamanan tinggi.",
        published_at: new Date(),
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        title: "Corporate Gathering yang Berkesan dan Profesional",
        slug: "corporate-gathering-berkesan-dan-profesional",
        excerpt: "Buat acara gathering perusahaan Anda lebih berkesan dengan konsep outbound.",
        content: `<p>Corporate gathering tidak hanya sekadar hiburan, tetapi juga strategi membangun relasi dan budaya kerja.</p>
        <p>Gaharu Outbound menyediakan paket lengkap dengan penginapan dan aktivitas outdoor.</p>`,
        pictures: null,
        thumbnail: "/images/corporate-gathering.jpg",
        category_id: 2,
        author_id: 3,
        status: "published",
        views: 65,
        meta_title: "Corporate Gathering Bandung | Gaharu Outbound",
        meta_description: "Paket corporate gathering profesional di Bandung.",
        published_at: new Date(),
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        title: "Fun Games untuk Meningkatkan Kekompakan Tim",
        slug: "fun-games-meningkatkan-kekompakan-tim",
        excerpt: "Fun games adalah metode efektif untuk membangun kerja sama tim.",
        content: `<p>Fun games dirancang untuk membangun komunikasi, kreativitas, dan kebersamaan.</p>
        <p>Cocok untuk sekolah, komunitas, maupun perusahaan.</p>`,
        pictures: null,
        thumbnail: "/images/fun-games.jpg",
        category_id: 6,
        author_id: 3,
        status: "published",
        views: 40,
        meta_title: "Fun Games Outbound Seru | Gaharu Outbound",
        meta_description: "Fun games seru untuk event dan team building.",
        published_at: new Date(),
        createdAt: new Date(),
        updatedAt: new Date()
      }

    ]);

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Artikels", null, {});
  }
};
