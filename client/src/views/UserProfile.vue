<template>
<div>
    <div class="flex flex-col items-center">
    <img src="https://www.shutterstock.com/image-vector/cheerful-gray-cat-enjoys-paragliding-260nw-1981432805.jpg" alt="Profilbild" class="w-32 h-32 rounded-full mb-4">

    <h2 class="text-xl mb-2 font-bold text-gray-800">{{ userdata.firstname }} {{ userdata.lastname }}</h2>
    <p>@{{ userdata.username }}</p>

    <div class="flex mb-4 gap-x-2 mt-4">
      <router-link to="/profil/bearbeiten" class="bg-white hover:bg-secondary rounded-full px-4 py-2">Bearbeiten</router-link>
    </div>
  </div>

    <div class="flex w-full my-8">
        <div class="w-1/3 flex flex-col text-center gap-y-1">
            <span class="text-4xl text-bold">{{ userdata.total_flights }}</span>
            <span class="text-sm font-semibold tracking-wider">Flüge</span>
        </div>
        <div class="w-1/3 flex flex-col text-center gap-y-1">
            <span class="text-4xl text-bold">45:12</span>
            <span class="text-sm font-semibold tracking-wider">Flugzeit</span>
        </div>
        <div class="w-1/3 flex flex-col text-center gap-y-1">
            <span class="text-4xl text-bold">12</span>
            <span class="text-sm font-semibold tracking-wider">Airbuddys</span>
        </div>
    </div>

    <div class="pt-4 flex gap-2">
    <RouterLink to="/flights" class="flex my-2 w-1/2">
        <div class="bg-white w-full p-4 rounded-xl">
            <div class="text-black uppercase font-bold text-sm tracking-wider">#{{ userdata.total_flights }}</div>
            <div class="text-2xl font-semibold">Flüge</div>
        </div>
    </RouterLink>
    <RouterLink to="/flights" class="flex my-2 w-1/2">
        <div class="bg-white w-full p-4 rounded-xl">
            <div class="text-black uppercase font-bold text-sm tracking-wider">#15</div>
            <div class="text-2xl font-semibold">Airbudys</div>
        </div>
    </RouterLink>
    </div>

    <UserStats/>
    
    <div class="my-64">
      <p class="mb-4">Cloudy übernimmt keine Gewähr für die Korrektheit der dargestelltetn Daten.</p>
      <button class="text-xs tracking-wider ml-2 px-4 py-2 my-1 bg-white rounded-full">Alle Daten exportieren</button>
      <button class="text-xs tracking-wider ml-2 px-4 py-2 my-1 bg-white rounded-full">Alle Daten Löschen</button>
      <button @click="sessionStore.logout(); router.push('/login');" class="text-xs tracking-wider ml-2 px-4 py-2 my-1 bg-white rounded-full">Log out</button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useSessionStore } from '@/store/user';
import { useRouter } from 'vue-router';
import { apiGet, apiPost } from '@/utils/api';
import axios from 'axios';
import UserStats from "@/components/UserStats.vue";
const sessionStore = useSessionStore()
const token = sessionStore.sessionToken
const router = useRouter();
const loaded = ref(false)

const userdata = ref({
  "user_id": 1,
  "username": "nix",
  "e_mail": "nix@keinemail.no",
  "firstname": "Nobody",
  "lastname": "Noes",
  "password": "cumulus1234",
  "shv_nr": 12345,
  "verifyed": true,
  "disabled": false});

async function fetchData() {
  userdata.value = await apiGet('userprofile', null , token);
}

onMounted(async () => {
  fetchData()
  loaded.value = true
})

</script>