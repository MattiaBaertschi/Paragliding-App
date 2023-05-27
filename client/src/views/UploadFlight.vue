<template>
  <div class="">
    <div class="hidden">
      <label>File
        <input type="file" ref="fileRef" @change="handleFileUpload"/>
      </label>
    </div>
    <div class="">
      <div v-if="file" class="w-full flex justify-between bg-gray-100 rounded-lg shadow-md overflow-hidden my-4 text-lg font-semibold mt-1 text-center">
        <div class="p-4">
          {{ file.name }} 
        </div>
        <div class="bg-light p-4" @click="removeFile">
          Remove
        </div>
      </div>
    </div>
    <br>
    <div @click="addFile" class="bg-white rounded-lg shadow-md overflow-hidden my-4 text-lg font-semibold mt-1 p-2 text-center cursor-pointer">
      <p >Select IGC File</p>
    </div>
    <br>
    <div @click="submitFile" :disabled="isUpdating" v-if="fileLoaded" :class="{ 'opacity-25 cursor-not-allowed': isUpdating }" class="bg-primary rounded-lg shadow-md overflow-hidden my-4 text-lg font-semibold mt-1 p-2 text-center text-white cursor-pointer">
      <p >Upload</p>
    </div>
    <div v-if="errorActive" class="text-red-800">Störung</div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';
import { useSessionStore } from "@/store/user";
import { useRouter } from 'vue-router';

const fileLoaded = ref(false)
const fileRef = ref(null);
const file = ref(null);
const sessionStore = useSessionStore()
const token = sessionStore.sessionToken
const router = useRouter();
const errorActive = ref(false)
const isUpdating = ref(false);

const addFile = () => {
  const fileInput = fileRef.value;
  fileInput.multiple = false;
  fileInput.click();
  if (fileInput == null){
    console.log("File geladen")
    fileLoaded.value = true
  }
  else {
    fileLoaded.value = true
  }

};

const handleFileUpload = () => {
  file.value = fileRef.value.files[0];
  console.log(file.value);
};

const removeFile = () => {
  file.value = null;
  fileLoaded.value = false
};

const submitFile = async () => {
  if (!file.value) {
    return;
  }

  let formData = new FormData();
  formData.append('file', file.value);

  try {
      isUpdating.value = true;
      let response = await axios.post( 'https://hoemknoebi.internet-box.ch/api/upload_igc', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        'Authorization': `Bearer ${token}`
      }
    });
    errorActive.value = false    
    console.log('SUCCESS!!', response.data);
    router.push(`/flights/edit/${response.data}`)
    
    } 
  catch (error) {
      console.log('FAILURE!!', error);
      errorActive.value = true
      console.log("errorvalue", errorActive.value)
    }
  finally {
    isUpdating.value = false
  }
};

</script>

