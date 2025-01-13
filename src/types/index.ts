export type FormValidationError = {
  property: string
  message: string
}

export type RqError = {
  ok: boolean
  status: number
  error: {
    detail: string
  }
}

export type FormItem = {}
