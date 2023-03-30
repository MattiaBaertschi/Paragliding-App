<script setup>
import axios from 'axios';
import { onMounted, reactive, toRaw } from 'vue';
import { useRoute } from 'vue-router';
import MapComponent from "@/components/MapComponent.vue";
import LineChart from "@/components/LineChart.vue";


const route = useRoute();  
const id = route.params.id;
const flight_id = "flug_" + id // read parameter id (it is reactive) 

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
  var currentFlight = reactive({ data: []})

  onMounted(async () => {
    jsonData.value = await fetchData()
    currentFlight = jsonData.value
  })
  
</script>


<template>
    <div>
      <!--<h1>Flug mit ID: {{ id }}</h1>-->
      <div>
      <div class="relative h-64">
        <MapComponent :flightPath="currentFlight.polyline"/>
        <div class="absolute top-2 left-2 px-4 py-1 bg-gray-900 text-white rounded-lg text-sm tracking-wider">{{ currentFlight.temp }} | {{ currentFlight.wind }}</div>
      </div>
      <div class="p-4">
        <div class="text-sm text-gray-600 mb-2">{{ currentFlight.date }}</div>
        <div class="flex items-center mb-2">
          <div class="h-8 w-8 rounded-full bg-gray-400 flex-shrink-0 mr-2"></div>
          <div class="text-sm font-medium">{{ currentFlight.firstname }} {{ currentFlight.lastname }}</div>
        </div>
        <div class="text-lg font-semibold mb-2">{{ currentFlight.flight_name }}</div>
        <div class="text-gray-700 mb-2">
          <div>Startplatz: {{ currentFlight.takeoff }}</div>
          <div>Landeplatz: {{ currentFlight.landing }}</div>
          <div>Flugdauer: {{ currentFlight.flighttime }}</div>
          <div>{{ currentFlight.comment }}</div>
          <div><LineChart/></div>
        </div>
        <span class="hidden">
        // ohne dass werden die Daten nicht geladen: :/
        {{jsonData.value}}
      </span>
      </div>
    </div>
  </div>

</template>
