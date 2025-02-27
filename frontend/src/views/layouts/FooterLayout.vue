<template>
  <div class="cotainer-fluid back-img">
    <div class="container align-items-center">
      <div class="row row-cols-1 row-cols-md-3 align-items-center pt-5 pb-5">
        <!-- Logo & Brand -->
        <div class="col justify-content-center align-items-center">
          <router-link to="/" class="link-body-emphasis text-decoration-none">
            <div
              class="row align-items-center justify-content-center logo-container"
            >
              <div class="col-auto">
                <img
                  alt="Logo"
                  class="d-inline-block align-text-center logo-brand"
                  src="../../assets/logo.png"
                />
              </div>
              <div class="col-auto text-brand">Gaharu Outbound</div>
            </div>
          </router-link>
        </div>

        <!-- Sosmed -->
        <div class="col text-white p-4">
          <div class="col">
            <div class="row d-flex justify-content-center">
              <div class="col-auto">
                <a
                  href="#facebook"
                  class="text-decoration-none text-white sosmed-item"
                >
                  <i class="bi bi-facebook footer-icon"></i>
                </a>
              </div>
              <div class="col-auto">
                <a
                  href="#instagram"
                  class="text-decoration-none text-white sosmed-item"
                >
                  <i class="bi bi-instagram footer-icon"></i>
                </a>
              </div>
              <div class="col-auto">
                <a
                  href="#twitter"
                  class="text-decoration-none text-white sosmed-item"
                >
                  <i class="bi bi-twitter-x footer-icon"></i>
                </a>
              </div>
              <div class="col-auto">
                <a
                  href="#youtube"
                  class="text-decoration-none text-white sosmed-item"
                >
                  <i class="bi bi-youtube footer-icon"></i>
                </a>
              </div>
              <div class="col-auto">
                <a
                  href="#linkedin"
                  class="text-decoration-none text-white sosmed-item"
                >
                  <i class="bi bi-linkedin footer-icon"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        <!-- ASITA -->
        <div class="col asita">
          <div class="row align-items-center justify-content-center">
            <div
              class="col-9 text-white align-items-center justify-content-right fw-bold text-end"
            >
              Association of The Indonesian Tours & Travel Agencies
            </div>
            <div class="col-2">
              <img
                src="../../assets/asita.png"
                alt=""
                class="align-text-center asita-brand"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;700&display=swap");

.back-img {
  background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5)),
    url("../../assets/rafting_hd.webp");
  display: flex;
  background-size: cover;
  background-position: center;
}

.logo-brand {
  height: 60px;
}

.text-brand {
  margin: 0;
  padding: 0;
  font-weight: bold;
  font-size: 25px;
  color: white;
}

.footer-icon {
  border: 1px solid white;
  padding: 10px;
  border-radius: 100%;
}

.sosmed-item {
  display: inline-block;
  text-align: center;
  transition: transform 0.3s ease-in-out;
}

.sosmed-item:hover {
  transform: scale(1.2);
}

.asita-brand {
  height: 60px;
}

@media (max-width: 767px) {
  /* Sembunyikan ASITA di layar kecil */
  .asita {
    display: none;
  }

  /* Logo & teks jadi vertikal */
  .logo-container {
    flex-direction: column !important;
    text-align: center;
  }

  .logo-brand {
    margin-bottom: 10px;
  }

  .text-brand {
    font-size: 20px;
  }
}
</style>
