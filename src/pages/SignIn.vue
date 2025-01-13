<script setup lang="ts">
import IconMail from '@/components/icon/IconMail.vue'
import IconPassword from '@/components/icon/IconPassword.vue'
import useValidationErrors from '@/composables/useValidationErrors'
import { useAuthStore } from '@/stores/auth'
import { useRouter } from 'vue-router'
import { ref } from 'vue'

const store = useAuthStore()
const router = useRouter()
const { validationErrors, findErrorMessage, validateIsInputEmpty, validateIsEmailValid, validateIsPasswordStrong } =
  useValidationErrors()

const form = ref<{ email: string; password: string }>({
  email: '',
  password: ''
})
const errorMsg = ref('')

const handelSignIN = async () => {
  validationErrors.value = []

  emailValidate()
  passwordValidate()

  if (validationErrors.value.length !== 0) return

  const result = await store.signIn(form.value.email, form.value.password)
  if (!result.status) errorMsg.value = result.status.msg
  router.push({
    name: 'home'
  })
}

const emailValidate = () => {
  validateIsInputEmpty(form.value.email, 'email')
  validateIsEmailValid(form.value.email)
}

const passwordValidate = () => {
  validateIsInputEmpty(form.value.password, 'password')
  validateIsPasswordStrong(form.value.password)
}
</script>

<template>
  <section class="mx-auto space-y-8 bg-white lg:w-96 px-8 py-10 shadow rounded-2xl mt-20">
    <div class="gap-y-2 flex flex-col">
      <h3 class="font-bold text-neutral-900 text-2xl">خوش آمدید</h3>
      <span class="text-neutral-500">برای ورود ایمیل و رمز عبور خود را وارد کنید </span>
    </div>
    <p class="text-sm text-red-400" v-show="errorMsg">{{ errorMsg }}</p>
    <form class="space-y-4" @submit.prevent="handelSignIN">
      <div>
        <base-input
          v-model="form.email"
          name="email"
          type="email"
          icon="mail"
          label="ایمیل"
          :minlength="3"
          :maxlength="100"
        >
          <icon-mail class="fill-neutral-700" />
        </base-input>
        <BaseInputTextError :error="findErrorMessage('email')" />
      </div>
      <div>
        <base-input
          v-model="form.password"
          name="password"
          type="password"
          icon="mail"
          label="رمز عبور"
          :minlength="3"
          :maxlength="100"
        >
          <icon-password class="fill-neutral-700" />
        </base-input>
        <BaseInputTextError :error="findErrorMessage('password')" />
      </div>
      <button class="btn bg-stone-700">ورود</button>
    </form>
  </section>
</template>
