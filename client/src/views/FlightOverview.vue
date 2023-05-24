<script setup>
import { onMounted, ref } from 'vue';
import FlightCard from "@/components/FlightCard.vue"
import LoadingComponent from "@/components/LoadingComponent.vue"
import { apiGet } from '@/utils/api';
import { useSessionStore } from '@/store/user';
const token = useSessionStore().sessionToken;

var loaded = ref(false)
const data = ref(null);

onMounted(async () => {
  data.value = await apiGet('users_flights', null , token);
  loaded.value = true
})

</script>

<template>
  <LoadingComponent v-if="loaded == false" />
  <div v-if="loaded == true">
    <RouterLink to="upload">
      <div class="bg-white rounded-lg shadow-md overflow-hidden my-4 hover:bg-black hover:text-white">
        <div class="p-2 text-center">
          <div class="text-lg font-semibold mt-1">+ Flug hochladen</div>
          <div class="text-gray-700 mb-2"></div>
        </div>
      </div>
    </RouterLink>
    <div v-for="(flight, index) in data" :key="index">
      <RouterLink :to="`flights/view/${ flight.flight_id }`">
        <FlightCard :flight="flight" />
      </RouterLink>
    </div>
  </div>
</template>
