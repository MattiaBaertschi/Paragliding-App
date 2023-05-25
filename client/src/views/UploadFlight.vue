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
    <div class="bg-white rounded-lg shadow-md overflow-hidden my-4 text-lg font-semibold mt-1 p-2 text-center">
      <button @click="addFile">Select IGC File</button>
    </div>
    <br>
    <div class="bg-primary rounded-lg shadow-md overflow-hidden my-4 text-lg font-semibold mt-1 p-2 text-center text-white">
      <button @click="submitFile">Upload</button>
    </div>
    <div v-if="errorActive" class="text-red-800">Störung</div>
  </div>
</template>

<script>
import { ref } from 'vue';
import axios from 'axios';
import { useSessionStore } from "@/store/user";
import { routerKey } from 'vue-router';
import { useRouter } from 'vue-router';


export default {
  setup() {
    const fileRef = ref(null);
    const file = ref(null);
    const sessionStore = useSessionStore()
    const token = sessionStore.sessionToken
    const router = useRouter();
    console.log("token",token)
    const errorActive = ref(false)

    const addFile = () => {
      const fileInput = fileRef.value;
      fileInput.multiple = false;
      fileInput.click();
    };

    const handleFileUpload = () => {
      file.value = fileRef.value.files[0];
      console.log(file.value);
    };

    const removeFile = () => {
      file.value = null;
    };

    const submitFile = async () => {
      if (!file.value) {
        return;
      }

      let formData = new FormData();
      formData.append('file', file.value);

      try {
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
    };

    return { fileRef, file, addFile, handleFileUpload, removeFile, submitFile, errorActive };
  }
}
</script>
