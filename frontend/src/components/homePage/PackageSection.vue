<template>
  <div class="container-fluid pb-5 px-4">
    <div class="fs-1 py-5 fw-bold text-success">Pilihan Paket</div>
    <div class="row pb-5">
      <div class="col-12 px-md-5">
        <img src="../../assets/pl_home.png" alt="Gaharu Outbound" class="pl-img rounded shadow-lg" />
      </div>
    </div>
    <div class="div text-center">
      <button class="btn btn-success fw-semibold wa-icon btn-animate-arrow">
        <span class="fw-light">Lihat Lebih Banyak</span>
        <i class="bi bi-arrow-right-circle arrow-move"></i>
      </button>
    </div>
  </div>
</template>


<style scoped>
.pl-img {
  width: 100%;
  object-fit: cover;
  object-position: center;
  display: block;
  border-radius: 0;
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


/* Versi mobile: biar ga terlalu tinggi */
@media (max-width: 768px) {
  
}
</style>
