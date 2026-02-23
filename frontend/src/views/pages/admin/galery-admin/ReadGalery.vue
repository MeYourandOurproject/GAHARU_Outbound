<template>
  <div class="container py-5">
    <div v-if="galery" class="row">
      <!-- ================= IMAGE COL ================= -->
      <div class="col-lg-6">
        <div v-for="(img, index) in imagesArray" :key="index" class="mb-3">
          <img :src="img" class="img-fluid rounded shadow-sm" />
        </div>
      </div>

      <!-- ================= DATA TABLE COL ================= -->
      <div class="col-lg-6">
        <table class="table table-bordered table-striped">
          <tbody>
            <tr>
              <th width="35%">ID</th>
              <td>{{ galery.id }}</td>
            </tr>

            <tr>
              <th>Title</th>
              <td>{{ galery.title }}</td>
            </tr>

            <tr>
              <th>Description</th>
              <td v-html="galery.description"></td>
            </tr>

            <tr>
              <th>Location</th>
              <td>{{ galery.location }}</td>
            </tr>

            <tr>
              <th>Date</th>
              <td>{{ formatDate(galery.date) }}</td>
            </tr>

            <tr>
              <th>Created At</th>
              <td>{{ formatDateTime(galery.createdAt) }}</td>
            </tr>

            <tr>
              <th>Updated At</th>
              <td>{{ formatDateTime(galery.updatedAt) }}</td>
            </tr>

            <tr>
              <th>Service ID</th>
              <td>{{ galery.service_id }}</td>
            </tr>

            <tr class="table-secondary">
              <th colspan="2" class="text-center">SERVICE DETAIL</th>
            </tr>

            <tr>
              <th>Service Name</th>
              <td>{{ galery.services?.name }}</td>
            </tr>

            <tr>
              <th>Service Slug</th>
              <td>{{ galery.services?.slug }}</td>
            </tr>

            <tr>
              <th>Service Description</th>
              <td>{{ galery.services?.description }}</td>
            </tr>

            <tr>
              <th>Meta Title</th>
              <td>{{ galery.services?.meta_title }}</td>
            </tr>

            <tr>
              <th>Meta Description</th>
              <td>{{ galery.services?.meta_description }}</td>
            </tr>

            <tr>
              <th>Service Created</th>
              <td>{{ formatDateTime(galery.services?.createdAt) }}</td>
            </tr>

            <tr>
              <th>Service Updated</th>
              <td>{{ formatDateTime(galery.services?.updatedAt) }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div v-else>
      <p>Loading...</p>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, computed } from "vue";
import { useRoute } from "vue-router";

export default {
  setup() {
    const route = useRoute();
    const galery = ref(null);
    const API_BASE_URL = process.env.VUE_APP_API_BASE_URL;

    const fetchGalery = async () => {
      try {
        const id = route.params.id;
        const response = await fetch(`${API_BASE_URL}/api/galeries/${id}`);

        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        galery.value = await response.json();
      } catch (error) {
        console.error(error);
      }
    };

    /* ================= PARSE IMAGE ARRAY ================= */
    const imagesArray = computed(() => {
      if (!galery.value?.img_url) return [];
      try {
        return JSON.parse(galery.value.img_url);
      } catch {
        return [];
      }
    });

    const formatDate = (date) => {
      return new Date(date).toLocaleDateString("id-ID", {
        day: "2-digit",
        month: "long",
        year: "numeric",
      });
    };

    const formatDateTime = (date) => {
      if (!date) return "-";
      return new Date(date).toLocaleString("id-ID");
    };

    onMounted(fetchGalery);

    return {
      galery,
      imagesArray,
      formatDate,
      formatDateTime,
    };
  },
};
</script>

<style scoped>
table th {
  background: #f8f9fa;
}

table td{
  text-align: start;
}
</style>
