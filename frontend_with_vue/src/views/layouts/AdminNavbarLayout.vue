<template>
  <div class="container p-3 pb-0">
    <div class="row">
      <span class="fw-bold fs-3 text-end">{{ title }}</span>
      <hr />
    </div>
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";

export default {
  name: "AdminNavbarLayout",
  setup() {
    const store = useStore();
    const title = computed(() => store.getters.title);
    return { title };
  },
};
</script>
