<template>
  <div class="container-fluid bio-page">
    <div
      class="container align-items-center justify-content-center text-center my-5"
    >
      <div class="row row-cols-1 g-4">
        <div class="col">
          <img
            src="../../assets/logo_black.png"
            alt=""
            class="my-3 logo"
            style="max-width: 100px"
          />
          <div class="display-1 fs-1 fw-bold brand">Gaharu Outbound</div>
          <div class="fs-5 sub-brand">
            Rafting Pangalengan, Jeep Offroad, Outbound, Team Building
          </div>
        </div>
        <div class="d-grid gap-3">
          <a
            href="https://gaharuoutbound.com"
            class="btn btn-outline-dark fs-5"
          >
            <i class="bi bi-globe me-3"></i>Halaman Website
          </a>

          <a
            href="https://wa.me/6285802956931"
            class="btn btn-outline-dark fs-5"
            ><i class="bi bi-whatsapp me-3"></i>Konsultasi Admin
          </a>

          <a
            href="https://www.facebook.com/profile.php?id=61574137567777&locale=id_ID"
            class="btn btn-outline-dark fs-5"
            ><i class="bi bi-facebook me-3"></i>Facebook
          </a>

          <a
            href="https://www.instagram.com/gaharuoutbound/"
            class="btn btn-outline-dark fs-5"
            ><i class="bi bi-instagram me-3"></i>Instagram
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.bio-page {
  min-height: 100vh;
  display: flex;
}

.brand {
  letter-spacing: 2px;
  color: var(--bs-dark); /* pakai warna dark Bootstrap */
}

.sub-brand {
  font-style: italic;
  color: var(--bs-dark); /* tambahkan warna dark */
}

.logo {
  color: var(--bs-dark);
}
</style>
