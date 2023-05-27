<template>

    <div v-if="loaded == true" class="flex flex-col p-4 bg-white rounded-xl space-y-2">
    <MapComponent :flightPath="currentFlight.data.gnss_records_simple" :mapControls="true" class="w-full h-16"/>
    </div>
    <div class="flex flex-col p-4 bg-white rounded-xl space-y-2">
      <input-component label="Flugname" v-model="currentFlight.data.flight_name" />
      <input-component label="Startplatz" v-model="currentFlight.data.takeoff" />
      <input-component label="Landeplatz" v-model="currentFlight.data.landing" />
      <input-component label="Datum" v-model="currentFlight.data.date" type="date" />
      <input-component label="Flugzeit" v-model="currentFlight.data.duration" />
      <input-component label="Gleitschirm" v-model="currentFlight.data.glider" />
      <input-component label="Kommentar" v-model="currentFlight.data.comment" />

    
      <PrimaryButton :action="updateFlight" :disabled="isUpdating" :loading="isUpdating" color="weiss" buttonText="Daten aktualisieren"/>
    </div>
    <div class="flex flex-col p-4 bg-white rounded-xl space-y-2 mt-4 w-full">
      <div>
          <label class="font-semibold tracking-wider mb-4 mt-4">Bilder</label>
          <div class="flex gap-2 my-4">
          <div v-for="(image, index) in currentFlight.data.images" :key="index" class="">
            <img :src="`${imageURL}/${image}`" 
                :class="{ 'border-4 border-red-600': isSelected(image) }" 
                alt="Flugbild" 
                class="w-24 h-20" 
                @click="selectImage(image)"/>
          </div>
        </div>
        <PrimaryButton :action="deleteImages" :disabled="isUpdating" :loading="isUpdating" color="weiss" buttonText="Auswahl löschen"/>
          <button @click="deleteImages" :disabled="isUpdating" :class="{ 'opacity-25 cursor-not-allowed': isUpdating }" class="px-4 py-2 mt-2text-black bg-light rounded w-full">Bilder löschen</button>
        </div>
        <div class="pt-8">
          <input type="file" multiple @change="uploadImages" ref="fileInput"/>
        <button @click="submitImages" :disabled="isUpdating" :class="{ 'opacity-25 cursor-not-allowed': isUpdating }" class="px-4 py-2 mt-4 text-white bg-black rounded w-full">Bilder hochladen</button>
        <PrimaryButton :action="submitImages" :disabled="isUpdating" :loading="isUpdating" color="weiss" buttonText="Bilder hochladen"/>
      </div>
    </div>
    <PrimaryButton :isRouterLink="true" :link="`/flights/view/${ id }`" color="schwarz" buttonText="Flug ansehen"/>
  </template>
  
<script setup>
import { onMounted, reactive, ref, toRaw } from 'vue';
import { useRoute } from 'vue-router';
import InputComponent from "@/components/InputComponent.vue"
import { apiGet, apiPost } from '@/utils/api';
import { useSessionStore } from '@/store/user';
import ButtonComponent from "@/components/ButtonComponent.vue";
import PrimaryButton from "@/components/PrimaryButton.vue";
import MapComponent from "@/components/MapComponent.vue";

const token = useSessionStore().sessionToken;
const imageURL = "https://hoemknoebi.internet-box.ch/images/flight_images"
const images = ref(null);


let isUpdating = ref(false);


onMounted(async () => {
  fetchData()
  loaded.value = true
})

async function fetchData() {
  currentFlight.data = await apiGet('get_flight_edit', { flight_id: id }, token);
}

async function updateFlight() {
  isUpdating.value = true;
  const flightData = {
    flight_id: id,
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
  } 
  catch(error) {
    console.log(error);
  }
  finally{
    fetchData()
    isUpdating.value = false;
  }
}

var loaded = ref(false)
const route = useRoute();  
const id = route.params.id;
var currentFlight = reactive({ data: []})
const flightData = {flight_id: id};

const selectedImages = ref([]);
const selectImage = (image) => {
  const index = selectedImages.value.indexOf(image);
  if(index === -1){
    selectedImages.value.push(image);
  }
  else{
    selectedImages.value.splice(index, 1);
  }
};

async function deleteImages () {
  if(selectedImages.value.length > 0){
    isUpdating.value = true;
    console.log("bilder zum löschen", selectedImages.value)
    const postData = toRaw(selectedImages.value)
    console.log("bilder zum löschen:", postData)
    try {
      const response = await apiPost("delete_flight_image", flightData , token, postData)
      console.log(response)
    }
    catch(error){
      console.log(error)
    }
    finally{
      fetchData()
      isUpdating.value = false;
    }
  }
};

const isSelected = (image) => {
  return selectedImages.value.includes(image);
};

const uploadImages = (event) => {
  images.value = event.target.files;
};

const submitImages = async () => {
  isUpdating.value = true
  const formData = new FormData();
  
  for (let i = 0; i < images.value.length; i++) {
    formData.append('files', images.value[i]);
  }

  try {
    await apiPost('upload_flight_image', flightData, token, formData);
  } 
  catch (error) {
    console.error(error);
  }
  finally{
    fetchData()
    isUpdating.value = false;
    }
};


</script>
  
  