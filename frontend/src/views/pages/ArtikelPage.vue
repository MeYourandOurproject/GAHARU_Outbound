<template>
  <div class="container-fluid artikel-heroes"></div>
  <div class="container-fluid">
    <div class="container content pt-5 pb-5">
      <div
        class="row rows-cols-1 row-cols-md-3 justify-content-center align-items-center g-3"
      >
        <div v-for="(artikel, index) in articles" :key="index" class="col">
          <div class="card text-start shadow-lg artikel-card">
            <div class="card-body">
              <img :src="artikel.image" alt="" class="card-img-top" />
              <p class="title-artikel mt-2">
                {{ artikel.title }}
              </p>
              <p class="penulis">{{ artikel.author }}</p>
              <p class="isi">
                {{ artikel.truncatedText }}
                <router-link
                  to="/galery"
                  class="btn btn-sm text-decoration-none"
                >
                </router-link>
              </p>
              <router-link to="/galery" class="text-decoration-none">
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
  </div>
</template>

<style>
.artikel-heroes {
  min-height: 30vh;
  background-image: url("../../assets/hero.png");
  background-size: cover;
  display: flex;
}

.content {
  color: black;
  font-family: "Poppins", sans-serif;
  font-weight: bold;
  letter-spacing: 5px;
}

.title-artikel {
  letter-spacing: 0px;
  margin: 0px;
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
}

.artikel-card {
  min-height: 420px;
  /* margin-top: 50px; */
}

.card-img-top {
  width: 100%;
  height: 200px; /* Tetapkan tinggi gambar */
  object-fit: cover; /* Agar gambar tetap proporsional dan mengisi seluruh area tanpa distorsi */
  border-radius: 10px 10px 0 0;
}
</style>

<script>
import situCileuncaImg from "@/assets/situ-cileunca.jpg";

export default {
  data() {
    return {
      articles: [
        {
          title: "Fakta-Fakta Situ Cileunca, Pangalengan",
          author: "Gaharu Admin, Januari 2025",
          image: situCileuncaImg,
          fullText: `Situ Cileunca adalah salah satu destinasi wisata alam yang terletak di Pangalengan, Kabupaten Bandung...`,
        },
        {
          title: "Menikmati Keindahan Ranca Upas, Ciwidey",
          author: "Gaharu Admin, Februari 2025",
          image: situCileuncaImg,
          fullText: `Ranca Upas adalah tempat camping favorit yang menawarkan udara segar dan pemandangan indah...`,
        },
        {
          title: "Eksplorasi Kawah Putih, Ciwidey",
          author: "Gaharu Admin, Maret 2025",
          image: situCileuncaImg,
          fullText: `Kawah Putih adalah kawah vulkanik dengan air berwarna putih kehijauan yang sangat eksotis...`,
        },
        {
          title: "Pesona Gunung Tangkuban Perahu",
          author: "Gaharu Admin, April 2025",
          image: situCileuncaImg,
          fullText: `Gunung Tangkuban Perahu terkenal dengan legenda Sangkuriang dan memiliki pemandangan kawah yang memukau...`,
        },
        {
          title: "Menjelajahi Keindahan Curug Malela",
          author: "Gaharu Admin, Mei 2025",
          image: situCileuncaImg,
          fullText: `Curug Malela sering disebut sebagai 'Niagara Mini' di Bandung Barat, dengan air terjun bertingkat yang indah...`,
        },
      ].map((article) => ({
        ...article,
        truncatedText:
          article.fullText.length > 200
            ? article.fullText.substring(0, 200) + "..."
            : article.fullText,
      })),
    };
  },
};
</script>
