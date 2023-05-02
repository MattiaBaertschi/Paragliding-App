<template>
    <form @submit.prevent="handleLogin">
      <div>
        <label for="username">Benutzername:</label>
        <input id="username" v-model="username" required />
      </div>
      <div>
        <label for="password">Passwort:</label>
        <input id="password" v-model="password" type="password" required />
      </div>
      <button type="submit">Login</button>
    </form>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import auth from '@/auth';
  
  const username = ref('');
  const password = ref('');
  
  async function handleLogin() {
    try {
      const user = await auth.login(username.value, password.value);
      console.log('Login erfolgreich', user);
    } catch (error) {
      console.error('Login fehlgeschlagen', error);
    }
  }
  </script>
  