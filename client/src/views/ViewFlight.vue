<script setup>
import axios from 'axios';
import { onMounted, reactive, toRaw } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();  
const id = route.params.id;
const flight_id = "flug_" + id // read parameter id (it is reactive) 

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

  const fetchFlightData = async (id) => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/');
        const jsonData = response.data;
        console.log(id, jsonData.value)
        const flightData = jsonData.value[id]
        console.log("extracted flightdata:", flightData)
        return flightData
      } catch (err) {
        console.error(err);
    }
  }

  const jsonData = reactive({ data: [] })
  var currentFlight = reactive({ data: []})

  onMounted(async () => {
    jsonData.value = await fetchData()
    //currentFlight = fetchFlightData[flight_id]
    currentFlight = jsonData.value[flight_id]
  })
  
</script>


<template>
    <div>
     
      {{jsonData.value}}
    <h1>Flug mit ID: {{ $route.params.id }}</h1>
      <div>
      <div class="bg-white rounded-lg shadow-md overflow-hidden my-4">
      <div class="relative h-64">
        <img src="https://placekitten.com/640/360" alt="Flugbild" class="w-full h-full object-cover">
        <div class="absolute top-2 left-2 px-4 py-1 bg-gray-900 text-white rounded-lg text-sm tracking-wider">{{ currentFlight.temperatur }} | {{ currentFlight.wind }}</div>
      </div>
      <div class="p-4">
        <div class="text-sm text-gray-600 mb-2">{{ currentFlight.datum }}</div>
        <div class="flex items-center mb-2">
          <div class="h-8 w-8 rounded-full bg-gray-400 flex-shrink-0 mr-2"></div>
          <div class="text-sm font-medium">Benutzername {{ currentFlight.benutzer_id }}</div>
        </div>
        <div class="text-lg font-semibold mb-2">Titel des Fluges</div>
        <div class="text-gray-700 mb-2">
          <div>Startplatz: {{ currentFlight.startplatz }}</div>
          <div>Landeplatz: {{ currentFlight.landeplatz }}</div>
          <div>Flugdauer: 1h 15min</div>
          <div>Beschreibung des Flugerlebnisses...</div>
        </div>
        <a href="#" class="text-blue-500">Mehr lesen</a>
      </div>
    </div>
    </div>
  </div>

</template>
