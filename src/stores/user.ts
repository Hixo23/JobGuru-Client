import axios, { isAxiosError } from 'axios'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUserStore = defineStore('user', () => {
  const user = ref(localStorage.getItem('user'))

  const signIn = async ({ email, password }: { email: string; password: string }) => {
    try {
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/api/login_check`)

      return localStorage.setItem('accessToken', response.data.token)
    } catch (error) {
      if (isAxiosError(error)) {
        console.log(error.message)
      }
    }
  }

  return { user, signIn }
})
