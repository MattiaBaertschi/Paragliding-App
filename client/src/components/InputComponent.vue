<template>
  <div class="flex flex-col">
    <label class="block text-sm mb-2" :for="label">{{ label }}</label>
    <input class="border border-gray-400 p-2 mb-2 rounded focus:outline-none focus:ring-2 focus:ring-black"
           :id="label"
           :type="type"
           :value="modelValue"
           :disabled="disabled"
           @input="updateValue" />
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'
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
  },
  disabled: {
    type: Boolean,
    default: false
  }
})
const emit = defineEmits(['update:modelValue'])

const updateValue = (e) => {
  emit('update:modelValue', e.target.value)
}
</script>


