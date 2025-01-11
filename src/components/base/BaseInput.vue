<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'

const { value, minlength, maxlength, disabled, label, name, type } = defineProps<{
  modelValue: string
  minlength?: number
  maxlength?: number
  disabled?: boolean
  label?: string
  name: string
  type: 'number' | 'text' | 'email' | 'password' | 'search' | 'tel' | 'url'
}>()

const emit = defineEmits(['update:modelValue'])

const updateValue = (e) => {
  emit('update:modelValue', e.currentTarget.value)
}
</script>

<template>
  <div class="space-y-2">
    <label class="text-neutral-700" :for="name">{{ label }}</label>
    <div class="relative flex items-center">
      <input
        :max-length="maxlength"
        :min-length="minlength"
        :type
        :id="name"
        :value="modelValue"
        :name
        :disabled
        @input="$emit('update:modelValue', $event.target.value)"
        class="relative w-full p-2 rounded-2xl bg-zinc-50 text-zinc-500 border border-zinc-300 transition duration-300 ease-in-out hover:border-zinc-400/80 ring-zinc-400/80 focus:outline-none focus:border-zinc-400/80"
      />
      <div class="absolute left-2">
        <slot></slot>
      </div>
    </div>
  </div>
</template>
