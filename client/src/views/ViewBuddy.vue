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
            <span class="text-4xl text-bold">{{ userdata.total_followers }}</span>
            <span class="text-sm font-semibold tracking-wider">Follower</span>
        </div>
        <div class="w-1/3 flex flex-col text-center gap-y-1">
            <span class="text-4xl text-bold">{{ userdata.total_followed }}</span>
            <span class="text-sm font-semibold tracking-wider">Followed</span>
        </div>
    </div>

    <div v-for="(flight, index) in data" :key="index">
      <RouterLink :to="`../buddyflight/view/${ flight.flight_id }`">
        <FlightCard :flight="flight" />
      </RouterLink>
    </div>

  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useSessionStore } from '@/store/user';
import { useRouter } from 'vue-router';
import { useRoute } from 'vue-router';
import { apiGet, apiPost } from '@/utils/api';
import FlightCard from "@/components/FlightCard.vue"
const token = useSessionStore().sessionToken;

const route = useRoute(); 
const router = useRouter();
const loaded = ref(false)
const isUpdating = ref(false);
const data = ref(null);
const userId = route.params.id;

const userdata = ref({
  "user_id": 1,
  "username": "yourbuddy",
  "e_mail": "budy@keinemail.no",
  "firstname": "Nobody",
  "lastname": "Noes",
  "profile_picture": null,
  "total_flights": 1,
  "total_followers": 1,
  "total_followed": 1
});

async function fetchData() {
  loaded.value = false
  const requestID = {
    user_id: userId,
  };
  const requestIDforFlight = {
    followed_id: userId,
  }
  try {
    userdata.value = await apiGet('userprofile_other_user', requestID , token);
    data.value = await apiGet('display_flights_of_followed', requestIDforFlight , token);
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
  const requestIDforFollow = {
    followed_id: userId,
  };
  try {
    const response = await apiPost('follow_request', requestIDforFollow, token);
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