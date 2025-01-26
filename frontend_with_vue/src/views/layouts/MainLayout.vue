<template>
  <div>
    <NavbarLayout id="navbar" />
    <div class="main-content">
      <router-view />
    </div>
    <FooterLayout />
  </div>
</template>

<script>
import NavbarLayout from "./NavbarLayout.vue";
import FooterLayout from "./FooterLayout.vue";

export default {
  name: "MainLayout",
  components: {
    NavbarLayout,
    FooterLayout,
  },
};
</script>

<style>
#navbar {
  position: absolute;
  top: 0;
  z-index: 999;
}
</style>
