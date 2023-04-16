<template>
  <div class="bg-white rounded-lg shadow-md overflow-hidden my-8">
    <div class="relative h-64">
      <MapComponent v-show="currentImage === -1" :flightPath="flight.polyline" />
      <div v-show="currentImage === -1" class="absolute top-2 left-2 px-3 py-1 bg-white text-dark font-semibold rounded-lg text-sm tracking-wider">{{ flight.temp }} | {{ flight.wind }}</div>

      <img
        v-for="(image, index) in images"
        :key="index"
        :src="image"
        :alt="`Flugbild ${index}`"
        class="w-full h-full object-cover"
        v-show="currentImage === index"
      />
    
      <div class="flex flex-col absolute bottom-2 right-2 px-1 py-1 bg-white text-dark font-semibold rounded-lg text-xs tracking-wider">
        <button @click="showMap" :class="['px-2 py-2 rounded', currentImage === -1 ? 'bg-dark text-white' : 'bg-white text-dark']">
          Karte
        </button>
        <button v-for="(image, index) in images" :key="index" @click="showImage(index)" :class="['px-2 py-2 rounded', currentImage === index ? 'bg-dark text-white' : 'bg-white text-dark']">
          IMG {{ index + 1 }}
        </button>
      </div>
    </div>



    <div class="p-4">
    <div class="text-sm text-gray-600 mb-2">{{ flight.date }} | @{{ flight.benutzer_id }}userhandle</div>
    <div class="text-lg font-semibold mb-2">{{flight.flight_name}}</div>
    <div class="text-gray-700 mb-2">
      <div>{{ flight.takeoff }} -> {{ flight.landing }}</div>
      <div>Flugdauer: {{ flight.flighttime }}</div>
      <div>{{ flight.comment }}</div>
    </div>
    <RouterLink :to="`flights/view/${ flight.id }`">
    <a class="text-dark font-bold underline-offset-3 underline decoration-2">Flug ansehen</a>
    </RouterLink>
  </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import MapComponent from "@/components/MapComponent.vue";

const props = defineProps({
  flight: {
    type: Object,
  },
});

const images = [
  "https://placekitten.com/640/360",
  "https://placekitten.com/640/350",
  "https://placekitten.com/640/320",
];

const currentImage = ref(-1);

const showMap = () => {
  currentImage.value = -1;
};

const showImage = (index) => {
  currentImage.value = index;
};
</script>





