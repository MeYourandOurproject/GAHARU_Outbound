<template>
  <div class="container-fluid py-5">
    <div class="container-xxl">
      <h2 class="text-center fw-bold mb-4">Galeri Kegiatan <br>
          <span class="text-success fs-1">GAHARU Outbound </span>
      </h2>

      <!-- Elfsight Instagram Feed | Untitled Instagram Feed -->
      <div class="elfsight-app-65b5cbe4-996d-4a32-b2f3-0fcaff3bc4a0" data-elfsight-app-lazy></div>
      <!-- BARIS 1: scroll kiri -->
      <!-- <div class="gallery-wrapper">
        <div class="gallery-scroll scroll-left">
          <div 
            class="gallery-item"
            v-for="(img, idx) in gallery"
            :key="'row1-'+idx"
          >
            <img :src="img" class="gallery-img" />
          </div>
        </div>
      </div> -->

      <!-- BARIS 2: scroll kanan -->
      <!-- <div class="gallery-wrapper mt-4 pb-5">
        <div class="gallery-scroll scroll-right">
          <div 
            class="gallery-item"
            v-for="(img, idx) in gallery"
            :key="'row2-'+idx"
          >
            <img :src="img" class="gallery-img" />
          </div>
        </div>
      </div>
      <div class="div text-center">
          <button class="btn btn-success fw-semibold wa-icon btn-animate-arrow">
              <span class="fw-light">Lihat Lebih Banyak</span>
              <i class="bi bi-arrow-right-circle arrow-move"></i>
          </button>
          </div> -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      gallery: [
        // require("@/assets/paintball.jpg"),
        // require("@/assets/rusa.jpg"),
        // require("@/assets/team_building.jpg"),
        // require("@/assets/rafting.jpg"),
        // require("@/assets/camping.jpg"),
        // require("@/assets/situ-cileunca.jpg"),
        // require("@/assets/offroad.jpg"),
        // require("@/assets/riung_gunung.jpg"),
        // require("@/assets/palayangan.webp"),
        // require("@/assets/carita_alam.jpg"),
      ]
    };
  }
};
</script>


<style scoped>
.gallery-wrapper {
  width: 100%;
  overflow: hidden;
  position: relative;
}

/* Container row */
.gallery-scroll {
  display: flex;
  gap: 20px;
  width: max-content;
}

/* Card item */
.gallery-item {
  flex: 0 0 auto;
  width: 350px;   /* tampil 2 gambar di layar */
  height: 220px;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
}

.gallery-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: 0.3s;
}

.gallery-item:hover .gallery-img {
  transform: scale(1.1);
}

/* Animation */
@keyframes scroll-left {
  0% { transform: translateX(0); }
  100% { transform: translateX(-60%); }
}

@keyframes scroll-right {
  0% { transform: translateX(-60%); }
  100% { transform: translateX(0); }
}

.scroll-left {
  animation: scroll-left 50s linear infinite;
}

.scroll-right {
  animation: scroll-right 50s linear infinite;
}

.wa-icon {
  /* width: 100px;   
  height: auto; */
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.wa-icon:hover {
  transform: scale(1.1);
  opacity: 0.85;
}

.btn-animate-arrow {
  display: inline-flex;
  align-items: center;
  gap: 8px;
}

.arrow-move {
  display: inline-block;
  animation: moveArrow 0.7s ease-in-out infinite alternate;
  font-size: 1.1rem;
}

/* Animasi gerak kanan-kiri */
@keyframes moveArrow {
  0% { transform: translateX(0); }
  100% { transform: translateX(6px); }
}

</style>



