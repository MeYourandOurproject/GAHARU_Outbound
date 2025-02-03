<template>
  <div class="cotainer-fluid back-img">
    <div class="container align-items-center">
      <div
        class="row row-cols-1 row-cols-3 align-items-ceter justify-content-center pt-5 pb-5"
      >
        <div class="col">
          <router-link to="/" class="link-body-emphasis text-decoration-none">
            <div
              class="row d-flex align-items-center justify-content-center mb-3"
            >
              <div class="col-3">
                <img
                  alt="Logo"
                  class="d-inline-block align-text-center logo-brand"
                  src="../../assets/logo.png"
                />
              </div>
              <div class="col-8 text-brand">
                <div class="col text-left">Gahura</div>
                <div class="col">Bandung Adventure</div>
              </div>
            </div>
          </router-link>

          <div class="col border-top">
            <div class="row d-flex justify-content-center mt-4">
              <div class="col-auto">
                <a
                  href="#facebook"
                  class="text-decoration-none text-white sosmed-item"
                >
                  <i class="bi bi-facebook"></i><br />
                  <!-- <div class="sosmed-name">Facebook</div> -->
                </a>
              </div>
              <div class="col-auto">
                <a
                  href="#instagram"
                  class="text-decoration-none text-white sosmed-item"
                >
                  <i class="bi bi-instagram"></i><br />
                  <!-- <div class="sosmed-name">Instagram</div> -->
                </a>
              </div>
              <div class="col-auto">
                <a
                  href="#twitter"
                  class="text-decoration-none text-white sosmed-item"
                >
                  <i class="bi bi-twitter-x"></i><br />
                  <!-- <div class="sosmed-name">X</div> -->
                </a>
              </div>
              <div class="col-auto">
                <a
                  href="#youtube"
                  class="text-decoration-none text-white sosmed-item"
                >
                  <i class="bi bi-youtube"></i><br />
                  <!-- <div class="sosmed-name">YouTube</div> -->
                </a>
              </div>
              <div class="col-auto">
                <a
                  href="#linkedin"
                  class="text-decoration-none text-white sosmed-item"
                >
                  <i class="bi bi-linkedin"></i><br />
                  <!-- <div class="sosmed-name">LinkedIn</div> -->
                </a>
              </div>
            </div>
          </div>
        </div>

        <div class="col text-white">
          <h5 class="text-white fw-bold mb-2">Contact Us.</h5>
          <div class="row">
            <div class="col"><i class="bi bi-telephone-fill me-2"></i></div>
            <div class="col">
              <div class="col">Ruly Abdul Rasyid</div>
              <div class="col">0877 0897 2304</div>
            </div>
          </div>
        </div>
        <div class="col text-right">3</div>
      </div>
    </div>
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;700&display=swap");

.back-img {
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("../../assets/heroadv.jpeg");
  display: flex;
  background-size: cover;
  background-position: bottom;
}

.logo-brand {
  /* margin: 0;
  padding: 0; */
  height: 60px;
  text-align: left;
}

.text-brand {
  margin: 0;
  /* margin-left: 5px; */
  padding: 0;
  font-weight: bold;
  font-size: 20px;
  color: white;
  text-align: left;
}

.sosmed {
  color: white;
  font-size: 30px;
}

.bi {
  border: 1px solid white;
  padding: 10px;
  border-radius: 100%;
}

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
</style>
<script></script>
