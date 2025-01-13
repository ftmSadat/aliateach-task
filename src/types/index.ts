export type FormValidationErrorType = {
  property: string
  message: string
}

export type RqErrorType = {
  ok: boolean
  status: number
  error: {
    detail: string
  }
}

export type FormItemType = {}
