<script lang="ts" setup>
import type { FormItemType } from '@/types'
import { ref, computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useFormStore } from '@/stores/form'
import IconPlus from '@/components/icon/IconPlus.vue'
import FormItem from '@/components/form/FormItem.vue'

const route = useRoute()
const store = useFormStore()

const formItems = ref<FormItemType[]>([])

const hasForm = computed(() => store.hasForm)

const getForms = async () => {
  console.log(await store.getForms(1, 2))
  //get result and assign to form
  //error handling
}

onMounted(() => {
  getForms()
})
</script>

<template>
  <section class="my-10 px-20 space-y-10">
    <div class="flex justify-between">
      <span class="text-neutral-700 text-lg font-bold" v-if="route.meta.title">{{ route.meta.title }}</span>
      <router-link :to="{ name: 'add-form' }">
        <button class="btn px-4 flex items-center justify-center bg-stone-700">
          <icon-plus />
          <span> ایجاد فرم</span>
        </button>
      </router-link>
    </div>
    <div class="w-full h-[36rem] bg-white rounded-2xl" :class="[hasForm ? 'p-4' : 'flex items-center justify-center']">
      <div v-if="!hasForm" class="flex gap-4">
        <span class="text-neutral-600">هیچ فرمی تا به حال ساخته نشده است!</span>
        <router-link :to="{ name: 'add-form' }" class="text-blue-500">ایجاد فرم</router-link>
      </div>
      <div class="grid grid-cols-3 gap-4" v-else>
        <form-item class="h-56" v-for="item in formItems" :key="item.id" :id="item.id" />
      </div>
    </div>
  </section>
</template>
