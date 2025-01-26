<template>
  <div class="container-fluid paket-tour-detail-content">
    <div class="container">
      <div
        v-if="paketTour"
        class="row gap-2 align-items-start justify-content-center p-4"
      >
        <div class="col-lg-7 gambar">
          <img
            :src="paketTour.picture"
            alt="Paket Tour Image"
            class="img-fluid"
          />
          <p>{{ paketTour.description }}</p>
        </div>
        <div class="col-lg-3 keterangan">
          <h3>{{ paketTour.name }}</h3>
          <p><strong>Mulai dari:</strong> Rp. {{ paketTour.price }},-</p>
          <p><strong>Negara:</strong> {{ paketTour.country }}</p>
          <p><strong>Kota:</strong> {{ paketTour.city }}</p>
          <h4>Destinasi:</h4>
          <ul>
            <li
              v-for="(destination, index) in paketTour.Destinations"
              :key="index"
            >
              {{ destination.nama }} - {{ destination.alamat }}
            </li>
          </ul>
          <h4>Harga Paket 1 Hari:</h4>
          <table>
            <thead>
              <tr>
                <th>Package</th>
                <th>33 Pax</th>
                <th>50 Pax</th>
                <th>55 Pax</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="(price, index) in paketTour.Price_list_1_days"
                :key="index"
              >
                <td>{{ price.package }}</td>
                <td>Rp. {{ price._33_pax }}</td>
                <td>Rp. {{ price._50_pax }}</td>
                <td>Rp. {{ price._55_pax }}</td>
              </tr>
            </tbody>
          </table>

          <h4>Harga Paket 2 Hari 1 Malam:</h4>
          <table>
            <thead>
              <tr>
                <th>Package</th>
                <th>33 Pax</th>
                <th>50 Pax</th>
                <th>56 Pax</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="(price, index) in paketTour.Price_list_2_day_1_nights"
                :key="index"
              >
                <td>{{ price.package }}</td>
                <td>Rp. {{ price._33_pax }}</td>
                <td>Rp. {{ price._50_pax }}</td>
                <td>Rp. {{ price._56_pax }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div v-else>
        <p>Loading...</p>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";

export default {
  setup() {
    const route = useRoute();
    const paketTour = ref(null);

    const fetchPaketTour = async () => {
      try {
        const slug = route.params.slug;
        const response = await fetch(
          `http://localhost:3001/api/paket-tour/${slug}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        let data = await response.json();
        paketTour.value = data;
      } catch (error) {
        console.error("Error fetching paket tour data:", error);
      }
    };

    onMounted(() => {
      fetchPaketTour();
    });

    return { paketTour };
  },
};
</script>
