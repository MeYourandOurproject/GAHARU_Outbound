<template>
  <div class="cotainer-fluid back-img">
    <div class="container align-items-center">
      <div
        class="row row-cols-1 row-cols-md-3 align-items-ceter justify-content-between pt-5 pb-5"
      >
        <div class="col-4 justify-content-center">
          <router-link to="/" class="link-body-emphasis text-decoration-none">
            <div
              class="row d-flex align-items-center justify-content-center gap-2"
            >
              <div class="col-auto p-0 m-0">
                <img
                  alt="Logo"
                  class="d-inline-block align-text-center logo-brand"
                  src="../../assets/logo.png"
                />
              </div>
              <div class="col-auto text-brand">Gaharu Outbound</div>
            </div>

            <!-- <img
              alt="Logo"
              width="130px"
              class="d-inline-block align-text-center"
              src="../../assets/pesonalinggarjati.png"
            /> -->
          </router-link>

          <div class="col border-top mt-2">
            <div class="row d-flex justify-content-center mt-4">
              <div class="col-auto">
                <a
                  href="#facebook"
                  class="text-decoration-none text-white sosmed-item"
                >
                  <i class="bi bi-facebook footer-icon"></i><br />
                  <!-- <div class="sosmed-name">Facebook</div> -->
                </a>
              </div>
              <div class="col-auto">
                <a
                  href="#instagram"
                  class="text-decoration-none text-white sosmed-item"
                >
                  <i class="bi bi-instagram footer-icon"></i><br />
                  <!-- <div class="sosmed-name">Instagram</div> -->
                </a>
              </div>
              <div class="col-auto">
                <a
                  href="#twitter"
                  class="text-decoration-none text-white sosmed-item"
                >
                  <i class="bi bi-twitter-x footer-icon"></i><br />
                  <!-- <div class="sosmed-name">X</div> -->
                </a>
              </div>
              <div class="col-auto">
                <a
                  href="#youtube"
                  class="text-decoration-none text-white sosmed-item"
                >
                  <i class="bi bi-youtube footer-icon"></i><br />
                  <!-- <div class="sosmed-name">YouTube</div> -->
                </a>
              </div>
              <div class="col-auto">
                <a
                  href="#linkedin"
                  class="text-decoration-none text-white sosmed-item"
                >
                  <i class="bi bi-linkedin footer-icon"></i><br />
                  <!-- <div class="sosmed-name">LinkedIn</div> -->
                </a>
              </div>
            </div>
          </div>
        </div>

        <!-- <div class="col text-white"> -->
        <!-- <h5 class="text-white fw-bold mb-2">Contact Us.</h5>
          <div class="row">
            <div class="col"><i class="bi bi-telephone-fill me-2"></i></div>
            <div class="col">
              <div class="col">Ruly Abdul Rasyid</div>
              <div class="col">0877 0897 2304</div>
            </div>
          </div> -->
        <!-- </div> -->
        <div class="col-4 asita mt-4">
          <!-- <p class="text-white">Bagian Dari:</p> -->
          <div class="row align-items-center justify-content-center">
            <div class="col-3">
              <img
                src="../../assets/asita.png"
                alt=""
                class="align-text-center asita-brand"
              />
            </div>
            <div
              class="col-8 text-white align-items-center justify-content-center fw-bold"
            >
              Association of The Indonesian Tours & Travel Agencies
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
  /* margin: 0;
  padding: 0; */
  height: 60px;
  /* text-align: left; */
  color: white;
}

.text-brand {
  margin: 0;
  /* margin-left: 5px; */
  padding: 0;
  font-weight: bold;
  font-size: 25px;
  color: white;
  /* text-align: left; */
}

.sosmed {
  color: white;
  font-size: 30px;
}

.footer-icon {
  border: 1px solid white;
  padding: 10px;
  border-radius: 100%;
}
/* .bi {
  border: 1px solid white;
  padding: 10px;
  border-radius: 100%;
} */

.sosmed-name {
  font-size: 12px;
  margin-top: 5px;
}

/* Efek hover */
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
}
</style>
<script></script>
