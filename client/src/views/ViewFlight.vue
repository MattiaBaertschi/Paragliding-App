<script setup>
import { onMounted, reactive, ref } from 'vue';
import { useRoute } from 'vue-router';
import LineChart from "@/components/LineChart.vue";
import MapComponent from "@/components/MapComponent.vue";
import ImageCarousel from "@/components/ImageCarousel.vue";
import ButtonComponent from "@/components/ButtonComponent.vue";
import takeoff from '@/assets/takeoff.svg';
import landing from '@/assets/landing.svg';
import date from '@/assets/date.svg';
import remove from '@/assets/remove.svg';
import edit from '@/assets/edit.svg';
import stopwatch from '@/assets/stopwatch.svg';
import user from '@/assets/user.svg';
import { apiGet, apiPost } from '@/utils/api';
import { useSessionStore } from '@/store/user';
const token = useSessionStore().sessionToken;

var loaded = ref(false)
var mapIsExpanded = ref(false)
const route = useRoute();  
const id = route.params.id;
var currentFlight = reactive({ data: []})


onMounted(async () => {
  currentFlight.data = await apiGet('flight', { flight_id: id }, token);
  loaded.value = true
})

function toggleMap() {
  mapIsExpanded.value = !mapIsExpanded.value
}
</script>


<template>
    <span class="hidden">{{ currentFlight.data }}</span>
    <div v-if="loaded == true">
    <div v-if="mapIsExpanded == false">
      <ImageCarousel :gnss_records="currentFlight.data.gnss_records"/>

      <div class="bg-white p-4 rounded-xl my-4">
        <div class="text-2xl mb-4 tracking-wider font-bold">{{ currentFlight.data.flight_name }}</div>
        <div class="flex">
          <img :src="user" alt="Cloudys" class="w-6 h-6 mr-2">
          <div class="text-xl mb-4">{{ currentFlight.data.user_id }} Rüedel??</div>
        </div>
        <div class="flex">
          <img :src="takeoff" alt="Cloudys" class="w-6 h-6 mr-2">
          <div class="text-xl mb-4">{{ currentFlight.data.takeoff }}</div>
        </div>
        <div class="flex">
          <img :src="landing" alt="Cloudys" class="w-6 h-6 mr-2">
          <div class="text-xl mb-4">{{ currentFlight.data.landing }}</div>
        </div>
        <div class="flex">
          <img :src="date" alt="Cloudys" class="w-6 h-6 mr-2">
          <div class="text-xl mb-4">{{ currentFlight.data.date }}</div>
        </div>
        <div class="flex">
        <img :src="stopwatch" alt="Cloudys" class="w-6 h-6 mr-2">
        <div class="text-xl">{{ currentFlight.data.time }}Tschuldigung schnäu </div>
        </div>
      </div>
      <div class="mb-4">
        <RouterLink :to="`edit/${ currentFlight.data.id }`"></RouterLink>
        <ButtonComponent text="Flug bearbeiten" :path="`../edit/${ id }`" :icon="edit" />
      <ButtonComponent text="Löschen" path="/delete" :icon="remove" />
      </div>
    </div>

      <div>
      <div class="" :class="{ 'relative w-full h-64': !mapIsExpanded, 'absolute top-0 left-0 h-screen w-full': mapIsExpanded }">
        <MapComponent :flightPath="currentFlight.data.gnss_records" :mapControls="mapIsExpanded"/>
        <!--<div class="absolute top-2 left-2 px-4 py-1 bg-black text-white rounded-lg text-sm tracking-wider">{{ currentFlight.data.temp }} | {{ currentFlight.data.wind }}</div>-->
        <div v-if="mapIsExpanded == true" class="absolute bottom-14 mx-auto px-4 py-4 bg-black text-white text-sm tracking-wider w-full text-center cursor-pointer" @click="toggleMap">Karte schliessen</div>
      </div>
      <div @click="toggleMap" class="w-full flex justify-center items-center bg-white hover:bg-medium tracking-wider py-2 px-4 rounded-xl my-2 mb-8 cursor-pointer">Karte öffnen</div>
    </div>
    <h2 class="text-center text-xl mb-4">Statistik</h2>
    <div><LineChart v-if="loaded == true" :dataLabel="currentFlight.data.time_stamps" :data1="currentFlight.data.alt" :data2="currentFlight.data.agl"/></div>
  </div>

</template>
