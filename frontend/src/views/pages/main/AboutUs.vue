<template>
  <div class="about-page">

    <!-- HERO -->
    <section class="about-hero d-flex align-items-center text-center text-light">
      <div class="container">
        <h1 class="fw-bold display-5">Tentang Gaharu Outbound</h1>
        <p class="lead mt-3">
          Mitra terbaik untuk kegiatan outbound, adventure, dan pembentukan karakter.
        </p>
      </div>
    </section>

    <!-- SECTION PROFIL -->
    <section class="about-section container py-5">
      <div class="row align-items-center">

        <div class="col-md-6 mb-4 mb-md-0">
          <img src="../../assets/team_building.jpg" class="about-img" alt="about gaharu outbound" />
        </div>

        <div class="col-md-6">
          <h2 class="fw-bold mb-3">Profil Gaharu Outbound</h2>
          <p class="text-secondary">
            Gaharu Outbound adalah penyedia layanan outbound dan adventure yang berlokasi di Bandung. 
            Kami berkomitmen menghadirkan pengalaman kegiatan luar ruang yang aman, menyenangkan, dan penuh pembelajaran.
          </p>

          <p class="text-secondary">
            Dengan instruktur profesional dan program yang telah dirancang sesuai kebutuhan perusahaan, sekolah, 
            komunitas, maupun keluarga, kami siap membantu Anda membangun kekompakan, kreativitas, dan karakter positif.
          </p>
        </div>

      </div>
    </section>

    <!-- SECTION VISI MISI -->
    <section class="visi-misi py-5">
      <div class="container text-center">
        <h2 class="fw-bold mb-4">Visi & Misi</h2>

        <div class="row">
          <div class="col-md-6 mb-4">
            <div class="vm-box p-4 shadow-sm">
              <h4 class="fw-bold mb-3">Visi</h4>
              <p class="text-secondary">
                Menjadi penyedia layanan outbound dan adventure terbaik di Jawa Barat 
                yang memberikan pengalaman edukatif, kreatif, dan berkesan.
              </p>
            </div>
          </div>

          <div class="col-md-6 mb-4">
            <div class="vm-box p-4 shadow-sm">
              <h4 class="fw-bold mb-3">Misi</h4>
              <ul class="text-secondary text-start list-misi">
                <li>Menyediakan kegiatan outbound yang aman dan berkualitas.</li>
                <li>Menghadirkan program team building yang menyatukan dan memperkuat karakter.</li>
                <li>Memberikan pengalaman adventure yang fun, menantang, dan terarah.</li>
                <li>Mendukung sekolah & institusi dalam pembelajaran berbasis pengalaman.</li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </section>

    <!-- SECTION LAYANAN -->
    <section class="layanan-section container py-5">
      <h2 class="fw-bold text-center mb-4">Layanan Kami</h2>

      <div class="row g-4">

        <div class="col-md-4">
          <div class="service-box p-4 shadow-sm">
            <h5 class="fw-semibold mb-2">Outbound & Team Building</h5>
            <p class="text-secondary">Kegiatan penguatan karakter, komunikasi, dan kerja sama tim.</p>
          </div>
        </div>

        <div class="col-md-4">
          <div class="service-box p-4 shadow-sm">
            <h5 class="fw-semibold mb-2">Adventure & Fun Games</h5>
            <p class="text-secondary">ATV, Paintball, Flying Fox, Rafting, dan banyak permainan seru lainnya.</p>
          </div>
        </div>

        <div class="col-md-4">
          <div class="service-box p-4 shadow-sm">
            <h5 class="fw-semibold mb-2">Paket Kegiatan Instansi</h5>
            <p class="text-secondary">Program untuk perusahaan, sekolah, komunitas, dan keluarga.</p>
          </div>
        </div>

      </div>
    </section>

    <!-- CTA -->
    <section class="cta-about text-center py-5">
      <h2 class="fw-bold mb-3">Siap Memulai Petualangan Seru?</h2>
      <p class="text-secondary mb-4">Hubungi kami dan wujudkan kegiatan outbound terbaik bersama Gaharu Outbound.</p>
      <a href="https://wa.me/628xxxxxx" class="btn btn-success px-4 py-2 fw-semibold">
        Hubungi Kami
      </a>
    </section>

  </div>
</template>

<style scoped>
.about-hero {
  height: 60vh;
  background-image: url("../../assets/bg-home.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.about-img {
  width: 100%;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
}

/* Box visi misi */
.vm-box {
  background: #fff;
  border-radius: 12px;
}

/* List misi */
.list-misi li {
  margin-bottom: 8px;
}

/* Layanan */
.service-box {
  background: #fff;
  border-radius: 12px;
  min-height: 160px;
}

.cta-about {
  background: #f8f8f8;
}
</style>
