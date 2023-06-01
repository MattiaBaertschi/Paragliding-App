<template>
    <div :class="['p-2 my-2 tracking-wider rounded text-center', colorClass, { 'cursor-not-allowed': disabled }, { 'opacity-50': disabled }]" @click="handleClick">
      <RouterLink v-if="isRouterLink" :to="link" class="w-full text-center flex justify-center items-center">
        <img v-if="icon" :src="icon" class="h-6 w-6 mr-2" alt="Icon" />
        <a>{{ buttonText }}</a>
      </RouterLink>
      <button v-else class="w-full" :disabled="disabled">
        <span v-if="loading">Loading...</span>
        <div v-else class="w-full text-center flex justify-center items-center">
          <img v-if="!isRouterLink && icon" :src="icon" class="h-6 w-6 mr-2" alt="Icon" />
          {{ buttonText }}
        </div>
      </button>
    </div>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue'
  
  const props = defineProps({
    action: Function,
    color: String,
    buttonText: String,
    disabled: Boolean,
    loading: Boolean,
    isRouterLink: Boolean,
    link: String,
    icon: String,
  })
  
  const handleClick = () => {
    if (!props.disabled && props.action) {
      props.action()
    }
  }
  
  const colorClass = computed(() => {
    return props.color === 'schwarz' ? 'bg-black text-white hover:bg-dark' : 'bg-white text-center hover:bg-whitehover'
  })
  </script>
  