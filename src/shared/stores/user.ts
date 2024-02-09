import axios, { isAxiosError } from 'axios'
import { defineStore } from 'pinia'
import { useRouter } from 'vue-router'
import { toast } from 'vue-sonner'

export const useUserStore = defineStore('user', () => {
  const router = useRouter()
  const signUp = async ({
    email,
    password,
    username
  }: {
    email: string
    password: string
    username: string
  }) => {
    try {
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/api/register`, {
        email,
        password,
        username
      })

      if (response.status == 200) router.push('/login')
    } catch (error) {
      if (isAxiosError(error)) {
        toast(error.response?.data.message)
      }
    }
  }

  const signIn = async ({ email, password }: { email: string; password: string }) => {
    try {
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/api/login_check`, {
        email,
        password
      })

      if (response.status == 200) localStorage.setItem('accessToken', response.data.token)
      return router.push('/')
    } catch (error) {
      if (isAxiosError(error)) {
        toast(error.response?.data.message)
      }
    }
  }

  const getUser = async () => {
    if (!localStorage.getItem('accessToken')) return
    try {
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/user`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
      })

      return response.data.user
    } catch (error) {
      if (isAxiosError(error)) {
        toast(error.response?.data.message)
      }
    }
  }

  return { signIn, signUp, getUser }
})
