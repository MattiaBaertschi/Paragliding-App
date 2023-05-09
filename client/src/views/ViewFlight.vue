<script setup>
import axios from 'axios';
import { onMounted, reactive, toRaw, ref } from 'vue';
import { useRoute } from 'vue-router';
import LineChart from "@/components/LineChart.vue";
import MapComponent from "@/components/MapComponent.vue";

var loaded = ref(false)
var mapIsExpanded = ref(false)
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
    loaded.value = true
  })

function toggleMap() {
  mapIsExpanded.value = !mapIsExpanded.value

  console.log(mapIsExpanded.value)
}
</script>


<template>
    <span class="hidden">{{ currentFlight.data }}</span>
    <div v-if="loaded == true">
    <div v-if="mapIsExpanded == false">
      <div class="uppercase tracking-widest font-semibold text-xs text-secondary mb-1">Datum</div>
      <div class="text-3xl mb-4">{{ currentFlight.data.date }}</div>
      <div class="uppercase tracking-widest font-semibold text-xs text-secondary mb-1">Startplatz</div>
      <div class="text-3xl mb-4">{{ currentFlight.data.takeoff }}</div>
      <div class="uppercase tracking-widest font-semibold text-xs text-secondary mb-1">Landeplatz</div>
      <div class="text-3xl mb-4">{{ currentFlight.data.landing }}</div>
    </div>

      <div>
      <div class="" :class="{ 'relative w-full h-64': !mapIsExpanded, 'absolute top-0 left-0 h-screen w-full': mapIsExpanded }">
        <MapComponent :flightPath="currentFlight.data.polyline" :mapControls="mapIsExpanded"/>
        <!--<div class="absolute top-2 left-2 px-4 py-1 bg-black text-white rounded-lg text-sm tracking-wider">{{ currentFlight.data.temp }} | {{ currentFlight.data.wind }}</div>-->
        <div v-if="mapIsExpanded == true" class="absolute bottom-14 mx-auto px-4 py-4 bg-black text-white text-sm tracking-wider w-full text-center cursor-pointer" @click="toggleMap">Karte schliessen</div>
      </div>
      <div @click="toggleMap" class="text-center py-2 bg-black text-white cursor-pointer">Karte öffnen</div>
      <div class="mt-4">
        <div class="text-sm text-gray-600 mb-2">{{ currentFlight.data.date }} | {{ currentFlight.data.firstname }} {{ currentFlight.data.lastname }}</div>
        
        <div class="text-lg font-semibold mb-2">{{ currentFlight.data.flight_name }}</div>
        <div class="text-gray-700 mb-2">
          <div>Flugdauer: {{ currentFlight.data.flighttime }}</div>
          <div>{{ currentFlight.data.comment }}</div>
        </div>
      </div>
    </div>
  </div>

</template>
