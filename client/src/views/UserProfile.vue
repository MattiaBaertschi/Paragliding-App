<template>
  <div class="flex flex-col items-center">
    <img :src="profileImage" alt="Profilbild" class="w-32 h-32 rounded-full mb-4 object-cover">
    <h2 class="text-xl mb-2 font-bold text-gray-800">{{ userdata.firstname }} {{ userdata.lastname }}</h2>
    <p>@{{ userdata.username }}</p>
    <div class="flex mb-4 gap-x-2 mt-4">
      <router-link to="/user/edit" class="bg-white hover:bg-secondary rounded-full px-4 py-2">Bearbeiten</router-link>
    </div>
  </div>
  <div class="flex w-full my-4">
      <div class="w-1/3 flex flex-col text-center gap-y-1">
          <span class="text-4xl text-bold">{{ userdata.total_flights }}</span>
          <span class="text-sm font-semibold tracking-wider">Flüge</span>
      </div>
      <div class="w-1/3 flex flex-col text-center gap-y-1">
          <span class="text-4xl text-bold">{{ userdata.total_followers }}</span>
          <span class="text-sm font-semibold tracking-wider">Follower</span>
      </div>
      <div class="w-1/3 flex flex-col text-center gap-y-1">
          <span class="text-4xl text-bold">{{ userdata.total_followed }}</span>
          <span class="text-sm font-semibold tracking-wider">Followed</span>
      </div>
  </div>

  <div v-if="followRequests.length > 0" class="pt-4">
  <p class="ml-2 font-xl font-semibold tracking-wider mb-2">Follow Anfragen</p>
  <div v-for="request in followRequests">
    
    <div  class="bg-white w-full rounded-xl flex justify-between my-2">
    <div class="p-4">@{{ request.username }} <strong>{{ request.firstname }} {{ request.lastname }}</strong> </div>
    <div @click="handleFollowRequest(request.user_id)" class="py-2 px-3 m-2 bg-black text-white rounded-xl cursor-pointer">Annehmen</div>
    </div>
    
  </div>
</div>

  <div class="pt-4 flex gap-2">
  <RouterLink to="/flights" class="flex my-2 w-1/2">
      <div class="bg-white w-full p-4 rounded-xl">
          <div class="text-black uppercase font-bold text-sm tracking-wider">#{{ userdata.total_flights }}</div>
          <div class="text-2xl font-semibold">Flüge</div>
      </div>
  </RouterLink>
  <RouterLink to="/buddys" class="flex my-2 w-1/2">
      <div class="bg-white w-full p-4 rounded-xl">
          <div class="text-black uppercase font-bold text-sm tracking-wider">#{{ userdata.total_followed }}</div>
          <div class="text-2xl font-semibold">Airbudys</div>
      </div>
  </RouterLink>
  </div>
  <div class="mb-4 bg-white w-full p-4 rounded-xl">
  <UserStats/>
  </div>


  <div class="mt-4">
  <PrimaryButton
    color="weiss"
    buttonText="Daten exportieren"
  />
  <PrimaryButton
    color="weiss"
    buttonText="Account löschen"
  />
  <PrimaryButton
    :action="handleLogout"
    color="schwarz"
    buttonText="Logout"
  />
</div>

<div class="bg-white w-full p-4 rounded-xl">
    <p class="text-xs">&copy; Cloudy 2023 | Alle dargestellen Daten wurden nach bestem Wissen verarbeitet und dargestellt. Cloudy übernimmt jedoch keinerlei Haftung für die zur Verfügung gestellten Informationen und visuellen Medien.</p>
  </div>


</template>

<script setup>
import { ref, onMounted } from "vue";
import { useSessionStore } from '@/store/user';
import { useRouter } from 'vue-router';
import { apiGet, apiPost } from '@/utils/api';
import axios from 'axios';
import UserStats from "@/components/UserStats.vue";
import PrimaryButton from "@/components/PrimaryButton.vue";
import profileSVG from '@/assets/user.svg';
const sessionStore = useSessionStore()
const token = sessionStore.sessionToken
const userId = sessionStore.userId
const router = useRouter();
const loaded = ref(false)
const image = ref(null);
const isUpdating = ref(false);
const profileImage = ref(profileSVG)
const imageURL = "https://hoemknoebi.internet-box.ch/images/profile_pictures"

const userdata = ref({
  "user_id": 1,
  "username": "nix",
  "e_mail": "nix@keinemail.no",
  "firstname": "Nobody",
  "lastname": "Noes",
  "profile_picture": "",
  });

const followRequests = ref([])


async function fetchData() {
  userdata.value = await apiGet('userprofile', null , token);
  if (userdata.value.profile_picture != null){
    profileImage.value = imageURL + "/" + userdata.value.profile_picture
  }
  
  followRequests.value = await apiGet("display_requests", null, token)
  console.log("Des ises",followRequests.value)
}

async function handleFollowRequest(UserId){
  const response = await apiPost("accept_follow_request", {follower_id : UserId}, token)
  fetchData()
  console.log(response)
}

function handleLogout() {
  sessionStore.logout(); 
  router.push('/login');
}

onMounted(async () => {
  fetchData()
  loaded.value = true
})

const selectImage = (event) => {
  image.value = event.target.files[0];
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
    }
};

</script>