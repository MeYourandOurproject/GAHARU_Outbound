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
              height="55px"
              class="d-inline-block align-text-center me-2"
              src="../../assets/logo.png"
            />
            <img
              alt="Logo"
              width="150px"
              class="d-inline-block align-text-center"
              src="../../assets/pesonalinggarjati.png"
            />
          </router-link>
        </div>

        <ul
          class="nav col-12 col-md-5 justify-content-center mb-md-0 fs-6 text-decoration-none fw-semibold"
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
              to="/paket-tour"
              class="nav-link pc-3 small-text"
              :class="{ active: $route.name === 'PaketTour' }"
              >Paket Tour</router-link
            >
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
              to="/contact"
              class="nav-link pc-3 small-text"
              :class="{ active: $route.name === 'Contact' }"
              >Contact</router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
// export default {
//   name: "Navbar",
// };
</script>

<style scoped>
.small-text {
  font-size: 0.875rem; /* You can adjust this value to make the font size smaller */
}
.nav-link {
  color: #ffffff;
  text-decoration: none;
  background-color: transparent;
  margin: 1px;
  border-radius: 10px;
  transition: background-color 0.3s, color 0.3s, border-radius 0.3s;
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

@media (max-width: 767px) {
  .n {
    border-radius: 20px;
    padding: 20px;
  }
}
</style>
