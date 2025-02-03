<template>
  <div class="container-fluid bg-success">
    <div class="container text-center pt-3 pb-5">
      <div
        class="row row-cols-1 sosmed d-flex align-items-center justify-content-center mx-auto mb-5 border-bottom"
      >
        <div class="col gaharu fw-bold">gaharu</div>
        <div class="col">
          <div class="row d-flex justify-content-center">
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
      <div class="row row-cols-1 row-cols-md-4 text-start text-white">
        <div class="col p-2">
          <div class="menu-footer-title fw-bold mb-3">GAHARU</div>
          <div class="menu-footer">
            <ul
              class="justify-content-start text-decoration-none list-unstyled fw-"
            >
              <li>
                <router-link
                  to="/"
                  class="nav-link pc-3 small-text"
                  :class="{ active: $route.name === 'Home' }"
                  >Home</router-link
                >
              </li>
              <li class="dropdown">
                <router-link
                  to="/paket-tour"
                  class="nav-link pc-3 small-text dropdown-toggle"
                  :class="{
                    active: isActive('PaketTour', 'PaketTourDetail'),
                  }"
                  >Price List
                </router-link>
                <ul class="dropdown-menu border-radius-2 small-text">
                  <li>
                    <router-link to="/paket-tour" class="dropdown-item"
                      >Domestik</router-link
                    >
                  </li>
                  <li>
                    <router-link to="/paket-tour" class="dropdown-item"
                      >Internasional</router-link
                    >
                  </li>
                  <li>
                    <router-link to="/paket-tour" class="dropdown-item"
                      >Ziarah</router-link
                    >
                  </li>
                </ul>
              </li>
              <li>
                <router-link
                  to="/galery"
                  class="nav-link pc-3 small-text"
                  :class="{ active: $route.name === 'Galery' }"
                  >Galeri</router-link
                >
              </li>
              <li>
                <router-link
                  to="/about-us"
                  class="nav-link pc-3 small-text"
                  :class="{ active: $route.name === 'AboutUs' }"
                  >Artikel</router-link
                >
              </li>
              <li>
                <router-link
                  to="/about-us"
                  class="nav-link pc-3 small-text"
                  :class="{ active: $route.name === 'AboutUs' }"
                  >About Us</router-link
                >
              </li>
            </ul>
          </div>
        </div>
        <div class="col p-2">NEWSLETTER</div>
        <div class="col p-2">HUBUNGI KAMI</div>
        <div class="col p-2">ASSOSIASI</div>
      </div>
    </div>
  </div>
</template>

<style>
.sosmed {
  color: white;
  font-size: 30px;
}

/* .bi {
  border: 2px solid white;
  padding: 8px;
  border-radius: 20%;
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

.gaharu {
  font-size: 80px;
  font-family: "Plus Jakarta Sans", sans-serif;
  letter-spacing: 10px;
}

@media (max-width: 767pc) {
  .gaharu {
    font-size: 65px;
  }
}
</style>

<script>
// import { computed } from "vue";
import { useRoute } from "vue-router";

export default {
  setup() {
    const route = useRoute();

    const isActive = (...routerNames) => {
      return routerNames.includes(route.name);
    };
    return { isActive };
  },
};
</script>
