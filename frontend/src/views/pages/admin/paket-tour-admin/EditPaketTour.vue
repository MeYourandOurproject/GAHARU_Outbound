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
            :placeholder="datas.name"
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
            :placeholder="datas.price"
          />
        </div>
        <div class="col-md-4">
          <label for="inputCountry" class="form-label">Country</label>
          <input
            type="text"
            class="form-control"
            id="inputCountry"
            v-model="country"
            :placeholder="datas.country"
          />
        </div>
        <div class="col-md-4">
          <label for="inputCity" class="form-label">City</label>
          <input
            type="text"
            class="form-control"
            id="inputCity"
            v-model="city"
            :placeholder="datas.city"
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
                    <div>Edit Paket Tour Successfully</div>
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
                    <div>Edit Paket Tour failed! Please check the form.</div>
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
import { ref, onMounted, watch } from "vue";
import { useRoute, useRouter } from "vue-router";

export default {
  props: {
    paketTour: {
      type: Object,
      required: true,
    },
  },
  setup() {
    const route = useRoute();
    const router = useRouter();
    const datas = ref({ name: "", picture: "" });
    const name = ref("");
    const slug = ref("");
    const imagePreview = ref("");
    const selectedFile = ref(null);
    const price = ref("");
    const country = ref("");
    const city = ref("");
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
    const destinations = ref([{ nama: "", alamat: "" }]);
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

    const fetchPaketTour = async () => {
      try {
        const slug = route.params.slug;
        const response = await fetch(
          `http://localhost:3001/api/paket-tour/${slug}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        let data = await response.json();
        datas.value = data;
        name.value = data.name;
        imagePreview.value = data.picture;
        price.value = data.price;
        country.value = data.country;
        city.value = data.city;

        const executivePackage_1day = data.Price_list_1_days.find(
          (pkg) => pkg.package === "Executive"
        );
        if (executivePackage_1day) {
          pax_33_1_day_executive.value = executivePackage_1day._33_pax;
          pax_50_1_day_executive.value = executivePackage_1day._50_pax;
          pax_55_1_day_executive.value = executivePackage_1day._55_pax;
        } else {
          pax_33_1_day_executive.value = 0;
          pax_50_1_day_executive.value = 0;
          pax_55_1_day_executive.value = 0;
        }

        const premiumPackage_1day = data.Price_list_1_days.find(
          (pkg) => pkg.package === "Premium"
        );
        if (premiumPackage_1day) {
          pax_33_1_day_premium.value = premiumPackage_1day._33_pax;
          pax_50_1_day_premium.value = premiumPackage_1day._50_pax;
          pax_55_1_day_premium.value = premiumPackage_1day._55_pax;
        } else {
          pax_33_1_day_premium.value = 0;
          pax_50_1_day_premium.value = 0;
          pax_55_1_day_premium.value = 0;
        }

        const studentsPackage_1day = data.Price_list_1_days.find(
          (pkg) => pkg.package === "Students"
        );
        if (studentsPackage_1day) {
          pax_33_1_day_students.value = studentsPackage_1day._33_pax;
          pax_50_1_day_students.value = studentsPackage_1day._50_pax;
          pax_55_1_day_students.value = studentsPackage_1day._55_pax;
        } else {
          pax_33_1_day_students.value = 0;
          pax_50_1_day_students.value = 0;
          pax_55_1_day_students.value = 0;
        }

        const executivePackage_2_day_1_night =
          data.Price_list_2_day_1_nights.find(
            (pkg) => pkg.package === "Executive"
          );
        if (executivePackage_2_day_1_night) {
          pax_33_2_day_1_night_executive.value =
            executivePackage_2_day_1_night._33_pax;
          pax_50_2_day_1_night_executive.value =
            executivePackage_2_day_1_night._50_pax;
          pax_56_2_day_1_night_executive.value =
            executivePackage_2_day_1_night._56_pax;
        } else {
          pax_33_2_day_1_night_executive.value = 0;
          pax_50_2_day_1_night_executive.value = 0;
          pax_56_2_day_1_night_executive.value = 0;
        }

        const premiumPackage_2_day_1_night =
          data.Price_list_2_day_1_nights.find(
            (pkg) => pkg.package === "Premium"
          );
        if (premiumPackage_2_day_1_night) {
          pax_33_2_day_1_night_premium.value =
            premiumPackage_2_day_1_night._33_pax;
          pax_50_2_day_1_night_premium.value =
            premiumPackage_2_day_1_night._50_pax;
          pax_56_2_day_1_night_premium.value =
            premiumPackage_2_day_1_night._56_pax;
        } else {
          pax_33_2_day_1_night_premium.value = 0;
          pax_50_2_day_1_night_premium.value = 0;
          pax_56_2_day_1_night_premium.value = 0;
        }

        const studentsPackage_2_day_1_night =
          data.Price_list_2_day_1_nights.find(
            (pkg) => pkg.package === "Students"
          );
        if (studentsPackage_2_day_1_night) {
          pax_33_2_day_1_night_students.value =
            studentsPackage_2_day_1_night._33_pax;
          pax_50_2_day_1_night_students.value =
            studentsPackage_2_day_1_night._50_pax;
          pax_56_2_day_1_night_students.value =
            studentsPackage_2_day_1_night._56_pax;
        } else {
          pax_33_2_day_1_night_students.value = 0;
          pax_50_2_day_1_night_students.value = 0;
          pax_56_2_day_1_night_students.value = 0;
        }

        // Set the fetched destinations
        destinations.value = data.Destinations.map((destination) => ({
          nama: destination.nama,
          alamat: destination.alamat,
        }));
      } catch (error) {
        console.error("Error fetching paket tour data:", error);
      }
    };

    const handleFileUpload = (event) => {
      const file = event.target.files[0];
      if (file) {
        selectedFile.value = file;
        imagePreview.value = URL.createObjectURL(file);
      }
    };

    const handleSubmit = async () => {
      const id = datas.value.id;
      const finalName = name.value || datas.value.name;
      const finalPrice = price.value || datas.value.price;
      const finalCountry = country.value || datas.value.country;
      const finalCity = city.value || datas.value.city;
      const finalPax_33_1_day_executive =
        pax_33_1_day_executive.value || datas.value._33_pax_1_day_executive;
      const finalPax_50_1_day_executive =
        pax_50_1_day_executive.value || datas.value._50_pax_1_day_executive;
      const finalPax_55_1_day_executive =
        pax_55_1_day_executive.value || datas.value._55_pax_1_day_executive;
      const finalPax_33_1_day_premium =
        pax_33_1_day_premium.value || datas.value._33_pax_1_day_premium;
      const finalPax_50_1_day_premium =
        pax_50_1_day_premium.value || datas.value._50_pax_1_day_premium;
      const finalPax_55_1_day_premium =
        pax_55_1_day_premium.value || datas.value._55_pax_1_day_premium;
      const finalPax_33_1_day_students =
        pax_33_1_day_students.value || datas.value._33_pax_1_day_students;
      const finalPax_50_1_day_students =
        pax_50_1_day_students.value || datas.value._50_pax_1_day_students;
      const finalPax_55_1_day_students =
        pax_55_1_day_students.value || datas.value._55_pax_1_day_students;

      const finalPax_33_2_day_1_night_executive =
        pax_33_2_day_1_night_executive.value ||
        datas.value._33_pax_2_day_1_night_executive;
      const finalPax_50_2_day_1_night_executive =
        pax_50_2_day_1_night_executive.value ||
        datas.value._50_pax_2_day_1_night_executive;
      const finalPax_56_2_day_1_night_executive =
        pax_56_2_day_1_night_executive.value ||
        datas.value._56_pax_2_day_1_night_executive;

      const finalPax_33_2_day_1_night_premium =
        pax_33_2_day_1_night_premium.value ||
        datas.value._33_pax_2_day_1_night_premium;
      const finalPax_50_2_day_1_night_premium =
        pax_50_2_day_1_night_premium.value ||
        datas.value._50_pax_2_day_1_night_premium;
      const finalPax_56_2_day_1_night_premium =
        pax_56_2_day_1_night_premium.value ||
        datas.value._56_pax_2_day_1_night_premium;

      const finalPax_33_2_day_1_night_students =
        pax_33_2_day_1_night_students.value ||
        datas.value._33_pax_2_day_1_night_students;
      const finalPax_50_2_day_1_night_students =
        pax_50_2_day_1_night_students.value ||
        datas.value._50_pax_2_day_1_night_students;
      const finalPax_56_2_day_1_night_students =
        pax_56_2_day_1_night_students.value ||
        datas.value._56_pax_2_day_1_night_students;

      const formData = new FormData();
      formData.append("name", finalName);
      formData.append("slug", slug.value);
      if (selectedFile.value) {
        formData.append("picture", selectedFile.value);
      } else {
        formData.append("picture", datas.value.picture);
      }
      formData.append("price", finalPrice);
      formData.append("country", finalCountry);
      formData.append("city", finalCity);
      formData.append("destinations", JSON.stringify(destinations.value));
      formData.append("_33_pax_1_day_executive", finalPax_33_1_day_executive);
      formData.append("_50_pax_1_day_executive", finalPax_50_1_day_executive);
      formData.append("_55_pax_1_day_executive", finalPax_55_1_day_executive);

      formData.append("_33_pax_1_day_premium", finalPax_33_1_day_premium);
      formData.append("_50_pax_1_day_premium", finalPax_50_1_day_premium);
      formData.append("_55_pax_1_day_premium", finalPax_55_1_day_premium);

      formData.append("_33_pax_1_day_students", finalPax_33_1_day_students);
      formData.append("_50_pax_1_day_students", finalPax_50_1_day_students);
      formData.append("_55_pax_1_day_students", finalPax_55_1_day_students);

      formData.append(
        "_33_pax_2_day_1_night_executive",
        finalPax_33_2_day_1_night_executive
      );
      formData.append(
        "_50_pax_2_day_1_night_executive",
        finalPax_50_2_day_1_night_executive
      );
      formData.append(
        "_56_pax_2_day_1_night_executive",
        finalPax_56_2_day_1_night_executive
      );

      formData.append(
        "_33_pax_2_day_1_night_premium",
        finalPax_33_2_day_1_night_premium
      );
      formData.append(
        "_50_pax_2_day_1_night_premium",
        finalPax_50_2_day_1_night_premium
      );
      formData.append(
        "_56_pax_2_day_1_night_premium",
        finalPax_56_2_day_1_night_premium
      );

      formData.append(
        "_33_pax_2_day_1_night_students",
        finalPax_33_2_day_1_night_students
      );
      formData.append(
        "_50_pax_2_day_1_night_students",
        finalPax_50_2_day_1_night_students
      );
      formData.append(
        "_56_pax_2_day_1_night_students",
        finalPax_56_2_day_1_night_students
      );

      // console.log(id);
      // // Log the form data to console
      // for (let pair of formData.entries()) {
      //   console.log(pair[0] + ": " + pair[1]);
      // }

      const token = localStorage.getItem("token");
      try {
        const response = await fetch(
          `http://localhost:3001/api/paket-tour/${id}`,
          {
            method: "PUT",
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
      }
    };

    onMounted(() => {
      fetchPaketTour();
    });

    return {
      datas,
      name,
      slug,
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
</style>
