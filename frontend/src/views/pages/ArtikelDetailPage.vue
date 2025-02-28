<template>
  <div class="container-fluid artikel-detail-heroes"></div>
  <div class="container-fluid">
    <div class="container mt-5 mb-5">
      <div class="row d-flex flex-column flex-md-row">
        <!-- Artikel Utama -->
        <div class="col-12 col-md-6 order-1 order-md-2">
          <div v-if="loading" class="text-center mt-5">
            <div class="spinner-border text-primary" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
          </div>

          <div
            v-else-if="article"
            class="row align-items-start justify-content-start"
          >
            <h1 class="text-start">{{ article.title }}</h1>
            <p class="text-start">Ditulis oleh: {{ article.author }}</p>
            <img :src="article.thumbnail" alt="" class="thumbnail mb-3" />
            <div class="col text-justify">
              <p>{{ article.content }}</p>
            </div>
          </div>

          <div v-else class="text-center mt-5">
            <p class="text-danger">Artikel tidak ditemukan.</p>
          </div>
        </div>

        <!-- Artikel Terkait -->
        <div class="col-12 col-md-2 order-2 order-md-1 articles mt-3 mt-md-0">
          <div
            v-for="(artikel, index) in articles"
            :key="index"
            class="text-start"
          >
            <div class="card m-1 shadow-sm">
              <div class="card-body m-0 p-2 align-items-center">
                <img
                  :src="artikel.thumbnail"
                  alt=""
                  class="img-articles rounded"
                />

                <!-- Router Link untuk Navigasi -->
                <router-link
                  :to="`/artikel/${artikel.slug}`"
                  class="fw-bold fs-7 mt-2 text-primary text-decoration-none d-block"
                >
                  {{ artikel.title }}
                </router-link>

                <p class="mb-0">
                  {{ artikel.content.split(" ").slice(0, 15).join(" ") }}...
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Fun Activity -->
        <div class="col-12 col-md-4 order-3">
          <FunActivity />
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.artikel-detail-heroes {
  min-height: 30vh;
  background-image: url("../../assets/hero.png");
  background-size: cover;
  display: flex;
}

.text-justify {
  text-align: justify;
}

.articles {
  font-size: 12px;
}

.img-articles {
  width: 100%;
  height: 70px;
  object-fit: cover;
}

.cursor-pointer {
  cursor: pointer;
}

.thumbnail {
  height: 250px;
  width: 50px;
}
</style>

<script>
import { ref, onMounted, watch } from "vue";
import { useRoute } from "vue-router";
import FunActivity from "../layouts/FunActivity.vue";

export default {
  components: { FunActivity },
  setup() {
    const route = useRoute();
    // const router = useRouter();
    const article = ref(null);
    const articles = ref([]);
    const loading = ref(false);

    // Fungsi mengambil daftar artikel
    const fetchArticles = async () => {
      try {
        const response = await fetch("http://localhost:3001/api/artikel");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        let data = await response.json();
        data = data.sort(
          (a, b) => new Date(b.updatedAt) - new Date(a.updatedAt)
        );
        articles.value = data;
      } catch (error) {
        console.error("Error fetching articles:", error);
      }
    };

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

    // Pantau perubahan slug dan perbarui data tanpa refresh
    watch(
      () => route.params.slug,
      (newSlug) => {
        fetchData(newSlug);
      }
    );

    onMounted(() => {
      fetchData(route.params.slug);
      fetchArticles();
    });

    return {
      article,
      articles,
      loading,
    };
  },
};
</script>
