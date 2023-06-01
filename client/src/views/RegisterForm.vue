<template>
  <div v-if="isRegisterd" class="flex justify-center items-center flex-col my-8 bg-white p-8 rounded-xl max-w-2xl mx-auto">
    <div class="text-center">
      <img :src="imageSrc" alt="Cloudys" class="w-48 h-48 mx-auto">
      <h2 class="text-2xl  mb-4">Erfolgreich Registriert</h2>
      <p class="mb-4">In kürze flattert eine E-Mail in dein Postfach, mit welcher du dein Account aktivieren kannst.</p>
      <PrimaryButton :isRouterLink="true" :link="'login'" color="schwarz" buttonText="Login"/>
    </div>
  </div>
  <div v-if="!isRegisterd" class="flex justify-center items-center flex-col my-8 bg-white p-8 rounded-xl">
    <div class="text-center">
      <img :src="imageSrc" alt="Cloudys" class="w-48 h-48 mx-auto">
      <h2 class="text-2xl  mb-4">Registrieren</h2>
    </div>
    <form class="bg-light rounded p-4 flex justify-center flex-col mt-4 w-80" @submit.prevent="handleRegister">

      <div class="mb-4">
        <label for="username" class="block text-sm mb-2">Benutzername:
        </label>
        <input id="username" v-model="formData.username" type="text" class="border border-gray-400 p-2 rounded w-full" placeholder="Cloudy"/>
        <div class="text-red-600 text-sm mt-1" v-for="error in v$.username.$errors" :key="error.$uid">{{ error.$message }}</div>
      </div>

      <div class="mb-4">
        <label for="password" class="block text-sm mb-2">Passwort:
        </label>
        <input id="password" v-model="formData.password" type="password" class="border border-gray-400 p-2 rounded w-full" placeholder="Cloudy1234"/>
        <div class="text-red-600 text-sm mt-1" v-for="error in v$.password.$errors" :key="error.$uid">{{ error.$message }}</div>
      </div>

      <div class="mb-4">
        <label for="email" class="block text-sm mb-2">E-Mail: 
        </label>
        <input id="email" v-model="formData.email" type="email" class="border border-gray-400 p-2 rounded w-full" placeholder="cl@ou.dy"/>
        <div class="text-red-600 text-sm mt-1" v-for="error in v$.email.$errors" :key="error.$uid">{{ error.$message }}</div>
      </div>

      <div class="mb-4">
        <label for="firstName" class="block text-sm mb-2">Vorname: 
        </label>
        <input id="firstName" v-model="formData.firstName" type="text" class="border border-gray-400 p-2 rounded w-full" placeholder="Cumuluo" />
        <div class="text-red-600 text-sm mt-1" v-for="error in v$.firstName.$errors" :key="error.$uid">{{ error.$message }}</div>
      </div>

      <div class="mb-4">
        <label for="lastName" class="block text-sm mb-2">Nachname: 
        </label>
        <input id="lastName" v-model="formData.lastName" type="text" class="border border-gray-400 p-2 rounded w-full" placeholder="Nimbus"/>
        <div class="text-red-600 text-sm mt-1" v-for="error in v$.lastName.$errors" :key="error.$uid">{{ error.$message }}</div>
      </div>

      <div class="mb-4">
        <label for="shvNumber" class="block text-sm mb-2">SHV Nummer: 
        </label>
        <input id="shvNumber" v-model="formData.shvNumber" type="number" class="border border-gray-400 p-2 rounded w-full"/>
        <div class="text-red-600 text-sm mt-1" v-for="error in v$.shvNumber.$errors" :key="error.$uid">{{ error.$message }}</div>
      </div>
      <div class="text-sm mb-4 w-60 text-red-600">{{ errorMessage }}</div>
      <button type="submit"><PrimaryButton :disabled="isUpdating" :loading="isUpdating" color="schwarz" buttonText="Registrieren"/></button>
      
      <PrimaryButton :isRouterLink="true" :link="'login'" :disabled="isUpdating" :loading="isUpdating" color="weiss" buttonText="Login"/>

    </form>

  </div>
</template>

// https://upmostly.com/vue-js/how-to-use-vue-with-pinia-to-set-up-authentication
  <script setup>
  import { reactive, ref } from 'vue';
  import { useSessionStore } from '@/store/user';
  import useVuelidate from "@vuelidate/core";
  import { required, minLength,  } from "@vuelidate/validators"
  import { useRouter } from 'vue-router';
  import image_login from '@/assets/login.png';
  import PrimaryButton from "@/components/PrimaryButton.vue";
  
  const router = useRouter();
  const sessionStore = useSessionStore();
  const isRegisterd = ref(false);
  const isUpdating = ref(false)
  const errorMessage = ref('');
  var imageSrc = image_login;

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
    password: { required, minValue: minLength(8)},
    firstName: { required },
    lastName: { required },
    shvNumber: { },
  }

  const v$ = useVuelidate(rules, formData)
  
  async function handleRegister() {
    isUpdating.value = true
    const result = v$.value.$validate();
    if (result){
      try {
        const response = await sessionStore.register(username.value, email.value, password.value, firstName.value, lastName.value, shvNumber.value);
         isRegisterd.value = true
      } 
      catch (error) {
        console.error('Registrierung fehlgeschlagen', error);
        errorMessage.value = 'Die Registrierung hat leider nicht geklappt. Bitte versuche es erneut.';
      }
    } 
    else {
      alert("Error, Form not filled correctly")
    }
    isUpdating.value = false
}


  </script>
  