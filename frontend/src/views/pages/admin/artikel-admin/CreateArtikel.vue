<template>
  <div class="container-fluid">
    <div class="container text-start">
      <h3 class="mt-4 mb-4 fw-bold">Create Artikel</h3>

      <form @submit.prevent="handleSubmit">
        <!-- TITLE & AUTHOR -->
        <div class="row mb-3">
          <div class="col-md-8">
            <label class="form-label">Judul</label>
            <input
              v-model="form.title"
              type="text"
              class="form-control"
              placeholder="Masukkan judul artikel"
              required
            />
          </div>

          <div class="col-md-4">
            <label class="form-label">Penulis</label>

            <select v-model="form.author_id" class="form-select" required>
              <option disabled value="">Pilih Penulis</option>

              <option v-for="user in users" :key="user.id" :value="user.id">
                {{ user.name }}
              </option>
            </select>
          </div>
        </div>

        <!-- CATEGORY & STATUS -->
        <div class="row mb-3">
          <div class="col-md-4">
            <label class="form-label">Excerpt</label>
            <textarea
              v-model="form.excerpt"
              class="form-control"
              rows="2"
            ></textarea>
          </div>
          <div class="col-md-4">
            <label class="form-label">Category</label>

            <select v-model="form.category_id" class="form-select" required>
              <option disabled value="">Pilih Kategori</option>

              <option v-for="cat in categories" :key="cat.id" :value="cat.id">
                {{ cat.name }}
              </option>
            </select>
          </div>

          <div class="col-md-4">
            <label class="form-label">Status</label>

            <select v-model="form.status" class="form-select">
              <option value="idea">Idea</option>
              <option value="draft">Draft</option>
              <option value="published">Published</option>
            </select>
          </div>
        </div>

        <!-- THUMBNAIL -->
        <div class="row mb-4">
          <div class="col-md-4">
            <label class="form-label">Preview Thumbnail</label>
            <div v-if="previewImage">
              <img
                :src="previewImage"
                class="img-thumbnail rounded shadow-sm"
              />
            </div>
          </div>

          <div class="col-md-4">
            <label class="form-label">Upload Thumbnail</label>
            <input
              ref="thumbnailInput"
              type="file"
              class="form-control"
              accept="image/*"
              @change="handleThumbnailChange"
            />
          </div>
        </div>

        <!-- CONTENT -->
        <div class="mb-3">
          <label class="form-label">Konten</label>
          <div ref="quillEditor" class="border rounded"></div>
        </div>

        <div class="mb-4">
          <label class="form-label">Tambahkan Gambar ke Konten</label>
          <input
            ref="imageInput"
            type="file"
            class="form-control"
            accept="image/*"
            @change="insertImage"
          />
        </div>

        <!-- SEO -->
        <div class="row mb-3">
          <div class="col-md-6">
            <label class="form-label">Meta Title</label>
            <input v-model="form.meta_title" type="text" class="form-control" />
          </div>

          <div class="col-md-6">
            <label class="form-label">Meta Description</label>
            <textarea
              v-model="form.meta_description"
              class="form-control"
              rows="2"
            ></textarea>
          </div>
        </div>

        <!-- SUBMIT -->
        <div class="row mt-4">
          <div class="col-md-3">
            <button type="submit" class="btn btn-success btn-lg w-100">
              Simpan Artikel
            </button>
          </div>

          <div class="col-md-9">
            <transition name="fade">
              <div
                v-if="showSuccessAlert"
                class="alert alert-success d-flex align-items-center"
              >
                <i class="bi bi-check-circle-fill me-3"></i>
                Artikel berhasil dibuat
              </div>
            </transition>

            <transition name="fade">
              <div
                v-if="showErrorAlert"
                class="alert alert-danger d-flex align-items-center"
              >
                <i class="bi bi-x-circle-fill me-3"></i>
                Gagal membuat artikel
              </div>
            </transition>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from "vue";
import Quill from "quill";
import "quill/dist/quill.snow.css";
import { useRouter } from "vue-router";

const router = useRouter();
const token = localStorage.getItem("token");
const API_BASE_URL = process.env.VUE_APP_API_BASE_URL;

/* ================= STATE ================= */

const form = ref({
  title: "",
  excerpt: "",
  slug: "",
  author_id: null,
  content: "",
  category_id: null,
  meta_title: "",
  meta_description: "",
  status: "idea",
});

const categories = ref([]);
const users = ref([]);

const previewImage = ref(null);
const thumbnailFile = ref(null);
// const contentImages = ref([]);

const quillEditor = ref(null);
const imageInput = ref(null);
const thumbnailInput = ref(null);

const showSuccessAlert = ref(false);
const showErrorAlert = ref(false);

/* ================= AUTO SLUG ================= */

watch(
  () => form.value.title,
  (val) => {
    form.value.slug = val
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^\w-]+/g, "");
  }
);

/* ================= FETCH CATEGORY ================= */

const fetchCategory = async () => {
  const response = await fetch(`${API_BASE_URL}/api/categories/admin`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  categories.value = await response.json();
};

/* ================= FETCH USERS ================= */

const fetchUsers = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/users`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    users.value = await response.json();
  } catch (error) {
    console.error("Fetch users error:", error);
  }
};

/* ================= THUMBNAIL ================= */

const handleThumbnailChange = () => {
  const file = thumbnailInput.value.files[0];
  if (!file) return;

  thumbnailFile.value = file;
  previewImage.value = URL.createObjectURL(file);
};

/* ================= INSERT IMAGE TO QUILL ================= */

const insertImage = async () => {
  const file = imageInput.value.files[0];
  if (!file) return;

  const formData = new FormData();
  formData.append("image", file);

  const response = await fetch(`${API_BASE_URL}/api/upload`, {
    method: "POST",
    body: formData,
  });

  const data = await response.json();
  const imageUrl = data.url;

  const editor = quillEditor.value.__quill;
  const range = editor.getSelection(true);
  editor.insertEmbed(range.index, "image", imageUrl);

  // contentImages.value.push(file);
  imageInput.value.value = null;
};

/* ================= SUBMIT ================= */

const handleSubmit = async () => {
  const editor = quillEditor.value.__quill;
  form.value.content = editor.root.innerHTML;

  const formData = new FormData();
  Object.keys(form.value).forEach((key) => {
    formData.append(key, form.value[key]);
  });

  if (thumbnailFile.value) {
    formData.append("thumbnail", thumbnailFile.value);
  }

  // contentImages.value.forEach((file) => {
  //   formData.append("pictures", file);
  // });

  try {
    const response = await fetch(`${API_BASE_URL}/api/artikels/admin`, {
      method: "POST",
      body: formData,
      headers: { Authorization: `Bearer ${token}` },
    });

    if (response.ok) {
      showSuccessAlert.value = true;
      showErrorAlert.value = false;

      setTimeout(() => {
        router.push("/admin/artikel");
      }, 2000);
    } else {
      showErrorAlert.value = true;
    }
  } catch (error) {
    console.error(error);
    showErrorAlert.value = true;
  }
};

/* ================= INIT ================= */

onMounted(() => {
  fetchCategory();
  fetchUsers();

  const editor = new Quill(quillEditor.value, {
    theme: "snow",
    placeholder: "Tulis konten artikel di sini...",
    modules: {
      toolbar: [
        [{ header: [1, 2, 3, false] }],
        ["bold", "italic", "underline"],
        [{ list: "ordered" }, { list: "bullet" }],
        ["link"],
        ["clean"],
      ],
    },
  });

  quillEditor.value.__quill = editor;

  /* ================= FITUR HAPUS GAMBAR ================= */

  editor.root.addEventListener("click", (event) => {
    if (event.target.tagName === "IMG") {
      const confirmDelete = confirm("Hapus gambar ini?");
      if (confirmDelete) {
        event.target.remove();
      }
    }
  });
});
</script>

<style>
.ql-container {
  min-height: 250px;
}

.form-label {
  font-weight: 600;
  background: linear-gradient(90deg, #41b83f, #2c7f31); 
  padding: 2px 20px;
  border-radius: 5px;
  color: white;
}

.img-thumbnail {
  max-height: 200px;
  object-fit: cover;
}
</style>
