<template>
  <div class="container-fluid fun-activity-heroes">
    <div class="container title-page">
      <h1>Fun Activity Package</h1>
    </div>
  </div>

  <div class="container-fluid paket-tours">
    <div class="container pt-5 pb-5">
      <div
        class="row row-cols-1 row-cols-md-3 card-paket-tour g-3 justify-content-center"
      >
        <div class="col" v-for="item in datas" :key="item.id">
          <div class="card text-center shadow-lg">
            <div class="card-body">
              <img :src="item.picture" alt="" class="card-img-top" />
              <h5 class="card-title mt-2">{{ item.name }}</h5>
              <!-- <h5 class="harga-cost">Rp. {{ item.price }}/orang</h5>
              <h5 class="harga-add text-danger">+ Rp.20.000 (1 x Makan)</h5> -->
              <h5 v-if="item.cost_1 > 0" class="harga-cost-1">
                Rp. {{ formatPrice(item.cost_1) }}/{{ item.satuan }}
                {{ item.ket_cost_1 }}
              </h5>
              <h5 v-if="item.cost_2 > 0" class="harga-cost-1">
                Rp. {{ formatPrice(item.cost_2) }}/{{ item.satuan }}
                {{ item.ket_cost_2 }}
              </h5>
              <!-- <h5 class="harga-cost-2">
                Rp. {{ formatPrice(item.price) }}/orang
              </h5> -->
              <h5 v-if="item.cost_add > 0" class="harga-add text-danger">
                + Rp. {{ formatPrice(item.cost_add) }} {{ item.ket_cost_add }}
              </h5>

              <br />
              <div class="card text-center">
                <div class="card-header">Ketentuan:</div>
                <div class="card-body">
                  <ul class="list-unstyled">
                    <li>
                      <i class="bi bi-person-arms-up me-2"></i
                      ><span class="text-danger">Minimal</span>
                      {{ item.min_person }} {{ item.ket_person }}
                    </li>
                    <li>
                      <i class="bi bi-geo-fill me-2"></i
                      ><span class="text-danger">Lokasi</span> {{ item.lokasi }}
                    </li>
                    <li>
                      <i class="bi bi-watch me-2"></i
                      ><span class="text-danger">Jarak dan Waktu</span>
                      {{ item.jarak }} km {{ item.waktu }}
                    </li>
                    <li>
                      <i class="bi bi-gear me-2"></i
                      ><span class="text-danger">Fasilitas</span>
                      {{ item.fasilitas }}
                    </li>
                  </ul>
                </div>
              </div>
              <br />
              <p class="card-text">
                <span class="text-danger">Include:</span><br />
                {{ item.include }}
              </p>
              <!-- <a href="#" class="btn btn-primary">Go somewhere</a> -->

              <div
                class="d-flex justify-content-center align-items-center mt-3 gap-1"
              >
                <a
                  href="https://wa.me/6287708972304"
                  class="text-decoration-none me-2"
                >
                  <button
                    class="btn btn-sm btn-wa"
                    style="background-color: #198754; color: #fff"
                  >
                    <i class="bi bi-whatsapp me-2"></i> Konsultasikan

                    <!-- <i class="bi bi-whatsapp"></i> -->
                    <div class="popup-wa">Tanya Admin di WhatsApp!</div>
                  </button>
                </a>

                <router-link
                  to="/galery"
                  class="btn btn-sm text-decoration-none rounded-3"
                >
                  <button
                    type="button"
                    class="btn btn-galeri btn-primary btn-sm"
                  >
                    Lihat Galeri<i
                      class="bi bi-arrow-right-circle-fill ms-2"
                    ></i></button
                ></router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import raftingImg from "@/assets/rafting.jpg";
import atvImg from "@/assets/atv.jpg";
import offRoadImg from "@/assets/offroad.jpg";
import paintballImg from "@/assets/paintball.jpg";
import flyingfoxImg from "@/assets/flyingfox.jpg";
import teamBuildingImg from "@/assets/team_building.jpg";
import tourDanauImg from "@/assets/tour_danau.jpg";

export default {
  setup() {
    const datas = ref([
      {
        name: "Rafting Pangalengan",
        picture: raftingImg,
        cost_1: 150000,
        ket_cost_1: "",
        cost_2: 175000,
        ket_cost_2: "(1 x Makan)",
        cost_add: 0,
        ket_cost_add: "",
        satuan: "orang",
        min_person: 5,
        ket_person: "Orang",
        lokasi: "Sungai Palayangan",
        jarak: 5,
        waktu: "(90 Menit)",
        fasilitas: "Perahu, Pelampung, FREE tiket Situ Cileunca",
        include:
          "Welcome drink, Medical P3K Kit, Equipment, Rescue team, Rest Area, Tempat Bilas, Asuransi Kegiatan, Local transport, Instruktur.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "ATV Pangalengan",
        picture: atvImg,
        cost_1: 175000,
        ket_cost_1: "(Single: 1 ATV untuk 1 orang)",
        cost_2: 225000,
        ket_cost_2: "(Tandem: 1 ATV untuk 2 orang)",
        cost_add: 0,
        ket_cost_add: "",
        satuan: "ATV",
        min_person: 3,
        ket_person: "unit ATV (3 - 6 orang)",
        lokasi: "Kebun Teh Warnasari, Pangalengan, Bandung.",
        jarak: 6,
        waktu: "(90 Menit)",
        fasilitas: "Safety equipments, FREE Tiket Situ Cileunca",
        include:
          "Quad Bike ATV, Medical P3K Kit, Safety Equipment, Tour Guide, Rest Area, Tempat Bilas, Instruktur. ",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Offroad Pangalengan",
        picture: offRoadImg,
        cost_1: 1500000,
        ket_cost_1: "",
        cost_2: 1675000,
        ket_cost_2: "(1 x Makan)",
        cost_add: 0,
        ket_cost_add: "",
        satuan: "unit",
        min_person: 7,
        ket_person: "Orang (1 Unit Landrover Maksimal 7 Orang)",
        lokasi: "Gunung Padaringan, Pangalengan, Bandung",
        jarak: 12,
        waktu: "(150 Menit)",
        fasilitas: " 4x4 Landrover Offroad",
        include:
          "Landrover Offroad, Mineral Water, Medical P3K Kit, Tour Guide, Rest Area, Tempat Bilas, Asuransi Kegiatan.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Paintball",
        picture: paintballImg,
        cost_1: 75000,
        ket_cost_1: "",
        cost_2: 0,
        ket_cost_2: "",
        cost_add: 0,
        ket_cost_add: "",
        satuan: "orang",
        min_person: 20,
        ket_person: "Orang (2 Teams)",
        lokasi: "Pinggir danau Situ Cileunca dan Hutan Pinus",
        jarak: 0,
        waktu: "30 Menit / Hingga Habis Peluru)",
        fasilitas: "Baju seragam, rompi, masker, peluru 30 butir",
        include:
          "Instuktur, Mineral Water, Medical P3K Kit, Tour Guide, Rest Area, Asuransi Kegiatan.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Flyingfox",
        picture: flyingfoxImg,
        cost_1: 30000,
        ket_cost_1: "",
        cost_2: 0,
        ket_cost_2: "",
        cost_add: 0,
        ket_cost_add: "",
        satuan: "orang",
        min_person: 5,
        ket_person: "Orang",
        lokasi: "Melintasi danau Cileunca",
        jarak: 130,
        waktu: "Meter",
        fasilitas: "Harness, Helm",
        include: "Instruktur, P3K, Asuransi ",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Team Building",
        picture: teamBuildingImg,
        cost_1: 150000,
        ket_cost_1: "",
        cost_2: 50000,
        ket_cost_2: "(Fun Games Only)",
        cost_add: 0,
        ket_cost_add: "",
        satuan: "orang",
        min_person: 2,
        ket_person: "Orang",
        lokasi: "Dapat Disesuaikan",
        jarak: 0,
        waktu: "(120 Menit)",
        fasilitas: "Alat team-building, alat fun games",
        include: "Instruktur, P3K, Air Mineral.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Tour Perahu Danau",
        picture: tourDanauImg,
        cost_1: 200000,
        ket_cost_1: "",
        cost_2: 0,
        ket_cost_2: "",
        cost_add: 0,
        ket_cost_add: "",
        satuan: "tour",
        min_person: 10,
        ket_person: "Orang/Perahu",
        lokasi: "Situ Cileunca",
        jarak: 0,
        waktu: "(60 Menit)",
        fasilitas: "Pendayung, perahu, pelampung",
        include: "Medical P3K Kit, Tour Guide, Rest Area, Tempat Bilas.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);

    // const fetchData = async () => {
    //   try {
    //     const response = await fetch("http://localhost:3001/api/paket-tour");
    //     if (!response.ok) {
    //       throw new Error("Failed to fetch data");
    //     }

    //     let data = await response.json();
    //     datas.value = data;
    //   } catch (error) {
    //     console.error("Error fetching data:", error);
    //   }
    // };

    const formatPrice = (price) => {
      return new Intl.NumberFormat("id-ID").format(price);
    };

    // onMounted(() => {
    //   fetchData();
    // });

    return {
      datas,
      formatPrice,
    };
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;700&display=swap");

/* HEROES STYLE */
.fun-activity-heroes {
  height: 50vh;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)),
    url("../../assets/rafting_hd.webp");
  background-size: cover;
  display: flex;
  background-position: center;
}

.title-page {
  color: #fff;
  font-family: "Poppins", sans-serif; /* Poppins font for the title */
  margin-top: 220px;
  font-weight: bold;
  letter-spacing: 5px;
}

.card-img-top {
  width: 100%;
  height: 200px; /* Tetapkan tinggi gambar */
  object-fit: cover; /* Agar gambar tetap proporsional dan mengisi seluruh area tanpa distorsi */
  border-radius: 10px 10px 0 0;
}

.card-title {
  font-size: 20px;
}

.harga-cost-1 {
  font-size: 15px;
}

.harga-add {
  font-size: 15px;
}

.btn-wa {
  color: rgb(255, 255, 255);
  background-color: rgb(25, 135, 84);
  animation: pulse 1.5s infinite; /* Tambahkan animasi */
}

.btn-wa a {
  text-decoration: none;
  color: black;
}

.btn-wa:hover {
  background-color: rgb(255, 255, 255);
  color: #000000;
  border: 1px solid black;
}

.deskripsi-text {
  font-family: "Plus Jakarta Sans", sans-serif;
  /* text-align: justify; */
}

/* Popup WhatsApp */
.popup-wa {
  display: none; /* Sembunyikan secara default */
  position: absolute;
  bottom: 110%; /* Di atas tombol */
  left: 50%;
  transform: translateX(-50%);
  background-color: rgba(25, 135, 84, 0.8); /* Latar belakang gelap */
  color: rgb(255, 255, 255);
  padding: 8px 12px;
  border-radius: 5px;
  font-size: 0.9rem;
  white-space: nowrap;
  z-index: 10;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);
  animation: fadeIn 0.3s ease-in-out;
}

.btn-wa:hover .popup-wa {
  display: block; /* Tampilkan popup saat di-hover */
}

.btn-galeri:hover i {
  display: inline-block;
  transition: transform 0.3s ease;
  animation: move-arrow 1s infinite; /* Animasi berjalan terus-menerus */
}

/* Animation for the button */
@keyframes pulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
}

@keyframes move-arrow {
  0% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(5px); /* Panah bergerak ke kanan */
  }
  100% {
    transform: translateX(0); /* Kembali ke posisi awal */
  }
}

/* Animasi muncul */
@keyframes fadeIn {
  0% {
    opacity: 0;
    transform: translateX(-50%) translateY(10px);
  }
  100% {
    opacity: 1;
    transform: translateX(-50%) translateY(0);
  }
}

html {
  scroll-behavior: smooth;
}

@media (max-width: 767px) {
  .paket-tour-heroes {
    height: 56vh;
  }

  .content {
    margin-top: 220px;
  }

  .search-bar {
    padding-top: 5px 0;
  }

  .search-bar .col-12 {
    margin-bottom: 5px;
  }

  .card-title {
    font-size: 40px;
  }
}
</style>
