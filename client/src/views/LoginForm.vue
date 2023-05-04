<template>
  <div class="flex justify-center items-center flex-col my-8">
    <div class="text-center">
      <img src="@/assets/loadup.jpg" alt="Bild" class="w-32 h-32 mx-auto mb-8">
      <h2 class="text-2xl  mb-4">Login</h2>
    </div>
    <form class="bg-light rounded p-4 flex justify-center flex-col mt-4" @submit.prevent="handleLogin">
      <div class="mb-4">
        <label for="username" class="block text-sm mb-2">Benutzername:</label>
        <input id="username" v-model="username" required class="border border-gray-400 p-2 rounded w-64" />
      </div>
      <div class="mb-4">
        <label for="password" class="block text-sm mb-2">Passwort: </label>
        <input id="password" v-model="password" type="password" required class="border border-gray-400 p-2 rounded w-64" />
      </div>
      <div v-if="loginError" class="text-sm mb-4 w-60 text-red-600">{{ errorMessage }}</div>
      <button type="submit" class="bg-primary hover:bg-secondary text-white tracking-wider py-2 px-4 rounded">Login</button>
    </form>
  </div>
</template>
  
  <script setup>
  import { ref } from 'vue';
  import { useSessionStore } from "@/store/user";
  import { useRouter } from 'vue-router';
  
  const router = useRouter();
  const SessionStore = useSessionStore()
  const username = ref('');
  const password = ref('');
  const loginError = ref(false);
  const errorMessage = ref('');
  
  async function handleLogin() {
    try {
      await SessionStore.login(username.value, password.value);
      if (SessionStore.username != null){
        console.log('Login erfolgreich', username.value);
        router.push('/home');
      }
    } catch (error) {
      console.error('Login fehlgeschlagen', error);
      loginError.value = true;
      errorMessage.value = 'Anmeldung fehlgeschlagen.';
    }
  }
  </script>
  