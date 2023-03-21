<script setup>
import HelloWorld from './components/HelloWorld.vue'
import axios from 'axios';
import { onMounted, reactive, ref} from 'vue';



const fetchData = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/');
      const jsonData = response.data;
      console.log(jsonData);
      return jsonData
    } catch (err) {
      console.error(err);
    }
  }

  const jsonData = reactive({ data: [] })

  onMounted(async () => {
    jsonData.value = await fetchData()
  })

</script>
// https://www.youtube.com/watch?time_continue=128&v=-BYZAO99UVA


<template>
  <header class="h-12 bg-black flex justify-center items-center fixed w-full">
    <img src="/vite.svg" class="h-full p-2" alt="Vite logo" />
  </header>

  <div class="container mx-auto pt-16 px-4 sm:px-6 lg:px-8">
    data: {{jsonData}}

    <div>
    <h1>JSON Data from http://127.0.0.1:8000/</h1>
    <ul>
      <li v-for="(item, index) in jsonData" :key="index">{{ item }}</li>
    </ul>
  </div>
   
  
  <HelloWorld msg="Vite + Vue" />
  </div>

  <div class="fixed bottom-0 w-full bg-white border-t border-gray-200">
    <nav class="flex justify-between">
      <router-link to="/" class="w-1/4 py-3 text-center text-sm font-medium text-gray-500 hover:text-gray-900">
        <i class="fas fa-home"></i>
        <span class="block">Home</span>
      </router-link>
      <router-link to="/search" class="w-1/4 py-3 text-center text-sm font-medium text-gray-500 hover:text-gray-900">
        <i class="fas fa-search"></i>
        <span class="block">Search</span>
      </router-link>
      <router-link to="/map" class="w-1/4 py-3 text-center text-sm font-medium text-gray-500 hover:text-gray-900">
        <i class="fas fa-map"></i>
        <span class="block">Map</span>
      </router-link>
      <router-link to="/user" class="w-1/4 py-3 text-center text-sm font-medium text-gray-500 hover:text-gray-900">
        <i class="fas fa-user"></i>
        <span class="block">User</span>
      </router-link>
    </nav>
  </div>

</template>
