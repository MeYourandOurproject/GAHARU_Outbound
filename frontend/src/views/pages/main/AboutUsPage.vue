<template>
  <div class="contact-page">
    <!-- HERO (TETAP PUNYA KAMU) -->
    <section class="contact-hero d-flex align-items-end text-center pb-md-5 pb-4">
      <div class="container">
        <h1 class="fw-bold title-page">Kontak Gaharu Outbound</h1>
        <p class="lead-page text-success">
          Hubungi kami untuk pemesanan dan informasi kegiatan outbound
        </p>
      </div>
    </section>

    <!-- CONTENT -->
    <section class="contact-section py-5 px-3">
      <div class="container-xxl">
        <div class="row g-5 align-items-center">
          <!-- LEFT SIDE -->
          <div class="col-lg-6 text-start">
            
            <span class="section-sub">GAHARU Outbound Bandung</span>
            <h1 class="fw-bold mb-3">Kontak GAHARU Outbound</h1>

            <p class="text-muted mb-5">
              Hubungi kami untuk pemesanan paket outbound, informasi harga, atau
              pertanyaan seputar layanan adventure dan team building.
            </p>

            <!-- Alamat -->
            <div class="contact-item d-flex mb-4 text-start">
              <div class="icon-circle">
                <i class="bi bi-geo-alt"></i>
              </div>
              <div>
                <h6 class="fw-bold mb-1">Alamat</h6>
                <p class="text-muted mb-0">
                  Bandung, Jawa Barat <br />
                  Area Lembang, Ciwidey, Pangalengan & Sekitarnya
                </p>
              </div>
            </div>

            <!-- Kontak -->
            <div class="contact-item d-flex text-start">
              <div class="icon-circle">
                <i class="bi bi-telephone"></i>
              </div>
              <div>
                <h6 class="fw-bold mb-1">Kontak Kami</h6>
                <p class="text-muted mb-1">Phone : +62 858-0295-6931</p>
                <p class="text-muted mb-0">WhatsApp : +62 858-0295-6931</p>
              </div>
            </div>
          </div>

          <!-- RIGHT SIDE -->
          <div class="col-lg-6">
            <div class="map-wrapper">
              <iframe
                src="https://www.google.com/maps?q=-6.7862155,107.6485002&output=embed"
                width="100%"
                height="420"
                style="border: 0"
                :allowfullscreen="true"
                loading="lazy"
              >
              </iframe>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- SOCIAL -->
    <section class="social-section text-center py-5">
      <div class="container">
        <div class="social-title">
          <span>Connect with social media</span>
        </div>

        <div class="social-icons mt-4">
          <a href="#"><i class="bi bi-tiktok"></i></a>
          <a href="#"><i class="bi bi-youtube"></i></a>
          <a href="#"><i class="bi bi-instagram"></i></a>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
/* HERO */
.contact-hero {
  height: 300px;
  background-image: url("../../../assets/bg-home.webp");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.title-page {
  font-size: 40px;
}

.lead-page {
  font-size: 20px;
}

/* SECTION */
.contact-section {
  background: #f8f9fa;
}

/* SUB TITLE */
.section-sub {
  font-size: 15px;
  letter-spacing: 2px;
  /* text-transform: uppercase; */
  color: #198754;
  font-weight: 600;
}

/* CONTACT ITEM */
.contact-item {
  align-items: flex-start;
  gap: 20px;
}

.icon-circle {
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #198754, #157347);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 22px;
  flex-shrink: 0;
  box-shadow: 0 8px 20px rgba(25, 135, 84, 0.3);
}

/* MAP */
.map-wrapper {
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.08);
  background: white;
}

/* SOCIAL */
.social-section {
  background: white;
}

.social-title {
  position: relative;
  display: inline-block;
  font-weight: 500;
  font-size: 20px;
}

.social-title::before,
.social-title::after {
  content: "";
  position: absolute;
  top: 50%;
  width: 80px;
  height: 1px;
  background: #ddd;
}

.social-title::before {
  right: 100%;
  margin-right: 20px;
}

.social-title::after {
  left: 100%;
  margin-left: 20px;
}

.social-icons {
  display: flex;
  justify-content: center;
  gap: 40px;
}

.social-icons a {
  font-size: 22px;
  color: #333;
  transition: 0.3s;
}

.social-icons a:hover {
  color: #198754;
  transform: translateY(-4px);
}

@media (max-width: 768px) {
  .contact-hero {
    height: 200px;
    /* font-size: smaller; */
  }

  .title-page {
    /* background-color: #198754; */
    /* margin-top: 50px; */
    font-size: 25px;
  }

  .lead-page {
    font-size: 9px;
  }
}
</style>
