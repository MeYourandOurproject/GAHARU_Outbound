<template>
  <div class="container-fluid paket-tour-detail-content">
    <div class="container">
      <div
        v-if="galery"
        class="row gap-2 align-items-start justify-content-center p-4"
      >
        <div class="col-lg-3 keterangan">
          <h3>{{ galery.title }}</h3>
        </div>
        <div class="col-lg-7 gambar">
          <img :src="galery.picture" alt="Paket Tour Image" class="img-fluid" />
        </div>
        <div v-html="galery.description"></div>
        <p>{{ galery.costumer }}</p>
      </div>
      <div v-else>
        <p>Loading...</p>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";

export default {
  setup() {
    const route = useRoute();
    const galery = ref(null);

    const fetchGalery = async () => {
      try {
        const id = route.params.id;
        const response = await fetch(
          `https://api.gaharuoutbound.com/api/galery/${id}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        let data = await response.json();
        galery.value = data;
      } catch (error) {
        console.error("Error fetching paket tour data:", error);
      }
    };

    onMounted(() => {
      fetchGalery();
    });

    return { galery };
  },
};
</script>
