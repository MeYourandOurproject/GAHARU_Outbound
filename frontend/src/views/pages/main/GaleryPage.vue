<template>
  <div class="gallery-page">
    <!-- HERO -->
    <section
      class="gallery-hero text-center d-flex align-items-end pb-5 justify-content-center"
    >
      <div>
        <h1 class="fw-bold title-page">Galeri Kegiatan Gaharu Outbound</h1>
        <p class="lead-page text-success">Momen seru dan penuh kebersamaan</p>
      </div>
    </section>

    <!-- CONTENT -->
    <div class="container py-5">
      <!-- SORT -->
      <div class="d-flex justify-content-end mb-4">
        <select
          v-model="sortOrder"
          @change="handleSortChange"
          class="form-select w-auto"
        >
          <option value="newest">Terbaru</option>
          <option value="oldest">Terlama</option>
        </select>
      </div>

      <!-- LOADING -->
      <div v-if="loading" class="text-center py-5">
        <div class="spinner-border text-warning"></div>
        <p class="mt-3">Memuat galeri...</p>
      </div>

      <!-- ERROR -->
      <div v-if="error" class="text-center text-danger py-5">
        {{ error }}
      </div>

      <!-- GRID -->
      <div v-if="!loading && galleryImages.length" class="row g-4">
        <div
          v-for="(imgObj, idx) in galleryImages"
          :key="idx"
          class="col-6 col-md-4 col-lg-3"
        >
          <div
            class="gallery-item"
            @click="openModal(imgObj.gallery, imgObj.index)"
          >
            <img :src="imgObj.src" class="img-fluid" loading="lazy" />
            <div class="gallery-overlay">
              <h6>{{ imgObj.gallery.title }}</h6>
              <small>
                {{ imgObj.gallery.location }},
                <br />
                {{ formatDate(imgObj.gallery.date) }}
              </small>
            </div>
          </div>
        </div>
      </div>

      <!-- EMPTY -->
      <div v-if="!loading && !galleryImages.length" class="text-center py-5">
        Belum ada galeri tersedia.
      </div>

      <!-- PAGINATION -->
      <div v-if="totalPage > 1" class="custom-pagination">
        <button
          class="nav-btn"
          :disabled="currentPage === 1"
          @click="changePage(currentPage - 1)"
        >
          ‹
        </button>

        <button
          v-for="page in totalPage"
          :key="page"
          class="page-number"
          :class="{ active: currentPage === page }"
          @click="changePage(page)"
        >
          {{ page }}
        </button>

        <button
          class="nav-btn"
          :disabled="currentPage === totalPage"
          @click="changePage(currentPage + 1)"
        >
          ›
        </button>
      </div>
    </div>

    <!-- MODAL -->
    <div class="modal fade" tabindex="-1" ref="modalRef">
      <div class="modal-dialog modal-lg modal-dialog-centered">
        <div class="modal-content border-0">
          <div class="modal-body p-0 text-center">
            <img
              v-if="selectedImage"
              :src="selectedImage.images[selectedIndex]"
              class="img-fluid w-100 rounded-top"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, nextTick } from "vue";
import { Modal } from "bootstrap";

export default {
  setup() {
    const galleries = ref([]);
    const galleryImages = ref([]);
    const loading = ref(false);
    const error = ref(null);

    const selectedImage = ref(null);
    const selectedIndex = ref(0);
    const modalRef = ref(null);
    let modalInstance = null;

    const currentPage = ref(1);
    const totalPage = ref(1);
    const limit = 8;
    const sortOrder = ref("newest");

    const API_BASE_URL = process.env.VUE_APP_API_BASE_URL;

    const fetchGallery = async () => {
      try {
        loading.value = true;

        const response = await fetch(
          `${API_BASE_URL}/api/galeries?page=${currentPage.value}&limit=${limit}&sort=${sortOrder.value}`,
        );

        const result = await response.json();

        totalPage.value = result.totalPage;

        galleries.value = result.data.map((item) => {
          let images = [];
          try {
            images = JSON.parse(item.img_url);
          } catch {
            images = [];
          }
          return { ...item, images };
        });

        galleryImages.value = [];

        galleries.value.forEach((gallery) => {
          gallery.images.forEach((img, idx) => {
            galleryImages.value.push({
              src: img,
              gallery,
              index: idx,
            });
          });
        });
      } catch (err) {
        console.error(err);
        error.value = "Gagal memuat galeri.";
      } finally {
        loading.value = false;
      }
    };

    const handleSortChange = () => {
      currentPage.value = 1;
      fetchGallery();
    };

    const changePage = (page) => {
      if (page < 1 || page > totalPage.value) return;
      currentPage.value = page;
      fetchGallery();
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const openModal = async (gallery, index) => {
      selectedImage.value = gallery;
      selectedIndex.value = index;

      await nextTick();

      if (!modalInstance) {
        modalInstance = new Modal(modalRef.value);
      }

      modalInstance.show();
    };

    const formatDate = (date) => {
      if (!date) return "";
      return new Date(date).toLocaleDateString("id-ID");
    };

    onMounted(fetchGallery);

    return {
      galleries,
      galleryImages,
      loading,
      error,
      selectedImage,
      selectedIndex,
      modalRef,
      openModal,
      formatDate,
      currentPage,
      totalPage,
      changePage,
      sortOrder,
      handleSortChange,
    };
  },
};
</script>

<style scoped>
.gallery-hero {
  height: 300px;
  background: url("../../../assets/bg-home.webp") center/cover no-repeat;
}

.title-page {
  font-size: 40px;
}

.lead-page {
  font-size: 20px;
}

.gallery-item {
  position: relative;
  overflow: hidden;
  border-radius: 5px;
  cursor: pointer;
}

.gallery-item img {
  width: 100%;
  height: 220px;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.gallery-item:hover img {
  transform: scale(1.1);
}

.gallery-overlay {
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 15px;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent);
  color: white;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.gallery-item:hover .gallery-overlay {
  opacity: 1;
}

@media (max-width: 768px) {
  .gallery-hero {
    height: 200px;
  }

  .title-page {
    font-size: 25px;
  }

  .lead-page {
    font-size: 12px;
  }
}

/* PAGINATION MODERN */
.custom-pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  margin-top: 40px;
}

.page-number,
.nav-btn {
  border: none;
  background: #f1f1f1;
  color: #333;
  min-width: 40px;
  height: 40px;
  border-radius: 10px;
  font-weight: 500;
  transition: all 0.3s ease;
}

.page-number:hover,
.nav-btn:hover {
  background: #198754;
  color: white;
  transform: translateY(-2px);
}

.page-number.active {
  background: #198754;
  color: white;
  box-shadow: 0 4px 12px rgba(25, 135, 84, 0.3);
}

.nav-btn:disabled {
  opacity: 0.4;
  cursor: not-allowed;
  background: #e0e0e0;
}
</style>
