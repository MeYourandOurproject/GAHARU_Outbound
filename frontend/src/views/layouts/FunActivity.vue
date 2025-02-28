<template>
  <!-- <h3>Paket Wisata</h3> -->
  <div class="col" v-for="item in datas" :key="item.id">
    <div class="card h-50 m-2 shadow-sm">
      <div class="card-body">
        <img :src="item.picture" alt="" class="card-img-top m-0" />
        <h5 class="card-title mt-2">{{ item.name }}</h5>
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
            <button type="button" class="btn btn-galeri btn-primary btn-sm">
              Lihat Galeri<i
                class="bi bi-arrow-right-circle-fill ms-2"
              ></i></button
          ></router-link>
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
