<template>
  <div class="container-xxl pt-5 mt-5">
    <div class="hero-wrapper bg-dark rounded-3">

      <div
        id="gaharucarousel"
        class="carousel slide hero"
        data-bs-ride="carousel"
        data-bs-interval="4000"
        data-bs-pause="false"
      >
        <!-- Indicators -->
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#gaharucarousel"
            data-bs-slide-to="0"
            class="active"
          ></button>
          <button
            type="button"
            data-bs-target="#gaharucarousel"
            data-bs-slide-to="1"
          ></button>
          <button
            type="button"
            data-bs-target="#gaharucarousel"
            data-bs-slide-to="2"
          ></button>
        </div>

        <!-- Carousel items -->
        <div class="carousel-inner">

          <!-- Slide 1 -->
          <div class="carousel-item active">
            <picture>
              <source
                srcset="@/assets/mobile_hero1.png"
                media="(max-width: 768px)"
              />
              <img
                src="@/assets/dekstop_hero1.png"
                alt="Hero Gaharu 1"
                class="hero-img"
              />
            </picture>
          </div>

          <!-- Slide 2 -->
          <div class="carousel-item">
            <picture>
              <source
                srcset="@/assets/mobile_hero2.png"
                media="(max-width: 768px)"
              />
              <img
                src="@/assets/dekstop_hero2.png"
                alt="Hero Gaharu 2"
                class="hero-img"
              />
            </picture>
          </div>

          <!-- Slide 3 -->
          <div class="carousel-item">
            <picture>
              <source
                srcset="@/assets/mobile_hero2.png"
                media="(max-width: 768px)"
              />
              <img
                src="@/assets/dekstop_hero2.png"
                alt="Hero Gaharu 3"
                class="hero-img"
              />
            </picture>
          </div>

        </div>

        <!-- Controls -->
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#gaharucarousel"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon bg-success rounded-circle p-4"></span>
        </button>

        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#gaharucarousel"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon bg-success rounded-circle p-4"></span>
        </button>

      </div>
    </div>
  </div>
</template>

<style scoped>

/* Wrapper agar rounded ikut semua isi */
.hero-wrapper {
  overflow: hidden;
  border-radius: 40px; /* bisa ubah sesuai selera */
}

/* Carousel height */
.hero {
  height: 100vh;
}

/* Pastikan semua layer ikut tinggi */
.carousel,
.carousel-inner,
.carousel-item {
  height: 100%;
}

/* Gambar full dan ikut rounded */
.hero-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  display: block;
}

/* Mobile lebih pendek */
@media (max-width: 768px) {
  .hero {
    height: 100%;
  }
}

/* Control styling */
.carousel-control-prev-icon,
.carousel-control-next-icon {
  background-size: 100%, 100%;
  width: 3rem;
  height: 3rem;
}

</style>
