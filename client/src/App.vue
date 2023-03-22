<script setup>
import AppHeader from "@/components/AppHeader.vue"
import NavBar from "@/components/NavBar.vue"
</script>
<template>
  <AppHeader/>
  <NavBar/>
  <div class="container mx-auto pt-16 pb-16 px-4 sm:px-6 lg:px-8">
    <RouterView/>
  </div>
  

  

</template>
