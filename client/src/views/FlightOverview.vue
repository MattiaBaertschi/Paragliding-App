<script setup>
import axios from 'axios';
import { onMounted, ref } from 'vue';
import FlightCard from "@/components/FlightCard.vue"
import { useSessionStore } from "@/store/user";

const url = 'https://hoemknoebi.internet-box.ch/api/users_flights';

const sessionStore = useSessionStore();
const token = sessionStore.sessionToken;
console.log("token", token);
const header = {
  headers: {
    'Authorization': `Bearer ${token}`
  }
};

const data = ref(null);

const fetchData = async () => {
  try {
    const response = await axios.get(url,header);
    data.value = response.data;
    console.log(data.value)
  } catch (error) {
    console.error(error);
  }
};

onMounted(fetchData);
</script>

<template>
  <div>
    <RouterLink to="upload">
      <div class="bg-white rounded-lg shadow-md overflow-hidden my-4 hover:bg-black hover:text-white">
        <div class="p-2 text-center">
          <div class="text-lg font-semibold mt-1">+ Flug hochladen</div>
          <div class="text-gray-700 mb-2"></div>
        </div>
      </div>
    </RouterLink>
    <p>sälüj</p>
    <div v-for="(flight, index) in data" :key="index">
      <RouterLink :to="`flights/view/${ flight.flight_id }`">
        <p>Data: {{ flight }}</p>
        <FlightCard :flight="flight" />
      </RouterLink>
    </div>
  </div>
</template>
