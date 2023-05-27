<template>
    <div :class="['p-2 mx-4 mb-4 tracking-wider rounded text-center', colorClass, { 'cursor-not-allowed': disabled }, { 'opacity-50': disabled }]" @click="handleClick">
      <RouterLink v-if="isRouterLink" :to="link" class="w-full text-center">
        <img v-if="icon" :src="icon" class="h-6 w-6 mr-2" alt="Icon" />
        <a class="w-full">{{ buttonText }}</a>
      </RouterLink>
      <button v-else class="w-full" :disabled="disabled">
        <span v-if="loading">Loading...</span>
        <span v-else>{{ buttonText }}</span>
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
    return props.color === 'schwarz' ? 'bg-black text-white hover:bg-white hover:text-black' : 'bg-white text-center hover:bg-black hover:text-white'
  })
  </script>
  