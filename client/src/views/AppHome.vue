<script setup>
import { onMounted, reactive, ref } from 'vue';
import CardComponent from "@/components/CardComponent.vue"
import { apiGet, apiPost } from '@/utils/api';
import { useSessionStore } from '@/store/user';
import LoadingComponent from '@/components/LoadingComponent.vue';

const token = useSessionStore().sessionToken;

const feedData = reactive({ data: [] })
const loaded = ref(false)

onMounted(async () => {
  feedData.data = await apiGet('feed', null, token);
  loaded.value = true
})
</script>

<template>
  <div class="bg-white flex items-center justify-center p-4 rounded-xl">
        <div class="text-center">
          <p class="font-bold">Wichtiger Hinweis!</p>
        <p class="text-l mt-2">Dies ist eine Demoversion der Web-App. Die Sicherheit der Daten ist in dieser Version nicht gewährleistet. Die Autoren übernehmen keinerlei Haftung oder Verantwortung für die Integrität der bereitgestellten Daten. Bitte beachten Sie, dass diese Demoversion nur zu Testzwecken dient und nicht für den produktiven Einsatz bestimmt ist. Jegliche Nutzung erfolgt auf eigene Gefahr.</p>
        </div>
  </div>
  <LoadingComponent v-if="loaded == false" />
  <RouterLink to="upload">
  <div v-if="feedData.data.length === 0 && loaded === true" class="w-full text-xl h-64 bg-white rounded-xl text-center p-8 pt-12 tracking-wider ">
    <p class="margin-auto">Noch keine Flüge vorhanden, beginne mit dem Hochladen eines Fluges…</p>
        <div class="p-2 text-center">
          <div class="text-lg font-semibold mt-6">+ Flug hochladen</div>
      </div>
    </div>
  </RouterLink>
  <div>
    <div v-for="(flight, index) in feedData.data" :key="index">
      <CardComponent  :flight="flight"/> 
    </div>
  </div>
</template>
