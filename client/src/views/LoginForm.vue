<template>
  <div class="flex justify-center items-center flex-col my-8">
    <div class="text-center">
      <img :src="imageSrc" alt="Cloudys" class="w-48 h-48 mx-auto mb-8">
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
      <button type="submit" class="mb-4 bg-primary hover:bg-secondary text-white tracking-wider py-2 px-4 rounded">Login</button>
      <RouterLink to="/register" class="w-full text-center hover:underline">Registrieren</RouterLink>
    </form>
    
  </div>
</template>
  
  <script setup>
  import { ref } from 'vue';
  import { useSessionStore } from "@/store/user";
  import { useRouter } from 'vue-router';
  import image_login from '@/assets/login.png';
  import image_login_failed from '@/assets/login_failed.png';

  const router = useRouter();
  const sessionStore = useSessionStore()
  const username = ref('');
  const password = ref('');
  const loginError = ref(false);
  const errorMessage = ref('');
  var imageSrc = image_login;

  async function handleLogin() {
    try {
      await sessionStore.login(username.value, password.value);
      if (sessionStore.username != null){
        console.log('Login erfolgreich', username.value);
        router.push('/home');
      }
    } catch (error) {
      console.error('Login fehlgeschlagen', error);
      loginError.value = true;
      errorMessage.value = 'Anmeldung fehlgeschlagen.';
      imageSrc = image_login_failed
    }
  }
  </script>
  