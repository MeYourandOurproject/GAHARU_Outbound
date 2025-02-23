<template>
  <div class="container-fluid">
    <div class="container pb-5">
      <form @submit.prevent="handleSubmit">
        <div class="row g-3 text-center">
          <div class="col-md-6">
            <label for="inputTitle" class="form-label">Title</label>
            <input
              type="text"
              class="form-control"
              id="inputTitle1"
              v-model="title"
            />
          </div>
          <div class="col-md-6">
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
                style="max-width: 100%"
              />
            </div>
          </div>

          <div class="col-md-6">
            <label for="inputCostumer" class="form-label">Costumer</label>
            <input
              type="text"
              class="form-control"
              id="inputCostumer"
              v-model="costumer"
            />
          </div>

          <div class="col-md-6">
            <label for="inputDestinasi" class="form-label">Destinasi</label>
            <select class="form-select" id="inputDestinasi" v-model="destinasi">
              <option selected disabled>Choose a destination</option>
              <option
                v-for="destination in destinations"
                :key="destination.id"
                :value="destination.id"
              >
                {{ destination.nama }}
              </option>
            </select>
          </div>
        </div>

        <div class="col-sm-12 mt-3">
          <label for="inputDeskripsi" class="form-label">Deskripsi</label>
          <quillEditor v-model:value="state.content" />
        </div>
        <div class="col-md-12 mt-3">
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
                    <div>Galery was Added</div>
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
                    <div>Create Galery failed! Please check the form.</div>
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
import { quillEditor } from "vue3-quill";
import { reactive, ref, onMounted } from "vue";
import { useRouter } from "vue-router";

export default {
  props: {
    galery: {
      type: Object,
      required: true,
    },
  },
  setup() {
    const title = ref("");
    const selectedFile = ref(null);
    const costumer = ref("");
    const destinasi = ref(null);
    // const deskripsi = ref("");
    const imagePreview = ref(null);
    const destinations = ref([]);
    const showSuccessAlert = ref(false);
    const showErrorAlert = ref(false);
    const router = useRouter();
    const state = reactive({
      _content: "",
    });

    const token = localStorage.getItem("token");

    const handleFileUpload = (event) => {
      selectedFile.value = event.target.files[0];
      if (selectedFile.value) {
        const reader = new FileReader();
        reader.onload = (e) => {
          imagePreview.value = e.target.result;
        };
        reader.readAsDataURL(selectedFile.value);
      }
    };

    const fetchDestinations = async () => {
      try {
        const response = await fetch(
          "https://api.gaharuoutbound.com/api/destination/",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        const result = await response.json();
        // console.log("Fetched destinations:", result);
        destinations.value = result.data || result;
      } catch (error) {
        console.error("Error fetching destinations:", error);
      }
    };

    onMounted(() => {
      fetchDestinations(); // Memanggil API saat komponen di-mount
    });

    const handleSubmit = async () => {
      const formData = new FormData();
      formData.append("title", title.value);
      formData.append("picture", selectedFile.value);
      formData.append("costumer", costumer.value);
      formData.append("destination_id", destinasi.value);
      formData.append("description", state.content);

      // for (let pair of formData.entries()) {
      //   console.log(pair[0] + ": " + pair[1]);
      // }

      try {
        const response = await fetch(
          "https://api.gaharuoutbound.com/api/galery/create",
          {
            method: "POST",
            body: formData,
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const result = await response.json();
        if (response.ok) {
          showSuccessAlert.value = true;
          showErrorAlert.value = false;

          // Redirect to the desired page after success
          setTimeout(() => {
            router.push("/admin/galery");
          }, 2000);
        } else {
          throw new Error(result.message);
        }
      } catch (error) {
        showSuccessAlert.value = false;
        showErrorAlert.value = true;
        console.error("Error submitting form:", error);
      }
    };

    return {
      state,
      title,
      selectedFile,
      costumer,
      destinasi,
      // deskripsi,
      imagePreview,
      destinations,
      handleFileUpload,
      handleSubmit,
    };
  },
  components: { quillEditor },
};
</script>
