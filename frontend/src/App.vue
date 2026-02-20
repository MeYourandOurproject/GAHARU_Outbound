<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import "bootstrap-icons/font/bootstrap-icons.css";
export default {
  name: "App",
};
</script>

<style>
#app {
  font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* background-image: url("assets/bg-home.webp"); */
  /* background: url('assets/bg-home.webp') center/cover no-repeat; */
}
</style>
