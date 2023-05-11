<template>
    <div class="fixed bottom-0 w-full bg-light border-t border-gray-200 z-50">
    <nav class="flex justify-between mx-1">
      <router-link to="/home" class="w-1/5 py-1 my-2 text-center text-xs font-medium text-black hover:bg-white" active-class="text-dark font-bold bg-white rounded-full">
        <img v-show="activeRoute == '/home'" :src="homeIcon" alt="Home" class="inline h-6 w-6 mr-2" />
        <span class="leading-8">Home</span>
      </router-link>
      <router-link to="/search" class="w-1/5 py-1 my-2 text-center text-xs font-medium text-black hover:text-gray-900" active-class="text-dark font-bold bg-white rounded-full">
        <img v-show="activeRoute == '/search'" :src="searchIcon" alt="Home" class="inline h-6 w-6 mr-2" />
        <span class="leading-8">Suche</span>
      </router-link>
      <router-link to="/map" class="w-1/5 py-1 my-2 text-center text-xs font-medium text-black hover:text-gray-900" active-class="text-dark font-bold bg-white rounded-full">
        <div class="flex items-center justify-center"></div>
        <img v-show="activeRoute == '/map'" :src="mapIcon" alt="Home" class="inline h-6 w-6 mr-2" />
        <span class="leading-8">Karte</span>
      </router-link>
      <router-link to="/flights" class="w-1/5 py-1 my-2 text-center text-xs font-medium text-black hover:text-gray-900" active-class="text-dark font-bold bg-white rounded-full">
        <img v-show="activeRoute == '/flights'" :src="flightsIcon" alt="Home" class="inline h-6 w-6 mr-2" />
        <span class="leading-8">Flüge</span>
      </router-link>
      <router-link to="/user" class="w-1/5 py-1 my-2 text-center text-xs font-medium text-black hover:text-gray-900" active-class="text-dark font-bold bg-white rounded-full">
        <img v-show="activeRoute == '/user'" :src="profileIcon" alt="Home" class="inline h-6 w-6 mr-2" />
        <span class="leading-8">Profil</span>
      </router-link>
    </nav>
  </div>
</template>
<script setup>
import homeIcon from "@/assets/feed.svg";
import mapIcon from "@/assets/map.svg";
import searchIcon from "@/assets/search.svg";
import profileIcon from "@/assets/profile.svg";
import flightsIcon from "@/assets/flights.svg";
import { useRoute } from 'vue-router';
import { computed } from "vue"
const route = useRoute();
const activeRoute = computed(() => route.path);
</script>