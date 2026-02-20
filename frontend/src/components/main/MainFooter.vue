<template>
  <footer class="footer-wrapper">
    <!-- TOP CONTENT -->
    <div class="container-xxl py-5 px-4">
      <div class="row g-5 align-items-start text-start">
        <!-- LOGO -->
        <div class="col-lg-3 text-start align-items-start">
          <img
            src="../../assets/logo_gaharu_white.png"
            class="footer-logo mt-0"
          />
          <!-- <p class="footer-desc mt-3">
            Gaharu Outbound menyediakan layanan outbound, team building,
            rafting, paintball dan berbagai aktivitas adventure di Bandung.
          </p> -->
        </div>

        <!-- ALAMAT -->
        <div class="col-lg-3">
          <h6 class="footer-title">ALAMAT</h6>
          <p class="footer-text">
            Bandung, Jawa Barat <br />
            Area Lembang, Ciwidey, Pangalengan & Sekitarnya
          </p>
        </div>

        <!-- KONTAK -->
        <div class="col-lg-2">
          <h6 class="footer-title">KONTAK KAMI</h6>
          <p class="footer-text mb-2">
            <i class="bi bi-telephone me-2"></i> 0858-0295-6931
          </p>
          <p class="footer-text">
            <i class="bi bi-whatsapp me-2"></i> 0858-0295-6931
          </p>

          <div class="footer-social mt-3">
            <a href="https://www.instagram.com/gaharuoutbound/"
              ><i class="bi bi-instagram"></i
            ></a>
            <a href="https://www.tiktok.com/@gaharu.outbound"
              ><i class="bi bi-tiktok"></i
            ></a>
            <a
              href="https://www.facebook.com/profile.php?id=61574137567777&locale=id_ID"
              ><i class="bi bi-facebook"></i
            ></a>
          </div>
        </div>

        <!-- DESKRIPSI -->
        <div class="col-lg-4">
          <h6 class="footer-title">GAHARU OUTBOUND</h6>
          <p class="footer-text">
            Nikmati sensasi seru <span class="fst-italic">Rafting</span> di arus
            deras, menjelajah alam dengan
            <span class="fst-italic">Jeep Land Rover</span> dan
            <span class="fst-italic">ATV</span>, hingga adu ketangkasan lewat
            <span class="fst-italic">Paintball</span> dan
            <span class="fst-italic">Flying fox</span>. Bersama pemandu
            profesional dan fasilitas terbaik, kami siap menghadirkan kegiatan
            <span class="fst-italic">Team Building</span> dan
            <span class="fst-italic">Fun Games</span> yang mempererat kerja sama
            dan menciptakan momen tak terlupakan.
          </p>
        </div>
      </div>

      <!-- LINE -->
      <hr class="footer-divider" />

      <!-- BOTTOM NAV -->
      <div class="row align-items-center pt-3">
        <div class="col-md-6 text-center text-md-start footer-nav col-none">
          <router-link to="/">Home</router-link>
          <router-link to="/price-list">Paket</router-link>
          <router-link to="/galery">Galeri</router-link>
          <router-link to="/about-us">Kontak</router-link>
          <router-link to="/artikel">Artikel</router-link>
        </div>

        <div class="col-md-6 text-center text-md-end footer-copy">
          © 2026 Gaharu Outbound. All rights reserved.
        </div>
      </div>
    </div>

    <!-- FLOATING WHATSAPP -->
    <a href="https://wa.me/6285802956931" class="wa-float">
      <i class="bi bi-whatsapp"></i>
    </a>
  </footer>
</template>

<style>
.footer-wrapper {
  position: relative;
  background: linear-gradient(90deg, #41b83f, #2c7f31);
  color: white;
  overflow: hidden;
}

/* Decorative curve effect */
.footer-wrapper {
  position: relative;
  background: linear-gradient(90deg, #41b83f, #2c7f31);
  color: white;
  overflow: hidden;
  z-index: 1;
}

.footer-wrapper::before {
  content: "";
  position: absolute;
  left: -150px;
  top: 0;
  width: 500px;
  height: 500px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 50%;
  z-index: 0; /* ⬅ penting */
  pointer-events: none; /* ⬅ ini yang bikin bisa diklik */
}

/* Pastikan konten di atas pseudo element */
.footer-wrapper > * {
  position: relative;
  z-index: 2;
}

.footer-logo {
  height: 70px;
}

.footer-title {
  font-weight: 700;
  margin-bottom: 15px;
  letter-spacing: 1px;
}

.footer-text {
  opacity: 0.9;
  line-height: 1.7;
  font-size: 14px;
  text-align: justify;
}

.footer-desc {
  font-size: 14px;
  opacity: 0.85;
}

.footer-divider {
  border-color: rgba(255, 255, 255, 0.3);
}

.footer-social a {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border: 1px solid rgba(255, 255, 255);
  border-radius: 30%;
  color: white;
  margin-right: 10px;
  transition: 0.3s;
}

.footer-social a:hover {
  background: white;
  color: #41b83f;
}

.footer-nav a {
  color: white;
  margin-right: 20px;
  text-decoration: none;
  font-weight: 500;
}

.footer-nav a:hover {
  text-decoration: underline;
}

.footer-copy {
  font-size: 14px;
  opacity: 0.85;
}

/* Floating WA */
.wa-float {
  position: fixed;
  left: -20px;
  bottom: 35px;
  background: #25d366;
  color: white;
  padding: 12px 30px;
  border-radius: 50px;
  font-weight: 500;
  text-decoration: none;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  z-index: 999;
}

.wa-float:hover {
  transform: translateY(-3px);
  background: #1ebe5b;
}

@media (max-width: 768px) {
  .footer-nav {
    margin-bottom: 10px;
  }
}
</style>
