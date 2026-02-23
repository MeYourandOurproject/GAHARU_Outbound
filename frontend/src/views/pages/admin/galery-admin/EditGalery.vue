<template>
  <div class="container py-5">
    <div class="row">
      
      <!-- ================= IMAGE COL ================= -->
      <div class="col-lg-6">

        <!-- EXISTING IMAGES -->
        <div
          v-for="(img, index) in existingImages"
          :key="'old-'+index"
          class="mb-3 position-relative"
        >
          <img :src="img" class="img-fluid rounded shadow-sm" />
          <button
            class="btn btn-danger btn-sm position-absolute top-0 end-0"
            @click="removeExistingImage(index)"
          >
            ✕
          </button>
        </div>

        <!-- NEW PREVIEW IMAGES -->
        <div
          v-for="(img, index) in previewImages"
          :key="'new-'+index"
          class="mb-3 position-relative"
        >
          <img :src="img" class="img-fluid rounded shadow-sm" />
          <button
            class="btn btn-danger btn-sm position-absolute top-0 end-0"
            @click="removeNewImage(index)"
          >
            ✕
          </button>
        </div>

        <!-- FILE INPUT -->
        <input
          type="file"
          class="form-control mt-3"
          multiple
          accept="image/*"
          @change="handleFileUpload"
        />
      </div>

      <!-- ================= FORM COL ================= -->
      <div class="col-lg-6">
        <table class="table table-bordered">
          <tbody>
            <tr>
              <th width="35%">Title</th>
              <td><input v-model="form.title" class="form-control" /></td>
            </tr>
            <tr>
              <th>Description</th>
              <td>
                <textarea v-model="form.description" class="form-control"></textarea>
              </td>
            </tr>
            <tr>
              <th>Location</th>
              <td><input v-model="form.location" class="form-control" /></td>
            </tr>
            <tr>
              <th>Date</th>
              <td>
                <input type="date" v-model="form.date" class="form-control" />
              </td>
            </tr>
            <tr>
              <th>Service</th>
              <td>
                <select v-model="form.service_id" class="form-select">
                  <option value="">-- Select Service --</option>
                  <option
                    v-for="service in services"
                    :key="service.id"
                    :value="service.id"
                  >
                    {{ service.name }}
                  </option>
                </select>
              </td>
            </tr>
          </tbody>
        </table>

        <div class="text-end mt-3">
          <button class="btn btn-success" @click="updateGalery">
            Update Galery
          </button>
        </div>
      </div>
    </div>

    <!-- TOAST -->
    <div class="toast-container position-fixed bottom-0 end-0 p-3">
      <div
        v-if="showToast"
        class="toast show align-items-center text-bg-success border-0"
      >
        <div class="toast-body">
          {{ toastMessage }}
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();

const API_BASE_URL = "http://localhost:3001";
const token = localStorage.getItem("token");

const form = ref({
  id: "",
  title: "",
  description: "",
  location: "",
  date: "",
  service_id: "",
});

const services = ref([]);
const existingImages = ref([]);
const selectedFiles = ref([]);
const previewImages = ref([]);

const showToast = ref(false);
const toastMessage = ref("");

/* ================= FETCH GALERY ================= */

const fetchGalery = async () => {
  const id = route.params.id;

  const res = await fetch(`${API_BASE_URL}/api/galeries/${id}`);
  const data = await res.json();

  form.value = { ...data };

  // pastikan array
  try {
    existingImages.value =
      typeof data.img_url === "string"
        ? JSON.parse(data.img_url)
        : data.img_url || [];
  } catch {
    existingImages.value = [];
  }
};

/* ================= FETCH SERVICES ================= */

const fetchServices = async () => {
  const res = await fetch(`${API_BASE_URL}/api/services`);
  services.value = await res.json();
};

/* ================= HANDLE IMAGE ================= */

const handleFileUpload = (event) => {
  const files = Array.from(event.target.files);

  files.forEach((file) => {
    selectedFiles.value.push(file);
    previewImages.value.push(URL.createObjectURL(file));
  });
};

const removeExistingImage = (index) => {
  existingImages.value.splice(index, 1);
};

const removeNewImage = (index) => {
  selectedFiles.value.splice(index, 1);
  previewImages.value.splice(index, 1);
};

/* ================= UPDATE ================= */

const updateGalery = async () => {
  const formData = new FormData();

  formData.append("title", form.value.title);
  formData.append("description", form.value.description);
  formData.append("location", form.value.location);
  formData.append("date", form.value.date);
  formData.append("service_id", form.value.service_id);

  // jika ada gambar baru
  if (selectedFiles.value.length > 0) {
    selectedFiles.value.forEach((file) => {
      formData.append("img_url", file);
    });
  } else {
    // kirim gambar lama sebagai JSON string
    formData.append("existingImages", JSON.stringify(existingImages.value));
  }

  const response = await fetch(
    `${API_BASE_URL}/api/galeries/admin/${form.value.id}`,
    {
      method: "PUT",
      body: formData,
      headers: { Authorization: `Bearer ${token}` },
    }
  );

  if (response.ok) {
    toastMessage.value = "Galery berhasil diupdate";
    showToast.value = true;

    setTimeout(() => {
      router.push("/admin/galery");
    }, 1500);
  } else {
    alert("Update gagal");
  }
};

/* INIT */

onMounted(() => {
  fetchGalery();
  fetchServices();
});
</script>

<style scoped>
.position-relative img {
  width: 100%;
}
.position-absolute {
  margin: 10px;
}
</style>