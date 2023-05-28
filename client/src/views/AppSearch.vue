<template>
  <div>
    <div class="mb-4 bg-white p-4 text-lg rounded-xl">Suche nach <select v-model="searchType">
        <option value="all">Flügen & Buddys</option>
        <option value="flights">Flügen</option>
        <option value="users">Buddys</option>
      </select>
      <span  v-if="searchType === 'all' || searchType === 'flights'">
        <br>von
      <select v-model="searchUser">
        <option value="all">allen</option>
        <option value="me">mir</option>
        <option value="buddys">buddys</option>
      </select><br>
      von
      <input type="date" v-model="searchDate_start" /><br>
      bis
      <input type="date" v-model="searchDate_end" />
    </span>
    </div>

    <input type="text" v-model="searchQuery" class="w-full border-2 rounded-full p-2 mb-4" placeholder="Suchbegriff" />
    
    <div v-if="searchType === 'all' || searchType === 'flights'">
      <h3 class="text-base font-bold uppercase tracking-widest mt-8 text-black">Flüge:</h3>
      <ul>
        <li v-for="flight in filteredFlights" :key="flight.flight_id">
          <div @click="handleFlightSelection(flight.flight_id, flight.user_id)" class="cursor-pointer">
          <FlightCard :flight="flight" />
        </div>
        </li>
      </ul>
    </div>

    <div v-if="searchType === 'all' || searchType === 'users'">
      <h3 class="text-base font-bold uppercase tracking-widest mt-8 text-black">Buddys:</h3>
      <ul>
        <li v-for="user in filteredUsers" :key="user.user_id">
          <RouterLink :to="`buddy/${ user.user_id }`">
            <UserCard :user="user" />
        </RouterLink>
        </li>
      </ul>
    </div>

  </div>
</template>

<script setup>
import { ref, reactive, computed, onMounted } from 'vue';
import FlightCard from "@/components/FlightCard.vue"
import UserCard from "@/components/UserCard.vue"
import { apiGet } from '@/utils/api';
import { useSessionStore } from '@/store/user';
import { useRouter } from 'vue-router';
const sessionStore = useSessionStore()
const userId = sessionStore.userId
const router = useRouter();
const token = sessionStore.sessionToken;

const loading = ref(true);
var flights = reactive({});

var users = reactive({});

onMounted(async () => {
  const newFlights = await apiGet('display_all_flights', null , token);
  Object.assign(flights, newFlights);
  const newUsers = await apiGet('display_all_users', null , token);
  Object.assign(users, newUsers);
  loading.value = false;
})

const searchQuery = ref('');
const flightList = computed(() => Object.values(flights));
const userList = computed(() => Object.values(users));
const searchType = ref('all');
const searchUser = ref('all');
const searchDate_start = ref("2017-06-01");
const searchDate_end = ref("2024-06-01");

function matchesSearchQuery(objProperty) {
  return (objProperty?.toLowerCase() || '').includes(searchQuery.value.toLowerCase())
}

const filteredFlights = computed(() => {
  if (loading.value) return [];
  return flightList.value.filter(flight =>
    matchesSearchQuery(flight.flight_name) ||
    matchesSearchQuery(flight.takeoff) ||
    matchesSearchQuery(flight.landing) ||
    matchesSearchQuery(flight.username)
  );
});

const filteredUsers = computed(() => {
  if (loading.value) return [];
  return userList.value.filter(user =>
    matchesSearchQuery(user.user_name) ||
    matchesSearchQuery(user.firstname) ||
    matchesSearchQuery(user.lastname)
  );
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
