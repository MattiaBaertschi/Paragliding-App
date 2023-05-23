<template>
  <div>
    <div v-if="showHeaderAndNav">
      <AppHeader />
      <NavBar />
    </div>

    <div class="container mx-auto pt-6 pb-16 px-4 sm:px-6 lg:px-8 font-poppins">
      <RouterView />
    </div>
    <!--
    <div v-if="showHeaderAndNav" class="bg-white w-32 text-center mx-auto mb-24 rounded-2xl">
      <img src="@/assets/cloudy_up.png" alt="Cloudys" class="w-32 h-32 bg-white p-2 rounded-2xl">
    </div>
    -->
  </div>
</template>

<script setup>
  import AppHeader from "@/components/AppHeader.vue"
  import NavBar from "@/components/NavBar.vue"
  import { ref, watch } from "vue";
  import { useRoute, useRouter } from 'vue-router';
  import { useSessionStore } from '@/store/user';

  const route = useRoute();
  const router = useRouter();
  const sessionStore = useSessionStore();
  const showHeaderAndNav = ref(true);

  

  watch(() => route.path, (newPath, oldPath) => {
    console.log(`Die Route hat sich von ${oldPath} zu ${newPath} geändert`);
    // Hier können Sie eine Funktion ausführen, wenn die Route geändert wird
    if (newPath === '/login' || newPath === '/register') {
      console.log("jahmann")
      showHeaderAndNav.value = false;
    }

    if (sessionStore.username == null){
    //Auskommentieren damit Login Seite kommt wenn keine Benutzer angemeldet ist.
    router.push('/login');
    }
    else {
      showHeaderAndNav.value = true;
    }
  });
</script>
