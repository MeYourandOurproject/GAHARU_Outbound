<template>
  <div class="admin-layout">
    <SidebarLayout />
    <div class="main-content">
      <AdminNavbarLayout />
      <router-view />
    </div>
  </div>
</template>

<script>
import SidebarLayout from "@/views/layouts/SidebarLayout.vue";
import AdminNavbarLayout from "@/views/layouts/AdminNavbarLayout.vue";

export default {
  name: "AdminLayout",
  components: {
    SidebarLayout,
    AdminNavbarLayout,
  },
};
</script>

<style>
.admin-layout {
  display: flex;
}

.main-content {
  flex-grow: 1;
  /* padding: 20px; */
}
</style>
