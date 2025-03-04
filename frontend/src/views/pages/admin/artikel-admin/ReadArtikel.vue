<template>
  <div class="container-fluid paket-tour-detail-content">
    <div class="container">
      <div
        v-if="article"
        class="row gap-2 align-items-start justify-content-center p-4"
      >
        <div class="col-lg-3 keterangan">
          <h3>{{ article.title }}</h3>
          <p>{{ article.author }}</p>
        </div>
        <div class="col-lg-7 gambar">
          <img
            :src="article.thumbnail"
            alt="Paket Tour Image"
            class="img-fluid"
          />
        </div>
        <div v-html="article.content"></div>
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
    const article = ref(null);
    const loading = ref(false);

    // Fungsi mengambil data artikel berdasarkan slug
    const fetchData = async (slug) => {
      loading.value = true;
      article.value = null;

      try {
        const response = await fetch(
          `http://localhost:3001/api/artikel/${slug}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        let data = await response.json();
        article.value = data;
      } catch (error) {
        console.error("Error fetching article:", error);
      } finally {
        loading.value = false;
      }
    };

    onMounted(() => {
      fetchData(route.params.slug);
    });

    return { article };
  },
};
</script>
