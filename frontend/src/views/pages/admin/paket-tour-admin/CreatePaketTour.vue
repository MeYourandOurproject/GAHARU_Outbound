<template>
  <div class="container-fluid">
    <div class="container pb-5">
      <form class="row g-3 text-start" @submit.prevent="handleSubmit">
        <div class="col-md-12">
          <label for="inputName" class="form-label">Name</label>
          <input
            type="text"
            class="form-control"
            id="inputName"
            v-model="name"
          />
        </div>
        <div class="col-md-6">
          <label for="inputSlug" class="form-label">Slug</label>
          <input
            type="text"
            class="form-control"
            id="inputSlug"
            :value="slug"
            readonly
          />
        </div>
        <div class="col-6">
          <label for="formFile" class="form-label">Picture</label>
          <input
            class="form-control"
            type="file"
            id="paketTourPicture"
            ref="PaketTourPicture"
            @change="handleFileUpload"
            accept=".jpg, .jpeg, .png, .bmp"
          />
        </div>

        <!-- Image preview -->
        <div class="col-md-12" v-if="imagePreview">
          <div class="row">
            <label class="form-label">Image Preview</label>
            <img
              :src="imagePreview"
              alt="Image Preview"
              style="max-width: 300px"
            />
          </div>
        </div>

        <div class="col-md-4">
          <label for="inputPrice" class="form-label">Price</label>
          <input
            type="text"
            class="form-control"
            id="inputPrice"
            v-model="price"
          />
        </div>
        <div class="col-md-4">
          <label for="inputCountry" class="form-label">Country</label>
          <input
            type="text"
            class="form-control"
            id="inputCountry"
            v-model="country"
          />
        </div>
        <div class="col-md-4">
          <label for="inputCity" class="form-label">City</label>
          <input
            type="text"
            class="form-control"
            id="inputCity"
            v-model="city"
          />
        </div>

        <div class="col-md-12">
          <label for="" class="form-label">Price List</label>
          <div class="row">
            <div class="col-12 p-2">
              <label class="form-label">1 Hari</label>
              <div class="row text-center g-2 m-2 align-items-center fw-bold">
                <div
                  class="col-2 fw-bold align-items-center justify-content-center"
                >
                  Paket
                </div>
                <div class="col">33 pax</div>
                <div class="col">50 pax</div>
                <div class="col">55 pax</div>
              </div>
              <div class="row text-center g-2 m-2">
                <div
                  class="col-2 fw-bold align-items-center justify-content-center"
                >
                  Executive
                </div>
                <div class="col">
                  <input
                    type="text"
                    class="form-control"
                    v-model="pax_33_1_day_executive"
                  />
                </div>
                <div class="col">
                  <input
                    type="text"
                    class="form-control"
                    v-model="pax_50_1_day_executive"
                  />
                </div>
                <div class="col">
                  <input
                    type="text"
                    class="form-control"
                    v-model="pax_55_1_day_executive"
                  />
                </div>
              </div>
              <div class="row text-center g-2 m-2">
                <div
                  class="col-2 fw-bold align-items-center justify-content-center"
                >
                  Premium
                </div>
                <div class="col">
                  <input
                    type="text"
                    class="form-control"
                    v-model="pax_33_1_day_premium"
                  />
                </div>
                <div class="col">
                  <input
                    type="text"
                    class="form-control"
                    v-model="pax_50_1_day_premium"
                  />
                </div>
                <div class="col">
                  <input
                    type="text"
                    class="form-control"
                    v-model="pax_55_1_day_premium"
                  />
                </div>
              </div>
              <div class="row text-center g-2 m-2">
                <div
                  class="col-2 fw-bold align-items-center justify-content-center"
                >
                  Students
                </div>
                <div class="col">
                  <input
                    type="text"
                    class="form-control"
                    v-model="pax_33_1_day_students"
                  />
                </div>
                <div class="col">
                  <input
                    type="text"
                    class="form-control"
                    v-model="pax_50_1_day_students"
                  />
                </div>
                <div class="col">
                  <input
                    type="text"
                    class="form-control"
                    v-model="pax_55_1_day_students"
                  />
                </div>
              </div>
            </div>
            <div class="col-12 p-2">
              <label class="form-label">2 Malam 1 Hari</label>
              <div
                class="row text-center g-2 m-2 m-2 align-items-center fw-bold"
              >
                <div
                  class="col-2 fw-bold align-items-center justify-content-center"
                >
                  Paket
                </div>
                <div class="col">33 pax</div>
                <div class="col">50 pax</div>
                <div class="col">56 pax</div>
              </div>
              <div class="row text-center g-2 m-2">
                <div
                  class="col-2 fw-bold align-items-center justify-content-center"
                >
                  Executive
                </div>
                <div class="col">
                  <input
                    type="text"
                    class="form-control"
                    v-model="pax_33_2_day_1_night_executive"
                  />
                </div>
                <div class="col">
                  <input
                    type="text"
                    class="form-control"
                    v-model="pax_50_2_day_1_night_executive"
                  />
                </div>
                <div class="col">
                  <input
                    type="text"
                    class="form-control"
                    v-model="pax_56_2_day_1_night_executive"
                  />
                </div>
              </div>
              <div class="row text-center g-2 m-2">
                <div
                  class="col-2 fw-bold align-items-center justify-content-center"
                >
                  Premium
                </div>
                <div class="col">
                  <input
                    type="text"
                    class="form-control"
                    v-model="pax_33_2_day_1_night_premium"
                  />
                </div>
                <div class="col">
                  <input
                    type="text"
                    class="form-control"
                    v-model="pax_50_2_day_1_night_premium"
                  />
                </div>
                <div class="col">
                  <input
                    type="text"
                    class="form-control"
                    v-model="pax_56_2_day_1_night_premium"
                  />
                </div>
              </div>
              <div class="row text-center g-2 m-2">
                <div
                  class="col-2 fw-bold align-items-center justify-content-center"
                >
                  Students
                </div>
                <div class="col">
                  <input
                    type="text"
                    class="form-control"
                    v-model="pax_33_2_day_1_night_students"
                  />
                </div>
                <div class="col">
                  <input
                    type="text"
                    class="form-control"
                    v-model="pax_50_2_day_1_night_students"
                  />
                </div>
                <div class="col">
                  <input
                    type="text"
                    class="form-control"
                    v-model="pax_56_2_day_1_night_students"
                  />
                </div>
              </div>
            </div>
            <div class="col-md-12">
              <div class="col-md-12 mb-3">
                <label for="inputDestination" class="form-label me-3"
                  >Destinations</label
                >
                <button
                  type="button"
                  class="btn btn-success"
                  @click="addDestination"
                >
                  <i class="bi bi-plus-lg"></i>
                </button>
              </div>
              <div class="row" id="destinationFields">
                <div
                  class="col-12"
                  v-for="(destination, index) in destinations"
                  :key="index"
                >
                  <div class="row mb-3 align-items-center text-center">
                    <div class="col-1 fw-bold">{{ index + 1 }}.</div>
                    <div class="col">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Name"
                        v-model="destination.nama"
                      />
                    </div>
                    <div class="col">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Alamat"
                        v-model="destination.alamat"
                      />
                    </div>
                    <div class="col-1">
                      <button
                        type="button"
                        class="btn btn-danger"
                        @click="removeDestination(index)"
                      >
                        <i class="bi bi-x-lg"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-12 mt-3">
          <button type="submit" class="btn btn-primary">Submit</button>
        </div>
        <div class="container-fluid">
          <div class="container">
            <div class="row align-items-center justify-content-center">
              <div class="col-lg-6">
                <!-- Success Alert -->
                <transition name="fade">
                  <div
                    v-if="showSuccessAlert"
                    class="alert alert-success d-flex align-items-center"
                    role="alert"
                  >
                    <i class="bi bi-check-circle-fill me-3 ms-3"></i>
                    <div>New Paket Tour was Added</div>
                  </div>
                </transition>

                <!-- Error Alert -->
                <transition name="fade">
                  <div
                    v-if="showErrorAlert"
                    class="alert alert-danger d-flex align-items-center"
                    role="alert"
                  >
                    <i class="bi bi-x-circle-fill me-3 ms-3"></i>
                    <div>Create Paket Tour failed! Please check the form.</div>
                  </div>
                </transition>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { ref, watch } from "vue";
import { useRouter } from "vue-router";

export default {
  setup() {
    const router = useRouter();
    const name = ref("");
    const slug = ref("");
    const selectedFile = ref(null);
    const price = ref("");
    const imagePreview = ref(null); // Add this line
    const country = ref("");
    const city = ref("");
    const destinations = ref([{ nama: "", alamat: "" }]);
    const pax_33_1_day_executive = ref("");
    const pax_50_1_day_executive = ref("");
    const pax_55_1_day_executive = ref("");
    const pax_33_1_day_premium = ref("");
    const pax_50_1_day_premium = ref("");
    const pax_55_1_day_premium = ref("");
    const pax_33_1_day_students = ref("");
    const pax_50_1_day_students = ref("");
    const pax_55_1_day_students = ref("");
    const pax_33_2_day_1_night_executive = ref("");
    const pax_50_2_day_1_night_executive = ref("");
    const pax_56_2_day_1_night_executive = ref("");
    const pax_33_2_day_1_night_premium = ref("");
    const pax_50_2_day_1_night_premium = ref("");
    const pax_56_2_day_1_night_premium = ref("");
    const pax_33_2_day_1_night_students = ref("");
    const pax_50_2_day_1_night_students = ref("");
    const pax_56_2_day_1_night_students = ref("");
    const showSuccessAlert = ref(false);
    const showErrorAlert = ref(false);

    const addDestination = () => {
      destinations.value.push({ nama: "", alamat: "" });
    };

    const removeDestination = (index) => {
      destinations.value.splice(index, 1);
    };

    watch(name, (newValue) => {
      slug.value = newValue.toLowerCase().replace(/ /g, "-");
    });

    const handleFileUpload = (event) => {
      selectedFile.value = event.target.files[0];
      if (selectedFile.value) {
        const reader = new FileReader();
        reader.onload = (e) => {
          imagePreview.value = e.target.result; // Update this line
        };
        reader.readAsDataURL(selectedFile.value);
      }
    };

    const handleSubmit = async () => {
      // Collect form data to submit (without including slug)
      const formData = new FormData();
      formData.append("name", name.value);
      formData.append("price", price.value);
      formData.append("country", country.value);
      formData.append("city", city.value);
      formData.append("picture", selectedFile.value); // menambahkan gambar yang dipilih
      formData.append("destinations", JSON.stringify(destinations.value));
      formData.append("_33_pax_1_day_executive", pax_33_1_day_executive.value);
      formData.append("_50_pax_1_day_executive", pax_50_1_day_executive.value);
      formData.append("_55_pax_1_day_executive", pax_55_1_day_executive.value);
      formData.append("_33_pax_1_day_premium", pax_33_1_day_premium.value);
      formData.append("_50_pax_1_day_premium", pax_50_1_day_premium.value);
      formData.append("_55_pax_1_day_premium", pax_55_1_day_premium.value);
      formData.append("_33_pax_1_day_students", pax_33_1_day_students.value);
      formData.append("_50_pax_1_day_students", pax_50_1_day_students.value);
      formData.append("_55_pax_1_day_students", pax_55_1_day_students.value);
      formData.append(
        "_33_pax_2_day_1_night_executive",
        pax_33_2_day_1_night_executive.value
      );
      formData.append(
        "_50_pax_2_day_1_night_executive",
        pax_50_2_day_1_night_executive.value
      );
      formData.append(
        "_56_pax_2_day_1_night_executive",
        pax_56_2_day_1_night_executive.value
      );
      formData.append(
        "_33_pax_2_day_1_night_premium",
        pax_33_2_day_1_night_premium.value
      );
      formData.append(
        "_50_pax_2_day_1_night_premium",
        pax_50_2_day_1_night_premium.value
      );
      formData.append(
        "_56_pax_2_day_1_night_premium",
        pax_56_2_day_1_night_premium.value
      );
      formData.append(
        "_33_pax_2_day_1_night_students",
        pax_33_2_day_1_night_students.value
      );
      formData.append(
        "_50_pax_2_day_1_night_students",
        pax_50_2_day_1_night_students.value
      );
      formData.append(
        "_56_pax_2_day_1_night_students",
        pax_56_2_day_1_night_students.value
      );

      // Log the form data to console
      // for (let pair of formData.entries()) {
      //   console.log(pair[0] + ": " + pair[1]);
      // }

      // Get the token from local storage
      const token = localStorage.getItem("token");
      // console.log(token);

      // Submit the data to backend using fetch
      try {
        const response = await fetch(
          "https://api.gaharuoutbound.com/api/paket-tour/create",
          {
            method: "POST",
            body: formData,
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        const result = await response.json();
        console.log("Response from server:", result);
        showSuccessAlert.value = true;
        showErrorAlert.value = false;

        setTimeout(() => {
          router.push("/admin/paket-tour");
        }, 2000);
      } catch (error) {
        showSuccessAlert.value = false;
        showErrorAlert.value = true;
        // console.error("Error submitting form:", error);
      }
    };

    //
    return {
      name,
      slug,
      selectedFile,
      imagePreview,
      price,
      country,
      city,
      pax_33_1_day_executive,
      pax_50_1_day_executive,
      pax_55_1_day_executive,
      pax_33_1_day_premium,
      pax_50_1_day_premium,
      pax_55_1_day_premium,
      pax_33_1_day_students,
      pax_50_1_day_students,
      pax_55_1_day_students,
      pax_33_2_day_1_night_executive,
      pax_50_2_day_1_night_executive,
      pax_56_2_day_1_night_executive,
      pax_33_2_day_1_night_premium,
      pax_50_2_day_1_night_premium,
      pax_56_2_day_1_night_premium,
      pax_33_2_day_1_night_students,
      pax_50_2_day_1_night_students,
      pax_56_2_day_1_night_students,
      destinations,
      addDestination,
      removeDestination,
      handleFileUpload,
      handleSubmit,
      showSuccessAlert,
      showErrorAlert,
    };
  },
};
</script>

<style>
.form-label {
  font-weight: bold;
}

.alert {
  z-index: 1050; /* Pastikan ini lebih tinggi dari elemen lain */
  position: relative; /* Atau gunakan 'fixed' jika Anda ingin alert mengikuti layar saat scrolling */
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, 
.fade-leave-to /* versi di bawah v2.1.8 */ {
  opacity: 0;
}
</style>
