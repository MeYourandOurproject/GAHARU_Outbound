<template>
  <div class="container py-5">
    <div class="row">
      <!-- ================= IMAGE COL ================= -->
      <div class="col-lg-6">
        <!-- PREVIEW IMAGES -->
        <div
          v-for="(img, index) in previewImages"
          :key="index"
          class="mb-3 position-relative"
        >
          <img :src="img" class="img-fluid rounded shadow-sm" />

          <button
            class="btn btn-danger btn-sm position-absolute top-0 end-0"
            @click="removeImage(index)"
          >
            ✕
          </button>
        </div>

        <!-- FILE INPUT -->
        <div class="mt-3">
          <input
            type="file"
            class="form-control"
            multiple
            accept="image/*"
            @change="handleFileUpload"
          />
        </div>
      </div>

      <!-- ================= FORM COL ================= -->
      <div class="col-lg-6">
        <table class="table table-bordered">
          <tbody>
            <tr>
              <th width="35%">Title</th>
              <td>
                <input v-model="form.title" class="form-control" required />
              </td>
            </tr>

            <tr>
              <th>Description</th>
              <td>
                <textarea
                  v-model="form.description"
                  class="form-control"
                  required
                ></textarea>
              </td>
            </tr>

            <tr>
              <th>Location</th>
              <td>
                <input v-model="form.location" class="form-control" required />
              </td>
            </tr>

            <tr>
              <th>Date</th>
              <td>
                <input
                  type="date"
                  v-model="form.date"
                  class="form-control"
                  required
                />
              </td>
            </tr>

            <tr>
              <th>Service</th>
              <td>
                <select v-model="form.service_id" class="form-select" required>
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
          <button class="btn btn-success" @click="createGalery">
            Create Galery
          </button>
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
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";

export default {
  setup() {
    const router = useRouter();
    const API_BASE_URL = "http://localhost:3001";
    const token = localStorage.getItem("token");

    const services = ref([]);
    const selectedFiles = ref([]);
    const previewImages = ref([]);
    const showToast = ref(false);
    const toastMessage = ref("");

    const form = ref({
      title: "",
      description: "",
      location: "",
      date: "",
      service_id: "",
    });

    /* ================= FETCH SERVICES ================= */
    const fetchServices = async () => {
      const res = await fetch(`${API_BASE_URL}/api/services`);
      services.value = await res.json();
    };

    /* ================= HANDLE FILE UPLOAD ================= */
    const handleFileUpload = (event) => {
      const files = Array.from(event.target.files);

      files.forEach((file) => {
        selectedFiles.value.push(file);
        previewImages.value.push(URL.createObjectURL(file));
      });
    };

    const removeImage = (index) => {
      selectedFiles.value.splice(index, 1);
      previewImages.value.splice(index, 1);
    };

    /* ================= CREATE ================= */
    const createGalery = async () => {
      try {
        if (selectedFiles.value.length === 0) {
          alert("Minimal 1 gambar harus diupload");
          return;
        }

        const formData = new FormData();

        formData.append("title", form.value.title);
        formData.append("description", form.value.description);
        formData.append("location", form.value.location);
        formData.append("date", form.value.date);
        formData.append("service_id", form.value.service_id);

        // 🔥 PENTING: field name harus img_url
        selectedFiles.value.forEach((file) => {
          formData.append("img_url", file);
        });

        const response = await fetch(`${API_BASE_URL}/api/galeries/admin`, {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
          },
          body: formData,
        });

        const result = await response.json();

        if (!response.ok) {
          throw result;
        }
        if (response.ok) {
          toastMessage.value = "Galeri berhasil dibuat";
          showToast.value = true;

          setTimeout(() => {
            showToast.value = false;
            router.push("/admin/galery");
          }, 1500);
        } else {
          alert("Create gagal");
        }
      } catch (err) {
        console.error(err);
        alert(err.message || "Gagal membuat galery");
      }
    };

    onMounted(fetchServices);

    return {
      form,
      services,
      previewImages,
      handleFileUpload,
      removeImage,
      createGalery,
      showToast,
      toastMessage,
    };
  },
};
</script>

<style scoped>
table th {
  background: #f8f9fa;
}

.position-relative img {
  width: 100%;
}

.position-absolute {
  margin: 10px;
}
</style>
