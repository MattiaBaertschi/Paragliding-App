<script setup>
import axios from 'axios';
import { onMounted, reactive } from 'vue';
import MapComponent from "@/components/MapComponent.vue"
import CardComponent from "@/components/CardComponent.vue"


const jsonData = reactive({ data: [] })

const fetchData = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/get_startpage');
      const jsonData = response.data;
      console.log(jsonData)
      return jsonData
    } catch (err) {
      console.error(err);
    }
  }


  onMounted(async () => {
    jsonData.value = await fetchData()
  })

</script>

<template>
    <div>
    <!--<h1>{{jsonData.value}}</h1>-->
      <div v-for="(flight, index) in jsonData.value" :key="index">
        <CardComponent  :flight="flight"/> 
    </div>
  </div>

</template>
