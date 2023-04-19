<template>
  <div class="bg-white rounded-lg shadow-md overflow-hidden my-4">
    <div class="p-4">
      <div class="text-sm text-gray-600">{{ flight.datum }}</div>
      <div class="text-lg font-semibold mt-1">{{ flight.flight_name }}</div>
      <div class="text-gray-700 mb-2">
        <div>{{ flight.startplatz }} | {{ flight.landeplatz }}</div>
        <div>Flugdauer: {{ flight.flighttime }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>

defineProps({
  flight: {
    type: Object,
    required: true
  }
})


</script>