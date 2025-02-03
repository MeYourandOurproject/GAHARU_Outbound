<template>
  <div class="container-fluid heroes">
    <div class="container heroes-content p-lg-5">
      <div class="row d-flex align-items-center">
        <div class="col-lg-12 text-left">
          <h1 class="brand fw-bold lh-1 spaced-heading shadow-text">
            <!-- Become<br />
            a Traveller<br />
            Today  -->
            "Nikmati Liburan Sempurna: <br />
            Aktivitas Seru, Destinasi Memikat, <br />dan Penginapan Nyaman"
          </h1>
          <!-- <p class="lead-1 text-white shadow-text mt-4">
            "Nikmati Liburan Sempurna: <br />
            Aktivitas Seru, Destinasi Memikat, <br />dan Penginapan Nyaman"
          </p> -->
          <!-- <p class="lead text-white shadow-text">
            Outbond, Rafting, Jeep Offroad, Outdor Activity, Camping, Penginapan
            dan Hotel
          </p> -->

          <div
            class="d-flex justify-content-center align-items-center mt-3 gap-1"
          >
            <a
              href="https://wa.me/6287708972304"
              class="text-decoration-none me-2"
            >
              <button
                class="btn btn-lg btn-wa"
                style="background-color: #198754; color: #fff"
              >
                <i class="bi bi-whatsapp me-2"></i> Konsultasikan
                <div class="popup-wa">Tanya Admin di WhatsApp!</div>
              </button>
            </a>

            <a href="#layanan" class="btn text-decoration-none rounded-3">
              <button type="button" class="btn btn-galeri btn-primary btn-lg">
                Lihat Paket<i
                  class="bi bi-arrow-right-circle-fill ms-2"
                ></i></button
            ></a>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div id="layanan" class="container-fluid layanan">
    <div class="container">
      <div class="p-3 pb-md-4 mx-auto text-center">
        <h1 class="title-section fw-bold text-body-emphasis mt-5">
          Pilihan Paket Wisata
        </h1>
        <p class="fs-5 text-body-secondary border-bottom border-1">
          Nikmati berbagai kegiatan (Rafting, Outbond, Jeep Offroad, Fun Games),
          Destinasi Menarik, dan Penginapan Nyaman
        </p>
        <div
          class="row row-cols-1 row-cols-md-3 mb-5 mt-5 text-center justify-content-center"
        >
          <!-- FUN ACTIVITY -->
          <div class="col">
            <div class="card text-center shadow-lg">
              <div class="card-body">
                <img
                  src="../../assets/rafting.jpg"
                  alt=""
                  class="card-img-top card-img"
                />
                <div class="overlay">
                  <div class="judul-paket">Fun Activity</div>
                </div>
                <div class="border border-2 m-1 mt-3 p-3 rounded-3">
                  <p class="card-text">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Magnam rerum accusamus, iste consequatur eius velit!
                  </p>
                </div>
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
                      <div class="popup-wa">Tanya Admin di WhatsApp!</div>
                    </button>
                  </a>
                  <router-link
                    to="/fun-activity-package-page"
                    class="btn btn-sm text-decoration-none rounded-3"
                  >
                    <button
                      type="button"
                      class="btn btn-galeri btn-primary btn-sm"
                    >
                      Lihat Paket<i
                        class="bi bi-arrow-right-circle-fill ms-2"
                      ></i></button
                  ></router-link>
                </div>
              </div>
            </div>
          </div>

          <!-- DESTINATION -->
          <div class="col">
            <div class="card text-center shadow-lg">
              <div class="card-body">
                <img
                  src="../../assets/situ-cileunca.jpg"
                  alt=""
                  class="card-img-top card-img"
                />
                <div class="overlay">
                  <div class="judul-paket">Best Destination</div>
                </div>
                <div class="border border-2 m-1 mt-3 p-3 rounded-3">
                  <p class="card-text">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Magnam rerum accusamus, iste consequatur eius velit!
                  </p>
                </div>
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
                      <div class="popup-wa">Tanya Admin di WhatsApp!</div>
                    </button>
                  </a>
                  <router-link
                    to="/best-destination-package-page"
                    class="btn btn-sm text-decoration-none rounded-3"
                  >
                    <button
                      type="button"
                      class="btn btn-galeri btn-primary btn-sm"
                    >
                      Lihat Paket<i
                        class="bi bi-arrow-right-circle-fill ms-2"
                      ></i></button
                  ></router-link>
                </div>
              </div>
            </div>
          </div>

          <!-- STAYCATION -->
          <div class="col">
            <div class="card text-center shadow-lg">
              <div class="card-body">
                <img
                  src="../../assets/camping.jpg"
                  alt=""
                  class="card-img-top card-img"
                />
                <div class="overlay">
                  <div class="judul-paket">Cozy Staycation</div>
                </div>
                <div class="border border-2 m-1 mt-3 p-3 rounded-3">
                  <p class="card-text">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Magnam rerum accusamus, iste consequatur eius velit!
                  </p>
                </div>
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
                      <div class="popup-wa">Tanya Admin di WhatsApp!</div>
                    </button>
                  </a>
                  <router-link
                    to="/cozy-staycation-package-page"
                    class="btn btn-sm text-decoration-none rounded-3"
                  >
                    <button
                      type="button"
                      class="btn btn-galeri btn-primary btn-sm"
                    >
                      Lihat Paket<i
                        class="bi bi-arrow-right-circle-fill ms-2"
                      ></i></button
                  ></router-link>
                </div>
              </div>
            </div>
          </div>

          <!-- ALL PACKAGE -->
          <div class="col">
            <div class="card text-center shadow-lg">
              <div class="card-body">
                <img
                  src="../../assets/situ-cileunca.jpg"
                  alt=""
                  class="card-img-top card-img"
                />
                <div class="overlay">
                  <div class="judul-paket">ALL IN PACKAGE</div>
                </div>
                <div class="border border-2 m-1 mt-3 p-3 rounded-3">
                  <p class="card-text">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Magnam rerum accusamus, iste consequatur eius velit!
                  </p>
                </div>
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
                      <div class="popup-wa">Tanya Admin di WhatsApp!</div>
                    </button>
                  </a>
                  <router-link
                    to="/all-package"
                    class="btn btn-sm text-decoration-none rounded-3"
                  >
                    <button
                      type="button"
                      class="btn btn-galeri btn-primary btn-sm"
                    >
                      Lihat Paket<i
                        class="bi bi-arrow-right-circle-fill ms-2"
                      ></i></button
                  ></router-link>
                </div>
              </div>
            </div>
          </div>

          <!-- ALL PACKAGE -->
          <div class="col">
            <div class="card text-center shadow-lg">
              <div class="card-body">
                <img
                  src="../../assets/situ-cileunca.jpg"
                  alt=""
                  class="card-img-top card-img"
                />
                <div class="overlay">
                  <div class="judul-paket">COSTUM PACKAGE</div>
                </div>
                <div class="border border-2 m-1 mt-3 p-3 rounded-3">
                  <p class="card-text">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Magnam rerum accusamus, iste consequatur eius velit!
                  </p>
                </div>
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
                      <div class="popup-wa">Tanya Admin di WhatsApp!</div>
                    </button>
                  </a>
                  <router-link
                    to="/costum-package-page"
                    class="btn btn-sm text-decoration-none rounded-3"
                  >
                    <button
                      type="button"
                      class="btn btn-galeri btn-primary btn-sm"
                    >
                      Lihat Paket<i
                        class="bi bi-arrow-right-circle-fill ms-2"
                      ></i></button
                  ></router-link>
                </div>
              </div>
            </div>
          </div>

          <!-- <div class="col mt-2 mb-2">
            <div class="card rounded-3 shadow-sm">
              <div class="overlay">
                <div class="judul-paket bg-success">- Fun Activity -</div>
              </div>

              <img
                src="../../assets/rafting.jpg"
                alt="Adventure Package"
                class="layanan-img"
              />

              <div class="p-3">
                <div class="detail-paket text-right">
                  <div class="fw-bold">Kegiatan:</div>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Sapiente, excepturi!
                </div>
              </div>
              <div class="col">
                <div
                  class="row d-flex align-items-center justify-content-center"
                >
                  <div class="col">
                    <a
                      href="https://wa.me/6287708972304"
                      class="text-decoration-none me-2"
                      ><button class="btn btn-sm btn-wa">
                        <i class="bi bi-whatsapp"></i>
                        <div class="popup-wa">Tanya Admin di WhatsApp!</div>
                      </button></a
                    >
                    <div class="btn btn-sm btn-success">
                      Lihat Detail
                      <i class="bi bi-arrow-right-circle-fill ms-2"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col mt-2 mb-2">
            <div class="card rounded-3 shadow-sm">
              <div class="overlay">
                <div class="judul-paket bg-success">- Best Destination -</div>
              </div>

              <img
                src="../../assets/situ-cileunca.jpg"
                alt="Adventure Package"
                class="layanan-img"
              />

              <div class="p-3">
                <div class="detail-paket text-right">
                  <div class="fw-bold">Kegiatan:</div>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Sapiente, excepturi!
                </div>
              </div>
              <div class="col">
                <div
                  class="row d-flex align-items-center justify-content-center"
                >
                  <div class="col">
                    <a
                      href="https://wa.me/6287708972304"
                      class="text-decoration-none me-2"
                      ><button class="btn btn-sm btn-wa">
                        <i class="bi bi-whatsapp"></i>
                        <div class="popup-wa">Tanya Admin di WhatsApp!</div>
                      </button></a
                    >
                    <div class="btn btn-sm btn-success">
                      Lihat Detail
                      <i class="bi bi-arrow-right-circle-fill ms-2"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col mt-2 mb-2">
            <div class="card rounded-3 shadow-sm">
              <div class="overlay">
                <div class="judul-paket bg-success">- Cozy Staycation -</div>
              </div>

              <img
                src="../../assets/camping.jpg"
                alt="Adventure Package"
                class="layanan-img"
              />

              <div class="p-3">
                <div class="detail-paket text-right">
                  <div class="fw-bold">Kegiatan:</div>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Sapiente, excepturi!
                </div>
              </div>
              <div class="col">
                <div
                  class="row d-flex align-items-center justify-content-center"
                >
                  <div class="col">
                    <a
                      href="https://wa.me/6287708972304"
                      class="text-decoration-none me-2"
                      ><button class="btn btn-sm btn-wa">
                        <i class="bi bi-whatsapp"></i>
                        <div class="popup-wa">Tanya Admin di WhatsApp!</div>
                      </button></a
                    >
                    <div class="btn btn-sm btn-success">
                      Lihat Detail
                      <i class="bi bi-arrow-right-circle-fill ms-2"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col mt-2 mb-2">
            <div class="card rounded-3 shadow-sm">
              <div class="overlay">
                <div class="judul-paket bg-success">- All Package -</div>
              </div>

              <img
                src="../../assets/camping.jpg"
                alt="Adventure Package"
                class="layanan-img"
              />

              <div class="p-3">
                <div class="detail-paket text-right">
                  <div class="fw-bold">Kegiatan:</div>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Sapiente, excepturi!
                </div>
              </div>
              <div class="col">
                <div
                  class="row d-flex align-items-center justify-content-center"
                >
                  <div class="col">
                    <a
                      href="https://wa.me/6287708972304"
                      class="text-decoration-none me-2"
                      ><button class="btn btn-sm btn-wa">
                        <i class="bi bi-whatsapp"></i>
                        <div class="popup-wa">Tanya Admin di WhatsApp!</div>
                      </button></a
                    >
                    <div class="btn btn-sm btn-success">
                      Lihat Detail
                      <i class="bi bi-arrow-right-circle-fill ms-2"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col mt-2 mb-2">
            <div class="card rounded-3 shadow-sm">
              <div class="overlay">
                <div class="judul-paket bg-success">- Costum Package-</div>
              </div>

              <img
                src="../../assets/camping.jpg"
                alt="Adventure Package"
                class="layanan-img"
              />

              <div class="p-3">
                <div class="detail-paket text-right">
                  <div class="fw-bold">Kegiatan:</div>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Sapiente, excepturi!
                </div>
              </div>
              <div class="col">
                <div
                  class="row d-flex align-items-center justify-content-center"
                >
                  <div class="col">
                    <a
                      href="https://wa.me/6287708972304"
                      class="text-decoration-none me-2"
                      ><button class="btn btn-sm btn-wa">
                        <i class="bi bi-whatsapp"></i>
                        <div class="popup-wa">Tanya Admin di WhatsApp!</div>
                      </button></a
                    >
                    <div class="btn btn-sm btn-success">
                      Lihat Detail
                      <i class="bi bi-arrow-right-circle-fill ms-2"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> -->
        </div>
      </div>
    </div>
  </div>

  <div class="container-fluid fasilitas">
    <div class="container pt-5 pb-5">
      <div class="pb-md-4 mx-auto text-center">
        <p class="fs-5">Kenapa Liburanmu Harus Bersama</p>
        <h1 class="title-facility-section fw-bold">Gaharu Adventure</h1>
      </div>
      <div class="row row-cols-1 row-cols-lg-2 bg-facility">
        <div class="col mt-5">
          <div class="row justify-content-center">
            <div class="col-2 d-flex justify-content-center">
              <i class="bi bi-check-circle-fill icon-facility"></i>
            </div>
            <div class="col-8 text-start">
              <div class="fw-bold fasiliti-name">Proses Mudah dan Cepat</div>
              <div class="deskripsi-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. A, in.
                Illo et optio non sequi cum vitae cupiditate maxime mollitia
                adipisci. Ipsam a eaque neque iure. Inventore quia id libero.
              </div>
            </div>
          </div>
        </div>
        <div class="col mt-5">
          <div class="row justify-content-center">
            <div class="col-2 d-flex justify-content-center">
              <i class="bi bi-hand-thumbs-up-fill icon-facility"></i>
            </div>
            <div class="col-8 text-start">
              <div class="fw-bold fasiliti-name">Terbaik Dikelasnya</div>
              <div class="deskripsi-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. A, in.
                Illo et optio non sequi cum vitae cupiditate maxime mollitia
                adipisci.
              </div>
            </div>
          </div>
        </div>
        <div class="col mt-5">
          <div class="row justify-content-center">
            <div class="col-2 d-flex justify-content-center">
              <i class="bi bi-person-check icon-facility"></i>
            </div>
            <div class="col-8 text-start">
              <div class="fw-bold fasiliti-name">
                Fasilitator Tersertifikasi
              </div>
              <div class="deskripsi-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. A, in.
                Illo et optio non sequi cum vitae cupiditate maxime mollitia
                adipisci.
              </div>
            </div>
          </div>
        </div>
        <div class="col mt-5">
          <div class="row justify-content-center">
            <div class="col-2 d-flex justify-content-center">
              <i class="bi bi-card-checklist icon-facility"></i>
            </div>
            <div class="col-8 text-start">
              <div class="fw-bold fasiliti-name">Berpengalaman</div>
              <div class="deskripsi-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. A, in.
                Illo et optio non sequi cum vitae cupiditate maxime mollitia
                adipisci.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="container-fluid">
    <div class="container mt-5 mb-5">
      <TestimoniLayout />
    </div>
  </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;700&display=swap");

.heroes {
  height: 100vh;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("../../assets/heroadv.jpeg");
  display: flex;
  background-size: cover;
  background-position: bottom;
}

.heroes-content {
  margin-top: 250px;
}

.brand {
  font-size: 50px;
  font-family: Arial, Helvetica, sans-serif;
  text-align: center;
  color: rgb(255, 255, 255, 0.9);
  letter-spacing: 3px;
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 20px;
  padding: 30px;
}

.title-section {
  font-family: "Plus Jakarta Sans", sans-serif;
  letter-spacing: 5px;
}

.judul-paket {
  font-family: "Plus Jakarta Sans", sans-serif;
  letter-spacing: 3px;
}

.detail-paket {
  font-size: 10px;
  letter-spacing: 2px;
}

.btn-font {
  font-family: "Plus Jakarta Sans", sans-serif;
}

.text-left {
  text-align: left;
}

.display-1 {
  font-size: 4.5rem; /* Larger font size */
  font-family: "Poppins", sans-serif; /* Poppins font for the title */
  color: #ffffff;
  text-align: center;
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.7),
    /* Shadow gelap */ 0px 4px 6px rgba(255, 255, 255, 0.2); /* Highlight lembut */
}

.lead {
  font-size: 1.5rem; /* Larger font size */
  font-family: "Nunito", sans-serif; /* Nunito font for the paragraph */
  text-align: center;
  /* text-transform: lowercase; */
  letter-spacing: 2px;
  font-weight: bold;
}

.lead-1 {
  font-size: 1rem; /* Larger font size */
  font-family: "Nunito", sans-serif; /* Nunito font for the paragraph */
  text-align: center;
  /* text-transform: lowercase; */
  letter-spacing: 3px;
  color: rgb(255, 255, 255, 0.7);
}

.spaced-heading br {
  margin-top: 15px; /* Adjust this value to increase space above */
  display: block;
  /* content: ""; */
}

/* Button WhatsApp */
.btn-paket {
  background-color: #ffffff; /* Green background */
  color: #000000; /* White text */
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  /* border: 3px solid #000000; Border matches green */
  transition: all 0.3s ease; /* Smooth transition */

  font-weight: bold;
}

.btn-paket:hover {
  background-color: rgb(25, 135, 84); /* White background on hover */
  color: white;
}

.btn-paket a {
  text-decoration: none;
  color: #000000;
}

.btn-paket a:hover {
  text-decoration: none;
  color: #ffffff;
}

.btn-paket:hover i {
  display: inline-block;
  transition: transform 0.3s ease;
  animation: move-arrow 1s infinite; /* Animasi berjalan terus-menerus */
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
}

/* LAYANAN STYLE */

.layanan-img {
  transition: transform 0.3s ease; /* Smooth transition for scaling */
  /* padding: 5px; */
}

.card-img {
  filter: brightness(30%);
  border-radius: 10px;
  display: block;
  width: 100%;
}

.card {
  /* height: 18rem; Ukuran card lebih kecil */
  margin: 10px; /* Center alignment */
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.9);
  /* border: 3px solid rgb(25, 135, 84); */
}

.card-body {
  position: relative;
}

.layanan-img {
  position: relative; /* Tambahkan ini untuk membuat .overlay relatif ke .card */
  width: 100%; /* Pastikan gambar sesuai dengan lebar card */
  height: 150px; /* Atur tinggi gambar agar lebih kecil */
  object-fit: cover; /* Potong gambar tanpa merusak rasio */
  border-radius: 5px; /* Opsional: sudut melengkung */
}

.card .detail-paket {
  font-size: 0.6rem; /* Ukuran teks lebih kecil */
  /* line-height: 1.2; Sesuaikan spasi antar baris */
}

.card:hover .layanan-img {
  transform: scale(1.1); /* Scale the image to 1.1 times its original size */
}

.overlay {
  position: absolute;
  top: 28%; /* Posisikan di tengah vertikal */
  left: 50%; /* Posisikan di tengah horizontal */
  transform: translate(-50%, -50%); /* Pastikan benar-benar di tengah */
  /* background-color: rgba(
    0,
    0,
    0,
    0.65
  ); Latar belakang dengan warna gelap transparan */
  color: white; /* Warna teks */
  padding: 10px; /* Sesuaikan padding untuk ukuran */
  border-radius: 10px; /* Membuat sudut membulat */
  font-size: 1.8rem; /* Ukuran teks lebih besar */
  font-weight: bold;
  text-align: center; /* Pusatkan teks */
  z-index: 2; /* Pastikan overlay berada di atas */
  width: 90%; /* Sesuaikan ukuran lebar overlay */
}

/* FASILITAS STYLE */
.fasilitas {
  background-color: rgb(25, 135, 84);
  /* height: 100vh; */
  color: white;
}

.icon-facility {
  font-size: 60px;
  /* color: #ffffff; */
  margin-top: 0;
  padding-top: 0;
}

.deskripsi-text {
  font-family: "Plus Jakarta Sans", sans-serif;
  /* text-align: justify; */
}

.fasiliti-name {
  margin-top: 8px;
  font-family: "Nunito", sans-serif;
  font-size: 25px;
}

.title-facility-section {
  font-size: 60px;
  font-family: "Plus Jakarta Sans", sans-serif;
  letter-spacing: 5px;
}

.title-testimoni-section {
  font-size: 40px;
  font-family: "Plus Jakarta Sans", sans-serif;
  letter-spacing: 5px;
}

@media (max-width: 767px) {
  .heroes-content {
    margin-top: 400px;
  }

  .brand {
    font-size: 30px;
    font-family: Arial, Helvetica, sans-serif;
    text-align: center;
    color: rgb(255, 255, 255, 0.9);
    /* letter-spacing: 3px; */
    background-color: rgba(0, 0, 0, 0.3);
    border-radius: 10px;
    padding: 20px;
  }

  .lead {
    font-size: 1.3rem; /* Adjusted font size for mobile */
  }

  .spaced-heading br {
    margin-top: 20px; /* Adjust this value for mobile */
  }

  .btn-paket {
    /* width: 54%; Ensure button fits the width on mobile */
    justify-content: center;
  }

  .btn-paket img {
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
    .card {
      width: 100%; /* Lebar penuh di layar kecil */
      margin-bottom: 20px; /* Jarak antar card */
    }

    .layanan-img {
      height: 120px; /* Gambar lebih kecil di layar kecil */
    }

    .detail-paket {
      font-size: 0.75rem; /* Ukuran teks lebih kecil */
    }
    margin-left: 25px;
  }
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
    transform: translateX(10px); /* Panah bergerak ke kanan */
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

/* html {
  scroll-behavior: smooth;
} */
</style>

<script>
import TestimoniLayout from "../layouts/TestimoniLayout.vue";

export default {
  name: "HomePage",
  components: {
    TestimoniLayout,
  },
};
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start", // Awal elemen target
      });
    }
  });
});
</script>
