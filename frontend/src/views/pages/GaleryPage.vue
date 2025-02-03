<template>
  <div class="container-fluid galery-heroes"></div>

  <div class="container-fluid carousel-content">
    <div class="container">
      <div class="row align-items-center justify-content-center p-4">
        <div class="col-lg-10">
          <div class="pe-lg-5 ps-lg-5 me-lg-5 ms-lg-5">
            <div id="carouselExampleIndicators" class="carousel slide">
              <div class="carousel-indicators">
                <button
                  v-for="(item, index) in latestItem"
                  :key="index"
                  type="button"
                  :data-bs-target="'#carouselExampleIndicators'"
                  :data-bs-slide-to="index"
                  :class="{ active: index === 0 }"
                  :aria-label="`Slide ${index + 1}`"
                  :aria-current="index === 0 ? 'true' : ''"
                ></button>
              </div>
              <div class="carousel-inner">
                <div
                  v-for="(item, index) in latestItem"
                  :key="item.id"
                  :class="['carousel-item', { active: index === 0 }]"
                >
                  <img
                    :src="item.picture"
                    class="d-block w-100"
                    :alt="`Image ${index + 1}`"
                  />
                  <div class="carousel-caption d-none d-md-block">
                    <div class="bg">
                      <span class="costumer">
                        {{ item.title }} </span
                      ><br />
                      <span class="title">{{ item.costumer }}</span>
                    </div>
                  </div>
                </div>
              </div>
              <button
                class="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button
                class="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="next"
              >
                <span
                  class="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="container-fluid album">
    <div class="container border-top pt-5">
      <div
        class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 align-items-center justify-content-center"
      >
        <div class="col" v-for="item in latestItem" :key="item.id">
          <div class="card shadow-sm p-1">
            <img
              :src="item.picture"
              class="bd-placeholder-img galery-img"
              width="100%"
              height="225"
              role="img"
              aria-label="Placeholder: Thumbnail"
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
            />
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
    const latestItem = ref([]);
    // const latest3Item = ref([]);

    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3001/api/galery");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        let data = await response.json();

        // Sort data by creation or update date in descending order
        data = data.sort(
          (a, b) => new Date(b.updatedAt) - new Date(a.updatedAt)
        );

        latestItem.value = data;
        // latest3Item.value = data.slice(0, 3); // Get the latest three items
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    onMounted(() => {
      fetchData();
    });

    return {
      latestItem,
      // latest3Item,
    };
  },
};
</script>

<style>
.galery-heroes {
  height: 25vh;
  background-image: url("../../assets/hero.png");
  background-size: cover;
  display: flex;
}

.carousel-content {
  padding: 50px 0;
  background-color: rgb(248, 249, 250);
}

.carousel-item {
  transition: transform 0.5s ease, opacity 0.5s ease;
  transform: scale(0.9);
}

.carousel-item img {
  margin: 0;
  height: 350px;
  object-fit: cover;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.carousel-item.active {
  transform: scale(1);
}

.bg {
  background-color: rgba(0, 0, 0, 0.6);
  border-radius: 5px;
  padding: 5px;
}
.title {
  font-family: "Plus Jakarta Sans", sans-serif;
  font-size: 12px;
  text-transform: uppercase;
}

.costumer {
  font-family: "Plus Jakarta Sans", sans-serif;
  font-size: 20px;
  text-transform: uppercase;
}

/* ALBUM STYLE */

.album {
  min-height: 100vh;
  background-color: rgb(248, 249, 250);
  padding-bottom: 50px;
}

.galery-img {
  border-radius: 0;
}

.galery-img {
  transition: transform 0.3s ease; /* Smooth transition for scaling */
}

.card:hover .galery-img {
  transform: scale(1.1); /* Scale the image to 1.1 times its original size */
}

@media (max-width: 767px) {
  .galery-heroes {
    height: 30vh;
  }

  .carousel-content {
    padding: 20px 0;
  }
}
</style>
