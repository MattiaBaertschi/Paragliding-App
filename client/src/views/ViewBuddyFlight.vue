<script setup>
import { onMounted, reactive, ref, computed } from 'vue';
import { useRoute } from 'vue-router';
import LineChart from "@/components/LineChart.vue";
import MapComponent from "@/components/MapComponent.vue";
import ImageCarousel from "@/components/ImageCarousel.vue";
import ButtonComponent from "@/components/ButtonComponent.vue";
import takeoff from '@/assets/takeoff.svg';
import landing from '@/assets/landing.svg';
import date from '@/assets/date.svg';
import stopwatch from '@/assets/stopwatch.svg';
import user from '@/assets/user.svg';
import glider from '@/assets/glider.svg';
import { apiGet, apiPost } from '@/utils/api';
import { useSessionStore } from '@/store/user';
import { useRouter } from 'vue-router';

const token = useSessionStore().sessionToken;


var loaded = ref(false)
var mapIsExpanded = ref(false)
const isUpdating = ref(false)
const route = useRoute(); 
const router = useRouter();
const id = route.params.id;
var currentFlight = reactive({ data: []})


const timeStamps = computed(() => currentFlight.data.terrain.map(record => {
  let timestampStr = String(record[1]);
  while (timestampStr.length < 6) {
    timestampStr = '0' + timestampStr;
  }
  return `${timestampStr.slice(0, 2)}:${timestampStr.slice(2, 4)}`;
}));

const aboveGround = computed(() => currentFlight.data.alt_gnss.map(record => record[0]));
const aboveSeaLevel = computed(() => currentFlight.data.terrain.map(record => record[0]));
onMounted(async () => {
  currentFlight.data = await apiGet('get_flight_detail_of_followed', { flight_id: id }, token);
  loaded.value = true
})

function toggleMap() {
  mapIsExpanded.value = !mapIsExpanded.value
}

const deleteFlight = async () => {
  isUpdating.value = true
  console.log("Flug löschen")
  const flightData = {flight_id: id};
  try {
    await apiPost('delete_flight', flightData, token, null);
  } 
  catch (error) {
    console.error(error);
  }
  finally{
    isUpdating.value = false;
    router.push(`/flights`)
    }
}

</script>


<template>
<div>
    <div v-if="loaded == false" class="h-full w-full bg-red-700"></div>
    <span class="hidden">{{ currentFlight.data }}</span>
    <div v-if="loaded == true">
    <div v-if="mapIsExpanded == false">
      <ImageCarousel :gnss_records="currentFlight.data.gnss_records" :images="currentFlight.data.images"/>

        <div class="text-2xl mb-4 tracking-wider font-bold">{{ currentFlight.data.flight_name }}</div>
      <div class="bg-white p-4 rounded-xl my-4">
        <div class="flex mb-4">
          <img :src="user" alt="Cloudys" class="w-6 h-6 mr-2">
          <div class="text-xl">{{ currentFlight.data.username }}</div>
        </div>
        <div class="flex mb-4">
          <img :src="takeoff" alt="Cloudys" class="w-6 h-6 mr-2">
          <div class="text-xl">{{ currentFlight.data.takeoff }}</div>
        </div>
        <div class="flex mb-4">
          <img :src="landing" alt="Cloudys" class="w-6 h-6 mr-2">
          <div class="text-xl">{{ currentFlight.data.landing }}</div>
        </div>
        <div class="flex mb-4">
          <img :src="date" alt="Cloudys" class="w-6 h-6 mr-2">
          <div class="text-xl">{{ currentFlight.data.date }}</div>
        </div>
        <div class="flex mb-4">
        <img :src="stopwatch" alt="Cloudys" class="w-6 h-6 mr-2">
        <div class="text-xl">{{ currentFlight.data.duration }}</div>
        </div>
        <div class="flex mb-4">
        <img :src="glider" alt="Cloudys" class="w-6 h-6 mr-2">
        <div class="text-xl">{{ currentFlight.data.glider }}</div>
        </div>
      </div>
      <div v-show="currentFlight.data.comment != null" class="bg-white p-4 rounded-xl my-4">
        <p class="font-semibold text-sm tracking-wider">Kommentar</p>
        <p>{{ currentFlight.data.comment }}</p>
      </div>
    </div>

      <div>
      <div class="" :class="{ 'relative w-full h-64': !mapIsExpanded, 'absolute top-0 left-0 h-screen w-full': mapIsExpanded }">
        <MapComponent :flightPath="currentFlight.data.gnss_records" :mapControls="mapIsExpanded"/>
        <div v-if="mapIsExpanded == true" class="absolute bottom-14 mx-auto px-4 py-4 bg-black text-white text-sm tracking-wider w-full text-center cursor-pointer" @click="toggleMap">Karte schliessen</div>
      </div>
      <div @click="toggleMap" class="w-full flex justify-center items-center bg-white hover:bg-medium tracking-wider py-2 px-4 rounded-xl my-2 mb-8 cursor-pointer">Karte öffnen</div>
    </div>
    <h2 class="text-center text-xl mb-4">Statistik</h2>
    <div><LineChart v-if="loaded == true" :dataLabel="timeStamps" :data1="aboveGround" :data2="aboveSeaLevel"/></div>
  </div>
</div>
</template>
