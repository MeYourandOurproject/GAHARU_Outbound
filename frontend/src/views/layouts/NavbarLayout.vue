<template>
  <nav class="fixed-top">
    <div class="container-fluid p-1">
      <div
        class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-center mt-5 mb-4 gap-3 n"
      >
        <div class="col-md-3 mb-2 mb-md-0">
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
              <div class="col-auto text-brand">GAHARU</div>
            </div>

            <!-- <img
              alt="Logo"
              width="130px"
              class="d-inline-block align-text-center"
              src="../../assets/pesonalinggarjati.png"
            /> -->
          </router-link>
        </div>

        <ul
          class="nav col-12 col-md-6 justify-content-center mb-md-0 fs-3 text-decoration-none"
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
              to=""
              class="nav-link pc-3 small-text dropdown-toggle"
              :class="{
                active: isActive('CostumPackage'),
              }"
              >Price List
            </router-link>
            <ul class="dropdown-menu border-radius-2 small-text">
              <li>
                <router-link
                  to="/fun-activity-package-page"
                  class="dropdown-item"
                >
                  Fun Activity</router-link
                >
              </li>
              <li>
                <router-link
                  to="/best-destination-package-page"
                  class="dropdown-item"
                >
                  Best Destination</router-link
                >
              </li>
              <li>
                <router-link
                  to="/cozy-staycation-package-page"
                  class="dropdown-item"
                >
                  Cozy Staycation</router-link
                >
              </li>
              <li>
                <router-link to="/all-package" class="dropdown-item disabled">
                  All Package</router-link
                >
              </li>
              <li>
                <router-link
                  to="/costum-package-page"
                  class="dropdown-item disabled"
                >
                  Costum Package</router-link
                >
              </li>
            </ul>
          </li>
          <li>
            <router-link
              to="/galery"
              class="nav-link pc-3 small-text unactived"
              :class="{ active: $route.name === 'Galery' }"
              >Galeri</router-link
            >
          </li>
          <li>
            <router-link
              to="/artikel"
              class="nav-link pc-3 small-text"
              :class="{ active: $route.name === 'Artikel' }"
              >Artikel</router-link
            >
          </li>
          <!-- <li>
            <router-link
              to="/about-us"
              class="nav-link pc-3 small-text"
              :class="{ active: $route.name === 'AboutUs' }"
              >About Us</router-link
            >
          </li> -->
        </ul>
      </div>
    </div>
  </nav>
</template>

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

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;700&display=swap");

.logo-brand {
  margin: 0;
  padding: 0;
  height: 60px;
}

.text-brand {
  margin: 0;
  margin-left: 2px;
  padding: 0;
  font-weight: bold;
  font-size: 20px;
  color: white;
}

.small-text {
  font-size: 1rem;
  font-family: "Plus Jakarta Sans", sans-serif;
  font-weight: bold;
}

.nav-link {
  color: #ffffff;
  text-decoration: none;
  background-color: transparent;
  margin: 1px;
  border-radius: 10px;
  transition: background-color 0.3s, color 0.3s, border-radius 0.3s;
  font-family: "Plus Jakarta Sans", sans-serif;
}

.nav-link:hover {
  color: #333;
  background-color: #ffffff;
}

.nav-link.active {
  background-color: #ffffff;
  color: #333;
}

.n {
  border-radius: 20px;
  padding: 20px;
}

.dropdown {
  position: relative;
}

.dropdown-menu {
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 1000;
  float: left;
  min-width: 10rem;
  padding: 0.5rem 0;
  margin: 0.125rem 0 0;
  font-size: 1rem;
  color: #212529;
  text-align: left;
  list-style: none;
  background-color: #ffffff;
  background-clip: padding-box;
  border: 1px solid rgba(0, 0, 0, 0.15);
  border-radius: 0.25rem;
}

.dropdown:hover .dropdown-menu {
  display: block;
}

.dropdown-item {
  display: block;
  width: 100%;
  padding: 0.25rem 1.5rem;
  clear: both;
  font-weight: 400;
  color: #212529;
  text-align: inherit;
  white-space: nowrap;
  background-color: transparent;
  border: 0;
}

.dropdown-item:hover {
  color: #333;
  background-color: #f8f9fa;
}

.disabled {
  pointer-events: none;
  opacity: 0.9; /* Biar terlihat tidak aktif */
}

@media (max-width: 767px) {
  .n {
    border-radius: 20px;
    padding: 20px;
  }

  .small-text {
    font-size: 0.7rem;
    font-family: "Plus Jakarta Sans", sans-serif;
    font-weight: bold;
  }
}
</style>
