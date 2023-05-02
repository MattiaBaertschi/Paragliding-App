<template>
    <form @submit.prevent="handleRegister">
      <div>
        <label for="username">Benutzername:</label>
        <input id="username" v-model="username" required />
      </div>
      <div>
        <label for="password">Passwort:</label>
        <input id="password" v-model="password" type="password" required />
      </div>
      <button type="submit">Registrieren</button>
    </form>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import auth from '@/auth';
  
  const username = ref('');
  const password = ref('');
  
  async function handleRegister() {
    try {
      const response = await auth.register(username.value, password.value);
      console.log('Registrierung erfolgreich', response.data);
    } catch (error) {
      console.error('Registrierung fehlgeschlagen', error);
    }
  }
  </script>
  