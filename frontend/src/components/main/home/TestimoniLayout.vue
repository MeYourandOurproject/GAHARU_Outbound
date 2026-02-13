<template>
  <div class="row row-cols-md-2 justify-content-center testimoni-container">
    <div class="col-12 col-md-4 title-testimoni">
      <i class="bi bi-quote display-1"></i>
      <h2 class="fw-bold testimoni-text">Apa yang disampaikan costumer kami</h2>
    </div>
    <div class="col-12 col-md-8">
      <div id="customCarousel" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div
            class="carousel-item"
            v-for="(group, index) in groupedItems"
            :key="index"
            :class="{ active: index === 0 }"
          >
            <div class="d-flex justify-content-center">
              <div
                v-for="(item, idx) in group"
                :key="item.id"
                class="card-wrapper"
                :class="{ 'middle-card': idx === 1 }"
              >
                <img
                  :src="item.imageUrl"
                  class="d-block w-100"
                  :alt="item.title"
                />
              </div>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#customCarousel"
          data-bs-slide="prev"
        >
          <span
            class="carousel-control-prev-icon btn-custom"
            aria-hidden="true"
          ></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#customCarousel"
          data-bs-slide="next"
        >
          <span
            class="carousel-control-next-icon btn-custom"
            aria-hidden="true"
          ></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed } from "vue";
import testimoniImg from "@/assets/testimoni.jpg";

export default {
  setup() {
    const latestItems = ref([]);
    const datas = [
      {
        id: 1,
        title: "Testimoni 1",
        imageUrl: testimoniImg,
        updatedAt: "2025-01-20T10:00:00Z",
      },
      {
        id: 2,
        title: "Testimoni 2",
        imageUrl: testimoniImg,
        updatedAt: "2025-01-19T15:30:00Z",
      },
      {
        id: 3,
        title: "Testimoni 3",
        imageUrl: testimoniImg,
        updatedAt: "2025-01-18T12:45:00Z",
      },
      {
        id: 4,
        title: "Testimoni 4",
        imageUrl: testimoniImg,
        updatedAt: "2025-01-17T08:20:00Z",
      },
      {
        id: 5,
        title: "Testimoni 5",
        imageUrl: testimoniImg,
        updatedAt: "2025-01-16T18:10:00Z",
      },
      {
        id: 6,
        title: "Testimoni 6",
        imageUrl: testimoniImg,
        updatedAt: "2025-01-15T14:05:00Z",
      },
      {
        id: 7,
        title: "Testimoni 7",
        imageUrl: testimoniImg,
        updatedAt: "2025-01-15T14:05:00Z",
      },
    ];

    latestItems.value = datas
      .sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt))
      .slice(0, 6);

    const groupedItems = computed(() => {
      let groups = [];
      for (let i = 0; i < latestItems.value.length; i += 3) {
        groups.push(latestItems.value.slice(i, i + 3));
      }
      return groups;
    });

    return { latestItems, groupedItems };
  },
};
</script>

<style>
.card-wrapper {
  flex: 1;
  padding: 50px 20px;
  transition: transform 0.3s ease-in-out;
}
.middle-card {
  transform: scale(1.2);
  z-index: 2;
}

.btn-custom {
  background-color: black;
  padding: 20px;
  border-radius: 20%;
}

.title-testimoni {
  font-family: "Plus Jakarta Sans", sans-serif;
  font-size: 100px; /* Perbaiki dari 100x ke 100px */
  font-weight: bold;
  text-align: left;
}

.testimoni-text {
  font-size: 50px;
  font-family: "Plus Jakarta Sans", sans-serif;
}

@media (max-width: 767px) {
  .card-wrapper {
    flex: 1;
    padding: 30px 10px; /* Kurangi padding agar lebih kecil */
    transition: transform 0.3s ease-in-out;
    height: 150px; /* Ubah tinggi carousel */
  }

  .middle-card {
    transform: scale(1.3); /* Kurangi scaling agar lebih proporsional */
    z-index: 2;
  }

  .title-testimoni {
    font-size: 20px !important; /* Pastikan ukuran mengecil */
    text-align: center !important;
  }

  .testimoni-text {
    font-size: 24px !important;
  }

  #customCarousel .carousel-inner {
    height: 280px !important; /* Batasi tinggi carousel */
  }

  #customCarousel img {
    max-height: 180px; /* Batasi tinggi gambar di dalam carousel */
    object-fit: contain; /* Pastikan gambar tidak terpotong */
  }
}
</style>
