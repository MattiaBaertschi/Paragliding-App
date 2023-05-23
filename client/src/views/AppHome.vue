<script setup>
import axios from 'axios';
import { onMounted, reactive } from 'vue';
import CardComponent from "@/components/CardComponent.vue"
import { apiGet, apiPost } from '@/utils/api';
import { useSessionStore } from '@/store/user';
const token = useSessionStore().sessionToken;

const feedData = reactive({ data: [] })

onMounted(async () => {
  feedData.data = await apiGet('feed', null, token);
})

// const fetchData = async () => {
//     try {
//       const response = await axios.get('http://127.0.0.1:8000/get_startpage');
//       const jsonData = response.data;
//       console.log(jsonData)
//       return jsonData
//     } catch (err) {
//       console.error(err);
//     }
//   }

//   onMounted(async () => {
//     jsonData.value = await fetchData()
//   })
</script>

<template>
    <div>
    <!--<h1>{{jsonData.value}}</h1>-->
      <div v-for="(flight, index) in feedData.data" :key="index">
        <CardComponent  :flight="flight"/> 
    </div>
  </div>
</template>
