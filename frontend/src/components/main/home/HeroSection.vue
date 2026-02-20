<template>
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
            srcset="@/assets/hero_mobile.webp"
            media="(max-width: 768px)"
          />
          <img
            src="@/assets/hero_dekstop.webp"
            alt="Hero Gaharu 1"
            class="hero-img"
          />
        </picture>
      </div>
    </div>

    <!-- Controls -->
    <!-- <button
      class="carousel-control-prev"
      type="button"
      data-bs-target="#gaharucarousel"
      data-bs-slide="prev"
    >
      <span class="carousel-control-prev-icon bg-success rounded p-4"></span>
    </button> -->
    <!-- <button
      class="carousel-control-next"
      type="button"
      data-bs-target="#gaharucarousel"
      data-bs-slide="next"
    >
      <span class="carousel-control-next-icon bg-success rounded p-4"></span>
    </button> -->
  </div>
</template>

<style scoped>
.hero {
  padding-top: 30px;
  width: 100%;
  /* min-height: 100vh; */
  /* overflow: hidden; */
  border-radius: 0;
}

.hero-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  /* object-position: ; */
  display: block;
  border-radius: 0;
}

/* Mobile version height shorter */
@media (max-width: 768px) {
  .hero {
    padding-top: 0px;
  }
}

/* Caption text styling */
.carousel-caption h3 {
  font-size: 2rem;
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.6);
}

.carousel-caption p {
  font-size: 1.1rem;
}

/* Controls style */
.carousel-control-prev-icon,
.carousel-control-next-icon {
  /* filter: invert(1); */
  color: rgb(0, 255, 30);
  background-size: 100%, 100%;
  width: 3rem;
  height: 3rem;
}
</style>
