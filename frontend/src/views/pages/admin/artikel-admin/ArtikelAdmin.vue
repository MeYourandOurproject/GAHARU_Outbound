<template>
  <div class="container">
    <div class="row justify-content-start">
      <div class="col-3">
        <router-link to="/admin/artikel/create">
          <div class="btn btn-success pt-1 pb-1">
            <i class="bi bi-plus fs-5"></i>
          </div>
        </router-link>
        <span class="fw-bold ms-2">CREATE ARTICLE</span>
      </div>
    </div>
  </div>

  <!-- ALERT -->
  <div class="container-fluid">
    <div class="container">
      <div class="row align-items-center justify-content-center">
        <div class="col-lg-6">
          <transition name="fade">
            <div
              v-if="showSuccessAlert"
              class="alert alert-success d-flex align-items-center"
            >
              <i class="bi bi-check-circle-fill me-3 ms-3"></i>
              <div>Article Has Been Deleted Successfully</div>
            </div>
          </transition>

          <transition name="fade">
            <div
              v-if="showErrorAlert"
              class="alert alert-danger d-flex align-items-center"
            >
              <i class="bi bi-x-circle-fill me-3 ms-3"></i>
              <div>Delete Article Failed!</div>
            </div>
          </transition>
        </div>
      </div>
    </div>
  </div>

  <!-- TABLE -->
  <div class="container mb-5">
    <table class="table table-striped table-hover">
      <thead class="text-center">
        <tr>
          <th>No</th>
          <th>Title</th>
          <th @click="toggleSortOrder" style="cursor: pointer">
            Created At
            <i
              :class="{
                'bi bi-arrow-down': sortOrder === 'desc',
                'bi bi-arrow-up': sortOrder === 'asc',
              }"
            ></i>
          </th>
          <th>Category</th>
          <th>Status</th>
          <th>Action</th>
        </tr>
      </thead>

      <tbody>
        <tr v-if="datas.length === 0">
          <td colspan="6" class="text-center">No Data</td>
        </tr>

        <tr v-for="(item, index) in sortedData" :key="item.id">
          <td>{{ index + 1 }}</td>
          <td class="text-start">{{ item.title }}</td>
          <td>{{ formatDate(item.createdAt) }}</td>
          <td>{{ item.category?.name }}</td>
          <td>{{ item.status }}</td>
          <td>
            <div class="d-flex gap-2 justify-content-center">
              <a
                :href="`/admin/artikel/read/${item.slug}`"
                class="btn btn-info pt-1 pb-1 m-0 p-0"
              >
                <i class="bi bi-eye p-2 rounded-2"></i>
              </a>
              <router-link
                :to="`/admin/artikel/edit/${item.slug}`"
                class="btn btn-warning btn-sm"
              >
                <i class="bi bi-pencil-square"></i>
              </router-link>

              <button
                @click="deleteData(item.id)"
                class="btn btn-danger btn-sm"
              >
                <i class="bi bi-trash"></i>
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { ref, onMounted, computed } from "vue";

export default {
  setup() {
    const datas = ref([]);
    const sortOrder = ref("desc");

    const showSuccessAlert = ref(false);
    const showErrorAlert = ref(false);

    const API_BASE_URL = process.env.VUE_APP_API_BASE_URL;
    const token = localStorage.getItem("token");

    /* ================= FETCH ================= */
    const fetchData = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/api/artikels/admin`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) throw new Error("Failed fetch");

        const result = await response.json();

        // ✅ FIX SESUAI RESPONSE API
        datas.value = Array.isArray(result.data) ? result.data : [];
      } catch (error) {
        console.error("Fetch Error:", error);
        datas.value = [];
      }
    };

    /* ================= DELETE ================= */
    const deleteData = async (id) => {
      if (!confirm("Yakin hapus artikel ini?")) return;

      try {
        const response = await fetch(`${API_BASE_URL}/api/artikels/${id}`, {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) throw new Error("Delete failed");

        showSuccessAlert.value = true;
        showErrorAlert.value = false;

        setTimeout(() => {
          fetchData();
          showSuccessAlert.value = false;
        }, 1500);
      } catch (error) {
        showErrorAlert.value = true;
        showSuccessAlert.value = false;
      }
    };

    /* ================= SORT ================= */
    const sortedData = computed(() => {
      return [...datas.value].sort((a, b) => {
        if (sortOrder.value === "asc") {
          return new Date(a.createdAt) - new Date(b.createdAt);
        } else {
          return new Date(b.createdAt) - new Date(a.createdAt);
        }
      });
    });

    const toggleSortOrder = () => {
      sortOrder.value = sortOrder.value === "asc" ? "desc" : "asc";
    };

    /* ================= FORMAT DATE ================= */
    const formatDate = (dateString) => {
      return new Date(dateString).toLocaleString("id-ID");
    };

    onMounted(fetchData);

    return {
      datas,
      sortedData,
      sortOrder,
      toggleSortOrder,
      deleteData,
      formatDate,
      showSuccessAlert,
      showErrorAlert,
    };
  },
};
</script>

<style>
table {
  width: 100%;
}

.pagination {
  margin-top: 20px;
}

.bi-arrow-up,
.bi-arrow-down {
  margin-left: 5px;
}
</style>
