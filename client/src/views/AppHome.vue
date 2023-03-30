<script setup>
import axios from 'axios';
import { onMounted, reactive } from 'vue';
import MapComponent from "@/components/MapComponent.vue"

const jsonData = reactive({ data: [] })

const fetchData = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/get_startpage');
      const jsonData = response.data;
      console.log(jsonData)
      return jsonData
    } catch (err) {
      console.error(err);
    }
  }


  onMounted(async () => {
    jsonData.value = await fetchData()
  })

</script>

<template>
    <div>
    <!--<h1>{{jsonData.value}}</h1>-->
      <div v-for="(flight, index) in jsonData.value" :key="index">
        <RouterLink :to="`flights/view/${ flight.id }`">
          <div class="bg-white rounded-lg shadow-md overflow-hidden my-8">
          <div class="relative h-64">
            <MapComponent :flightPath="flight.polyline"/>
            <!--<img src="https://placekitten.com/640/360" alt="Flugbild" class="w-full h-full object-cover">-->
            <div class="absolute top-2 left-2 px-4 py-1 bg-gray-900 text-white rounded-lg text-sm tracking-wider">{{ flight.temp }} | {{ flight.wind }}</div>
          </div>
          <div class="p-4">
            <div class="text-sm text-gray-600 mb-2">{{ flight.date }}</div>
            <div class="flex items-center mb-2">
              <div class="h-8 w-8 rounded-full bg-gray-400 flex-shrink-0 mr-2"></div>
              <div class="text-sm font-medium">Benutzername {{ flight.benutzer_id }}</div>
            </div>
            <div class="text-lg font-semibold mb-2">Titel des Fluges</div>
            <div class="text-gray-700 mb-2">
              <div>Startplatz: {{ flight.takeoff }}</div>
              <div>Landeplatz: {{ flight.landing }}</div>
              <div>Flugdauer: {{ flight.flighttime }}</div>
              <div>{{ flight.comment }}</div>
            </div>
            <a class="text-blue-500">Mehr lesen</a>
          </div>
        </div>
      </RouterLink>
    </div>
  </div>

</template>
