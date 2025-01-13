<script lang="ts" setup>
import type { FormItemType } from '@/types'
import { ref, onMounted } from 'vue'
import { useFormStore } from '@/stores/form'
import IconVisibility from '@/components/icon/IconVisibility.vue'

const { id } = defineProps<{ id: string }>()
const store = useFormStore()
const form = ref<FormItemType>({})

const getForm = async () => {
  console.log(await store.getForm(id))
  //get result and assign to form
  //error handling
}

onMounted(() => {
  getForm()
})
</script>

<template>
  <div class="border rounded-2xl p-2 flex flex-col justify-between border-neutral-200">
    <span class="font-bold flex items-center justify-center h-1/2 rounded-2xl text-neutral-900 bg-neutral-200">
      نام فرم
    </span>

    <span class="text-neutral-400">date </span>
    <button class="btn !text-neutral-800 border flex justify-center items-center gap-x-2 border-neutral-200">
      <icon-visibility class="fill-neutral-800" />
      مشاهده فرم
    </button>
  </div>
</template>
