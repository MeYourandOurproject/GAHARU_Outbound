<template>
  <div class="container-fluid bio-page">
    <div class="mobile-wrapper">
      <div
        class="container d-flex align-items-center justify-content-center text-center bg-img"
      >
        <div class="row row-cols-1 g-3">
          <div class="col pt-4 pb-3">
            <img src="@/assets/bio_img.png" alt="" class="rounded shadow img-welcome" style="width: 350px;">
          </div>
          <div class="col">
            <p class="text-white text-center fst-italic">
             Contact & Follow Our Social Media
            </p>
          </div>
          <div class="col text-center text-center">
            <a href="https://wa.me/6285802956931">
              <button class="btn btn-success btn-sm fw-semibold icon-bio btn-sm btn-animate-arrow">
                <i class="bi bi-whatsapp arrow-move me-3"></i>
                <span class="fw-bold">WhatsApp</span>
              </button>
            </a>
          </div>
          <div class="col text-center">
            <a href="https://gaharuoutbound.com">
              <button class="btn btn-light fw-semibold icon-bio btn-sm btn-animate-arrow">
                <i class="bi bi-globe arrow-move me-3"></i>
                <span class="fw-bold">Website</span>
              </button>
            </a>
          </div>
          <div class="col text-center">
            <a href="https://www.tiktok.com/@gaharu.outbound">
              <button class="btn btn-dark fw-semibold icon-bio btn-sm btn-animate-arrow">
                <i class="bi bi-tiktok arrow-move me-3"></i>
                <span class="fw-bold">Tiktok</span>
              </button>
            </a>
          </div>
          <div class="col text-center">
            <a href="https://www.facebook.com/profile.php?id=61574137567777&locale=id_ID">
              <button class="btn btn-primary fw-semibold icon-bio btn-sm btn-animate-arrow">
                <i class="bi bi-facebook arrow-move me-3"></i>
                <span class="fw-bold">Facebook</span>
              </button>
            </a>
          </div>
          <div class="col text-center">
            <a href="https://www.instagram.com/gaharuoutbound/">
              <button class="btn btn-danger fw-semibold icon-bio btn-sm btn-animate-arrow">
                <i class="bi bi-instagram arrow-move me-3"></i>
                <span class="fw-bold">Instagram</span>
              </button>
            </a>
          </div>
          <div class="col">
            <img
              src="@/assets/logo_gaharu_white.png"
              alt=""
              class="my-3"
              style="width: 200px"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
/* FULL PAGE */
.bio-page {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  background: #000;
}

/* MOBILE VIEW WRAPPER — selalu tampilan HP */
.mobile-wrapper {
  width: 100%;
  max-width: 480px; /* ukuran mobile */
  margin: 0 auto;
  min-height: 100vh;
  overflow: hidden;
  background: #000; /* opsional */
}

/* BACKGROUND IMAGE */
.bg-img {
  min-height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding: 30px 20px;

  background-image: linear-gradient(
      rgba(0, 0, 0, 0.55),
      rgba(0, 0, 0, 0.75)
    ),
    url("@/assets/mobile_hero1.png");
}

/* TEXT STYLE */
.brand {
  letter-spacing: 2px;
  color: white;
}

.sub-brand {
  font-style: italic;
  color: white;
}

.icon-bio {
  transition: transform 0.3s ease, opacity 0.3s ease;
  width: 250px;
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

.col.text-center a,
.col.text-center button {
  margin-left: auto;
  margin-right: auto;
  display: inline-block;
}
</style>
