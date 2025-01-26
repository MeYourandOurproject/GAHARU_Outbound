<template>
  <nav class="fixed-top">
    <div class="container p-1">
      <div
        class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-center mt-5 mb-4 gap-3 n"
      >
        <div class="col-md-4 mb-2 mb-md-0">
          <router-link to="/" class="link-body-emphasis text-decoration-none">
            <img
              alt="Logo"
              height="40px"
              class="d-inline-block align-text-center me-2"
              src="../../assets/logo.png"
            />
            <img
              alt="Logo"
              width="130px"
              class="d-inline-block align-text-center"
              src="../../assets/pesonalinggarjati.png"
            />
          </router-link>
        </div>

        <ul
          class="nav col-12 col-md-5 justify-content-center mb-md-0 fs-3 text-decoration-none"
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
              >Paket Tour</router-link
            >
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
              >Galery</router-link
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

.small-text {
  font-size: 0.8rem;
  font-family: "Plus Jakarta Sans", sans-serif;
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

@media (max-width: 767px) {
  .n {
    border-radius: 20px;
    padding: 20px;
  }
}
</style>
