<script setup lang="ts">
import { onMounted } from 'vue'
import { useCookies } from 'vue3-cookies'
import { useSessionStore } from '@/stores/session'

const { cookies } = useCookies()
const store = useSessionStore()

const updateSession = () => {
  if (!cookies.get('access-token')) return

  store.token = cookies.get('access-token')
  store.refresh = cookies.get('refresh-token')
}

onMounted(() => updateSession())
</script>

<template>
  <router-view v-slot="{ Component }">
    <transition name="fade">
      <component :is="Component" class="w-full h-full container" dir="rtl" />
    </transition>
  </router-view>
</template>
