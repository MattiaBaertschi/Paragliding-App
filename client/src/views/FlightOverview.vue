<script setup>
import axios from 'axios';
import { onMounted, reactive } from 'vue';



const fetchData = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/');
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
    <h1>JSON Data from http://127.0.0.1:8000/</h1>
      <div v-for="(flight, index) in jsonData.value" :key="index">
      <div class="bg-white rounded-lg shadow-md overflow-hidden my-4">
      <div class="p-4">
        <div class="text-sm text-gray-600">{{ flight.datum }}</div>
        <div class="text-lg font-semibold mt-1">Titel des Fluges</div>
        <div class="text-gray-700 mb-2">
          <div>{{ flight.startplatz }} | {{ flight.landeplatz }}</div>
          <div>Flugdauer: 1h 15min</div>
        </div>
      </div>
    </div>
    </div>
  </div>

</template>
