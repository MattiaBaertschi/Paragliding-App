<template>

  <div class="flex flex-col items-center relative">
    <img 
      :src="profileImage" 
      alt="Profilbild" 
      class="w-32 h-32 rounded-full mb-4 object-cover"
    >
    <button
    v-if="userdata.profile_picture != null" 
      class="absolute bottom-4 ml-32 bg-white text-white p-4 rounded-full" 
      @click="removeImage"
    >
      <img :src="remove" alt="remove" class="inline h-6 w-6" />
    </button>
    <button
    v-if="userdata.profile_picture == null" 
      class="absolute bottom-4 ml-32 bg-white text-white p-4 rounded-full" 
      @click="isUploadExpanded = true"
    >
      <img :src="add" alt="add" class="inline h-6 w-6" />
    </button>
  </div>
  <div class="text-center">
  <h2 class="text-xl mb-2 font-bold text-gray-800">{{ userdata.firstname }} {{ userdata.lastname }}</h2>
  <p>@{{ userdata.username }}</p>
  </div>

    <div 
      class="w-full text-center p-4 border-2 border-dashed bg-white rounded-xl my-4"
      v-if="isUploadExpanded"
      @dragover.prevent 
      @dragenter.prevent 
      @drop.prevent="onDrop"
    >
    <p class="my-2">Drope ein Bild oder wähle eines aus:</p>
      <input 
        type="file"
        class="p-4" 
        @change="selectImage" 
        ref="fileInput"
      />
      <PrimaryButton 
        :action="submitImage"  
        :disabled="isUpdating" 
        :loading="isUpdating" 
        color="weiss" 
        buttonText="Bild hochladen"
      />
    </div>

  <div class="flex flex-col p-4 bg-white rounded-xl space-y-2 mt-8">
      <input-component label="Benutzername" v-model="userdata.username" :disabled="true" />
      <input-component label="Benutzer ID" v-model="userdata.user_id" :disabled="true" />
      <input-component label="E-Mail" v-model="userdata.email"  :disabled="true"/>
      <input-component label="Vorname" v-model="userdata.firstname" :disabled="true"/>
      <input-component label="Nachname" v-model="userdata.lastname" :disabled="true"/>
      <input-component label="SHV Nummer" v-model="userdata.shv_nummer" :disabled="true"/>
      <PrimaryButton :action="updateUser" :disabled="true" :loading="isUpdating" color="weiss" buttonText="Daten aktualisieren"/>
    </div>


</template>
  
  <script setup>
  import { ref, onMounted } from "vue";
  import { useSessionStore } from '@/store/user';
  import { apiGet, apiPost } from '@/utils/api';
  import PrimaryButton from "@/components/PrimaryButton.vue";
  import profileSVG from '@/assets/user.svg';
  import remove from '@/assets/remove.svg';
  import add from '@/assets/add.svg';
  import InputComponent from "@/components/InputComponent.vue"

  const sessionStore = useSessionStore()
  const token = sessionStore.sessionToken
  const userId = sessionStore.userId
  const image = ref(null);
  const isLoading = ref(false)
  const isUpdating = ref(false);
  const isUploadExpanded = ref(false)
  const profileImage = ref(profileSVG)
  const imageURL = "https://hoemknoebi.internet-box.ch/images/profile_pictures"
  
  const userdata = ref({
    "username": "nix",
    "firstname": "Nobody",
    "lastname": "Noes",
    "profile_picture": "",
  });
  
  async function fetchData() {
    userdata.value = await apiGet('userprofile', null , token);
    if (userdata.value.profile_picture != null){
      profileImage.value = imageURL + "/" + userdata.value.profile_picture
    }
  }
  
  onMounted(async () => {
    fetchData()
    isLoading.value = true
  })
  
  const selectImage = (event) => {
    image.value = event.target.files[0];
  };

  const onDrop = (event) => {
    image.value = event.dataTransfer.files[0];
  };
  
  const submitImage = async () => {
    isUpdating.value = true
    const formData = new FormData();
    formData.append('file', image.value);
    try {
      await apiPost('upload_profile_picture', null, token, formData);
    } 
    catch (error) {
      console.error(error);
    }
    finally{
      fetchData()
      isUpdating.value = false;
      isUploadExpanded.value = false
      }
  };

  const removeImage = async () => {
    isUpdating.value = true
    await apiPost('delete_profile_picture', null, token, null);
    fetchData()
    profileImage.value = profileSVG
    isUpdating.value = false;
  }

  const updateUser = async () => {
    console.log("Diese Funktion ist derzeit noch nicht implementiert")
  }
  
  </script>
