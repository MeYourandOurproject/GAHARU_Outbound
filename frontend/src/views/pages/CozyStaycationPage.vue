<template>
  <div class="container-fluid cozy-staycation-heroes">
    <div class="container title-page">
      <h1>Best Destination Package</h1>
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
              <h5 class="text-decoration-italic">Start From</h5>
              <h5 v-if="item.price > 0" class="harga-cost-1">
                Rp. {{ formatPrice(item.price) }}
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
                <div class="card-header">Deskripsi:</div>
                <div class="card-body">
                  <p class="card-text">
                    {{ item.deskripsi }}
                  </p>
                  <ul class="list-unstyled">
                    <li>
                      <i class="bi bi-geo-fill me-2"></i
                      ><span class="text-danger">Lokasi </span
                      ><a
                        :href="item.map_link"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="text-decoration-none"
                        >{{ item.lokasi }}</a
                      >
                    </li>
                    <li>
                      <i class="bi bi-people-fill me-2"></i>
                      <span class="text-danger">Kapasitas </span
                      >{{ item.kapasitas }}
                    </li>
                  </ul>
                </div>
              </div>
              <br />
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
                    Lihat Detail<i
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
// import atvImg from "@/assets/atv.jpg";
// import offRoadImg from "@/assets/offroad.jpg";
// import paintballImg from "@/assets/paintball.jpg";
// import flyingfoxImg from "@/assets/flyingfox.jpg";
// import teamBuildingImg from "@/assets/team_building.jpg";
// import tourDanauImg from "@/assets/tour_danau.jpg";

export default {
  setup() {
    const datas = ref([
      {
        name: "Bumi Saddam Palayangan",
        picture: raftingImg,
        deskripsi:
          "Satu-satunya penginapan bernuansa traditional sunda di Pangalengan dengan pemandangan yang langsung dihadapkan dengan danau Situ Cileunca.",
        price: 500000,
        kapasitas: "Up-to 100 pax",
        satuan: "orang",
        lokasi: "Pulosari",
        map_link: "https://maps.app.goo.gl/9DTysQpApjMrZZDZ9",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Homestay Arture BTS",
        picture: raftingImg,
        deskripsi:
          "Homestay modern dengan fasilitas lengkap ini sangat cocok untuk keluarga dan kelompok yang ingin berlibur di Pangalengan dengan nyaman.",
        price: 2000000,
        kapasitas: "Up-to 20 pax",
        satuan: "orang",
        lokasi: "Warnasari",
        map_link: "https://maps.app.goo.gl/9DTysQpApjMrZZDZ9",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Villa Bumi Palayangan",
        picture: raftingImg,
        deskripsi:
          "Villa bergaya arsitektur tradisional dengan kapasitas besar ini berhadapan langsung dengan danau Situ Cileunca. Sangat cocok untuk korporasi dan keluarga!",
        price: 2000000,
        kapasitas: "Up-to 25 pax",
        satuan: "orang",
        lokasi: "Pulosari",
        map_link: "https://maps.app.goo.gl/9DTysQpApjMrZZDZ9",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Villa Family 1",
        picture: raftingImg,
        deskripsi:
          "Villa Family ini merupakan komplek villa terdiri dari 3 homestay yang saling berdekatan satu sama lainnya dan berpemandangan Situ Cileunca.",
        price: 2000000,
        kapasitas: "Up-to 20 pax",
        satuan: "orang",
        lokasi: "Warnasari",
        map_link: "https://maps.app.goo.gl/9DTysQpApjMrZZDZ9",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Villa Family 2",
        picture: raftingImg,
        deskripsi:
          "Villa Family ini merupakan komplek villa terdiri dari 3 homestay yang saling berdekatan satu sama lainnya dan berpemandangan Situ Cileunca.",
        price: 2000000,
        kapasitas: "Up-to 20 pax",
        satuan: "orang",
        lokasi: "Warnasari",
        map_link: "https://maps.app.goo.gl/9DTysQpApjMrZZDZ9",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Villa Family 3",
        picture: raftingImg,
        deskripsi:
          "Villa Family ini merupakan komplek villa terdiri dari 3 homestay yang saling berdekatan satu sama lainnya dan berpemandangan Situ Cileunca.",
        price: 2500000,
        kapasitas: "Up-to 25 pax",
        satuan: "orang",
        lokasi: "Warnasari",
        map_link: "https://maps.app.goo.gl/9DTysQpApjMrZZDZ9",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Villa Zayd",
        picture: raftingImg,
        deskripsi:
          "Villa bergaya arsitektur modern ini dilengkapi dengan kamar-kamar serta fasilitas lengkap yang bisa digunakan selama menginap",
        price: 2000000,
        kapasitas: "Up-to 25 pax",
        satuan: "orang",
        lokasi: "Warnasari",
        map_link: "https://maps.app.goo.gl/9DTysQpApjMrZZDZ9",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Villa Wamtea",
        picture: raftingImg,
        deskripsi:
          "Villa Wantea merupakan villa yang memadukan gaya arsitektur belanda dan modern. Kapasitas yang luas menjadikannya cocok untuk keluarga.",
        price: 3000000,
        kapasitas: "Up-to 25 pax",
        satuan: "orang",
        lokasi: "Warnasari",
        map_link: "https://maps.app.goo.gl/9DTysQpApjMrZZDZ9",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Villa Hira",
        picture: raftingImg,
        deskripsi:
          "Villa satu ini memiliki ukuran yang luas sehingga bisa digunakan untuk berbagai macam aktifitas yang dilengkapi fasilitas lengkap!",
        price: 2500000,
        kapasitas: "Up-to 25 pax",
        satuan: "orang",
        lokasi: "Pulosari",
        map_link: "https://maps.app.goo.gl/9DTysQpApjMrZZDZ9",
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
.cozy-staycation-heroes {
  height: 50vh;
  background-image: url("../../assets/hero.png");
  background-size: cover;
  display: flex;
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
