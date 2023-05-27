<template>
  <div class="bg-white rounded-lg shadow-md overflow-hidden my-8 max-w-xl mx-auto">
    <div class="relative">
      <ImageCarousel :gnss_records="flight.gnss_records" :images="flight.images"/>
    </div>
    <div class="p-4">
      <div class="text-sm text-gray-600 mb-1">{{ flight.date }} | 
        <RouterLink :to="`buddy/${ flight.pilot }`">
          @{{ flight.pilot }}userhandle
        </RouterLink>
      </div>
      <div class="text-lg font-semibold">{{flight.flight_name}}</div>
      <div class="text-gray-700">
        <div>{{ flight.takeoff }} → {{ flight.landing }}</div>
        <div>{{ flight.duration }} h</div>
        <div>{{ flight.comment }}</div>
      </div>
    </div>
    <div class=" bg-light text-center p-2 mx-4 mb-4 tracking-wider rounded hover:bg-black hover:text-white">
      <RouterLink :to="`flights/view/${ flight.flight_id }`" class="w-full">
        <a class="w-full">Flug ansehen</a>
      </RouterLink>
    </div>
  </div>
</template>

<script setup>
import ImageCarousel from "@/components/ImageCarousel.vue";

const props = defineProps({
  flight: {
    type: Object,
  },
});

</script>





