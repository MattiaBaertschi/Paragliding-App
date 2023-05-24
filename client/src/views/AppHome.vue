<script setup>
import { onMounted, reactive, ref } from 'vue';
import CardComponent from "@/components/CardComponent.vue"
import { apiGet, apiPost } from '@/utils/api';
import { useSessionStore } from '@/store/user';
import LoadingComponent from '@/components/LoadingComponent.vue';

const token = useSessionStore().sessionToken;

const feedData = reactive({ data: [] })
var loaded = ref(false)

onMounted(async () => {
  feedData.data = await apiGet('feed', null, token);
  loaded = true
})
</script>

<template>
  <LoadingComponent v-if="loaded == false" />
  <div>
    <div v-for="(flight, index) in feedData.data" :key="index">
      <CardComponent  :flight="flight"/> 
    </div>
  </div>
</template>
