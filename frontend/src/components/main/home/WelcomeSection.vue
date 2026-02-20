<template>
  <div class="container-fluid py-3 p-md-5 p-2">   
    <div class="container-xxl">
      <div class="row align-items-center g-4">
        <!-- Gambar -->
        <div class="col-12 col-md-6 order-2 order-md-1">
          <div class="card border-0 bg-transparent text-center p-3 p-md-5">
            <img
              src="@/assets/welcome_img.webp"
              alt="Welcome"
              class="img-fluid rounded shadow-lg"
            />
          </div>
        </div>

        <!-- Teks / Konten -->
        <div class="col-12 col-md-6 order-1 py-5 px-5 px-md-0 pe-md-5 order-md-2 text-start">
          <div class="fs-3 text-start text-md-start mb-3">
              Selamat Datang di <br>Website <span class="fw-bold text-success fs-2">GAHARU Outbound</span> 👋 
          </div>
          <p class="lead-welcome mb-4">
          Nikmati sensasi seru <span class="fst-italic">Rafting</span> di arus deras, menjelajah alam dengan <span class="fst-italic">Jeep Land Rover</span> dan <span class="fst-italic">ATV</span>, hingga adu ketangkasan lewat <span class="fst-italic">Paintball</span> dan <span class="fst-italic">Flying fox</span>. 

          Bersama pemandu profesional dan fasilitas terbaik, kami siap menghadirkan kegiatan <span class="fst-italic">Team Building</span> dan <span class="fst-italic">Fun Games</span> yang mempererat kerja sama dan menciptakan momen tak terlupakan.
          </p>
          <div class="div text-start">
          <button class="btn btn-success fw-semibold wa-icon ">
            <a
              href="https://wa.me/6285924333088"
              class="text-decoration-none text-white"
            >
              <i class="bi bi-whatsapp me-2"></i> <span class="fw-normal">Informasi dan Konsultasi</span>
            </a>
          </button>
          </div>
        </div>
      </div>
    </div> 
  </div>
</template>

<style scoped>
/* Tambahan opsional untuk tampilan */
img {
  max-width: 100%;
  height: auto;
}

@media (max-width: 768px) {
  .container-fluid {
    padding: 2rem 1rem;
  }
}

.wa-icon {
  /* width: 100px;   
  height: auto; */
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.wa-icon:hover {
  transform: scale(1.1);
  opacity: 0.85;
}

.lead-welcome{
  text-align: justify;
}
</style>
