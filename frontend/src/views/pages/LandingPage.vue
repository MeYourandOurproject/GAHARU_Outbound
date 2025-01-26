<template>
  <div class="container-fluid heroes">
    <div class="container heroes-content p-lg-5">
      <div class="row d-flex align-items-center">
        <div class="col-lg-7 text-left">
          <h1
            class="display-1 fw-bold lh-1 text-white spaced-heading shadow-text"
          >
            Become<br />
            a Traveller<br />
            Today
          </h1>
          <p class="lead text-white shadow-text">
            Discover new attractions and experiences to match your interests and
            travel style
          </p>
          <div
            class="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3"
          >
            <button type="button" class="btn btn-whatsapp btn-lg px-4">
              <img
                alt="Logo"
                height="20px"
                class="d-inline-block align-text-center me-2"
                src="../../assets/ic_outline-whatsapp.png"
              />
              Live Chat
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="container-fluid layanan">
    <div class="container">
      <div class="p-3 pb-md-4 mx-auto text-center">
        <h1 class="title-section fw-bold text-body-emphasis mt-5">LAYANAN</h1>
        <p class="fs-5 text-body-secondary border-bottom border-1 mb-3">
          TOUR DOMESTIK, SEWA BUS, ZIARAH, TOUR LUAR PULAU, LUAR NEGERI
        </p>
        <div
          class="row row-cols-1 row-cols-md-3 mb-3 text-center justify-content-center"
        >
          <div class="col">
            <div class="card mb-4 rounded-3 shadow-sm">
              <div class="overlay">Tour Domestik</div>
              <img src="../../assets/domestik.png" alt="" class="layanan-img" />
              <div class="p-2">
                <button type="button" class="w-100 btn btn-secondary btn-font">
                  Lihat Tour Domestik <i class="bi bi-arrow-right-short"></i>
                </button>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card mb-4 rounded-3 shadow-sm">
              <div class="overlay">Sewa Bus</div>
              <img src="../../assets/bus.png" alt="" class="layanan-img" />
              <div class="p-2">
                <button type="button" class="w-100 btn btn-secondary btn-font">
                  Lihat Sewa Bus <i class="bi bi-arrow-right-short"></i>
                </button>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card mb-4 rounded-3 shadow-sm">
              <div class="overlay">Ziarah</div>
              <img src="../../assets/ziarah.png" alt="" class="layanan-img" />
              <div class="p-2">
                <button type="button" class="w-100 btn btn-secondary btn-font">
                  Lihat Ziarah<i class="bi bi-arrow-right-short"></i>
                </button>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card mb-4 rounded-3 shadow-sm">
              <div class="overlay">Luar Pulau</div>
              <img
                src="../../assets/luar-pulau.png"
                alt=""
                class="layanan-img"
              />
              <div class="p-2">
                <button type="button" class="w-100 btn btn-secondary btn-font">
                  Lihat Tour Luar Pulau<i class="bi bi-arrow-right-short"></i>
                </button>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card mb-4 rounded-3 shadow-sm">
              <div class="overlay">Luar Negeri</div>
              <img
                src="../../assets/luar-negeri.png"
                alt=""
                class="layanan-img"
              />
              <div class="p-2">
                <button type="button" class="w-100 btn btn-secondary btn-font">
                  Lihat Luar Negeri<i class="bi bi-arrow-right-short"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="container-fluid fasilitas pb-5">
    <div class="container">
      <div class="p-3 pb-md-4 mx-auto text-center">
        <h1 class="title-section fw-bold text-body-emphasis mt-5">FASILITAS</h1>
        <p class="fs-5 text-body-secondary capital border-bottom border-1 mb-3">
          Kami menemani dan melayani perjalanan anda dengan fasilitas terbaik
          yang kami miliki
        </p>
      </div>
      <div class="row row-cols-1 row-cols-lg-4 capital">
        <div class="col">
          <div class="row align-items-center justify-content-center">
            <img
              src="../../assets/bus-icons.png"
              alt="Bus Icon"
              class="bus-icon"
            />

            <h5 class="fw-bold fasiliti-name">Bus Pariwisata</h5>
            <p class="deskripsi-text">Bus Pariwisata Terbaik</p>
          </div>
        </div>
        <div class="col">
          <img
            src="../../assets/tour-guide.png"
            alt="Tour-Guide Icon"
            class="tour-guide-icon"
          />

          <h5 class="fw-bold fasiliti-name">Tour Guide</h5>
          <p class="deskripsi-text">Tour Guide Profesional</p>
        </div>
        <div class="col">
          <img
            src="../../assets/ticket-icons.png"
            alt="Ticket Icon"
            class="ticket-icon"
          />

          <h5 class="fw-bold fasiliti-name">Tiket Wisata</h5>
          <p class="deskripsi-text">Tiket Wisata Terpercaya</p>
        </div>
        <div class="col">
          <img
            src="../../assets/documentasi-icons.png"
            alt="Ticket Icon"
            class="ticket-icon"
          />

          <h5 class="fw-bold fasiliti-name">Dokumentasi</h5>
          <p class="deskripsi-text">Dokumentasi Profesional</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script></script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;700&display=swap");

.heroes {
  height: 100vh;
  background-image: url("../../assets/heroadv.jpg");
  display: flex;
  background-size: cover;
  background-position: center;
}

.heroes-content {
  margin-top: 120px;
}

.title-section,
.btn-font {
  font-family: "Plus Jakarta Sans", sans-serif;
}

.text-left {
  text-align: left;
}

.display-1 {
  font-size: 4.5rem; /* Larger font size */
  font-family: "Poppins", sans-serif; /* Poppins font for the title */
}

.lead {
  font-size: 1.25rem; /* Larger font size */
  font-family: "Nunito", sans-serif; /* Nunito font for the paragraph */
}

.spaced-heading br {
  margin-top: 15px; /* Adjust this value to increase space above */
  display: block;
  /* content: ""; */
}

.btn-whatsapp {
  background-color: #25d366;
  color: white;
  display: flex;
  align-items: center;
  animation: pulse 1.5s infinite;
  border-radius: 100px;
}

.btn-whatsapp img {
  height: 20px;
}

/* LAYANAN STYLE */

.layanan-img {
  transition: transform 0.3s ease; /* Smooth transition for scaling */
}

.card:hover .layanan-img {
  transform: scale(1.1); /* Scale the image to 1.1 times its original size */
}

.overlay {
  position: absolute;
  z-index: 2;
  border: 20px;
  padding: 10px;
  background-color: rgba(160, 169, 80, 0.8);
  border-radius: 5px;
  margin: 10px;
  color: white;
  font-family: "Plus Jakarta Sans", sans-serif;
}

/* FASILITAS STYLE */
.fasilitas {
  background-color: rgb(248, 249, 250);
  /* height: 100vh; */
}

.capital {
  text-transform: uppercase;
}

.bus-icon {
  width: 130px; /* Adjust width as needed */
  height: 100px;
  margin-bottom: 20px;
}

.tour-guide-icon {
  width: 100px;
  height: 100px;
  margin-bottom: 20px;
  /* margin-left: 30px; */
}

.ticket-icon {
  width: 100px;
  height: 100px;
  margin-bottom: 20px;
}

.deskripsi-text {
  font-family: "Plus Jakarta Sans", sans-serif;
}

.fasiliti-name {
  font-family: "Nunito", sans-serif;
  font-size: 20px;
}

@media (max-width: 767px) {
  .heroes-content {
    margin-top: 280px;
  }

  .display-1 {
    font-size: 3.5rem;
  }

  .lead {
    font-size: 1.3rem; /* Adjusted font size for mobile */
  }

  .spaced-heading br {
    margin-top: 20px; /* Adjust this value for mobile */
  }

  .btn-whatsapp {
    width: 54%; /* Ensure button fits the width on mobile */
    justify-content: center;
  }

  .btn-whatsapp img {
    height: 20px;
    margin-right: 8px;
  }

  .bus-icon {
    width: 100px; /* Adjust width for mobile as needed */
    height: 80px; /* Adjust height for mobile as needed */
  }

  .tour-guide-icon {
    width: 80px; /* Adjust width for mobile as needed */
    height: 80px; /* Adjust height for mobile as needed */
    margin-left: 25px;
  }
}

/* Animation for the button */
@keyframes pulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
}
</style>
