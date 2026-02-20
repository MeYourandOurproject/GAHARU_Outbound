<template>
  <div class="container-fluid">
    <div class="container text-start">
      <h3 class="mt-4 mb-4">Create PRICE LIST</h3>

      <form @submit.prevent="handleSubmit">
        <!-- SERVICE ID & TITLE -->
        <div class="row mb-3">
          <div class="col-md-4">
            <label class="form-label">Service ID</label>
            <select class="form-select" v-model="form.service_id" required>
              <option value="">-- Pilih Service --</option>
              <option
                v-for="service in services"
                :key="service.id"
                :value="service.id"
              >
                {{ service.name }}
              </option>
            </select>
          </div>

          <div class="col-md-8">
            <label class="form-label">Title</label>
            <input
              type="text"
              class="form-control"
              v-model="form.title"
              required
            />
          </div>
        </div>

        <!-- PRICE -->
        <div class="row mb-3">
          <div class="col-md-4">
            <label class="form-label">Price</label>
            <input
              type="number"
              class="form-control"
              v-model="form.price"
              required
            />
          </div>

          <div class="col-md-4">
            <label class="form-label">Unit</label>
            <input type="text" class="form-control" v-model="form.unit" />
          </div>

          <div class="col-md-4">
            <label class="form-label">Duration</label>
            <input type="text" class="form-control" v-model="form.duration" />
          </div>
        </div>

        <!-- FACILITIES -->
        <div class="mb-3">
          <label class="form-label">Facilities (pisahkan dengan enter)</label>
          <textarea
            class="form-control"
            rows="4"
            v-model="facilitiesText"
          ></textarea>
        </div>

        <!-- DESCRIPTION -->
        <div class="mb-3">
          <label class="form-label">Description</label>
          <textarea
            class="form-control"
            rows="3"
            v-model="form.description"
          ></textarea>
        </div>

        <!-- IMAGE -->
        <div class="row mb-3">
          <div class="col-md-4">
            <label class="form-label">Preview Image</label>
            <div v-if="previewImage">
              <img :src="previewImage" class="img-thumbnail" />
            </div>
          </div>

          <div class="col-md-4">
            <label class="form-label">Upload New Image</label>
            <input
              ref="fileInput"
              type="file"
              class="form-control"
              accept="image/*"
              @change="handleFileChange"
            />
          </div>
        </div>

        <!-- SEO -->
        <div class="mb-3">
          <label class="form-label">Meta Title</label>
          <input type="text" class="form-control" v-model="form.meta_title" />
        </div>

        <div class="mb-3">
          <label class="form-label">Meta Description</label>
          <textarea
            class="form-control"
            rows="2"
            v-model="form.meta_description"
          ></textarea>
        </div>

        <!-- STATUS -->
        <div class="mb-4">
          <div class="form-check">
            <input
              type="checkbox"
              class="form-check-input"
              v-model="form.is_featured"
            />
            <label class="form-check-label">Featured</label>
          </div>

          <div class="form-check">
            <input
              type="checkbox"
              class="form-check-input"
              v-model="form.is_active"
            />
            <label class="form-check-label">Active</label>
          </div>
        </div>

        <!-- SUBMIT -->
        <button type="submit" class="btn btn-success">Create Price List</button>
      </form>
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
import { useRouter } from "vue-router";

const router = useRouter();

const token = localStorage.getItem("token");
const API_BASE_URL = process.env.VUE_APP_API_BASE_URL;

/* STATE */

const form = ref({
  service_id: "",
  title: "",
  price: "",
  unit: "",
  duration: "",
  description: "",
  meta_title: "",
  meta_description: "",
  is_featured: false,
  is_active: true,
  image: null,
});

const facilitiesText = ref("");
const previewImage = ref(null);
const fileInput = ref(null);
const services = ref([]);

const showToast = ref(false);
const toastMessage = ref("");

/* FETCH SERVICES */

const fetchServices = async () => {
  const response = await fetch(`${API_BASE_URL}/api/services/admin`, {
    headers: { Authorization: `Bearer ${token}` },
  });

  const data = await response.json();
  services.value = data;
};

/* HANDLE IMAGE */

const handleFileChange = () => {
  const file = fileInput.value.files[0];
  if (!file) return;

  form.value.image = file;
  previewImage.value = URL.createObjectURL(file);
};

/* HANDLE SUBMIT (CREATE) */

const handleSubmit = async () => {
  const formData = new FormData();

  formData.append("service_id", form.value.service_id);
  formData.append("title", form.value.title);
  formData.append("price", form.value.price);
  formData.append("unit", form.value.unit);
  formData.append("duration", form.value.duration);
  formData.append("description", form.value.description);
  formData.append("meta_title", form.value.meta_title);
  formData.append("meta_description", form.value.meta_description);
  formData.append("is_featured", form.value.is_featured ? 1 : 0);
  formData.append("is_active", form.value.is_active ? 1 : 0);

  // convert textarea → JSON string
  const facilitiesArray = facilitiesText.value
    .split("\n")
    .filter((item) => item.trim() !== "");

  formData.append("facilities", JSON.stringify(facilitiesArray));

  if (form.value.image) {
    formData.append("image", form.value.image);
  }

  const response = await fetch(
    `${API_BASE_URL}/api/price-lists/admin`,
    {
      method: "POST",
      body: formData,
      headers: { Authorization: `Bearer ${token}` },
    }
  );

  if (response.ok) {
    toastMessage.value = "Price List berhasil dibuat";
    showToast.value = true;

    setTimeout(() => {
      showToast.value = false;
      router.push("/admin/price-list");
    }, 1500);
  } else {
    alert("Create gagal");
  }
};

/* INIT */

onMounted(() => {
  fetchServices();
});
</script>

