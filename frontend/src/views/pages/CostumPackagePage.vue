<template>
  <div class="container-fluid paket-tour-heroes">
    <div class="container content">
      <!-- TITLE PAGE -->
      <div class="container title-page-costum mb-3">
        <h1>Costum Package</h1>
      </div>
      <div class="row rounded-1 search-bar">
        <div class="col-12 col-md">
          <select class="form-select">
            <option selected>Kota Tujuan</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
        <div class="col-12 col-md">
          <select class="form-select">
            <option selected>Durasi</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
        <div class="col-12 col-md">
          <select class="form-select">
            <option selected>Paket</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
        <div class="col-12 col-md-1">
          <button class="w-100 btn btn-primary">Search</button>
        </div>
      </div>
    </div>
  </div>

  <div class="container-fluid paket-tours">
    <div class="container pt-5 pb-5">
      <div
        class="row row-cols-1 row-cols-sm-2 row-cols-md-3 card-paket-tour g-3 align-items-center justify-content-center"
      >
        <div class="col" v-for="item in datas" :key="item.id">
          <div class="card shadow-sm card-paket-tour">
            <img
              :src="item.picture"
              alt="paket-tour-image"
              height="255"
              class="card-img"
            />
            <div class="card-body mt-1 py-0">
              <div
                class="row justify-content-center align-items-center price my-0 pt-2 pb-2"
              >
                <div class="col-8 text-start">
                  <span class="start-from">Mulai dari</span> <br />
                  <span class="price-amount">Rp. {{ item.price }},-</span>
                </div>
                <div class="col-4 m-0 p-0">
                  <div class="btn btn-warning btn-sm">
                    <router-link
                      :to="`/paket-tour/${item.slug}`"
                      class="link"
                      :class="{ active: $route.name === 'PaketTour' }"
                    >
                      Lihat <i class="bi bi-arrow-right-short"></i
                    ></router-link>
                  </div>
                </div>
              </div>
            </div>
            <div class="card-body-detail mt-1 py-0 text-start mb-3 ps-3 pe-3">
              <span class="destination">{{
                getDestinations(item.Destinations)
              }}</span
              ><br />
              <span class="nama-paket-tour">{{ item.name }}</span
              ><br />
              <i class="bi bi-geo-alt-fill me-2"></i>
              <span class="fw-light negara">{{ item.city }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";

export default {
  setup() {
    const datas = ref([]);

    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3001/api/paket-tour");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        let data = await response.json();
        datas.value = data;
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    const getDestinations = (destinations) => {
      return destinations.map((dest) => dest.nama).join(", ");
    };

    const formatName = (name) => {
      return name.toLowerCase().replace(/\s+/g, "-");
    };

    onMounted(() => {
      fetchData();
    });

    return {
      datas,
      getDestinations,
      formatName,
    };
  },
};
</script>

<style>
/* HEROES STYLE */
.paket-tour-heroes {
  height: 50vh;
  background-image: url("../../assets/hero.png");
  background-size: cover;
  display: flex;
}

.title-page-costum {
  color: #fff;
  font-family: "Poppins", sans-serif; /* Poppins font for the title */
  margin-top: 160px;
  font-weight: bold;
  letter-spacing: 5px;
}

/* .content {
  margin-top: 5px;
  background-color: aqua;
} */

.search-bar {
  background-color: rgba(255, 255, 255, 0.3);
  padding: 10px 0;
}

/* PAKET TOUR STYLE */

.card-paket-tour {
  min-height: 400px;
}

.paket-tours {
  min-height: 100vh;
  background-color: rgb(248, 249, 250);
}

.card-paket-tour {
  margin-top: 20px;
}

.card-img {
  padding: 5px 5px 0 5px;
  border-radius: 10px 10px 0 0;
}

.card-body {
  margin: 0 0 5px 0;
  font-family: "Plus Jakarta Sans", sans-serif;
}

.price {
  background-color: rgb(108, 117, 125);
  color: white;
  font-family: "Plus Jakarta Sans", sans-serif;
}

.start-from {
  font-size: 12px;
}

.price-amount {
  font-size: 16px;
  font-weight: bold;
}

.nama-paket-tour {
  font-size: 20px;
}

.negara,
.destination {
  color: rgb(80, 80, 80);
}

.link {
  text-decoration: none;
  color: #000000;
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

  .title-page-costum {
    margin-top: 20px;
  }
}
</style>
