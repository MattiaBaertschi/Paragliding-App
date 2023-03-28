<script setup>
import axios from 'axios';
import { onMounted, reactive } from 'vue';
import MapComponent from "@/components/MapComponent.vue"



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
  var polyLine = []
  polyLine = [[8.5,47],[8.6,47.1],[8.6,47.3],[8.8,47.2]]
  console.log(typeof(polyLine), polyLine)
</script>



<template>
  

    <div>
    <h1>JSON Data from http://127.0.0.1:8000/</h1>
      <div v-for="(flight, index) in jsonData.value" :key="index">
      <div class="bg-white rounded-lg shadow-md overflow-hidden my-4">
      <div class="relative h-64">
        <MapComponent :flightPath="flight.polyline" msg="hallo"/>
        <!--<img src="https://placekitten.com/640/360" alt="Flugbild" class="w-full h-full object-cover">-->
        <div class="absolute top-2 left-2 px-4 py-1 bg-gray-900 text-white rounded-lg text-sm tracking-wider">{{ flight.temperatur }} | {{ flight.wind }}</div>
      </div>
      <div class="p-4">
        <div class="text-sm text-gray-600 mb-2">{{ flight.datum }}</div>
        <div class="flex items-center mb-2">
          <div class="h-8 w-8 rounded-full bg-gray-400 flex-shrink-0 mr-2"></div>
          <div class="text-sm font-medium">Benutzername {{ flight.benutzer_id }}</div>
        </div>
        <div class="text-lg font-semibold mb-2">Titel des Fluges</div>
        <div class="text-gray-700 mb-2">
          <div>Startplatz: {{ flight.startplatz }}</div>
          <div>Landeplatz: {{ flight.landeplatz }}</div>
          <div>Flugdauer: 1h 15min</div>
          <div>Beschreibung des Flugerlebnisses...</div>
        </div>
        <a href="#" class="text-blue-500">Mehr lesen</a>
      </div>
    </div>
    </div>
  </div>

</template>
