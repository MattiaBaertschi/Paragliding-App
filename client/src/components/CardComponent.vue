<template>
  <div class="bg-white rounded-lg shadow-md overflow-hidden my-8 max-w-xl mx-auto">
    <div class="relative">
      <ImageCarousel :gnss_records="flight.gnss_records_simple" :images="flight.images"/>
    </div>
    <div class="p-4">
      <div class="text-sm text-gray-600 mb-1">{{ flight.date }} | 
        <RouterLink :to="`buddy/${ flight.user_id }`">
          @{{ flight.username }}
        </RouterLink>
      </div>
      <div class="text-lg font-semibold">{{flight.flight_name}}</div>
      <div class="text-gray-700">
        <div>{{ flight.takeoff }} → {{ flight.landing }}</div>
        <div>{{ flight.duration }} h</div>
        <div>{{ flight.comment }}</div>
      </div>
    </div>
    <div @click="handleFlightSelection(flight.flight_id, flight.user_id)" class="bg-light text-center p-2 mx-4 mb-4 tracking-wider rounded cursor-pointer hover:bg-black hover:text-white">
      Flug ansehen
      <!-- <RouterLink :to="`flights/view/${ flight.flight_id }`" class="w-full">
        <a class="w-full">Flug ansehen</a>
      </RouterLink> -->
    </div>
  </div>
</template>

<script setup>
import ImageCarousel from "@/components/ImageCarousel.vue";
import { routerKey } from "vue-router";
import { useSessionStore } from '@/store/user';
import { useRouter } from 'vue-router';

const sessionStore = useSessionStore()
const userId = sessionStore.userId
const router = useRouter();

const props = defineProps({
  flight: {
    type: Object,
  },
});

function handleFlightSelection (flight_id, flight_user_id){
  console.log(userId, "VERSUS", flight_user_id)
  if (userId == flight_user_id){
    router.push(`flights/view/${ flight_id }`)
  }
  else {
    router.push(`buddyflight/view/${ flight_id }`)
  }
}

</script>





