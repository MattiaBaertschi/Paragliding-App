<template>
  <div>
    <input type="text" v-model="searchQuery" class="w-full border-2 rounded-full p-2 mb-4" placeholder="Suche nach Flugname, Datum, Landeplatz oder Startplatz" />

    <ul>
      <li v-for="flight in filteredFlights" :key="flight.id">
        <RouterLink :to="`flights/view/${ flight.id }`">
         <FlightCard :flight="flight" />
        </RouterLink>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import FlightCard from "@/components/FlightCard.vue"

const flights = {
  "flug_1": {
    "id": 1,
    "flight_name": "MetschStand-Rotenbach",
    "datum": "04. Juni 2022",
    "startplatz": "Biel Kinizie",
    "landeplatz": "Ligerz",
    "flighttime" : "01:24"
  },
  "flug_2": {
    "id": 2,
    "flight_name": "MetschStand-Rotenbach",
    "datum": "04. Juni 2022",
    "startplatz": "Metsch",
    "landeplatz": "Rothenbach",
    "flighttime" : "00:10"
  }
};

const searchQuery = ref('');
const flightList = Object.values(flights);

const filteredFlights = computed(() => {
  return flightList.filter(flight =>
    flight.flight_name.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
    flight.datum.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
    flight.startplatz.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
    flight.landeplatz.toLowerCase().includes(searchQuery.value.toLowerCase())
  );
});
</script>
