<script setup>
import axios from 'axios';
import { onMounted, reactive } from 'vue';

const fetchData = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/get_flight_details');
      const jsonData = response.data;
      console.log(jsonData)
      return jsonData
    } catch (err) {
      console.error(err);
    }
  }
  const jsonData = reactive({ data: [] })

  onMounted(async () => {
    jsonData.value = await fetchData()
  })
</script>



<template>
    <div>
    <RouterLink to="upload">
        <div class="bg-light rounded-lg shadow-md overflow-hidden my-4">
          <div class="p-2 text-center">
            <div class="text-lg font-semibold mt-1">+ Flug hochladen</div>
            <div class="text-gray-700 mb-2">
            </div>
          </div>
        </div>
      </RouterLink>

      <div v-for="(flight, index) in jsonData.value" :key="index">
      <RouterLink :to="`flights/view/${ flight.id }`">
        <div class="bg-white rounded-lg shadow-md overflow-hidden my-4">
          <div class="p-4">
            <div class="text-sm text-gray-600">{{ flight.datum }}</div>
            <div class="text-lg font-semibold mt-1">{{flight.id}}. Flug</div>
            <div class="text-gray-700 mb-2">
              <div>{{ flight.startplatz }} | {{ flight.landeplatz }}</div>
              <div>Flugdauer:{{ flight.flighttime }}</div>
            </div>
          </div>
        </div>
      </RouterLink>
    </div>
  </div>

</template>
