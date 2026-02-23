<template>
  <!-- HEADER -->
  <div class="container">
    <div class="row justify-content-start">
      <div class="col-3">
        <router-link to="/admin/galery/create">
          <div class="btn btn-success pt-1 pb-1">
            <i class="bi bi-plus fs-5"></i>
          </div>
        </router-link>
        <span class="fw-bold ms-2">TAMBAH GALERY</span>
      </div>
    </div>
  </div>

  <!-- ALERT -->
  <div class="container mt-3">
    <transition name="fade">
      <div
        v-if="showSuccessAlert"
        class="alert alert-success d-flex align-items-center"
      >
        <i class="bi bi-check-circle-fill me-2"></i>
        Galery deleted successfully
      </div>
    </transition>

    <transition name="fade">
      <div
        v-if="showErrorAlert"
        class="alert alert-danger d-flex align-items-center"
      >
        <i class="bi bi-x-circle-fill me-2"></i>
        Failed to delete galery
      </div>
    </transition>
  </div>

  <!-- TABLE -->
  <div class="container mb-5">
    <table class="table table-striped table-hover align-middle">
      <thead class="text-center">
        <tr>
          <th>No</th>
          <th>Thumbnail</th>
          <th>Title</th>
          <th @click="toggleSortOrder" style="cursor: pointer">
            Date
            <i
              :class="{
                'bi bi-arrow-down': sortOrder === 'desc',
                'bi bi-arrow-up': sortOrder === 'asc',
              }"
            ></i>
          </th>
          <th>Action</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="(item, index) in sortedData" :key="item.id">
          <td>{{ index + 1 + (currentPage - 1) * itemsPerPage }}</td>

          <td>
            <img :src="getFirstImage(item.img_url)" class="thumb-img" />
          </td>

          <td class="text-start">{{ item.title }}</td>
          <td>{{ formatDate(item.createdAt) }}</td>

          <td>
            <div class="d-flex gap-2 justify-content-center">
              <router-link
                :to="`/admin/galery/read/${item.id}`"
                class="btn btn-info p-0"
              >
                <i class="bi bi-eye p-2"></i>
              </router-link>

              <router-link
                :to="`/admin/galery/edit/${item.id}`"
                class="btn btn-warning p-0"
              >
                <i class="bi bi-pencil-square p-2"></i>
              </router-link>

              <button @click="deleteData(item.id)" class="btn btn-danger p-0">
                <i class="bi bi-x-circle p-2"></i>
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>

    <!-- LIMIT -->
    <div class="mb-3">
      <select v-model="itemsPerPage" class="form-select w-auto" @change="changeLimit">
        <option :value="5">5</option>
        <option :value="10">10</option>
        <option :value="20">20</option>
      </select>
    </div>

    <!-- PAGINATION -->
    <div class="pagination">
      <div>
        <button
          @click="prevPage"
          :disabled="currentPage === 1"
          class="btn btn-secondary me-2"
        >
          Previous
        </button>
      </div>

      <span>Page {{ currentPage }} of {{ totalPages }}</span>

      <div>
        <button
          @click="nextPage"
          :disabled="currentPage === totalPages"
          class="btn btn-secondary"
        >
          Next
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed, onMounted } from "vue";

export default {
  setup() {
    const datas = ref([]);
    const currentPage = ref(1);
    const totalPages = ref(1);
    const itemsPerPage = ref(10);
    const sortOrder = ref("desc");
    const showSuccessAlert = ref(false);
    const showErrorAlert = ref(false);

    const API_BASE_URL = process.env.VUE_APP_API_BASE_URL;
    const token = localStorage.getItem("token");

    /* ================= FETCH (UPDATED) ================= */
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${API_BASE_URL}/api/galeries?page=${currentPage.value}&limit=${itemsPerPage.value}`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );

        const result = await response.json();

        datas.value = result.data || [];
        totalPages.value = result.totalPage || 1;
      } catch (error) {
        console.error(error);
        datas.value = [];
      }
    };

    /* ================= DELETE ================= */
    const deleteData = async (id) => {
      if (!confirm("Delete this galery?")) return;

      try {
        const response = await fetch(
          `${API_BASE_URL}/api/galeries/admin/${id}`,
          {
            method: "DELETE",
            headers: { Authorization: `Bearer ${token}` },
          }
        );

        if (!response.ok) throw new Error();

        showSuccessAlert.value = true;
        fetchData();

        setTimeout(() => {
          showSuccessAlert.value = false;
        }, 1500);
      } catch (error) {
        showErrorAlert.value = true;
      }
    };

    /* ================= IMG PARSE ================= */
    const getFirstImage = (imgUrlString) => {
      if (!imgUrlString) return "";
      try {
        const parsed = JSON.parse(imgUrlString);
        return parsed[0];
      } catch {
        return "";
      }
    };

    /* ================= SORT (FRONTEND ONLY) ================= */
    const sortedData = computed(() => {
      return [...datas.value].sort((a, b) => {
        return sortOrder.value === "asc"
          ? new Date(a.createdAt) - new Date(b.createdAt)
          : new Date(b.createdAt) - new Date(a.createdAt);
      });
    });

    const toggleSortOrder = () => {
      sortOrder.value = sortOrder.value === "asc" ? "desc" : "asc";
    };

    /* ================= PAGINATION ================= */
    const prevPage = () => {
      if (currentPage.value > 1) {
        currentPage.value--;
        fetchData();
      }
    };

    const nextPage = () => {
      if (currentPage.value < totalPages.value) {
        currentPage.value++;
        fetchData();
      }
    };

    const changeLimit = () => {
      currentPage.value = 1;
      fetchData();
    };

    /* ================= FORMAT DATE ================= */
    const formatDate = (dateString) => {
      return new Date(dateString).toLocaleDateString("id-ID", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      });
    };

    onMounted(fetchData);

    return {
      datas,
      currentPage,
      totalPages,
      itemsPerPage,
      sortOrder,
      sortedData,
      toggleSortOrder,
      prevPage,
      nextPage,
      changeLimit,
      deleteData,
      showSuccessAlert,
      showErrorAlert,
      formatDate,
      getFirstImage,
    };
  },
};
</script>

<style scoped>
.thumb-img {
  width: 120px;
  height: 80px;
  object-fit: cover;
  border-radius: 8px;
}

.pagination {
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.bi-arrow-up,
.bi-arrow-down {
  margin-left: 5px;
}
</style>