<template>
  <div class="container-fluid bg-light py-5 px-5">
    <div class="container-xxl">
      <div class="row align-items-center justify-content-center py-5">

        <!-- TEKS -->
        <div class="col-md-9 col-12 text-md-start text-center mb-4 mb-md-0 px-md-5">
          <h1 class="fw-bold mb-3">Siap Memulai Petualangan Seru?</h1>
          <p class="mb-4 fs-5">
            Hubungi kami dan wujudkan kegiatan outbound terbaik bersama 
            <span class="text-success fs-4">GAHARU Outbound.</span>
          </p>
        </div>

        <!-- BUTTON -->
        <div class="col-md-3 col-12 d-flex flex-column align-items-center pb-5">

          <!-- CONTACT & FOLLOW -->
          <p class="fw-semibold text-secondary mt-3 mb-3 text-center text-md-start">
            Contact & Follow Our Social Media
          </p>
          <!-- WA BUTTON -->
          <a href="https://wa.me/6285802956931">
            <button class="btn btn-success btn-lg fw-semibold wa-icon btn-animate-arrow mb-3">
              <i class="bi bi-whatsapp arrow-move"></i>
              <span class="fw-light ms-2">WhatsApp</span>
            </button>
          </a>

          <!-- SOSIAL MEDIA ICON -->
          <div class="d-flex gap-3 fs-4 sosmed-icons">
            <a href="https://www.instagram.com/gaharuoutbound/" class="text-dark"><i class="bi bi-instagram"></i></a>
            <a href="https://www.facebook.com/profile.php?id=61574137567777&locale=id_ID" class="text-dark"><i class="bi bi-facebook"></i></a>
            <a href="https://www.tiktok.com/@gaharu.outbound" class="text-dark"><i class="bi bi-tiktok"></i></a>
            <!-- <a href="#" class="text-dark"><i class="bi bi-youtube"></i></a> -->
          </div>

        </div>

      </div>
    </div>
  </div>
</template>

<style scoped>
.wa-icon {
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.wa-icon:hover {
  transform: scale(1.1);
  opacity: 0.85;
}

.btn-animate-arrow {
  display: inline-flex;
  align-items: center;
  gap: 8px;
}

.arrow-move {
  display: inline-block;
  animation: moveArrow 0.7s ease-in-out infinite alternate;
  font-size: 1.1rem;
}

/* Animasi gerak panah */
@keyframes moveArrow {
  0% { transform: translateX(0); }
  100% { transform: translateX(6px); }
}

/* HOVER EFFECT ICON SOSMED */
.sosmed-icons a {
  transition: 0.3s ease;
}

.sosmed-icons a:hover {
  color: #198754; /* warna hijau bootstrap */
  transform: scale(1.15);
}
</style>
