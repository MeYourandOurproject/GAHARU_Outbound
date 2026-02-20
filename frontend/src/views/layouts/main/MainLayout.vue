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
import NavbarLayout from "../../../components/main/MainNavbar.vue";
import FooterLayout from "../../../components/main/MainFooter.vue";

export default {
  name: "MainLayout",
  components: {
    NavbarLayout,
    FooterLayout,
  },
};
</script>

<style>
/* #navbar { */
  /* position: absolute; */
  /* top: 0; */
  /* z-index: 999; */
/* } */
.main-content{
  min-height: 100vh;
}
</style>
