<template>
  <div class="container-fluid paket-tour-detail-content">
    <div class="container">
      <div v-if="loading" class="text-center py-5">
        <p>Loading...</p>
      </div>

      <div v-else-if="pricelist" class="row justify-content-center p-4">
        <div class="col-lg-3 col-md-6">
          <div class="price-card h-100">
            <!-- IMAGE -->
            <div class="price-card h-100">
              <!-- IMAGE -->
              <div class="price-img-wrapper">
                <!-- Featured Badge -->
                <div v-if="pricelist.is_featured" class="featured-badge">
                  ⭐ Best Seller
                </div>
                <div class="img-inner">
                  <img :src="pricelist.image" class="price-img" alt="Paket" />
                </div>
              </div>

              <!-- CONTENT -->
              <div class="price-content">
                <div class="row border-bottom align-items-start mb-3">
                  <div class="col-7">
                    <h5 class="price-title text-start">
                      {{ pricelist.title }}
                    </h5>
                  </div>
                  <div class="col-5 text-end mb-2 text-bold">
                    <span class="duration-text"
                      >Durasi <br /><i
                        class="bi bi-plus-slash-minus me-2 ms-2"
                      ></i
                      >{{ pricelist.duration || "2-3 Jam" }}</span
                    >
                  </div>
                </div>

                <!-- FACILITIES SCROLL -->
                <div class="feature-scroll text-start border-bottom pb-2">
                  <ul>
                    Include
                    <li
                      v-for="(item, i) in parsedFacilities"
                      :key="i"
                      class="fst-italic my-2"
                    >
                      <i class="bi bi-check2-circle me-2"></i>
                      {{ item }}
                    </li>
                  </ul>
                </div>

                <!-- FOOTER -->
                <div class="price-footer">
                  <div class="price-info">
                    <strong class="fs-5">
                      <small v-if="pricelist.description">
                        <i class="bi bi-person-bounding-box me-2"></i>
                        {{ pricelist.description }}</small
                      >
                      <br />
                      IDR {{ formatPrice(pricelist.price) }}
                      <small v-if="pricelist.unit">
                        / {{ pricelist.unit }}</small
                      >
                    </strong>
                  </div>

                  <a
                    :href="whatsappLink(pricelist.title)"
                    target="_blank"
                    class="btn-book"
                  >
                    <i class="bi bi-whatsapp me-2"></i>Booking Sekarang
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div v-else class="text-center py-5">
        <p>Data tidak ditemukan</p>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, computed } from "vue";
import { useRoute } from "vue-router";

export default {
  setup() {
    const route = useRoute();

    const pricelist = ref(null);
    const loading = ref(true);

    const API_BASE_URL = process.env.VUE_APP_API_BASE_URL;

    const token = localStorage.getItem("token");

    const fetchPriceList = async () => {
      try {
        const slug = route.params.slug;

        const response = await fetch(
          `${API_BASE_URL}/api/price-lists/slug/${slug}`,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        );

        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const data = await response.json();
        pricelist.value = data;
      } catch (error) {
        console.error("Error fetching data:", error);
        pricelist.value = null;
      } finally {
        loading.value = false;
      }
    };

    /* 🔥 IMPORTANT FIX */
    const parsedFacilities = computed(() => {
      if (!pricelist.value?.facilities) return [];

      try {
        return JSON.parse(pricelist.value.facilities);
      } catch {
        return [];
      }
    });

    const formatPrice = (price) => {
      return new Intl.NumberFormat("id-ID").format(price);
    };

    const whatsappLink = (title) => {
      const phone = "6285802956931"; // GANTI dengan nomor asli
      const message = `Halo Gaharu Outbound, saya tertarik dengan paket ${title}`;
      return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    };

    onMounted(() => {
      fetchPriceList();
    });

    return {
      pricelist,
      loading,
      parsedFacilities,
      formatPrice,
      whatsappLink,
    };
  },
};
</script>

<style>
.price-hero > div {
  position: relative;
  z-index: 2;
}
.price-card {
  background: #fff;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.08);
  transition: 0.4s;
  display: flex;
  flex-direction: column;
}

.price-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
}

/* IMAGE */
.price-img-wrapper {
  height: 250px;
  overflow: hidden;
  position: relative;
}

.img-inner {
  width: 100%;
  height: 100%;
  position: relative;
  transition: transform 0.6s ease;
}

.price-card:hover .img-inner {
  transform: scale(1.08);
}

.price-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.img-inner {
  will-change: transform;
}

/* Gradient ikut dalam img-inner */
.img-inner::after {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0) 60%,
    #ffffff 100%
  );
}

.price-card:hover .price-img {
  transform: scale(1.08);
}

/* FEATURED */
.featured-badge {
  position: absolute;
  top: 15px;
  left: 15px;
  background: #ffffff;
  color: #000;
  padding: 5px 12px;
  font-size: 0.75rem;
  border-radius: 10px;
  font-weight: 600;
  z-index: 2;
}

/* CONTENT */
.price-content {
  padding: 20px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.price-title {
  font-weight: 700;
  margin-bottom: 15px;
  font-size: 1.2rem;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
}

.duration-text {
  font-size: 0.9rem;
}

/* FACILITY SCROLL */
.feature-scroll {
  height: 120px;
  overflow-y: auto;
  padding-right: 6px;
  padding-bottom: 10px;
  margin-bottom: 20px;
}

.feature-scroll ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.feature-scroll li {
  font-size: 0.9rem;
  margin-bottom: 8px;
  color: #444;
}

/* SCROLLBAR */
.feature-scroll::-webkit-scrollbar {
  width: 6px;
}

.feature-scroll::-webkit-scrollbar-thumb {
  background: #ccc;
  border-radius: 10px;
}

/* FOOTER */
.price-footer {
  margin-top: auto;
  background-color: #eeebeb;
  padding: 10px;
  border-radius: 5px;
}

.price-info {
  /* display: flex; */
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
}

.price-info strong {
  font-size: 1.2rem;
  color: #000;
  text-align: center;
}

.price-info small {
  font-size: 0.8rem;
  color: #777;
}

.price-info span {
  font-size: 0.85rem;
  color: #777;
}

/* BUTTON */
.btn-book {
  display: block;
  text-align: center;
  background: #159f27;
  color: white;
  padding: 7px;
  border-radius: 5px;
  font-weight: 400;
  text-decoration: none;
  transition: 0.3s;
  font-size: medium;
}

.btn-book:hover {
  background: #000000;
  transform: scale(1.02);
}

@media (max-width: 767px) {
  .price-hero {
    height: 250px;
  }
  .lead {
    font-size: medium;
  }
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
