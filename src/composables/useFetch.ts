import { useSessionStore } from '@/stores/session'

export default async function useFetch(
  path: string,
  method: 'POST' | 'get' | 'GET' | 'HEAD' | 'PATCH' | 'PUT' | 'DELETE' = 'POST',
  headers?: Record<string, string> | [key: string, value: string][] | Headers,
  data?: object
) {
  const apiEndpoint = process.env.VUE_APP_BASE_URL

  try {
    const response = await fetch(`${apiEndpoint}${path}`, {
      method,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        ...headers
      },
      body: JSON.stringify(data)
    })

    if (!response.ok && response.status === 403 && !response.url.includes('/main/main/refresh'))
      useSessionStore().refreshToken()

    const result = await response.json()
    return result
  } catch (error) {
    console.log(error)
    return error
  }
}
