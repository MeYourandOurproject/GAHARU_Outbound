<template>
  <div class="container py-5">
    <div class="row">

      <!-- ================= IMAGE COL ================= -->
      <div class="col-lg-6">

        <!-- EXISTING IMAGES -->
        <div
          v-for="img in existingImages"
          :key="img.id"
          class="mb-3 position-relative"
        >
          <img :src="img.img_url" class="img-fluid rounded shadow-sm" />

          <button
            class="btn btn-danger btn-sm position-absolute top-0 end-0"
            @click="removeExistingImage(img.id)"
          >
            ✕
          </button>

          <span
            v-if="img.is_cover"
            class="badge bg-primary position-absolute top-0 start-0 m-2"
          >
            Cover
          </span>
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
import imageCompression from "browser-image-compression";

const route = useRoute();
const router = useRouter();

const API_BASE_URL = process.env.VUE_APP_API_BASE_URL;
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
const removedImageIds = ref([]);
const selectedFiles = ref([]);
const previewImages = ref([]);

const showToast = ref(false);
const toastMessage = ref("");

/* ================= FETCH GALERY ================= */

const fetchGalery = async () => {
  const id = route.params.id;

  const res = await fetch(`${API_BASE_URL}/api/galeries/${id}`);
  const data = await res.json();

  form.value = {
    id: data.id,
    title: data.title,
    description: data.description,
    location: data.location,
    date: data.date?.split("T")[0],
    service_id: data.service_id,
  };

  existingImages.value = data.images || [];
};

/* ================= FETCH SERVICES ================= */

const fetchServices = async () => {
  const res = await fetch(`${API_BASE_URL}/api/services/admin`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  services.value = await res.json();
};

/* ================= HANDLE NEW IMAGE ================= */

const handleFileUpload = async (event) => {
  const files = Array.from(event.target.files);

  for (let file of files) {
    const options = {
      maxSizeMB: 0.5,
      maxWidthOrHeight: 1920,
      useWebWorker: true,
      fileType: "image/webp",
      initialQuality: 0.8,
    };

    try {
      const compressedFile = await imageCompression(file, options);

      const webpFile = new File(
        [compressedFile],
        file.name.replace(/\.\w+$/, ".webp"),
        { type: "image/webp" }
      );

      selectedFiles.value.push(webpFile);
      previewImages.value.push(URL.createObjectURL(webpFile));
    } catch (error) {
      console.error("Compression error:", error);
    }
  }
};

const removeExistingImage = (id) => {
  removedImageIds.value.push(id);
  existingImages.value = existingImages.value.filter(
    (img) => img.id !== id
  );
};

const removeNewImage = (index) => {
  selectedFiles.value.splice(index, 1);
  previewImages.value.splice(index, 1);
};

/* ================= UPDATE ================= */

const updateGalery = async () => {
  try {
    const formData = new FormData();

    formData.append("title", form.value.title);
    formData.append("description", form.value.description);
    formData.append("location", form.value.location);
    formData.append("date", form.value.date);
    formData.append("service_id", form.value.service_id);

    // kirim id gambar yang dihapus
    formData.append(
      "removedImages",
      JSON.stringify(removedImageIds.value)
    );

    // kirim gambar baru
    selectedFiles.value.forEach((file) => {
      formData.append("img_url", file);
    });

    const response = await fetch(
      `${API_BASE_URL}/api/galeries/admin/${form.value.id}`,
      {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      }
    );

    if (!response.ok) {
      throw new Error("Update gagal");
    }

    toastMessage.value = "Galery berhasil diupdate";
    showToast.value = true;

    setTimeout(() => {
      router.push("/admin/galery");
    }, 1500);

  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

/* ================= INIT ================= */

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