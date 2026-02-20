<template>
  <div class="artikel-page">
    <!-- HERO -->
    <section
      class="artikel-hero text-center d-flex align-items-end pb-5 justify-content-center"
    >
      <div>
        <h1 class="fw-bold title-page">Artikel Terbaru Gaharu Outbound</h1>
        <p class="lead-page text-success">
          Tips, pengalaman, dan informasi menarik
        </p>
      </div>
    </section>

    <div class="container py-5">
      <!-- Loading -->
      <div v-if="loading" class="text-center py-5">
        <div class="spinner-border text-warning"></div>
      </div>

      <!-- Article Grid -->
      <div v-if="!loading && articles.length" class="row g-5">
        <div
          v-for="article in articles"
          :key="article.id"
          class="col-12 col-md-6 col-lg-4"
        >
          <router-link
            :to="`/artikel/${article.slug}`"
            class="article-modern text-decoration-none"
          >
            <!-- IMAGE -->
            <div class="article-image">
              <img :src="article.thumbnail" />
            </div>

            <!-- CONTENT OVERLAY -->
            <div class="article-content mx-4">
              <span class="article-label">
                {{ article.category.name }}
              </span>

              <h4 class="article-title">
                {{ article.title }}
              </h4>

              <div class="article-footer">
                <span>By {{ article.author.name }}</span>
                <span class="divider">|</span>
                <span>{{ formatDate(article.createdAt) }}</span> <br>
                <span>
                  <i class="bi bi-eye me-1"></i>
                  Dilihat: {{ article.views }} Kali
                </span>
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";

export default {
  setup() {
    const articles = ref([]);
    const loading = ref(false);
    const error = ref(null);

    const API_BASE_URL = process.env.VUE_APP_API_BASE_URL;

    const fetchArticles = async () => {
      try {
        loading.value = true;
        const response = await fetch(`${API_BASE_URL}/api/artikels`);
        const result = await response.json();
        articles.value = result.data;
      } catch (err) {
        console.error(err);
        error.value = "Gagal memuat artikel.";
      } finally {
        loading.value = false;
      }
    };

    const formatDate = (date) => {
      return new Date(date).toLocaleDateString("id-ID", {
        day: "numeric",
        month: "long",
        year: "numeric",
      });
    };

    onMounted(fetchArticles);

    return {
      articles,
      loading,
      error,
      formatDate,
    };
  },
};
</script>

<style scoped>
/* ================= HERO ================= */
.artikel-hero {
  height: 300px;
  background: url("../../../assets/bg-home.webp") center/cover no-repeat;
  position: relative;
}

.artikel-hero > div {
  position: relative;
  z-index: 2;
}

.title-page {
  font-size: 40px;
}

.lead-page {
  font-size: 20px;
}

/* ================= CARD WRAPPER ================= */
.article-modern {
  display: block;
  position: relative;
  transition: all 0.3s ease;
}

.article-modern:hover {
  transform: translateY(-8px);
}

/* ================= IMAGE ================= */
.article-image img {
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: 16px;
  transition: 0.4s ease;
}

.article-modern:hover .article-image img {
  transform: scale(1.04);
}

/* ================= CONTENT BOX ================= */
.article-content {
  background: white;
  padding: 18px; /* ⬅ diperkecil */
  margin-top: -80px;
  position: relative;
  border-radius: 16px;
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.08);
  text-align: center;
}

/* ================= LABEL ================= */
.article-label {
  color: #41b83f;
  font-weight: 700;
  font-size: 12px; /* ⬅ lebih kecil */
  letter-spacing: 1px;
  display: inline-block;
  margin-bottom: 5px; /* ⬅ lebih dekat ke title */
  text-transform: uppercase;
}

/* ================= TITLE ================= */
.article-title {
  font-size: 18px; /* ⬅ sedikit lebih kecil */
  font-weight: 600;
  color: #222;
  line-height: 1.5;
  margin-bottom: 10px; /* ⬅ lebih dekat ke footer */
  transition: 0.3s ease;
}

.article-modern:hover .article-title {
  color: #2c7f31;
}

/* ================= FOOTER ================= */
.article-footer {
  background: linear-gradient(90deg, #41b83f, #2c7f31);
  color: white;
  padding: 10px 18px; /* ⬅ lebih ramping */
  margin: 0 20px 8px 20px; /* tetap masuk ke dalam */
  font-size: 13px; /* ⬅ sedikit lebih kecil */
  border-radius: 10px;
  transition: all 0.3s ease;
}

.article-footer .divider {
  margin: 0 8px;
}

.article-modern:hover .article-footer {
  transform: translateY(-3px);
  box-shadow: 0 8px 20px rgba(44, 127, 49, 0.35);
}

/* ================= RESPONSIVE ================= */
@media (max-width: 768px) {
  .article-image img {
    height: 240px;
  }

  .article-content {
    margin-top: -65px;
  }

  .contact-hero {
    height: 200px;
    /* font-size: smaller; */
  }

  .title-page {
    /* background-color: #198754; */
    /* margin-top: 50px; */
    font-size: 25px;
  }

  .lead-page {
    font-size: 9px;
  }
}
</style>
