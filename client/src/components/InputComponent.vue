<template>
  <div class="flex flex-col mb-4">
    <label class="block text-sm mb-2" :for="label">{{ label }}</label>
    <input class="border border-gray-400 p-2 rounded focus:outline-none focus:ring-2 focus:ring-black rounded"
           :id="label"
           :type="type"
           :value="modelValue"
           @input="updateValue" />
  </div>
</template>


<script setup>
const props = defineProps({
  modelValue: {
    type: [String, Date],
    default: ''
  },
  label: {
    type: String,
    required: true
  },
  type: {
    type: String,
    default: 'text'
  }
})

const updateValue = (event) => {
  emit('update:modelValue', event.target.value)
}
</script>

