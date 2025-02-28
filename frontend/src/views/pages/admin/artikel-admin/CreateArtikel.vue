<template>
  <div class="container-fluid">
    <div class="container pb-5">
      <form @submit.prevent="handleSubmit">
        <div class="row g-3 text-center">
          <div class="col-md-8">
            <label for="inputTitle" class="form-label">Title</label>
            <input
              type="text"
              class="form-control"
              id="inputTitle1"
              v-model="title"
            />
          </div>
          <div class="col-md-4">
            <label for="inputAuthor" class="form-label">Author</label>
            <input
              type="text"
              class="form-control"
              id="inputAuthor"
              v-model="author"
            />
          </div>
          <div class="col-md-12">
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
        </div>

        <div class="col-sm-12 mt-3">
          <label for="inputContent" class="form-label">Content</label>
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
import { reactive, ref } from "vue";
import { useRouter } from "vue-router";

export default {
  setup() {
    const title = ref("");
    const author = ref("");
    const selectedFile = ref(null);
    const imagePreview = ref(null);
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

    const handleSubmit = async () => {
      const formData = new FormData();
      formData.append("title", title.value);
      formData.append("author", author.value);
      formData.append("picture", selectedFile.value);
      formData.append("content", state.content);

      try {
        const response = await fetch(
          //   "https://api.gaharuoutbound.com/api/artikel/create",
          "http://localhost:3001/api/artikel/create",
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
            router.push("/admin/artikel");
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
      imagePreview,
      handleFileUpload,
      handleSubmit,
    };
  },
  components: { quillEditor },
};
</script>
