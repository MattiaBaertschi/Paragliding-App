<template>
  <div class="bg-white rounded-lg shadow-md overflow-hidden my-4">
    <div class="p-4">
      <div class="text-sm text-gray-600">@{{ user.username }}</div>
      <div class="text-lg font-semibold mt-1">{{ user.firstname }}  {{ user.lastname }}</div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  user: {
    type: Object,
    required: true
  }
})

</script>