<template>
    <carousel :items-to-show="1" :wrap-around="true" class="mb-2">
      <slide :key="'map'"><MapComponent :flightPath="gnss_records"/></slide>
      <slide v-for="image in images" :key="Slide">
        <img
        :src="image"
        :alt="`Flugbild`"
        class="w-full h-full object-cover"
      />
      </slide>
  
      <template #addons>
        <navigation />
        <pagination />
      </template>
    </carousel>
  </template>

<script setup>
// If you are using PurgeCSS, make sure to whitelist the carousel CSS classes
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import MapComponent from "@/components/MapComponent.vue";

const props = defineProps({
  gnss_records: { 
    type: Array,
    default: [
  [46.376067, 8.02655],
  [46.376067, 8.026633]
]}})

const images = [
  "https://placekitten.com/640/200",
  "https://placekitten.com/550/350",
  "https://placekitten.com/640/320",
  "https://placekitten.com/600/320",
  "https://placekitten.com/620/320"
];




defineExpose({
  Carousel,
  Slide,
  Pagination,
  Navigation,
})
</script>

  