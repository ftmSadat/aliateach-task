<script lang="ts" setup>
import type { FormItem } from '@/types'
import { ref, computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useFormStore } from '@/stores/form'
import IconsPlus from '@/components/icons/IconsPlus.vue'

const route = useRoute()
const store = useFormStore()

const formItems = ref<FormItem[]>([])

const hasForm = computed(() => store.hasForm)

const getForm = async () => {
  console.log(await store.getForms(1, 2))
}

onMounted(() => {
  getForm()
})
</script>

<template>
  <section class="my-10 px-20 space-y-10">
    <div class="flex justify-between">
      <span class="text-neutral-700 text-lg font-bold" v-if="route.meta.title">{{ route.meta.title }}</span>
      <button class="btn max-w-32 flex items-center justify-center bg-stone-700">
        <icons-plus />
        <span> ایجاد فرم</span>
      </button>
    </div>
    <div class="w-full h-[36rem] bg-white rounded-2xl" :class="[hasForm ? 'p-4' : 'flex items-center justify-center']">
      <div v-if="!hasForm" class="flex gap-4">
        <span class="text-neutral-600">هیچ فرمی تا به حال ساخته نشده است!</span>
        <router-link to="/foo" class="text-blue-500">ایجاد فرم</router-link>
      </div>
      <div class="grad grad-cols-3 gsp-4" v-else>
        <form-item v-for="item in formItems" :key="item.id" :id="item.id" />
      </div>
    </div>
  </section>
</template>
