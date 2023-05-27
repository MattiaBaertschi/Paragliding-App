<template>
<div>
    <div class="flex flex-col items-center">
    <img src="https://www.shutterstock.com/image-vector/cheerful-gray-cat-enjoys-paragliding-260nw-1981432805.jpg" alt="Profilbild" class="w-32 h-32 rounded-full mb-4">

    <h2 class="text-xl mb-2 font-bold text-gray-800">{{ userdata.firstname }} {{ userdata.lastname }}</h2>
    <p>@{{ userdata.username }}</p>
    <p>#{{ userId }}</p>
  

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
            <span class="text-4xl text-bold">{{ userdata.total_followers }}</span>
            <span class="text-sm font-semibold tracking-wider">Follower</span>
        </div>
        <div class="w-1/3 flex flex-col text-center gap-y-1">
            <span class="text-4xl text-bold">{{ userdata.total_followed }}</span>
            <span class="text-sm font-semibold tracking-wider">Followed</span>
        </div>
    </div>

    <div v-if="followRequests.length > 0">
    <p class="ml-2 font-xl font-semibold tracking-wider mb-2">Follow Anfragen</p>
    <div v-for="request in followRequests">
      
      <div  class="bg-white w-full rounded-xl flex justify-between">
      <div class="p-4">@{{ request.username }} <strong>{{ request.firstname }} {{ request.lastname }}</strong> </div>
      <div @click="handleFollowRequest(request.user_id)" class="p-4 bg-black text-white rounded-xl cursor-pointer">Annehmen</div>
      </div>
      
    </div>
  </div>

    <div class="pt-4 flex gap-2">
    <RouterLink to="/flights" class="flex my-2 w-1/2">
        <div class="bg-white w-full p-4 rounded-xl">
            <div class="text-black uppercase font-bold text-sm tracking-wider">#{{ userdata.total_flights }}</div>
            <div class="text-2xl font-semibold">Flüge</div>
        </div>
    </RouterLink>
    <RouterLink to="/buddys" class="flex my-2 w-1/2">
        <div class="bg-white w-full p-4 rounded-xl">
            <div class="text-black uppercase font-bold text-sm tracking-wider">#{{ userdata.total_followed }}</div>
            <div class="text-2xl font-semibold">Airbudys</div>
        </div>
    </RouterLink>
    </div>

    <UserStats/>

    <div class="mt-12">
    

    <!-- Beispiel für einen Button mit einer Klick-Aktion -->
    <PrimaryButton
      :action="handleLogout"
      color="weiss"
      buttonText="Logout"
    />

    <!-- Beispiel für einen deaktivierten Button mit Ladeanimation -->
    <!-- <PrimaryButton
      :disabled="false"
      :loading="true"
      color="weiss"
      buttonText="Drück mich fest"
    /> -->

    <!-- Beispiel für einen RouterLink Button -->
    <!-- <PrimaryButton
      :isRouterLink="true"
      link="/flights/view/123"
      color="weiss"
      buttonText="Logout"
    /> -->

  </div>

    
    <div class="my-64">
      <p class="mb-4">Cloudy übernimmt keine Gewähr für die Korrektheit der dargestelltetn Daten.</p>
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
import PrimaryButton from "@/components/PrimaryButton.vue";
const sessionStore = useSessionStore()
const token = sessionStore.sessionToken
const userId = sessionStore.userId
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

const followRequests = ref([])


async function fetchData() {
  userdata.value = await apiGet('userprofile', null , token);
  followRequests.value = await apiGet("display_requests", null, token)
  console.log("Des ises",followRequests.value)
}

async function handleFollowRequest(UserId){
  const response = await apiPost("accept_follow_request", {follower_id : UserId}, token)
  console.log(response)
}

function handleLogout() {
  sessionStore.logout(); 
  router.push('/login');
}

onMounted(async () => {
  fetchData()
  loaded.value = true
})

</script>