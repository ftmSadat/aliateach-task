export const isInputEmpty = (value: string) => !value

export const isEmailValid = (email: string) => !!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.exec(email)

export const isPasswordStrong = (password: string) =>
  /^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{4,}$/.exec(password)
