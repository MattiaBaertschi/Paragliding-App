<template>
    <div class="bg-white flex items-center justify-center p-8 m-12 rounded-xl">
        <div class="text-center">
        <img src="@/assets/loadup.jpg" alt="Logo" class="h-48">
        <p class="text-xl text-dark mt-12">Cloudy lädt Daten <span class="dot1">.</span><span class="dot2">.</span><span class="dot3">.</span></p>
        </div>
    </div>
</template>
<style scoped>
@keyframes loading {
  0% { opacity: 0; }
  50% { opacity: 1; }
  100% { opacity: 0; }
}

.dot1 { animation: loading 2s infinite; }
.dot2 { animation: loading 2s infinite 0.5s; }
.dot3 { animation: loading 2s infinite 1s; }
</style>