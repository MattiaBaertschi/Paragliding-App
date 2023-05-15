<template>
    <router-link :to="path" class="w-full flex justify-center items-center bg-white hover:bg-medium tracking-wider py-2 px-4 rounded-xl my-2">
        <img v-if="icon" :src="icon" class="h-6 w-6 mr-2" alt="Icon" />
        {{ text }}
    </router-link>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import { useRouter } from 'vue-router'
  
  const props = defineProps({
    text: String,
    path: String,
    icon: String,
  })
  
  const router = useRouter()
  </script>
  