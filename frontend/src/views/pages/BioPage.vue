<template>
  <div class="container-fluid bio-page">
    <div
      class="container d-flex align-items-center justify-content-center text-center my-5 py-5"
    >
      <div class="row row-cols-1 g-5">
        <div class="col">
          <img
            src="../../assets/logo_black.png"
            alt=""
            class="my-3"
            style="max-width: 100px"
          />
          <div class="display-1 fs-1 fw-bold brand">GAHARU Outbound</div>
          <div class="fs-5 sub-brand">
            Fun games, Team Building, Rafting, Fun offroad, Paint ball, Flying
            fox
          </div>
        </div>
        <div class="d-grid gap-3 mt-4" style="max-width: 500px; margin: 0 auto">
          <a href="https://gaharuoutbound.com" class="btn btn-warning fs-5">
            <i class="bi bi-globe me-3"></i>Halaman Website
          </a>

          <a href="https://wa.me/6285802956931" class="btn btn-success fs-5"
            ><i class="bi bi-whatsapp me-3"></i>Konsultasi Admin
          </a>

          <a
            href="https://www.facebook.com/profile.php?id=61574137567777&locale=id_ID"
            class="btn btn-primary fs-5"
            ><i class="bi bi-facebook me-3"></i>Facebook
          </a>

          <a
            href="https://www.instagram.com/gaharuoutbound/"
            class="btn btn-danger fs-5"
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
  /* background-color: #000000;yyy */
}

.brand {
  letter-spacing: 2px;
}

.sub-brand {
  font-style: italic;
}
</style>
