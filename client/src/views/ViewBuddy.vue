<template>
<div>
    <div class="flex flex-col items-center">
    <img src="https://www.shutterstock.com/image-vector/cheerful-gray-cat-enjoys-paragliding-260nw-1981432805.jpg" alt="Profilbild" class="w-32 h-32 rounded-full mb-4">

    <h2 class="text-xl mb-2 font-bold text-gray-800">{{ userdata.firstname }} {{ userdata.lastname }}</h2>
    <p>@{{ userdata.username }}</p>

    <div class="flex mb-4 gap-x-2 mt-4">
      <div @click="sendFollowRequest" class="bg-white hover:bg-secondary rounded-full px-4 py-2">Folgen</div>
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

    <div v-for="(flight, index) in data" :key="index">
      <RouterLink :to="`../flights/view/${ flight.flight_id }`">
        <FlightCard :flight="flight" />
      </RouterLink>
    </div>

  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useSessionStore } from '@/store/user';
import { useRouter } from 'vue-router';
import { apiGet, apiPost } from '@/utils/api';
import FlightCard from "@/components/FlightCard.vue"
const token = useSessionStore().sessionToken;
  
const router = useRouter();
const loaded = ref(false)
const isUpdating = ref(false);
const data = ref(null);

const userdata = ref({
  "user_id": 1,
  "username": "yourbuddy",
  "e_mail": "budy@keinemail.no",
  "firstname": "Nobody",
  "lastname": "Noes",
  "password": "cumulus1234",
  "shv_nr": 12345,
  "verifyed": true,
  "disabled": false});

async function fetchData() {
  loaded.value = false
  try {
    //userdata.value = await apiGet('buddyprofile', null , token);
    data.value = await apiGet('users_flights', null , token);
  }
  catch {
    null
  }
  finally {
    loaded.value = true
  }
}

async function sendFollowRequest() {
  isUpdating.value = true;
  const userData = {
    followed_id: userdata.user_id,
  };
  try {
    const response = await apiPost('follow_request', userData, token);
    console.log("Follow Request erfolgreich", response);
  }
  catch(error) {
    console.log(error);
  }
  finally{
    fetchData()
    isUpdating.value = false;
  }
}


onMounted(async () => {
  fetchData()
  loaded.value = true
})

</script>