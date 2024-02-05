import axios, { isAxiosError } from 'axios'
import { defineStore } from 'pinia'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

export const useUserStore = defineStore('user', () => {
  const user = ref(localStorage.getItem('user'))
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
        console.log(error.message)
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
        console.log(error.message)
      }
    }
  }

  const getUser = async () => {
    if (!localStorage.getItem('accessToken')) return null
    const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/user`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('accessToken')}`
      }
    })

    if (response.status == 200) localStorage.setItem('user', JSON.stringify(response.data.user))
    return JSON.parse(user.value as string)
  }

  return { user, signIn, signUp, getUser }
})
