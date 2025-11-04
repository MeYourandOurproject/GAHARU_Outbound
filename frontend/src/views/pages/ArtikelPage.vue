<template>
  <div class="container-fluid artikel-heroes"></div>
  <!-- <div class="container-fluid page"> -->
  <div class="container content my-5">
    <div
      class="row rows-cols-1 row-cols-md-3 justify-content-center align-items-stretch g-3"
    >
      <div v-for="(artikel, index) in articles" :key="index" class="col">
        <div
          class="card text-start shadow-lg artikel-card d-flex flex-column h-100"
        >
          <div class="card-body d-flex flex-column">
            <img :src="artikel.thumbnail" alt="" class="card-img-top" />
            <p class="title-artikel mt-2">
              {{ artikel.title }}
            </p>
            <p class="penulis mt-1">
              {{ artikel.author }}, {{ formatDate(artikel.updatedAt) }}
            </p>
            <div
              v-html="artikel.content.split(' ').slice(0, 30).join(' ')"
              class="col isi flex-grow-1"
            ></div>
            <router-link
              :to="`/artikel/${artikel.slug}`"
              class="text-decoration-none mt-auto"
            >
              <button
                type="button"
                class="btn btn-primary btn-sm justify-content-end"
              >
                See More<i class="bi bi-arrow-right-circle-fill ms-2"></i>
              </button>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- </div> -->
</template>

<style>
.artikel-heroes {
  min-height: 30vh;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)),
    url("../../assets/rafting_hd.webp");
  background-size: cover;
  display: flex;
}

/* .page {
  min-height: 80vh;
} */

.content {
  color: black;
  font-family: "Poppins", sans-serif;
  font-weight: bold;
  letter-spacing: 5px;
  min-height: 80vh;
}

.title-artikel {
  letter-spacing: 0px;
  margin: 0px;
  font-size: 14px;
  font-weight: bold;
  max-height: 3em; /* Batasi tinggi agar seragam */
  /* overflow: hidden; */
}

p {
  letter-spacing: 0px;
}

.penulis {
  font-size: 10px;
  font-weight: lighter;
}

.isi {
  font-size: 12px;
  font-weight: lighter;
  text-align: justify;
  flex-grow: 1; /* Mengisi ruang kosong */
}

.artikel-card {
  min-height: 420px;
  display: flex;
  flex-direction: column;
}

.card-body {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.card-img-top {
  width: 100%;
  height: 200px; /* Tetapkan tinggi gambar */
  object-fit: cover; /* Agar gambar tetap proporsional */
  border-radius: 10px 10px 0 0;
}

.btn {
  align-self: flex-end;
}
</style>

<script>
import { ref, onMounted } from "vue";

export default {
  setup() {
    const articles = ref([]);
    const fetchData = async () => {
      try {
        // const response = await fetch("http://localhost:3001/api/artikel");
        const response = await fetch(
          "https://api.gaharuoutbound.com/api/artikel"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        let data = await response.json();
        data = data.sort(
          (a, b) => new Date(b.updatedAt) - new Date(a.updatedAt)
        );

        articles.value = data;
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };

    // Format bulan & tahun
    const formatDate = (dateString) => {
      const date = new Date(dateString);
      return new Intl.DateTimeFormat("id-ID", {
        month: "short",
        year: "numeric",
      })
        .format(date)
        .replace(".", ""); // Menghapus titik jika ada
    };

    onMounted(() => {
      fetchData();
    });

    return {
      articles,
      formatDate,
    };
  },
};
</script>
