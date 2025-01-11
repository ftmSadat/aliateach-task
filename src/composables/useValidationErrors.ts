import { ref } from 'vue'
import type { FormValidationError } from '@/types'

import { isInputEmpty, isEmailValid, isPasswordStrong } from '@/utils/validators'

export default function () {
  const validationErrors = ref<FormValidationError[]>([])

  function findErrorMessage(property: string) {
    const error = validationErrors.value.find((error: { property: string }) => error.property === property)
    if (error) return error.message
    else return ''
  }

  function addErrorToValidationErrors(property: string, message: string) {
    validationErrors.value.push({
      property,
      message
    })
  }

  function validateIsInputEmpty(inputValue: string, property: string, message: string = 'این فیلد الزامی است.') {
    if (isInputEmpty(inputValue)) {
      addErrorToValidationErrors(property, message)
      return true
    }
    return false
  }

  function validateIsEmailValid(email: string) {
    if (!isEmailValid(email)) {
      addErrorToValidationErrors('email', 'ایمیل نامعتبر است. ')
      return false
    }
    return true
  }

  function validateIsPasswordStrong(password: string) {
    if (!isPasswordStrong(password)) {
      addErrorToValidationErrors('password', 'رمز عبور باید شامل حروف، اعداد و نمادها باشد.')
      return false
    }
    return true
  }
  return {
    validationErrors,
    findErrorMessage,
    validateIsInputEmpty,
    validateIsEmailValid,
    validateIsPasswordStrong
  }
}
