<template>
  <div class="flex justify-center items-center flex-col my-8">
    <div class="text-center">
      <img src="@/assets/loadup.jpg" alt="Bild" class="w-32 h-32 mx-auto mb-8">
      <h2 class="text-2xl  mb-4">Registrieren</h2>
    </div>
    <form class="bg-light rounded p-4 flex justify-center flex-col mt-4" @submit.prevent="handleRegister">

      <div class="mb-4">
        <label for="username" class="block text-sm mb-2">Benutzername:
          <span class="text-primary" v-for="error in v$.username.$errors" :key="error.$uid">{{ error.$message }}</span>
        </label>
        <input id="username" v-model="formData.username" type="text" class="border border-gray-400 p-2 rounded w-64" />
      </div>

      <div class="mb-4">
        <label for="password" class="block text-sm mb-2">Passwort: 
          <span class="text-primary" v-for="error in v$.password.$errors" :key="error.$uid">{{ error.$message }}</span>
        </label>
        <input id="password" v-model="formData.password" type="password" class="border border-gray-400 p-2 rounded w-64" />
      </div>

      <div class="mb-4">
        <label for="email" class="block text-sm mb-2">E-Mail: 
          <span class="text-primary" v-for="error in v$.email.$errors" :key="error.$uid">{{ error.$message }}</span>
        </label>
        <input id="email" v-model="formData.email" type="email" class="border border-gray-400 p-2 rounded w-64" />
      </div>

      <div class="mb-4">
        <label for="firstName" class="block text-sm mb-2">Vorname: 
          <span class="text-primary" v-for="error in v$.firstName.$errors" :key="error.$uid">{{ error.$message }}</span>
        </label>
        <input id="firstName" v-model="formData.firstName" type="text" class="border border-gray-400 p-2 rounded w-64" />
      </div>

      <div class="mb-4">
        <label for="lastName" class="block text-sm mb-2">Nachname: 
          <span class="text-primary" v-for="error in v$.lastName.$errors" :key="error.$uid">{{ error.$message }}</span>
        </label>
        <input id="lastName" v-model="formData.lastName" type="text" class="border border-gray-400 p-2 rounded w-64" />
      </div>

      <div class="mb-4">
        <label for="shvNumber" class="block text-sm mb-2">SHV Nummer: 
          <span class="text-primary" v-for="error in v$.shvNumber.$errors" :key="error.$uid">{{ error.$message }}</span>
        </label>
        <input id="shvNumber" v-model="formData.shvNumber" type="number" class="border border-gray-400 p-2 rounded w-64" />
      </div>

      <button type="submit" class="mb-2 bg-primary hover:bg-secondary text-white tracking-wider py-2 px-4 rounded">Registrieren</button>
      <button @click="router.push('/login');" class="mb-2 bg-secondary hover:bg-secondary text-white tracking-wider py-2 px-4 rounded">Login</button>

      
    </form>
  </div>
</template>

// https://upmostly.com/vue-js/how-to-use-vue-with-pinia-to-set-up-authentication
  <script setup>
  import { reactive, ref } from 'vue';
  import auth from '@/auth';
  import { useSessionStore } from '@/store/user';
  import useVuelidate from "@vuelidate/core";
  import { required } from "@vuelidate/validators"
  import { useRouter } from 'vue-router';
  
  const router = useRouter();

  const sessionStore = useSessionStore();
  const username = ref('');
  const password = ref('');

// https://www.youtube.com/watch?v=7alh1KowAEI&t=28s

  const formData = reactive({
    username: "",
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    shvNumber: 0,
  })
  
  const rules = {
    username: {required },
    email: { required },
    password: { required },
    firstName: { required },
    lastName: { required },
    shvNumber: {},
  }

  const v$ = useVuelidate(rules, formData)
  
  async function handleRegister() {
    const result = v$.value.$validate();
    if (result){
      try {
        const response = await auth.register(username.value, password.value);
        alert("Form submitted =D")
        console.log('Registrierung erfolgreich', response.data);
        router.push('/home');
      } catch (error) {
        console.error('Registrierung fehlgeschlagen', error);
      }
    }
    else{
      alert("Error, Form not filled correctly")
    }
  }
  </script>
  