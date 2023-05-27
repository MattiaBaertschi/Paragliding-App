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
  <RouterLink to="upload">
  <div v-if="feedData.data == null && loaded == true" class="w-full text-xl h-64 bg-white rounded-xl text-center p-8 pt-16 tracking-wider ">
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
