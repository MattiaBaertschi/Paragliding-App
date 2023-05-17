<template>
    <div class="flex flex-col p-4 bg-white rounded-xl space-y-2">
      <input-component label="Flugname" v-model="flightData.name" />
      <input-component label="Startplatz" v-model="flightData.startLocation" />
      <input-component label="Landeplatz" v-model="flightData.endLocation" />
      <input-component label="Datum" v-model="flightData.date" type="date" />
      <input-component label="Flugzeit" v-model="flightData.flightTime" />
  
      <div>
        <label class="block text-sm font-medium text-gray-700">Bilder</label>
        <div v-for="(image, index) in flightData.images" :key="index">
          <img :src="image" alt="" class="w-20 h-20"/>
          <button @click="deleteImage(index)" class="p-1 text-red-600">Bild löschen</button>
        </div>
        <input type="file" @change="uploadImage" class="mt-2 mb-4"/>
      </div>
  
      <button @click="updateFlight" class="px-4 py-2 text-white bg-black rounded">Daten aktualisieren</button>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  import axios from 'axios'
  import InputComponent from '@/components/InputComponent.vue'
  
  const flightData = ref({})
  
  onMounted(async () => {
    const response = await axios.get('/api/flight')
    flightData.value = response.data
  })
  
  const updateFlight = async () => {
    await axios.put('/api/flight', flightData.value)
  }
  
  const deleteImage = (index) => {
    flightData.value.images.splice(index, 1)
  }
  
  const uploadImage = async (event) => {
    const file = event.target.files[0]
    const formData = new FormData()
    formData.append('file', file)
  
    const response = await axios.post('/api/flight/upload', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
  
    if (response.data.success) {
      flightData.value.images.push(response.data.imageUrl)
    }
  }
  </script>
  
  <style scoped>
  /* Hier können Sie zusätzliche Tailwind CSS-Stile hinzufügen */
  </style>
  