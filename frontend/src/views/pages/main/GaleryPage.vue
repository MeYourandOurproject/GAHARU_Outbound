<template>
  <div class="gallery-page">

    <!-- HERO -->
    <section class="gallery-hero text-center d-flex align-items-end pb-5 justify-content-center">
      <div>
        <h1 class="fw-bold title-page">Galeri Kegiatan Gaharu Outbound</h1>
        <p class="lead-page text-success">Momen seru dan penuh kebersamaan</p>
      </div>
    </section>

    <!-- GALLERY GRID -->
    <div class="container py-5">

      <!-- Loading -->
      <div v-if="loading" class="text-center py-5">
        <div class="spinner-border text-warning"></div>
        <p class="mt-3">Memuat galeri...</p>
      </div>

      <!-- Error -->
      <div v-if="error" class="text-center text-danger py-5">
        {{ error }}
      </div>

      <div v-if="!loading && galleryImages.length" class="row g-4">
        <!-- Loop tiap foto -->
        <div 
          v-for="(imgObj, idx) in galleryImages" 
          :key="idx"
          class="col-6 col-md-4 col-lg-3"
        >
          <div class="gallery-item" @click="openModal(imgObj.gallery, imgObj.index)">
            <img 
              :src="imgObj.src"
              class="img-fluid"
              loading="lazy"
            />
            <div class="gallery-overlay">
              <h6>{{ imgObj.gallery.title }}</h6>
              <small>{{ imgObj.gallery.location }}, <br>{{ imgObj.gallery.date }}</small>
            </div>
          </div>
        </div>
      </div>

      <!-- Kosong -->
      <div v-if="!loading && !galleryImages.length" class="text-center py-5">
        Belum ada galeri tersedia.
      </div>

    </div>

    <!-- MODAL -->
    <!-- <div 
      class="modal fade"
      id="imageModal"
      tabindex="-1"
      ref="modal"
    >
      <div class="modal-dialog modal-lg modal-dialog-centered">
        <div class="modal-content bg-dark border-0">
          <div class="modal-body p-0 text-center">
            <img 
              :src="selectedImage?.images[selectedIndex]" 
              class="img-fluid w-100"
            />
            <div class="p-3 text-white">
              <h5>{{ selectedImage?.title }}</h5>
              <p class="mb-1">{{ selectedImage?.description }}</p>
              <small>{{ selectedImage?.location }} • {{ formatDate(selectedImage?.date) }}</small>
            </div>
          </div>
        </div>
      </div>
    </div> -->

  </div>
</template>

<script>
import { ref, onMounted, nextTick } from "vue"
import { Modal } from "bootstrap"

export default {
  setup() {
    const galleries = ref([])
    const galleryImages = ref([]) // semua foto dari semua galeri
    const loading = ref(false)
    const error = ref(null)
    const selectedImage = ref(null)
    const selectedIndex = ref(0)
    const modalRef = ref(null)
    let modalInstance = null

    const API_BASE_URL = process.env.VUE_APP_API_BASE_URL

    const fetchGallery = async () => {
      try {
        loading.value = true
        const response = await fetch(`${API_BASE_URL}/api/galeries`)
        const result = await response.json()

        galleries.value = result.map(item => {
          let images = []
          try {
            images = JSON.parse(item.img_url) // ambil semua foto
          } catch (e) {
            images = []
          }
          return { ...item, images }
        })

        // flatten semua foto untuk grid
        galleryImages.value = []
        galleries.value.forEach(gallery => {
          gallery.images.forEach((img, idx) => {
            galleryImages.value.push({
              src: img,
              gallery,
              index: idx
            })
          })
        })

      } catch (err) {
        console.error(err)
        error.value = "Gagal memuat galeri."
      } finally {
        loading.value = false
      }
    }

    const openModal = async (gallery, index) => {
      selectedImage.value = gallery
      selectedIndex.value = index
      await nextTick()
      if (!modalInstance) {
        modalInstance = new Modal(modalRef.value, { backdrop: true })
      }
      modalInstance.show()
    }

    const formatDate = (date) => {
      if (!date) return ""
      return new Date(date).toLocaleDateString("id-ID")
    }

    onMounted(fetchGallery)

    return {
      galleries,
      galleryImages,
      loading,
      error,
      selectedImage,
      selectedIndex,
      modalRef,
      openModal,
      formatDate
    }
  }
}
</script>

<style scoped>
.gallery-hero {
  height: 300px;
  background: url('../../../assets/bg-home.webp') center/cover no-repeat;
  position: relative;
}

.title-page {
  font-size: 40px;
}

.lead-page {
  font-size: 20px;
}
/* .gallery-hero::before {
  content: "";
  position: absolute;
  inset: 0;
  background: rgba(0,0,0,0.5);
} */

.gallery-hero > div {
  position: relative;
  z-index: 2;
  /* color: white; */
}

/* GALLERY CARD */
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

/* OVERLAY */
.gallery-overlay {
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 15px;
  background: linear-gradient(to top, rgba(0,0,0,0.8), transparent);
  color: white;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.gallery-item:hover .gallery-overlay {
  opacity: 1;
}

@media (max-width: 768px) {
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
