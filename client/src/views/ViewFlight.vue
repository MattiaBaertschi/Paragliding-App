<script setup>
import axios from 'axios';
import { onMounted, reactive, toRaw, ref } from 'vue';
import { useRoute } from 'vue-router';
import MapComponent from "@/components/MapComponent.vue";
import LineChart from "@/components/LineChart.vue";

var loaded = ref(false)
const route = useRoute();  
const id = route.params.id;
const flight_id = "flug_" + id // read parameter id (it is reactive) 
var currentFlight = reactive({ data: []})

  const fetchData = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/get_flight_details');
        const jsonData = response.data;
        return jsonData
      } catch (err) {
        console.error(err);
    }
  }

  onMounted(async () => {
    console.log("mounted", currentFlight)
    currentFlight.data = await fetchData()
    console.log("currentFlight", currentFlight.data)
    loaded = true
  })

</script>


<template>
    <span class="hidden">{{ currentFlight.data }}</span>
    <div v-if="loaded == true"> 
      <!--<h1>Flug mit ID: {{ id }}</h1>-->
      <div>
      <div class="relative h-64">
        <MapComponent :flightPath="currentFlight.data.polyline"/>
        <div class="absolute top-2 left-2 px-4 py-1 bg-gray-900 text-white rounded-lg text-sm tracking-wider">{{ currentFlight.data.temp }} | {{ currentFlight.data.wind }}</div>
      </div>
      <div class="p-4">
        <div class="text-sm text-gray-600 mb-2">{{ currentFlight.data.date }}</div>
        <div class="flex items-center mb-2">
          <div class="h-8 w-8 rounded-full bg-gray-400 flex-shrink-0 mr-2"></div>
          <div class="text-sm font-medium">{{ currentFlight.data.firstname }} {{ currentFlight.data.lastname }}</div>
        </div>
        <div class="text-lg font-semibold mb-2">{{ currentFlight.data.flight_name }}</div>
        <div class="text-gray-700 mb-2">
          <div>Startplatz: {{ currentFlight.data.takeoff }}</div>
          <div>Landeplatz: {{ currentFlight.data.landing }}</div>
          <div>Flugdauer: {{ currentFlight.data.flighttime }}</div>
          <div>{{ currentFlight.data.comment }}</div>
          <div><LineChart v-if="loaded == true" :dataLabel="currentFlight.data.time_stamps" :data1="currentFlight.data.alt" :data2="currentFlight.data.agl"/></div>
        </div>
      </div>
    </div>
  </div>

</template>
