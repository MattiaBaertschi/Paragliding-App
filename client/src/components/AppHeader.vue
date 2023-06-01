<template>
    <header class="h-12 flex justify-between items-center w-full z-50 px-4 bg-light">
        <h1 class="text-2xl font-bold uppercase tracking-widest mt-2">Cloudy</h1>
        <router-link to="/search" class="bg-white rounded-xl shadow-md overflow-hidden px-2 py-2 my-4 mt-6 uppercase tracking-widest font-semibold text-xs" active-class="hidden">
            <img :src="searchIcon" alt="Suche" class="inline h-6 w-6" />
        </router-link>
    </header>
</template>
<script setup>
import searchIcon from "@/assets/search.svg";


</script>