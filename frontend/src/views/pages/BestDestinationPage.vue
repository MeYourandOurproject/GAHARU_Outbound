<template>
  <div class="container-fluid best-destination-heroes">
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
              <h5 class="text-decoration-italic">Ticket From</h5>
              <h5 v-if="item.price > 0" class="harga-cost-1">
                Rp. {{ formatPrice(item.price) }}/{{ item.satuan }}
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
                        :href="item.lokasi"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="text-decoration-none"
                        >{{ item.name }}</a
                      >
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
        name: "Situ Cileunca",
        picture: raftingImg,
        deskripsi:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione ipsa nesciunt, voluptas ad eligendi accusamus quia repellendus ab, laudantium veritatis beatae architecto dolorem quis possimus quos incidunt animi et quo!",
        price: 15000,
        satuan: "orang",
        lokasi: "https://maps.app.goo.gl/9DTysQpApjMrZZDZ9",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Taman Langit",
        picture: raftingImg,
        deskripsi:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione ipsa nesciunt, voluptas ad eligendi accusamus quia repellendus ab, laudantium veritatis beatae architecto dolorem quis possimus quos incidunt animi et quo!",
        price: 10000,
        satuan: "orang",
        lokasi: "https://maps.app.goo.gl/RJt9WwUnGCJrx4wo9",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Riung Gunung",
        picture: raftingImg,
        deskripsi:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione ipsa nesciunt, voluptas ad eligendi accusamus quia repellendus ab, laudantium veritatis beatae architecto dolorem quis possimus quos incidunt animi et quo!",
        price: 10000,
        satuan: "orang",
        lokasi: "https://maps.app.goo.gl/RJt9WwUnGCJrx4wo9",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Nimo Highland",
        picture: raftingImg,
        deskripsi:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione ipsa nesciunt, voluptas ad eligendi accusamus quia repellendus ab, laudantium veritatis beatae architecto dolorem quis possimus quos incidunt animi et quo!",
        price: 30000,
        satuan: "orang",
        lokasi: "https://maps.app.goo.gl/RJt9WwUnGCJrx4wo9",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Teh Jangkung",
        picture: raftingImg,
        deskripsi:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione ipsa nesciunt, voluptas ad eligendi accusamus quia repellendus ab, laudantium veritatis beatae architecto dolorem quis possimus quos incidunt animi et quo!",
        price: 20000,
        satuan: "orang",
        lokasi: "https://maps.app.goo.gl/RJt9WwUnGCJrx4wo9",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Cibolang Hotspring",
        picture: raftingImg,
        deskripsi:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione ipsa nesciunt, voluptas ad eligendi accusamus quia repellendus ab, laudantium veritatis beatae architecto dolorem quis possimus quos incidunt animi et quo!",
        price: 15000,
        satuan: "orang",
        lokasi: "https://maps.app.goo.gl/RJt9WwUnGCJrx4wo9",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Penakaran Rusa",
        picture: raftingImg,
        deskripsi:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione ipsa nesciunt, voluptas ad eligendi accusamus quia repellendus ab, laudantium veritatis beatae architecto dolorem quis possimus quos incidunt animi et quo!",
        price: 15000,
        satuan: "orang",
        lokasi: "https://maps.app.goo.gl/RJt9WwUnGCJrx4wo9",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Cerita Alam Hotspring",
        picture: raftingImg,
        deskripsi:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione ipsa nesciunt, voluptas ad eligendi accusamus quia repellendus ab, laudantium veritatis beatae architecto dolorem quis possimus quos incidunt animi et quo!",
        price: 25000,
        satuan: "orang",
        lokasi: "https://maps.app.goo.gl/RJt9WwUnGCJrx4wo9",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // {
      //   name: "Edukasi Petik Teh",
      //   picture: raftingImg,
      //   cost_1: 150000,
      //   ket_cost_1: "",
      //   cost_2: 0,
      //   ket_cost_2: "",
      //   cost_add: 0,
      //   ket_cost_add: "",
      //   satuan: "tour",
      //   min_person: 10,
      //   ket_person: "Orang/Perahu",
      //   lokasi: "Perkebunan Teh Pangalengan",
      //   jarak: 0,
      //   waktu: "(60 Menit)",
      //   fasilitas: "Instuktur lokal, Transportasi Lokal, Tiket Destinasi",
      //   include:
      //     "Mineral Water, Medical P3K Kit, Tour Guide, Rest Area, Tempat Bilas, oleh-oleh teh seduh asli Pangalengan.",
      //   createdAt: new Date(),
      //   updatedAt: new Date(),
      // },
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
.best-destination-heroes {
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
