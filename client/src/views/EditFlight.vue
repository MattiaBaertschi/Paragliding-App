<template>
    <div class="flex flex-col p-4 bg-white rounded-xl space-y-2">
      <input-component label="Flugname" v-model="currentFlight.data.flight_name" />
      <input-component label="Startplatz" v-model="currentFlight.data.takeoff" />
      <input-component label="Landeplatz" v-model="currentFlight.data.landing" />
      <input-component label="Datum" v-model="currentFlight.data.date" type="date" />
      <input-component label="Flugzeit" v-model="currentFlight.data.duration" />
      <input-component label="Gleitschirm" v-model="currentFlight.data.glider" />
      <input-component label="Kommentar" v-model="currentFlight.data.comment" />
      <div>Der eingegebene Wert ist: {{ currentFlight.data.comment }}</div>
      <!-- <div>
        <label class="block text-sm font-medium text-gray-700">Bilder</label>
        <div v-for="(image, index) in flightData.images" :key="index">
          <img :src="image" alt="" class="w-20 h-20"/>
          <button @click="deleteImage(index)" class="p-1 text-red-600">Bild löschen</button>
        </div>
        <input type="file" @change="uploadImage" class="mt-2 mb-4"/>
      </div> -->
  
      <button @click="updateFlight()" class="px-4 py-2 my-8 text-white bg-black rounded">Daten aktualisieren</button>
    </div>
  </template>
  
<script setup>
import { onMounted, reactive, ref } from 'vue';
import { useRoute } from 'vue-router';
import InputComponent from "@/components/InputComponent.vue"
import { apiGet, apiPost } from '@/utils/api';
import { useSessionStore } from '@/store/user';
const token = useSessionStore().sessionToken;

onMounted(async () => {
  currentFlight.data = await apiGet('flight_edit', { flight_id: id }, token);
  loaded.value = true
})

async function updateFlight() {
  const flightData = {
    flight_name: currentFlight.data.flight_name,
    comment: currentFlight.data.comment,
    glider: currentFlight.data.glider,
    takeoff: currentFlight.data.takeoff,
    landing: currentFlight.data.landing,
    date: currentFlight.data.date
  };
  try {
    const response = await apiPost('edit_flight', flightData, token);
    console.log("Daten erfolgreich aktualisiert", response);
  } catch(error) {
    console.log(error);
  }
}

var loaded = ref(false)
const route = useRoute();  
const id = route.params.id;
var currentFlight = reactive({ data: []})

</script>
  
  