export const isInputEmpty = (value: string) => !value

export const isEmailValid = (email: string) => !!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.exec(email)

export const isPasswordStrong = (password: string) =>
  /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>]).+$/.exec(password)
