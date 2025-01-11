<script setup lang="ts">
import IconsMail from '@/components/icons/IconsMail.vue'
import IconsPassword from '@/components/icons/IconsPassword.vue'
import useValidationErrors from '@/composables/useValidationErrors'
import useFetch from '@/composables/useFetch'
import { ref } from 'vue'

const form = ref<{ email: string; password: string }>({
  email: '',
  password: ''
})

const { validationErrors, findErrorMessage, validateIsInputEmpty, validateIsEmailValid, validateIsPasswordStrong } =
  useValidationErrors()

const handelSignIN = () => {
  validationErrors.value = []

  emailValidate()
  passwordValidate()

  if (validationErrors.value.length !== 0) return

  signIn()
}

const emailValidate = () => {
  validateIsInputEmpty(form.value.email, 'email')
  validateIsEmailValid(form.value.email)
}

const passwordValidate = () => {
  validateIsInputEmpty(form.value.password, 'password')
  validateIsPasswordStrong(form.value.password)
}

const signIn = () => {
  try {
    const result = useFetch('/main/main/signup', 'POST', null, form.value)
    console.log(result)
  } catch (err) {
    console.log(err)
  }
}
</script>

<template>
  <section class="mx-auto space-y-8 bg-white lg:w-96 px-8 py-10 shadow rounded-2xl mt-20">
    <div class="gap-y-2 flex flex-col">
      <h3 class="font-bold text-neutral-900 text-2xl">خوش آمدید</h3>
      <span class="text-neutral-500">برای ورود ایمیل و رمز عبور خود را وارد کنید </span>
    </div>
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
          <icons-mail class="fill-neutral-700" />
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
          <icons-password class="fill-neutral-700" />
        </base-input>
        <BaseInputTextError :error="findErrorMessage('password')" />
      </div>
      <button class="btn bg-stone-700">ورود</button>
    </form>
  </section>
</template>
