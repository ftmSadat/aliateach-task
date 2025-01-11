<script setup lang="ts"></script>

<template>
  <router-view v-slot="{ Component }">
    <transition name="fade">
      <component :is="Component" class="w-full h-full container" dir="rtl" />
    </transition>
  </router-view>
</template>
