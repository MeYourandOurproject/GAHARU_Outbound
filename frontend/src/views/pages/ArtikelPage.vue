<template>
  <div class="container-fluid artikel-heroes"></div>
  <div class="container content mt-5 mb-5">
    <div
      class="row rows-cols-1 row-cols-md-3 align-items-center justify-content-center"
    >
      <div class="col">
        <div class="card shadow-lg text-start card-identitas">
          <div class="card-body">
            <img
              src="../../assets/situ-cileunca.jpg"
              alt=""
              class="card-img-top mb-2"
            />
            <p class="title-artikel">Fakta-Fakta Situ Cileunca, Pangalengan</p>
            <p class="penulis">Gaharu Admin, Januari 2025</p>
            <p class="isi">
              {{ truncatedText
              }}<router-link
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
                See More<i
                  class="bi bi-arrow-right-circle-fill ms-2"
                ></i></button
            ></router-link>
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
  margin-top: 20px;
  padding: 20px;
  color: black;
  font-family: "Poppins", sans-serif; /* Poppins font for the title */
  /* margin-top: 220px; */
  font-weight: bold;
  letter-spacing: 5px;
}

.card-identitas {
  height: 200px;
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
</style>

<script>
export default {
  data() {
    return {
      fullText: `Situ Cileunca adalah salah satu destinasi wisata alam yang terletak di Pangalengan, Kabupaten Bandung, Jawa Barat. Danau buatan ini memiliki sejarah, keindahan alam, serta berbagai aktivitas menarik yang menjadikannya tempat favorit bagi wisatawan. Berikut adalah beberapa fakta menarik tentang Situ Cileunca:

1. Danau Buatan yang Bersejarah

Situ Cileunca bukanlah danau alami, melainkan danau buatan yang dibangun pada zaman kolonial Belanda sekitar tahun 1926. Danau ini dibuat untuk memenuhi kebutuhan air bersih dan sebagai pembangkit listrik tenaga air (PLTA) yang menyuplai energi ke wilayah Bandung dan sekitarnya.

2. Luas dan Kedalaman yang Mengesankan

Situ Cileunca memiliki luas sekitar 1.400 hektare dengan kedalaman mencapai 17 meter. Airnya berasal dari Sungai Palayangan, yang juga dimanfaatkan sebagai sumber irigasi bagi pertanian di sekitar Pangalengan.

3. Dikelilingi Perkebunan dan Pegunungan

Keindahan Situ Cileunca semakin bertambah dengan keberadaan perkebunan teh dan perbukitan hijau yang mengelilinginya. Udara di kawasan ini sangat sejuk, dengan suhu berkisar antara 14-22 derajat Celsius, menjadikannya tempat yang cocok untuk melepas penat dari hiruk-pikuk perkotaan.

4. Destinasi Favorit untuk Wisata Air

Situ Cileunca menawarkan berbagai aktivitas wisata air yang menarik, seperti:

Rafting di Sungai Palayangan dengan arus menantang yang cocok bagi pecinta olahraga arung jeram.

Berkano dan berperahu mengelilingi danau sambil menikmati pemandangan alam yang indah.

Flying fox yang melintasi danau, memberikan sensasi petualangan yang berbeda.

5. Kawasan Agrowisata dan Camping

Selain wisata air, kawasan sekitar Situ Cileunca juga dikembangkan menjadi area agrowisata dan camping. Pengunjung bisa menikmati suasana alam dengan menginap di tenda atau vila yang tersedia di sekitar danau. Beberapa perkebunan di sekitar menawarkan pengalaman memetik buah dan sayuran segar langsung dari kebunnya.

6. Jembatan Cinta yang Ikonik

Salah satu spot favorit di Situ Cileunca adalah Jembatan Cinta, sebuah jembatan kayu yang menghubungkan dua desa di seberang danau. Konon, banyak pasangan yang percaya bahwa melewati jembatan ini bersama akan membuat hubungan mereka lebih langgeng.

7. Sumber Air Bersih untuk Bandung

Air dari Situ Cileunca tidak hanya dimanfaatkan untuk irigasi dan PLTA, tetapi juga sebagai salah satu sumber air bersih bagi warga Kota Bandung. Kejernihan dan kelestarian danau ini sangat penting bagi keberlangsungan ekosistem dan kehidupan masyarakat sekitarnya.

8. Akses dan Lokasi yang Mudah Dijangkau

Situ Cileunca berjarak sekitar 50 km dari pusat Kota Bandung dan dapat ditempuh dalam waktu sekitar 2-3 jam perjalanan dengan kendaraan pribadi atau transportasi umum. Jalan menuju lokasi sudah cukup baik, sehingga memudahkan wisatawan yang ingin berkunjung.`,
      maxLength: 200,
    };
  },

  computed: {
    truncatedText() {
      return this.fullText.length > this.maxLength
        ? this.fullText.substring(0, this.maxLength) + "..."
        : this.fullText;
    },
  },
};
</script>
