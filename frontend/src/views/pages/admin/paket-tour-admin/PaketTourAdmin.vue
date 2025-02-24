<template>
  <div class="container">
    <div class="row justify-content-start">
      <div class="col-3">
        <router-link to="/admin/paket-tour/create">
          <div class="btn btn-success pt-1 pb-1">
            <i class="bi bi-plus fs-5"></i></div></router-link
        ><span class="fw-bold ms-2">TAMBAH PAKET TOUR</span>
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
              <div>Delete Paket Tour Successfully</div>
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
              <div>Delete Paket Tour failed! Please check the form.</div>
            </div>
          </transition>
        </div>
      </div>
    </div>
  </div>
  <div class="container mb-5">
    <div>
      <table class="table table-striped table-hover">
        <thead>
          <tr>
            <th>No</th>
            <th>Name</th>
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
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in paginatedData" :key="item.id">
            <td>{{ index + 1 + (currentPage - 1) * itemsPerPage }}</td>
            <td class="text-start">{{ item.name }}</td>
            <td>{{ formatDate(item.createdAt) }}</td>
            <td>
              <div
                class="d-flex gap-2 align-items-center justify-content-center"
              >
                <router-link :to="`/admin/paket-tour/read/${item.slug}`">
                  <div class="btn btn-info pt-1 pb-1 m-0 p-0">
                    <span>
                      <i class="bi bi-eye p-2 rounded-2"></i
                    ></span></div></router-link
                ><router-link :to="`/admin/paket-tour/edit/${item.slug}`">
                  <div class="btn btn-warning pt-1 pb-1 m-0 p-0">
                    <span
                      ><i class="bi bi-pencil-square p-2 rounded-2"></i
                    ></span></div
                ></router-link>
                <!-- <router-link :to="`/admin/paket-tour/delete/${item.slug}`">
                  <div class="btn btn-danger pt-1 pb-1 m-0 p-0">
                    <span
                      ><i class="bi bi-x-circle p-2 rounded-2"></i>
                    </span></div
                ></router-link> -->
                <button
                  @click="deleteData(item.id)"
                  class="btn btn-danger pt-1 pb-1 m-0 p-0"
                >
                  <span><i class="bi bi-x-circle p-2 rounded-2"></i></span>
                </button>
              </div>
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
    const totalPages = ref(1);
    const itemsPerPage = ref(10);
    const sortOrder = ref("desc");
    const showSuccessAlert = ref(false);
    const showErrorAlert = ref(false);

    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.gaharuoutbound.com/api/paket-tour"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        let data = await response.json();
        datas.value = data;
        updateSortOrder();
        totalPages.value = Math.ceil(data.length / itemsPerPage.value);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    const deleteData = async (id) => {
      const token = localStorage.getItem("token");
      // console.log({ id, token });

      const confirmation = confirm(
        "Are you sure you want to delete this item?"
      );
      if (!confirmation) return;
      // const token = localStorage.getItem("token");
      try {
        const response = await fetch(
          `https://api.gaharuoutbound.com/api/paket-tour/${id}`,
          {
            method: "DELETE",
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        if (!response.ok) {
          throw new Error("Failed to delete data");
        }

        showSuccessAlert.value = true;
        showErrorAlert.value = false;

        setTimeout(() => {
          fetchData();
          showSuccessAlert.value = false;
          showErrorAlert.value = false;
        }, 2000);
      } catch (error) {
        console.error("Error deleting data:", error);
      }
    };

    const sortData = () => {
      return [...datas.value].sort((a, b) => {
        if (sortOrder.value === "asc") {
          return new Date(a.createdAt) - new Date(b.createdAt);
        } else {
          return new Date(b.createdAt) - new Date(a.createdAt);
        }
      });
    };

    const paginatedData = computed(() => {
      const start = (currentPage.value - 1) * itemsPerPage.value;
      const end = start + itemsPerPage.value;
      return sortData().slice(start, end);
    });

    const goToFirstPage = () => {
      currentPage.value = 1;
    };

    const prevPage = () => {
      if (currentPage.value > 1) {
        currentPage.value--;
      }
    };

    const nextPage = () => {
      if (currentPage.value < totalPages.value) {
        currentPage.value++;
      }
    };

    const goToLastPage = () => {
      currentPage.value = totalPages.value;
    };

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

    const updatePagination = () => {
      currentPage.value = 1;
      totalPages.value = Math.ceil(datas.value.length / itemsPerPage.value);
    };

    const updateSortOrder = () => {
      currentPage.value = 1;
      sortData();
    };

    const toggleSortOrder = () => {
      sortOrder.value = sortOrder.value === "asc" ? "desc" : "asc";
    };

    onMounted(() => {
      fetchData();
    });

    watch(sortOrder, updateSortOrder);
    watch(itemsPerPage, updatePagination);

    return {
      datas,
      currentPage,
      totalPages,
      itemsPerPage,
      sortOrder,
      paginatedData,
      goToFirstPage,
      prevPage,
      nextPage,
      goToLastPage,
      formatDate,
      updatePagination,
      updateSortOrder,
      toggleSortOrder,
      deleteData,
      showSuccessAlert,
      showErrorAlert,
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
