<template>
  <div>
    <div class="text-2xl mb-4">Suche nach <select v-model="searchType">
        <option value="all">Flügen & Buddys</option>
        <option value="flights">Flügen</option>
        <option value="users">Buddys</option>
      </select>
      <span  v-if="searchType === 'all' || searchType === 'flights'">
      von
      <select v-model="searchUser">
        <option value="all">allen</option>
        <option value="me">mir</option>
        <option value="buddys">buddys</option>
      </select>
      im Zeitraum von
      <input type="date" v-model="searchDate_start" />
      bis
      <input type="date" v-model="searchDate_end" />
    </span>
    </div>

    <input type="text" v-model="searchQuery" class="w-full border-2 rounded-full p-2 mb-4" placeholder="Suchbegriff" />
    
    <div v-if="searchType === 'all' || searchType === 'flights'">
      <h3 class="text-base font-bold uppercase tracking-widest mt-8">Flüge:</h3>
      <ul>
        <li v-for="flight in filteredFlights" :key="flight.id">
          <RouterLink :to="`flights/view/${ flight.id }`">
          <FlightCard :flight="flight" />
          </RouterLink>
        </li>
      </ul>
    </div>

    <div v-if="searchType === 'all' || searchType === 'users'">
      <h3 class="text-base font-bold uppercase tracking-widest mt-8">Buddys:</h3>
      <ul>
        <li v-for="user in filteredUsers" :key="user.id">
          <UserCard :user="user" />
        </li>
      </ul>
    </div>

  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import FlightCard from "@/components/FlightCard.vue"
import UserCard from "@/components/UserCard.vue"

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
  },
};

const users = {
  "benutzer_1": {
    "id": 1,
    "user_name": "flying Bear",
  },
  "benutzer_2": {
    "id": 2,
    "user_name": "Papagei",
  }
}



const searchQuery = ref('');
const flightList = Object.values(flights);
const userList = Object.values(users);
const searchType = ref('all');
const searchUser = ref('all');
const searchDate_start = ref("2017-06-01");
const searchDate_end = ref("2024-06-01");

const filteredFlights = computed(() => {
  return flightList.filter(flight =>
    flight.flight_name.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
    flight.datum.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
    flight.startplatz.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
    flight.landeplatz.toLowerCase().includes(searchQuery.value.toLowerCase())
  );
});

const filteredUsers = computed(() => {
  return userList.filter(user =>
    user.user_name.toLowerCase().includes(searchQuery.value.toLowerCase())
  );
});

</script>
