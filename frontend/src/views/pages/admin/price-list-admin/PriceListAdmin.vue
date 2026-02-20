<template>
  <div class="container">
    <div class="row justify-content-start">
      <div class="col-3">
        <router-link to="/admin/price-list/create">
          <div class="btn btn-success pt-1 pb-1">
            <i class="bi bi-plus fs-5"></i></div></router-link
        ><span class="fw-bold ms-2">TAMBAH PRICE LIST</span>
      </div>
    </div>
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
              <div>Price List Has Been Deleted Successfully</div>
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
              <div>Delete Article failed! Please check the form.</div>
            </div>
          </transition>
        </div>
      </div>
    </div>
  </div>
  <div class="container mb-5">
    <div>
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
            <th>Action</th>
            <th>Active</th>
            <th>Featured</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in paginatedData" :key="item.id">
            <td>{{ index + 1 + (currentPage - 1) * itemsPerPage }}</td>
            <td class="text-start align-items-center">{{ item.title }}</td>

            <td>{{ formatDate(item.createdAt) }}</td>
            <td>
              <div
                class="d-flex gap-2 align-items-center justify-content-center"
              >
                <a
                  :href="`/admin/price-list/read/${item.slug}`"
                  class="btn btn-info pt-1 pb-1 m-0 p-0"
                >
                  <i class="bi bi-eye p-2 rounded-2"></i>
                </a>
                <router-link :to="`/admin/price-list/edit/${item.slug}`">
                  <div class="btn btn-warning pt-1 pb-1 m-0 p-0">
                    <span
                      ><i class="bi bi-pencil-square p-2 rounded-2"></i
                    ></span>
                  </div>
                </router-link>
                <button
                  @click="deleteData(item.id)"
                  class="btn btn-danger pt-1 pb-1 m-0 p-0"
                >
                  <span><i class="bi bi-x-circle p-2 rounded-2"></i></span>
                </button>
              </div>
            </td>
            <td class="text-center">
              <button
                class="btn btn-sm"
                @click="toggleStatus(item, 'is_active')"
              >
                <i
                  class="bi fs-5"
                  :class="
                    item.is_active
                      ? 'bi-check-circle-fill text-success'
                      : 'bi-x-circle-fill text-danger'
                  "
                ></i>
              </button>
            </td>
            <td class="text-center">
              <button
                class="btn btn-sm"
                @click="toggleStatus(item, 'is_featured')"
              >
                <i
                  class="bi fs-5"
                  :class="
                    item.is_featured
                      ? 'bi-star-fill text-warning'
                      : 'bi-star text-secondary'
                  "
                ></i>
              </button>
            </td>
          </tr>
        </tbody>
      </table>

      <div class="input-group input-group-sm">
        <div class="input-group mb-3">
          <span class="input-group-text" id="inputGroup-sizing-default">
            Items Per Page:
          </span>
          <input
            type="number"
            class="form-control"
            v-model.number="itemsPerPage"
            @input="updatePagination"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-lg"
          />
        </div>
      </div>

      <div class="pagination">
        <div class="justify-content-start gap-2">
          <button
            @click="goToFirstPage"
            :disabled="currentPage === 1"
            class="btn btn-secondary me-2"
          >
            First Page
          </button>
          <button
            @click="prevPage"
            :disabled="currentPage === 1"
            class="btn btn-secondary ms-2"
          >
            Previous
          </button>
        </div>
        <span>Page {{ currentPage }} of {{ totalPages }}</span>
        <div class="justify-content-end">
          <button
            @click="nextPage"
            :disabled="currentPage === totalPages"
            class="btn btn-secondary me-2"
          >
            Next</button
          ><button
            @click="goToLastPage"
            :disabled="currentPage === totalPages"
            class="btn btn-secondary ms-1"
          >
            Last Page
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, watch, computed } from "vue";

export default {
  setup() {
    const datas = ref([]);
    const currentPage = ref(1);
    const itemsPerPage = ref(10);
    const sortOrder = ref("desc");
    const showSuccessAlert = ref(false);
    const showErrorAlert = ref(false);

    const API_BASE_URL = process.env.VUE_APP_API_BASE_URL;
    const token = localStorage.getItem("token");

    /* ================= FETCH DATA ================= */
    const fetchData = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/api/price-lists/admin`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const result = await response.json();

        // Karena response adalah ARRAY langsung
        datas.value = Array.isArray(result) ? result : [];
        currentPage.value = 1;
      } catch (error) {
        console.error("Error fetching data:", error);
        datas.value = [];
      }
    };

    /* ================= DELETE ================= */
    const deleteData = async (id) => {
      const confirmation = confirm(
        "Are you sure you want to delete this item?",
      );
      if (!confirmation) return;

      try {
        const response = await fetch(
          `${API_BASE_URL}/api/price-lists/${id}`,
          {
            method: "DELETE",
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        );

        if (!response.ok) {
          throw new Error("Failed to delete data");
        }

        showSuccessAlert.value = true;
        showErrorAlert.value = false;

        setTimeout(() => {
          fetchData();
          showSuccessAlert.value = false;
        }, 1500);
      } catch (error) {
        console.error("Error deleting data:", error);
        showErrorAlert.value = true;
      }
    };

    /* ================= SORT ================= */
    const sortedData = computed(() => {
      if (!Array.isArray(datas.value)) return [];

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
      currentPage.value = 1;
    };

    /* ================= PAGINATION ================= */

    const totalPages = computed(() =>
      Math.ceil(datas.value.length / itemsPerPage.value),
    );

    const paginatedData = computed(() => {
      const start = (currentPage.value - 1) * itemsPerPage.value;
      const end = start + itemsPerPage.value;
      return sortedData.value.slice(start, end);
    });

    const goToFirstPage = () => {
      currentPage.value = 1;
    };

    const prevPage = () => {
      if (currentPage.value > 1) currentPage.value--;
    };

    const nextPage = () => {
      if (currentPage.value < totalPages.value) currentPage.value++;
    };

    const goToLastPage = () => {
      currentPage.value = totalPages.value;
    };

    watch(itemsPerPage, () => {
      currentPage.value = 1;
    });

    /* ================= UTIL ================= */

    const formatDate = (dateString) => {
      const options = {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
      };
      const date = new Date(dateString);
      return date.toLocaleDateString("id-ID", options);
    };

    const toggleStatus = async (item, field) => {
      const oldValue = item[field];
      const newValue = !oldValue;

      // Optimistic UI update (langsung berubah di UI)
      item[field] = newValue;

      try {
        const response = await fetch(
          `${API_BASE_URL}/api/price-lists/admin/${item.id}`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({
              [field]: newValue,
            }),
          },
        );

        if (!response.ok) {
          throw new Error("Failed to update status");
        }
      } catch (error) {
        console.error("Update failed:", error);

        // rollback kalau gagal
        item[field] = oldValue;
        alert("Failed to update status");
      }
    };

    onMounted(() => {
      fetchData();
    });

    return {
      datas,
      currentPage,
      itemsPerPage,
      sortOrder,
      paginatedData,
      totalPages,
      toggleSortOrder,
      goToFirstPage,
      prevPage,
      nextPage,
      goToLastPage,
      formatDate,
      deleteData,
      showSuccessAlert,
      showErrorAlert,
      toggleStatus
    };
  },
};
</script>

<style>
table {
  width: 100%;
  border-collapse: collapse;
}

th,
td {
  text-align: center;
  padding: 8px;
}

.pagination {
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.pagination button {
  padding: 5px 10px;
  cursor: pointer;
}

.bi-arrow-up,
.bi-arrow-down {
  margin-left: 5px;
}
</style>
