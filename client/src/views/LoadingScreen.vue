<template>
 <div class="fixed top-0 left-0 z-50 min-h-screen w-full bg-white flex items-center justify-center">
    <div class="text-center">
      <img src="@/assets/loadup.jpg" alt="Logo" class="h-64">
      <p class="text-xl text-dark mt-12">Cloudy is loading up...</p>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

setTimeout(() => {
  router.push('/login');
}, 300);

</script>




