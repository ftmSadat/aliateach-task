<script setup lang="ts">
defineProps<{
  error: string
}>()
</script>

<template>
  <Transition name="fade-preset" mode="out-in">
    <p v-if="error" :key="error" class="text-sm text-red-400">
      {{ error }}
    </p>
  </Transition>
</template>
