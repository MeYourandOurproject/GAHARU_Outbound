<template>
  <!-- HERO -->
  <div class="container-fluid artikel-detail-heroes"></div>

  <div class="container-xxl page">
    <div class="pt-5 pb-5">
      <div class="row d-flex flex-column flex-md-row">
        <!-- ===================== -->
        <!-- ARTIKEL UTAMA -->
        <!-- ===================== -->
        <div class="col-12 col-md-9 order-1 order-md-2 text-start">
          <div v-if="loading" class="text-start mt-5">
            <div class="spinner-border text-primary" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
          </div>

          <div v-else-if="article" class="artikel-utama">
            <!-- Title -->
            <h1 class="fw-bold mb-3 artikel-title mt-2 fs-1">
              {{ article.title }}
            </h1>
            <!-- Meta -->
            <div class="artikel-meta bg-success mb-3 text-white">
              <span>
                <i class="bi bi-pen me-1"></i>
                Ditulis Oleh: {{ article.author?.name }}
              </span>

              <span>
                <i class="bi bi-calendar-check me-1"></i>
                Update: {{ formateDate(article.updatedAt) }}
              </span>

              <span>
                <i class="bi bi-bookmarks me-1"></i>
                Category: {{ article.category?.name }}
              </span>
              <span>
                <i class="bi bi-eye me-1"></i>
                Sudah Dilihat: {{ article.views }} kali
              </span>
            </div>

            <!-- Thumbnail -->
            <div class="artikel-thumbnail-wrapper">
              <img
                :src="fixImagePath(article.thumbnail)"
                class="artikel-thumbnail"
              />
            </div>
            <hr />
            <!-- Content -->
            <div
              v-html="article.content"
              class="formatted-content artikel-content"
            ></div>
          </div>

          <div v-else class="text-center mt-5">
            <p class="text-danger">Artikel tidak ditemukan.</p>
          </div>
        </div>

        <!-- ARTIKEL LAINYA -->
        <div class="col-12 col-md-3 order-2 text-start">
          <div class="related-wrapper">
            <h5 class="fw-bold mb-4 text-center mt-4 bg-success py-3 rounded-2 mt-2 text-white">Artikel Lainnya</h5>

            <div
              v-for="(artikel, index) in filteredArticles"
              :key="index"
              class="related-card-horizontal mb-3"
            >
              <router-link
                :to="`/artikel/${artikel.slug}`"
                class="text-decoration-none d-flex"
              >
                <!-- Thumbnail -->
                <div class="related-thumb">
                  <img :src="fixImagePath(artikel.thumbnail)" alt="" />
                </div>

                <!-- Content -->
                <div class="related-info">
                  <div class="related-category">
                    {{ artikel.category?.name }}
                  </div>

                  <div class="related-title">
                    {{ artikel.title }}
                  </div>

                  <div class="related-meta">
                    {{ artikel.author?.name }} •
                    {{ formateDate(artikel.updatedAt) }}
                  </div>
                </div>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, watch, computed } from "vue";
import { useRoute } from "vue-router";

export default {
  setup() {
    const route = useRoute();

    const article = ref(null);
    const articles = ref([]);
    const categories = ref([]);
    const loading = ref(false);

    const API_BASE_URL = process.env.VUE_APP_API_BASE_URL;

    // ========================
    // FIX PATH WINDOWS "\"
    // ========================
    const fixImagePath = (path) => {
      if (!path) return "";
      return path.replace(/\\/g, "/");
    };

    // ========================
    // FORMAT DATE
    // ========================
    const formateDate = (dataString) => {
      const date = new Date(dataString);
      return date.toLocaleDateString("id-ID", {
        day: "2-digit",
        month: "long",
        year: "numeric",
      });
    };

    // ========================
    // FETCH ALL ARTICLES
    // ========================
    const fetchArticles = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/api/artikels`);
        const result = await response.json();
        articles.value = result.data;
      } catch (error) {
        console.error("Error fetching articles:", error);
      }
    };

    // ========================
    // FETCH DETAIL
    // ========================
    const fetchData = async (slug) => {
      loading.value = true;
      article.value = null;

      try {
        const response = await fetch(`${API_BASE_URL}/api/artikels/${slug}`);
        const data = await response.json();
        article.value = data;
      } catch (error) {
        console.error("Error fetching article:", error);
      } finally {
        loading.value = false;
      }
    };

    // ========================
    // FILTER RELATED (tidak tampilkan yg sedang dibuka)
    // ========================
    const filteredArticles = computed(() => {
      if (!article.value) return articles.value;
      return articles.value.filter((a) => a.slug !== article.value.slug);
    });

    // ========================
    // WATCH ROUTE
    // ========================
    watch(
      () => route.params.slug,
      (newSlug) => {
        fetchData(newSlug);
      },
    );

    onMounted(() => {
      fetchData(route.params.slug);
      fetchArticles();
    });

    return {
      article,
      articles,
      categories,
      loading,
      formateDate,
      fixImagePath,
      filteredArticles,
    };
  },
};
</script>

<style>
/* HERO */
.artikel-detail-heroes {
  height: 200px;
  
  background: url('../../../assets/bg-home.webp') center/cover no-repeat;
  background-size: cover; /* display: flex; */
}

.page {
  min-height: 100vh;
}

/* ARTIKEL UTAMA */
.artikel-thumbnail-wrapper {
  width: 100%;
  overflow: hidden;
  border-radius: 10px;
}

.artikel-thumbnail {
  width: 100%;
  height: 420px;
  object-fit: cover;
  transition: 0.3s ease;
}

.artikel-thumbnail:hover {
  transform: scale(1.02);
}

.artikel-title {
  font-size: 28px;
}

.artikel-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  font-size: 13px;
  /* background: #3bc04f; */
  padding: 8px 12px;
  border-radius: 6px;
  /* border: 1px solid #ddd; */
}

.artikel-content {
  font-size: 15px;
  line-height: 1.8;
  margin-top: 15px;
}

/* RELATED */
.img-articles {
  width: 100%;
  height: 70px;
  object-fit: cover;
}

.artikel-link {
  display: block;
  padding: 4px 0;
  color: #333;
  transition: all 0.2s ease;
}

.artikel-link:hover {
  transform: translateX(3px);
  color: #0d6efd;
}

/* SIDEBAR STICKY */
.toc {
  position: sticky;
  top: 80px;
  max-height: 90vh;
  overflow-y: auto;
}

/* ================= RELATED HORIZONTAL ================= */

.related-wrapper {
  position: sticky;
  top: 80px;
}

.related-card-horizontal {
  background: #fff;
  border-radius: 12px;
  padding: 10px;
  transition: all 0.25s ease;
  border: 1px solid #eee;
}

.related-card-horizontal:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 20px rgba(0,0,0,0.06);
}

.related-thumb {
  width: 90px;
  height: 80px;
  flex-shrink: 0;
  overflow: hidden;
  border-radius: 8px;
  margin-right: 12px;
}

.related-thumb img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: 0.3s ease;
}

.related-card-horizontal:hover img {
  transform: scale(1.05);
}

.related-info {
  flex: 1;
}

.related-category {
  font-size: 11px;
  font-weight: 700;
  color: #41b83f;
  text-transform: uppercase;
  margin-bottom: 4px;
  letter-spacing: 0.5px;
}

.related-title {
  font-size: 14px;
  font-weight: 600;
  color: #222;
  line-height: 1.4;
  margin-bottom: 6px;
  transition: 0.2s ease;
}

.related-card-horizontal:hover .related-title {
  color: #2c7f31;
}

.related-meta {
  font-size: 12px;
  color: #777;
}

</style>
