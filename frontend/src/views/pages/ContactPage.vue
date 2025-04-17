<template>
  <div class="container-fluid contact-heroes">
    <div class="container contact">
      <div class="row align-items-center gap-2 justify-content-center">
        <div class="col-lg-4 kontak">
          <div class="container">
            <h1 class="kontak-header fw-bold">Kontak Kami</h1>
            <p class="kontak-body fw-light">
              Anda dapat menghubungi kami melalui:
            </p>
            <div class="row space-between">
              <div
                class="col-2 logo d-flex align-items-center justify-content-center"
              >
                <i class="bi bi-telephone-fill"></i>
              </div>
              <div
                class="col-10 text d-flex align-items-center justify-content-start"
              >
                <ul class="contact-list">
                  <li class="contact-item">085220097500 (Mr. Amuy)</li>
                  <li class="contact-item">081324005917 (Mr. Endi)</li>
                  <li class="contact-item">082240742734 (Mr. Dian)</li>
                </ul>
              </div>
            </div>
            <div class="row space-between">
              <div
                class="col-2 logo d-flex align-items-center justify-content-center"
              >
                <i class="bi bi-facebook"></i>
              </div>
              <div
                class="col-10 text d-flex align-items-center justify-content-start"
              >
                <a href="#" class="custom-link">Pesona Linggarjati</a>
              </div>
            </div>
            <div class="row space-between">
              <div
                class="col-2 logo d-flex align-items-center justify-content-center"
              >
                <i class="bi bi-instagram"></i>
              </div>
              <div
                class="col-10 text d-flex align-items-center justify-content-start"
              >
                <a href="#" class="custom-link">Pesona Linggarjati</a>
              </div>
            </div>
            <div class="row space-between">
              <div
                class="col-2 logo d-flex align-items-center justify-content-center"
              >
                <i class="bi bi-envelope-at"></i>
              </div>
              <div
                class="col-10 text d-flex align-items-center justify-content-start"
              >
                <a href="#" class="custom-link">Pesona.linggarjati@gmail.com</a>
              </div>
            </div>
            <div class="row space-between">
              <div
                class="col-2 logo d-flex align-items-center justify-content-center"
              >
                <i class="bi bi-geo-alt-fill"></i>
              </div>
              <div
                class="col-10 text d-flex align-items-center justify-content-start"
              >
                Ds. Linggarjati Kuningan Dapoer Bayem Cibulan Jalaksana Kuningan
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-6 legalitas">
          <div class="container">
            <div class="legalitas-header fw-bold text-right">Legalitas</div>
            <div class="legalitas-body fw-light text-right">
              <ul class="legalitas-list">
                <li class="legalitas-item mt-4">
                  <strong class="fw-bold">AKTA : </strong> ITJEU TRESNAWIAH, SH.
                  NO. 159,-Th 2016
                </li>
                <li class="legalitas-item">
                  <strong class="fw-bold">NO TDP : </strong> 101737901418
                </li>
                <li class="legalitas-item">
                  <strong class="fw-bold">SIUP : </strong>
                  510/KPTS.178-SIUP/IV/2017
                </li>
                <li class="legalitas-item">
                  <strong class="fw-bold">NPWP : </strong> 80.048.635.9-43.000
                </li>
                <li class="legalitas-item">
                  <strong class="fw-bold">HO : </strong>
                  510/KPTS.170-IG/IV/2017
                </li>
                <li class="legalitas-item">
                  <strong class="fw-bold">No Rek : </strong> BNI 0631370984 an.
                  CV. Pesona Linggarjati Paket
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.contact-heroes {
  min-height: 100vh;
  background-image: url("../../assets/rafting_hd.webp");
  background-size: cover;
  display: flex;
}

.contact {
  margin-top: 190px;
  margin-bottom: 20px;
}

.kontak {
  background-color: rgba(56, 55, 55, 0.5);
  border-radius: 20px;
  color: white;
  padding: 20px;
}

.legalitas {
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 0 20px 20px 0;
  color: black;
  padding: 20px;
}

.kontak-header {
  font-family: "Plus Jakarta Sans", sans-serif;
  font-size: 25px;
  text-align: left;
}

.legalitas-header {
  font-family: "Plus Jakarta Sans", sans-serif;
  font-size: 25px;
}

.kontak-body {
  font-size: 15px;
  text-align: left;
}

.logo i {
  font-size: 24px; /* Adjust icon size */
}

.text {
  text-align: left; /* Align text to the left */
  font-size: 15px;
}

.contact-list,
.legalitas-list {
  padding-left: 0;
  margin: 0;
  list-style: none;
}

.contact-item {
  font-size: 15px; /* Adjust font size for contact items */
  margin-bottom: 8px; /* Add space between contact items */
}

.custom-link {
  color: white; /* Set link color */
  text-decoration: none; /* Remove underline */
  font-size: 15px; /* Adjust font size */
}

@media (max-width: 767px) {
  .legalitas {
    border-radius: 0 0 20px 20px;
  }
}
</style>
