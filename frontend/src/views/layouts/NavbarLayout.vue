<template>
  <nav class="fixed-top">
    <div class="container-fluid bg-cst">
      <div class="row d-flex align-items-center justify-content-between py-1">
        <!-- Logo -->
        <div class="col-4">
          <router-link to="/" class="link-body-emphasis text-decoration-none">
            <div
              class="row d-flex align-items-center justify-content-center gap-2"
            >
              <div class="col-auto">
                <img
                  alt="Logo"
                  class="d-inline-block align-text-center logo-brand"
                  src="../../assets/logo_gaharu.png"
                />
              </div>
            </div>
          </router-link>
        </div>

        <!-- Menu (desktop) -->
        <div class="col-5 d-none d-md-block">
          <div class="row">
            <ul
              class="nav d-flex align-items-center justify-content-center gap-3"
            >
              <li>
                <router-link
                  to="/"
                  class="nav-link pc-3 small-text"
                  :class="{ active: $route.name === 'Home' }"
                  >Home</router-link
                >
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
                  to="/artikel"
                  class="nav-link pc-3 small-text"
                  :class="{ active: isActive('Artikel', 'ArtikelDetail') }"
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

        <!-- Tombol WA (desktop) -->
        <div class="col-3 d-none d-md-block">
          <a href="https://wa.me/6285924333088" class="text-decoration-none">
            <button class="btn btn-md btn-success">
              <i class="bi bi-whatsapp me-2"></i>WhatsApp
            </button>
          </a>
        </div>

        <!-- Tombol Hamburger (mobile) -->
        <div class="col-auto d-md-none">
          <button
            class="navbar-toggler custom-toggler"
            type="button"
            @click="toggleMenu"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
        </div>
      </div>

      <!-- Menu dropdown (mobile) -->
      <div v-if="menuOpen" class="mobile-menu text-center py-3">
        <ul class="list-unstyled mb-3">
          <li>
            <router-link
              to="/"
              class="nav-link small-text"
              @click="toggleMenu"
              :class="{ active: $route.name === 'Home' }"
              >Home</router-link
            >
          </li>
          <li>
            <router-link
              to="/galery"
              class="nav-link small-text"
              @click="toggleMenu"
              :class="{ active: $route.name === 'Galery' }"
              >Galeri</router-link
            >
          </li>
          <li>
            <router-link
              to="/artikel"
              class="nav-link small-text"
              @click="toggleMenu"
              :class="{ active: isActive('Artikel', 'ArtikelDetail') }"
              >Artikel</router-link
            >
          </li>
          <li>
            <router-link
              to="/about-us"
              class="nav-link small-text"
              @click="toggleMenu"
              :class="{ active: $route.name === 'AboutUs' }"
              >About Us</router-link
            >
          </li>
        </ul>
        <a href="https://wa.me/6285924333088" class="text-decoration-none">
          <button class="btn btn-success btn-sm w-75">
            <i class="bi bi-whatsapp me-2"></i>WhatsApp
          </button>
        </a>
      </div>
    </div>
  </nav>
</template>

<script>
import { ref } from "vue";
import { useRoute } from "vue-router";

export default {
  setup() {
    const route = useRoute();
    const menuOpen = ref(false);

    const toggleMenu = () => {
      menuOpen.value = !menuOpen.value;
    };

    const isActive = (...names) => names.includes(route.name);
    return { isActive, menuOpen, toggleMenu };
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

.bg-cst {
  background-color: rgba(0, 0, 0, 0.8);
}

.small-text {
  font-size: 0.9rem;
  font-family: "Plus Jakarta Sans", sans-serif;
  font-weight: bold;
}

.nav-link {
  color: #ffffff;
  text-decoration: none;
  margin: 1px;
  border-radius: 5px;
  transition: 0.3s;
  font-family: "Plus Jakarta Sans", sans-serif;
}

.nav-link:hover {
  color: #00ff66;
}

.nav-link.active {
  color: #00ff66;
}

/* Hamburger button */
.custom-toggler {
  border: none;
  background: none;
  padding: 6px;
}

.custom-toggler .navbar-toggler-icon {
  width: 25px;
  height: 2px;
  background-color: white;
  position: relative;
  transition: all 0.3s;
}

.custom-toggler .navbar-toggler-icon::before,
.custom-toggler .navbar-toggler-icon::after {
  content: "";
  position: absolute;
  width: 25px;
  height: 2px;
  left: 0;
  background-color: white;
  transition: all 0.3s;
}

.custom-toggler .navbar-toggler-icon::before {
  top: -7px;
}
.custom-toggler .navbar-toggler-icon::after {
  top: 7px;
}

/* Mobile dropdown */
.mobile-menu {
  background-color: rgba(0, 0, 0, 0.9);
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  animation: fadeIn 0.3s ease;
}

.mobile-menu .nav-link {
  display: block;
  padding: 8px 0;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Responsive fix */
@media (max-width: 767px) {
  .small-text {
    font-size: 0.8rem;
  }

  .logo-brand {
    margin: 0;
    padding: 0;
    height: 50px;
  }
}
</style>
