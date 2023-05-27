<script setup>
import { onMounted, ref } from 'vue';
import UserCard from "@/components/UserCard.vue"
import LoadingComponent from "@/components/LoadingComponent.vue"
import { apiGet } from '@/utils/api';
import { useSessionStore } from '@/store/user';
const token = useSessionStore().sessionToken;

var loaded = ref(false)
const followerUsers = ref(null);
const followedUsers = ref(null);

onMounted(async () => {
  followerUsers.value = await apiGet('display_all_followed', null , token);
  followedUsers.value = await apiGet('display_all_followers', null , token);
  loaded.value = true
})

</script>

<template>
  <LoadingComponent v-if="loaded == false" />
  <div v-if="loaded == true">
    <h3 class="text-base font-bold uppercase tracking-wider mt-8 text-black">Buddys welchen du folgst:</h3>
      <ul>
        <li v-for="user in followerUsers" :key="user.user_id">
          <RouterLink :to="`buddy/${ user.user_id }`">
            <UserCard :user="user" />
        </RouterLink>
        </li>
      </ul>
    <h3 class="text-base font-bold uppercase tracking-wider mt-8 text-black">Buddys welche dir folgen:</h3>
      <ul>
        <li v-for="user in followedUsers" :key="user.user_id">
          <RouterLink :to="`buddy/${ user.user_id }`">
            <UserCard :user="user" />
        </RouterLink>
        </li>
      </ul>
  </div>
</template>
