<template>
  <div class="container-fluid">
    <div class="container pb-5">
      <form class="row g-3 text-center" @submit.prevent="handleSubmit">
        <!-- <div class="col-md-6">
          <label for="inputTitle" class="form-label">Title</label>
          <input
            type="text"
            class="form-control"
            id="inputTitle1"
            v-model="title"
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
        </div> -->

        <!-- Image preview -->
        <!-- <div class="col-md-12" v-if="imagePreview">
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
          <label for="inputCustomer" class="form-label">Customer</label>
          <input
            type="text"
            class="form-control"
            id="inputCustomer"
            v-model="customer"
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
        </div> -->

        <div class="col-md-12 mt-5 pt-5">
          <button type="submit" class="btn btn-primary">Submit</button>
        </div>

        <div v-if="showSuccessAlert" class="alert alert-success" role="alert">
          Data berhasil disimpan!
        </div>
        <div v-if="showErrorAlert" class="alert alert-danger" role="alert">
          Gagal menyimpan data.
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";

export default {
  setup() {
    const title = ref("");
    const selectedFile = ref(null);
    const customer = ref("");
    const destinasi = ref(null);
    const deskripsi = ref("");
    const imagePreview = ref(null);
    const destinations = ref([]);
    const showSuccessAlert = ref(false);
    const showErrorAlert = ref(false);
    const router = useRouter();

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
        const response = await fetch("http://localhost:3001/api/destination/", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const result = await response.json();
        // console.log(result); // Debugging: pastikan data API terlihat di konsol
        destinations.value = result.data;
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
      formData.append("customer", customer.value);
      formData.append("destinasi_id", destinasi.value);
      formData.append("deskripsi", deskripsi.value);

      try {
        const response = await fetch(
          "http://localhost:3001/api/galery/create",
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
      title,
      selectedFile,
      customer,
      destinasi,
      deskripsi,
      imagePreview,
      destinations,
      handleFileUpload,
      handleSubmit,
      showSuccessAlert,
      showErrorAlert,
    };
  },
};
</script>
